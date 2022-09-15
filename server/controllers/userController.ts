//Imports and requirements here
const db = require('../models/sqlModel');

const bcrypt = require('bcrypt'); //is it still bcrypt with "js" or change to "ts" ??
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
      const hashedPass = await bcrypt.hash(req.body.password, 10);
      const params = [req.body.username, req.body.password, req.body.firstname, req.body.lastname];
      const text= "INSERT INTO users (username, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING user_id, username"
      // console.log(params)
      const newUserQuery = await db.query(text, params);
      console.log(newUserQuery)
      res.locals.registered = true;
      return next();
    }
    catch (err) {
      console.log(err)
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