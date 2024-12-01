import express from 'express';
import HomeController from '../controllers/homecontroller.js';

const router = express.Router();


const homeController=new HomeController()

router.get('/',homeController.getNewValue)
router.get('/NextValue',homeController.getNextValue)


export default router;