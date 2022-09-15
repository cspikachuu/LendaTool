//Imports here
const db = require('../db');

import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


const sessionController = {
  isLoggedIn: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.cookies.username) return res.redirect('/signup');
      console.log(req.cookies);
      const result = await db.query(
          "SELECT cookieId from Sessions WHERE cookieId=$1",
          [req.cookies.username]
      );
      if (result.rowCount === 0) return res.redirect('/signup');
      else return next();

      }
      catch (err) {
      return next({ err: "error checking logged in status" });
      }
    },

  startSession:  async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const newSession = await db.query(
          "INSERT INTO Sessions(cookieId) values($1)",
          [res.locals.newUser]
        );
      return next();
      }
      catch (err) {
      return next({ err: "error creating new session" });
      }
    } 
};

module.exports = sessionController;