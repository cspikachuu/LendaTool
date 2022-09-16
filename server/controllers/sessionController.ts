//Imports here
const db = require('../models/sqlModel');

import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


/* This is a controller that is used to check if a user is logged in. */
const sessionController = {
  isLoggedIn: async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.cookies.username) res.locals.status = false;
      else {
        res.locals.status = true;
      }
      return next();
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

/* This is exporting the sessionController object to be used in other files. */
module.exports = sessionController;