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
  return res.status(200).redirect('/login');
});

router.post('/login', userController.verifyUser, cookieController.setCookie, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).redirect('/market');
});

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Invalid route.")
);

router.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => { // NEEDS ALL PARAMS, IN EXACT ORDER 
    console.log(`Global error handler caught error: ${err}`); 
    return res.status(400).send(err);
});