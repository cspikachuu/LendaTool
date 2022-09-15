//Imports here
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";

const cookieController = {
  setCookie: async (req: Request, res: Response, next: NextFunction) => {
    console.log("in setCookie");
    //what do I put in cookie??
    const userInfo = res.locals.newUser;
    res.cookie('username', userInfo.username);
    return next();
      
    },

  setSSIDCookie:  async (req: Request, res: Response, next: NextFunction) => {
    res.cookie('ssid', res.locals.newUser, { httpOnly: true });
    console.log("in setSSIDCookie");
    return next();
    }
};

module.exports = cookieController;