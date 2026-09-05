import { Router } from "express";

import {
    createPlatform,
    // getGames,
    // getGameBySlug,
    // updateGame,
    // deleteGame,
} from "./platform.controller";

const router = Router();



router.post(
    "/add",
    // upload.fields([
    //     { name: "cover", maxCount: 1 },
    //     { name: "banner", maxCount: 1 },
    // ]),
    createPlatform
);

// router.get("/Platforms", getPlatforms);

// router.get("/:slug", getPlatformBySlug);

// router.patch("/:id", updatePlatform);

// router.delete("/delete/:id", deletePlatform);

export default router;