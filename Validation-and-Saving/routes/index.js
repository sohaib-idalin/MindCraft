import express from 'express';
import homeRouter from './homerouter.js';


const indexrouter = express.Router();


indexrouter.use('/Home',homeRouter)


export default indexrouter;