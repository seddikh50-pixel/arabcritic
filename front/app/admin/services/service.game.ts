
import type { Game } from "@/types/game";

type GetGamesParams = {
    q?: string;
    page?: number;
    platform: string
    genre: string
};

type GetGamesResponse = {
    games: Game[];
    total: number;

};


export async function getGames(
    {
        q = "",
        page ,
        platform = "",
        genre = ""
    }
        : GetGamesParams
): Promise<GetGamesResponse> {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(
        `${apiUrl}/game/games?q=${encodeURIComponent(q)}&page=${page}&platform=${platform}&genre=${genre}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        const errorText = await response.text();


        throw new Error("فشل في جلب الألعاب");
    }

    return response.json();
}




export async function addGame(form: FormData) {
    const response = await fetch(
        "http://localhost:5000/api/game/add",
        {
            method: "POST",
            body: form,
        }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
        throw new Error(result.message || "حدث خطأ");
    }

    return result;
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