
import type { Game } from "@/types/game";

type GetGamesParams = {
    q?: string;
    page?: number;
    platform: string
};

type GetGamesResponse = {
    games: Game[];
    total: number;

};
// ?q=${encodeURIComponent(q)}&page=${page}


export async function getGames(
    {
        q = "",
        page = 1,
        platform = "",
    }
        : GetGamesParams
): Promise<GetGamesResponse> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(
        `${apiUrl}/game/games?q=${encodeURIComponent(q)}&page=${page}&platform=${platform}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        const errorText = await response.text();

        console.error("Games API Error:", errorText);

        throw new Error("فشل في جلب الألعاب");
    }

    return response.json();
}





// export const deleteGame = async (id: string
// ) => {
//     const response = await fetch(
//         `http://localhost:5000/api/game/delete/${id}`,
//         {
//             method: "DELETE",
//         }
//     );

//     const result = await response.json();

//     if (!result.success) {
//         enqueueSnackbar(result.message, {
//             variant: "error",
//         });
//     } else {
//         enqueueSnackbar(result.message, {
//             variant: "success",
//         });




//     }


//     if (!response.ok) {
//         throw new Error("فشل حذف اللعبة");
//     }


// };