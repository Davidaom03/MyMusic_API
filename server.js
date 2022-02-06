import express from 'express';
import bodyParser from 'body-parser';
import songsRoutes from './routes/songs.js';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000;
const app = express();
const url = 'mongodb://localhost/MyMusic';

// mongoose.connect(url, {useNewUrlParser:true});
// const con = mongoose.connection;
// con.on('open', () => console.log('Conected to MONGODB'));

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( () => console.log("MONGODB is connected") )
.catch( err => {
    console.log("Error connecting to MongoDB.", err);
    process.exit();
});

app.use(cors());
app.use(bodyParser.json());
app.use('/songs', songsRoutes);

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));
