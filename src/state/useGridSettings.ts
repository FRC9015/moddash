import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  gridSize: number;

  setGridSize: (size: number) => void;
}

export const useGridSettings = create<State>()(
  persist(
    (set, get) => ({
      gridSize: get().gridSize ?? 32,

      setGridSize: (size) => set({ gridSize: size }),
    }),
    {
      name: "grid-settings",
    }
  )
);
