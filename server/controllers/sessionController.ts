//Imports here
const db = require('../models/dbModel');

import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


const sessionController = {
  isLoggedIn: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.cookies.username) return res.locals.status = false;
      else {
        res.locals.status = true;
        return next();
      }

      }
      catch (err) {
      return next({ err: "error checking logged in status" });
      }
    },

  // startSession:  async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  
  //       const newSession = await db.query(
  //         "INSERT INTO Sessions(cookieId) values($1)",
  //         [res.locals.newUser]
  //       );
  //     return next();
  //     }
  //     catch (err) {
  //     return next({ err: "error creating new session" });
  //     }
  //   } 
};

module.exports = sessionController;