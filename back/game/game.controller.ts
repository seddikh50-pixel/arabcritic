

import { Request, Response } from "express";
import { db } from "../src/prisma/db";
import cloudinary from "../src/cloudinary";
import slugify from "slugify";
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





function uploadToCloudinary(
    buffer: Buffer,
    folder: string
): Promise<{ secure_url: string }> {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "image",
            },
            (error, result) => {
                if (error) {
                    console.error("Cloudinary upload error:", error);
                    reject(error);
                    return;
                }

                if (!result) {
                    reject(new Error("Cloudinary returned no result"));
                    return;
                }

                resolve({
                    secure_url: result.secure_url,
                });
            }
        );

        uploadStream.end(buffer);
    });
}

 /////////////////////////////////////////////////////////////////////////////////////////////////create game 

export async function createGame(req: Request, res: Response) {
    try {


        const {
            title,
            description,
            releaseDate,
            developer,
            publisher,
        } = req.body;
        const slug = slugify(title, {
            lower: true,
            strict: true,
        });


        const files = req.files as {
            cover?: Express.Multer.File[];
            banner?: Express.Multer.File[];
        };

        const coverFile = files.cover?.[0];
        const bannerFile = files.banner?.[0];

        if (!coverFile || !bannerFile) {
            return res.status(400).json({
                message: "يجب ادخل ضور اللعبة",
            });
        }



        if (!title || !slug) {
            return res.status(400).json({
                success: false,
                message: "يرجى إدخال عنوان اللعبة والـ Slug",
            });
        }

        const existingGame = await db.orm.public.Game
            .where({ slug })
            .first();

        if (existingGame) {
            return res.status(409).json(
                {
                    success: false,
                    message: "تم اضافة اللعبة من قبل ",
                });
        }




        const coverUpload = await uploadToCloudinary(
            coverFile.buffer,
            "arabcritic/games/covers"
        );

        const bannerUpload = await uploadToCloudinary(
            bannerFile.buffer,
            "arabcritic/games/banners"
        );





        await db.orm.public.Game.create({
            title,
            slug,
            description: description || null,
            releaseDate: releaseDate || null,
            developer: developer || null,
            publisher: publisher || null,
            cover: coverUpload.secure_url,
            banner: bannerUpload.secure_url,
        });

        return res.status(201).json({
            message: "تم ضافة اللعبة بنجاح",
            success: true,
        });
    } catch (error) {

        console.error("CREATE GAME ERROR:", error);

        return res.status(500).json({
            message: error instanceof Error ? error.message : "Failed to create game",
        });
    }

}



////////////////////////////////////////////////////////////////////////////////get single game 

export async function getGames(req: Request, res: Response) {

    try {
        const q = req.query.q;
        const page = req.query.page;

        const limit = 5;
        const skip = (Number(page) - 1) * limit;
        let query = db.orm.public.Game;
   
        if (q) {
            query = query.where((game) =>
                game.title.ilike(`%${q}%`)
            );
        }

        const games = await query
            .limit(limit)
            .offset(skip)
            .all();

        const total = (
            await query.aggregate((a) => ({
                total: a.count()
            }))
        ).total;

        const totalPages = Math.ceil(total / limit);



        return res.status(200).json({
            success: true,
            games: games,
            total: totalPages,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch games",
        });
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////get game by slug 

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

/////////////////////////////////////////////////////////////////////////////////////////////////////update game 

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


///////////////////////////////////////////////////////////////////////////////////////////////delete game

export async function deleteGame(req: Request, res: Response) {
    try {
        const { id } = req.params;
        console.log(id);

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
                message: "لا توجد لعبة",
                success: false
            });
        }

        await db.orm.public.Game
            .where({ id })
            .delete();

        return res.status(200).json({
            message: "تم حذف اللعبة بنجاح !",
            success: true
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to delete game",
        });
    }
}