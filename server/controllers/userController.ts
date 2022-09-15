//Imports and requirements here
const db = require('../models/dbModel');
//change above to match our database
const bcrypt = require('bcryptjs'); //is it still bcrypt with "js" or change to "ts" ??
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


const userController = {

  getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
    const getQuery = 'SELECT * FROM Users';
    try {
      const data = await db.query(getQuery);
      res.locals.users = data.rows;
      return next();
    }
    catch (err) {
      return next(err);
    }
    
    },

  createUser: async (req: Request, res: Response, next: NextFunction) => {
    console.log("in createUser");

    
    try {
      const existingUser = await /* db.query or --> */ db.query(
        "SELECT username from users WHERE username=$1",
        [req.body.username]
      );

      if (existingUser.rowCount === 0) {
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        const newUserQuery = await db.query(
          "INSERT INTO users(username, passhash) values($1,$2) RETURNING id, username",
          [req.body.username, hashedPass]
        );
        res.locals.registered = true;
        return next();
      }else{ //the ccase where register failss
        res.locals.registered = false;
        return next();
      }
    }
    catch (err) {
      return next({err: "Username taken try another"})
    }
    },

  verifyUser:  async (req: Request, res: Response, next: NextFunction) => {
    console.log("in verifyUser");
    try {
      const { username, password } = req.body;
      const existingUser = await /* pool.query or --> */ db.query(
        "SELECT * from users WHERE username=$1",
        [username]
      );
      // if (theUser.length === 0 || !bcrypt.compareSync(password, theUser[0].password))
      if (existingUser.rowCount === 0 || !bcrypt.compareSync(password, existingUser.password)) {
        res.locals.user = false;
        return res.status(200).json(res.locals.user)
      } else {
        res.locals.user = existingUser; //existingUser.rows ????
        return next();
      }

    }
    catch (err) {
      return next({ err: "error verifying user" });
    }
    }
};

module.exports = userController;