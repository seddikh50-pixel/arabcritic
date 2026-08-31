import { Router } from "express";

import {
  createGame,
  getGames,
  getGameBySlug,
  updateGame,
  deleteGame,
} from "./game.controller";

const router = Router();

router.post("/add", createGame);

router.get("/", getGames);

router.get("/:slug", getGameBySlug);

router.patch("/:id", updateGame);

router.delete("/:id", deleteGame);

export default router;