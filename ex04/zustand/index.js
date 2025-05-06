import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      starWarsURL: "https://swapi.dev/api/people/?page=1",
      setStarWarsURL: (newURL) => set((state) => ({ starWarsURL: newURL })),
    }),
    { name: "starwars-storage" }
  )
);
