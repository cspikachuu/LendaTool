import express from 'express';
const app: Application = express();
import path from "path";
const PORT: number = 3000;
const toolRouter = require('./routes/tool')
// import "dotenv/config";
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req: Request, res: Response) => {
//   res.json("hi");
// });
app.get('/', (req : Request, res: Response, next: NextFunction) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('/tools', toolRouter);

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
//not allowing jest to exit
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

export default app;