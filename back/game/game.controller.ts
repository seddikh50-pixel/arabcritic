// import type { Request, Response } from "express";
// import { db } from "../src/prisma/db";


// export default async function createGamea(req: Request, res: Response) {
//     try {
//         const { title, slug, description, cover, releaseDate, developer, publisher, banner } = req.body
//         if (!title || !slug) { return res.status(400).json({ message: "title و slug مطلوبان", }); }

//         const game = await db.orm.public.Game.create({
//             title,
//             slug,
//             description: description || null,
//             cover: cover || null,
//             releaseDate: releaseDate || null,
//             developer: developer || null,
//             publisher: publisher || null,
//             banner: banner || null,
//         });
//         if (!game) {
//             return res.json({})
//         }
//         return res.status(201).json({ message: "تم إنشاء اللعبة بنجاح", game, });
//     } catch (error) {

//         console.error(error);
//         return res.status(500).json({ message: "حدث خطأ أثناء إنشاء اللعبة", });

//     }

// }


import { Request, Response } from "express";
import { db } from "../src/prisma/db";

interface CreateGameBody {
    title: string;
    slug: string;
    description?: string;
    cover?: string;
    releaseDate?: string;
    developer?: string;
    publisher?: string;
    banner?: string;
}

export async function createGame(req: Request, res: Response) {
    try {
        const {
            title,
            slug,
            description,
            cover,
            releaseDate,
            developer,
            publisher,
            banner,
        } = req.body;
        

        if (!title || !slug) {
            return res.status(400).json({
                message: "title and slug are required",
            });
        }

        const existingGame = await db.orm.public.Game
            .where({ slug })
            .first();

        if (existingGame) {
            return res.status(409).json({
                message: "Game with this slug already exists",
            });
        }

        const game = await db.orm.public.Game.create({
            title,
            slug,
            description: description || null,
            cover: cover || null,
            releaseDate: releaseDate || null,
            developer: developer || null,
            publisher: publisher || null,
            banner: banner || null,
        });

        return res.status(201).json({
            message: "Game created successfully",
            game,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to create game",
        });
    }
}

export async function getGames(req: Request, res: Response) {
    try {
        const games = await db.orm.public.Game
            .orderBy((game) => game.createdAt.desc())
            .all();

        return res.status(200).json(games);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to fetch games",
        });
    }
}

export async function getGameBySlug(req: Request, res: Response) {
    try {
        const { slug } = req.params;

        if (Array.isArray(slug)) {
            return res.status(400).json({
                message: "Invalid slug",
            });
        }

        const game = await db.orm.public.Game
            .where({ slug })
            .first();

        if (!game) {
            return res.status(404).json({
                message: "Game not found",
            });
        }

        return res.status(200).json(game);
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to fetch game",
        });
    }
}

export async function updateGame(req: Request, res: Response) {
    try {
        const { id } = req.params;

        const {
            title,
            slug,
            description,
            cover,
            releaseDate,
            developer,
            publisher,
            banner,
        } = req.body;


        if (Array.isArray(id)) {
            return res.status(400).json({
                message: "Invalid id",
            });
        }

        const game = await db.orm.public.Game
            .where({ id })
            .first();

        if (!game) {
            return res.status(404).json({
                message: "Game not found",
            });
        }

        const updatedGame = await db.orm.public.Game
            .where({ id })
            .update({
                title: title ?? game.title,
                slug: slug ?? game.slug,
                description: description ?? null,
                cover: cover ?? null,
                releaseDate: releaseDate || null,

                developer: developer ?? null,
                publisher: publisher ?? null,
                banner: banner ?? null,
            });

        return res.status(200).json({
            message: "Game updated successfully",
            game: updatedGame,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to update game",
        });
    }
}

export async function deleteGame(req: Request, res: Response) {
    try {
        const { id } = req.params;

        if (Array.isArray(id)) {
            return res.status(400).json({
                message: "Invalid id",
            });
        }

        const game = await db.orm.public.Game
            .where({ id })
            .first();

        if (!game) {
            return res.status(404).json({
                message: "Game not found",
            });
        }

        await db.orm.public.Game
            .where({ id })
            .delete();

        return res.status(200).json({
            message: "Game deleted successfully",
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to delete game",
        });
    }
}