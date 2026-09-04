import type { Game } from "@/types/game";

export async function getGames(): Promise<Game[]> {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;



    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/game/games`
    );


    if (!response.ok) {
        throw new Error("Failed to fetch games");
    }

    return response.json();
}