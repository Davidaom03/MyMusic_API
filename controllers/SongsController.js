import { Song } from '../models/SongModel.js';

export const getSongs = async (req, res) => {
    try{
        const allSongs = await Song.find({"deleted": {"$in": [false, 'false'] } });

        const response = {total: allSongs.length, allSongs};

        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(400).json({status: 'failed'});
    }
};

export const postSong = async (req, res) => {
    const { title, artist, album, length, type, uploaded_by, image } = req.body;

    const newSong = new Song({
        title,
        artist,
        album,
        length,
        type,
        uploaded_by,
        image: image === null ? "https://pics.freeicons.io/uploads/icons/png/17954122921558095026-512.png" : image
    });

    try{
        await newSong.save();
        res.status(200).json({newSong, status: "success"});
    }catch(err){
        console.log(err);
        res.status(400).json({"status": "failed"});
    }
};

export const getSong = async (req, res) => {
    const { id } = req.params;
    try{
        const songFound = await Song.find({_id: id}).exec();

        res.json(songFound);
    }catch(err){
        res.json({status: "Error finding song."});
    }
};

export const deleteSong = async (req, res) => {
    try{
        const { id } = req.params;
        const song = await Song.findById({_id: id}).exec();
        song.deleted = true;
        song.deleted_date = Date.now();
        await song.save();
        
        res.status(200).send('Success');
    }catch(err){
         console.log(err);
         res.status(400).send('Failure');
    }
}

export const patchSong = async (req, res) => {
    const { id } = req.params;

    try{
        await Song.findByIdAndUpdate({_id: id}, req.body);
        const song = await Song.findById({_id: id});
        res.json({status: "success", song});
    
    }catch(err){
        res.json({status: 'Error '}).status(400);
    }
};
