"use strict"
// const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


// router.get('/login', (req: Request, res: Response, next: NextFunction) => {
//   res.sendFile(path.resolve(__dirname, '../client/pages/Login.tsx'));
// });

// router.get('/signUp', (req: Request, res: Response, next: NextFunction) => {
//   res.sendFile(path.resolve(__dirname, '../client/pages/SignUp.tsx'));
// });

router.post('/signup', userController.createUser, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(res.locals.registered)
});

router.post('/login', userController.verifyUser, cookieController.setCookie, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(res.locals.user) //frontend should check val of user. if false then 
});

module.exports = router