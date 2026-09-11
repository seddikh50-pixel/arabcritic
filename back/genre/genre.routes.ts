import { Router } from "express";

import {
    createGenre,
    deleteGenre,
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

router.delete("/delete/:id", deleteGenre);

export default router;