const path = require('path');
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";

export interface Controllers {
  toolController: Function;

}


//handling of the request

module.exports= {
  
  toolController.getTools = (req : Request, res: Response, next: NextFunction) => {

}
}
