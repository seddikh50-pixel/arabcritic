import { Router } from "express";
import multer from "multer";

import {
    createGame,
    getGames,
    getGameBySlug,
    updateGame,
    deleteGame,
} from "./game.controller";

const router = Router();

const upload = multer({
    storage: multer.memoryStorage(),
});

router.post(
    "/add",
    upload.fields([
        { name: "cover", maxCount: 1 },
        { name: "banner", maxCount: 1 },
    ]),
    createGame
);

router.get("/games", getGames);

router.get("/:slug", getGameBySlug);

router.patch("/:id", updateGame);

router.delete("/delete/:id", deleteGame);

export default router;