
import { Request, Response } from "express";
import { db } from "../src/prisma/db";

interface GenreParams {
    id: string
}



export async function createGenre(req: Request, res: Response) {
    try {


        const {
            name,
            slug

        } = req.body;



        if (!name || !slug) {
            return res.status(400).json({
                success: false,
                message: "يرجى إدخال اسم التصنيف والـ Slug",
            });
        }

        const existingPlatform = await db.orm.public.Genre
            .where({ slug })
            .first();

        if (existingPlatform) {
            return res.status(409).json(
                {
                    success: false,
                    message: "تم اضافة تصنيف من قبل ",
                });
        }



        await db.orm.public.Genre.create({
            slug,
            name
        })






        return res.status(201).json({
            message: "تم ضافة التصنيف بنجاح",
            success: true,
        });
    } catch (error) {

        console.error("CREATE PLATFORM ERROR:", error);

        return res.status(500).json({
            message: error instanceof Error ? error.message : "Failed to create platform",
        });
    }

}





export async function getGenres(req: Request, res: Response) {

    try {


        const Genres = await db.orm.public.Genre.all()



        return res.status(200).json({
            success: true,
            Genres,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "فشل في تحميل التصنيفات",
        });
    }
}





export async function deleteGenre(req: Request<GenreParams>, res: Response) {

    try {

        const { id } = req.params

        const existingGenre = await db.orm.public.Genre
            .where({ id })
            .first();

        if (!existingGenre) {
            return res.status(500).json({ message: "خطأ في حذف التصنيف ", success: false })
        }


        await db.orm.public.Genre.where({ id }).delete()
        return res.status(200).json({ message: "تم حذف التصنيف بنجاح !", success: true })





    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "فشل في تحميل التصنيفات",
        });
    }
}




