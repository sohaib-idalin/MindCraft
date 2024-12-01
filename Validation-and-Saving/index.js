import dotenv from 'dotenv';
// load the environment variables from the .env file
dotenv.config();
import express from 'express';
import cors from 'cors';
import indexrouter from './routes/index.js';

const port = process.env.PORT || '3001'

const app = express();
// app.use(cors());
// app.use(express.static('public'));
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

app.use('/',indexrouter)



app.use('*', (req, res) => {
    res.status(404).send('Page not found');
  });


app.listen(port,
    async () => {
        console.log(`server start at: http://localhost:${port}/`)
        
    }
);