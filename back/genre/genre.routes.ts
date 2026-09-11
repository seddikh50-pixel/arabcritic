import { Router } from "express";

import {
    createGenre,
    getGenres,
    // getGames,
    // getGameBySlug,
    // updateGame,
    // deleteGame,
} from "./genre.controller";

const router = Router();



router.post("/add",createGenre);

router.get("/genres", getGenres);

// router.get("/:slug", getPlatformBySlug);

// router.patch("/:id", updatePlatform);

// router.delete("/delete/:id", deletePlatform);

export default router;