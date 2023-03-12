package com.moddash.lib;

import edu.wpi.first.networktables.NetworkTable;
import edu.wpi.first.networktables.NetworkTableInstance;

public class ModDash {
    private final NetworkTableInstance nt;

    private ModDash() {
        nt = NetworkTableInstance.getDefault();
    }

    public static ModDashTab getTab(String name) {
        return new ModDashTab(name);
    }
}
