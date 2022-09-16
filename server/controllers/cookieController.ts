//Imports here
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";

/* This is creating a cookieController object with two methods, setCookie and setSSIDCookie. */
const cookieController = {
  /* sets a cookie for the user */
  setCookie: async (req: Request, res: Response, next: NextFunction) => {
    const userInfo = res.locals.user.username;
    res.cookie('username', userInfo);
    return next();
    },

  setSSIDCookie:  async (req: Request, res: Response, next: NextFunction) => {
    res.cookie('ssid', res.locals.newUser, { httpOnly: true });
    return next();
    }
};

/* Exporting the cookieController object so that it can be imported into other files. */
module.exports = cookieController;