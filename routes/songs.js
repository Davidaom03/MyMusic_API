import express from "express";

const router = express.Router();

// server.js has the initial path to /songs for all songs
router.get('/', (req, res) => {
    const allSongs = {'songs': [1,2,3]}
    res.send(allSongs );
});

export default router;