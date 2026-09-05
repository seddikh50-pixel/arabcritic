import { Request, Response } from "express";
import { db } from "../src/prisma/db";
import cloudinary from "../src/cloudinary";
import slugify from "slugify";





 /////////////////////////////////////////////////////////////////////////////////////////////////create game 

export async function createPlatform(req: Request, res: Response) {
    try {


        const {
            name,
            slug
            
        } = req.body;
        // const slug = slugify(title, {
        //     lower: true,
        //     strict: true,
        // });




   


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
            slug , 
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
