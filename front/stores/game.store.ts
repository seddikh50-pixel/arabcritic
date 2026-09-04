import { create } from "zustand";

import { getGames } from "@/services/game.service";

import type { Game } from "@/types/game";

interface GameStore {
  games: Game[];
  originalGames: Game[];
  loading: boolean;

  error: string | null;
  searchGames: (value: string) => void;
  search: string
  fetchGames: () => Promise<void>;
}

export const useGameStore = create<GameStore>((set, get) => ({
  games: [],
  originalGames: [],
  loading: false,
  search: "",

  error: null,

  fetchGames: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const games = await getGames();

      set({
        originalGames: games,
        games,
        loading: false,
      });

    } catch (error) {
      console.error("Fetch games error:", error);

      set({
        loading: false,
        error: "Failed to fetch games",
      });
    }

  },
  searchGames: (value) => {
    const originalGames = get().originalGames
    set({
      games: value.trim() === "" ? originalGames : originalGames.filter((g) => {
        return g.title.toLocaleLowerCase().startsWith(value.toLocaleLowerCase())
      })

    })
  }
}));