"use strict"
const express = require('express');
const toolController = require('../controllers/toolController');
const router = express.Router();


import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


router.get('/', toolController.getAllTools, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json('tools retrieved');
});

router.post('/:id', toolController.addTool, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json('tool added');
  ;
});

router.get('/:id', toolController.getTool, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json('tool retrieved');
});

router.delete('/:id', toolController.deleteTool, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json('tool deleted');
});

router.put('/:id', toolController.updateTool, (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json('tool updated');
});

// router.post('/:id', toolController.borrowTool, (req: Request, res: Response, next: NextFunction) => {
//   return res.status(200).json('tool borrowed');
// });

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Invalid route.")
);

router.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => { // NEEDS ALL PARAMS, IN EXACT ORDER 
    console.log(`Global error handler caught error: ${err}`); 
    return res.status(400).send(err);
});


module.exports = router;


