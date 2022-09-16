const db = require('../models/sqlModel');
const bcrypt = require('bcrypt');
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


/*  user controller object with two methods */
const userController = {

/*  createUser method is destructuring the username, password, firstname, and lastname from the request body. It
then hashes the password using bcrypt and inserts the user into the database. */
  createUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {username, password, firstname, lastname} = req.body
      const hashedPass = await bcrypt.hash(password, 10);
      const query = "INSERT INTO users (username, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING user_id, username";
      const newUserQuery = await db.query(query, [username, hashedPass, firstname, lastname]);
      res.locals.registered = true
      return next();
    }
    catch (err) {
      return next({err: "Username taken try another"})
    }
    },

  /* verify user middleware */
  verifyUser:  async (req: Request, res: Response, next: NextFunction) => {
    try {
      /* Destructuring the username and password from the request body. */
      const { username, password } = req.body;
      /* Querying the database for a user with the username that was passed in the request body. */
      const existingUser = await db.query(
        "SELECT * from users WHERE username=$1",
        [username]
      );
      /* Checking if the user exists in the database or if the password is correct. */
      if (existingUser.rows.length === 0 || !bcrypt.compareSync(password, existingUser.rows[0].password)) {
        res.locals.user = false;
        return res.status(200).json(res.locals.user)
      } else {
        res.locals.user = existingUser.rows[0]; 
        return next();
      }
    }
    catch (err) {
      return next({ err: "error verifying user" });
    }
    }
};

module.exports = userController;