import express from "express";

import { getSong, getSongs, postSong, deleteSong, patchSong } from "../controllers/SongsController.js";

const router = express.Router();

// server.js has the initial path to /songs for all songs
router.get('/',  getSongs);

router.post('/', postSong);

router.get('/:id', getSong);

router.delete('/delete/:id', deleteSong);

router.patch('/:id', patchSong);

export default router;