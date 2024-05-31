import { Router } from "express";
import * as request from './requestHandler.js'
//import { home } from 'requestHandler.js'

const router=Router();

router.route('/add').get(request.addcontact)

//router.route('/').get(home)
export default router;