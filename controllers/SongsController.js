import {v4 as uuidv4} from "uuid";

let allSongs = [];
let counterId = 0;

export const getSongs = (req, res) => {
    res.send(allSongs.length === 0 ? 'No Songs' : allSongs );
};

export const postSong = (req, res) => {
    counterId++;
    const reqSong = req.body;
    const newSong = { ...reqSong, uuid: uuidv4(), id: Number(counterId)}

    allSongs.push(newSong);

    res.send(allSongs);
};

export const getSong = (req, res) => {
    const { id } = req.params;

    const songFound = allSongs.find(song => song.id === Number(id) );

    res.send(songFound !== null ? songFound : 'No song found with that ID');
};

export const deleteSong = (req, res) => {
    try{
        const { id } = Number(req.params);
        allSongs = allSongs.filter(song => song.id !== id);

        res.status(200).send('Success');
    }catch(e){
        console.log(e);
        res.status(404).send('Failure');
    }
}

export const patchSong = (req, res) => {
    const { id } = req.params;
    const { title, artist, image } = req.body;

    const songFound = allSongs.find(song => song.id === Number(id));

    if( title && artist && image && songFound !== null){
        songFound.title = title,
        songFound.artist = artist;
        songFound.image = image;
        res.send(songFound);
    }
    else{
        res.send('Song Not Found').status(404);
    }  
};
