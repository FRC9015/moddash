package com.moddash.lib.server;

import edu.wpi.first.wpilibj.Filesystem;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.json.JSONException;
import org.json.JSONObject;

public class ModDashServer {

    private static volatile boolean isRunning = false;
    private static List<ModDashServerThread> clients =
            Collections.synchronizedList(new ArrayList<>());

    public static void startServer(int serverPort) {
        if (!isRunning) {
            new Thread(
                    () -> {
                        try (ServerSocket serverSocket = new ServerSocket(serverPort)) {
                            isRunning = true;

                            while (true) {
                                Socket socket = serverSocket.accept();
                                synchronized (clients) {
                                    clients.add(
                                            new ModDashServerThread(socket, ModDashServer::handleMessage));
                                    clients.get(clients.size() - 1).start();
                                }
                            }
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    })
                    .start();
        }
    }

    private static void sendToClients(String message) {
        synchronized (clients) {
            // This try/catch block is here just in case I missed any multithreading shenanigans
            // So, instead of crashing it will just not send the message
            try {
                clients.removeIf(client -> !client.isAlive);

                for (ModDashServerThread client : clients) {
                    client.sendMessage(message);
                }
            } catch (Exception e) {
                // do nothing
            }
        }
    }

    private static synchronized void handleMessage(String message) {
        // Non ping-pong messages are sent in json format
        try {
            JSONObject json = new JSONObject(message);

            String command = (String) json.get("command");

            switch (command) {
                case "updatePath":
                    String pathName = (String) json.get("pathName");
                    String fileContent = (String) json.get("fileContent");

                    File pathFile =
                            new File(Filesystem.getDeployDirectory(), "pathplanner/" + pathName + ".path");

                    try (BufferedWriter writer = new BufferedWriter(new FileWriter(pathFile))) {
                        writer.write(fileContent);
                        writer.flush();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    break;
                default:
                    // Unknown command
                    break;
            }
        } catch (JSONException e) {
            // Invalid json. Ignore this message
        }
    }
}
