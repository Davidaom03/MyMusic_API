import express from 'express';
import bodyParser from 'body-parser';
import songsRoutes from './routes/songs.js';

const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/songs', songsRoutes);


// testing
app.get('/', (req, res) => {
    console.log('TESTING /');
    res.send('Hello from home page');
});

app.listen(PORT, () => console.log(`server running on port http://localhost:${PORT}`));
