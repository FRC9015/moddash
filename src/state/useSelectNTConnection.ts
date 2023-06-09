import { create } from "zustand";

export type InputOption = "rio" | "localhost";

interface State {
  inputOption: InputOption;
  robotUri?: string;
  robotPort?: number;
  modalOpen: boolean;

  setModalOpen: (open: boolean) => void;
  setInputOption: (opt: InputOption) => void;
  setURIWithTeamNo: (team: number, port?: number) => void;
  setURIWithLocalhost: (port?: number) => void;
}

export const useSelectNTConnection = create<State>((set) => ({
  inputOption: "rio",
  robotPort: 5810,
  modalOpen: false,

  setModalOpen: (open) => set({ modalOpen: open }),
  setInputOption: (opt) => set({ inputOption: opt }),

  setURIWithLocalhost: (port = 5810) =>
    set({ robotUri: "localhost", robotPort: port }),
  setURIWithTeamNo: (team, port = 5810) =>
    set({ robotUri: `roborio-${team}-frc.local`, robotPort: port }),
}));
