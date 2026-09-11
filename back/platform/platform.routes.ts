import { Router } from "express";

import {
    createPlatform,
    deletePlatform,
    getPlatforms,
    // getGames,
    // getGameBySlug,
    // updateGame,
} from "./platform.controller";

const router = Router();



router.post("/add",createPlatform);

router.get("/Platforms", getPlatforms);

// router.get("/:slug", getPlatformBySlug);

// router.patch("/:id", updatePlatform);

router.delete("/delete/:id", deletePlatform);

export default router;