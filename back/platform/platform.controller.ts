import { Request, Response } from "express";
import { db } from "../src/prisma/db";


interface GenreParams {
    id: string
}



/////////////////////////////////////////////////////////////////////////////////////////////////create game 

export async function createPlatform(req: Request, res: Response) {
    try {


        const {
            name,
            slug

        } = req.body;
      
       console.log(name , slug);






        if (!name || !slug) {
            return res.status(400).json({
                success: false,
                message: "يرجى إدخال عنوان اللعبة والـ Slug",
            });
        }

        const existingPlatform = await db.orm.public.Platform
            .where({ slug })
            .first();

        if (existingPlatform) {
            return res.status(409).json(
                {
                    success: false,
                    message: "تم اضافة المنصة من قبل ",
                });
        }



        const createPlatform = await db.orm.public.Platform.create({
            slug,
            name
        })






        return res.status(201).json({
            message: "تم ضافة المنصة بنجاح",
            success: true,
        });
    } catch (error) {

        console.error("CREATE PLATFORM ERROR:", error);

        return res.status(500).json({
            message: error instanceof Error ? error.message : "Failed to create platform",
        });
    }

}









export async function getPlatforms(req: Request, res: Response) {

    try {
      
   
       const platforms = await db.orm.public.Platform.all()



        return res.status(200).json({
            success: true,
            platforms,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "فشل في تحميل المنصات",
        });
    }
}











export async function deletePlatform(req: Request<GenreParams>, res: Response) {

    try {

        const { id } = req.params

        const existingPlatform = await db.orm.public.Platform
            .where({ id })
            .first();



        if (!existingPlatform) {
            return res.status(500).json({ message: "خطأ في حذف المنصة ", success: false })
        }


        await db.orm.public.Platform.where({ id }).delete()
        return res.status(200).json({ message: "تم حذف المنصة بنجاح !", success: true })





    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "فشل في تحميل التصنيفات",
        });
    }
}




