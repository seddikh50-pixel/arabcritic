
import { enqueueSnackbar } from "notistack";

import { Game } from "@/types/game";
export const getGames = async (
    search: string,
    page: number,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setGames: React.Dispatch<React.SetStateAction<Game[]>>
) => {
    try {
        const params = new URLSearchParams();
        if (search) {
            params.set("q", search);
        }

        params.set("page", String(page));
        const response = await fetch(
            `http://localhost:5000/api/game/games?${params.toString()}`
        );

        const result = await response.json();
        setCount(result.total)
        console.log(result);

        setGames(result.data);
    } catch (error) {
        console.error(error);
    }
};




export const deleteGame = async (id: string, setGames: React.Dispatch<React.SetStateAction<Game[]>>
) => {
    const response = await fetch(
        `http://localhost:5000/api/game/delete/${id}`,
        {
            method: "DELETE",
        }
    );

    const result = await response.json();
    console.log(result);

    if (!result.success) {
        enqueueSnackbar(result.message, {
            variant: "error",
        });
    } else {
        enqueueSnackbar(result.message, {
            variant: "success",
        });

        setGames((prevGames) =>
            prevGames.filter((game) => game.id !== id)
        );
    }


    if (!response.ok) {
        throw new Error("فشل حذف اللعبة");
    }

  
};