//Imports and requirements here
const db = require('../db');
//change above to match our database
const bcrypt = require('bcryptjs'); //is it still bcrypt with "js" or change to "ts" ??
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


const userController = {

  getAllUsers: async (req: Request, res: Response, next: NextFunction) => {
    console.log("in geAllUsers");
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

        //do we need this res.json ?
        // res.json({ loggedIn: true, username })
        
      }
      return next();
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
        return res.redirect('signup');
      } else {
        res.locals.newUser = existingUser; //existingUser.rows ????
        return next();
      }

    }
    catch (err) {
      return next({ err: "error verifying user" });
    }
    }
};

module.exports = userController;