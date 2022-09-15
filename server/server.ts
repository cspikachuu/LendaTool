
import express from 'express';
const app = express();
import path from "path";

//THESE MUST BE REQUIRED FOR USER ROUTER AND SESSION
const userRouter = require('./routes/userRouter');
const sessionController = require('./controllers/sessionController');
//THESE MUST BE REQUIRED FOR USER ROUTER AND SESSION

// import "dotenv/config";
import {
  Request,
  Response,
  NextFunction,
  RequestHandler,
  ErrorRequestHandler,
  application,
} from "express";

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//test
app.use(express.static(path.resolve(__dirname, "../client")))

//ROUTER FOR USER LOGIN, SIGNUP, AND SESSION
app.use('/user', userRouter);
//ROUTER FOR USER LOGIN, SIGNUP, AND SESSION

//CHECKS SESSION
app.get('/hasCookie', sessionController.isLoggedIn, (req: Request, res: Response) => {
    res.status(200).json(res.locals.status)
});
//CHECKS SESSION


app.use("*", (req: Request, res: Response) =>
  res.status(404).send("Invalid route.")
);

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 * Note: we aren't sending back error messages, so all we're doing is logging the error.
 */
const globalErrorHandler: ErrorRequestHandler = (
  err: string,
  req,
  res,
  next
) => {
  const defaultErr = "Express error handler caught unknown middleware error";
  const error = err || defaultErr;
  console.log(error);
};

app.use(globalErrorHandler);

// server message
app.listen(3000, () => {
  console.log(`Server listening on port: 3000`);
});