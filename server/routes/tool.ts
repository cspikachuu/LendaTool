"use strict"
const express = require('express');
const toolController = require('../controllers/toolController');
const toolRouter = express.Router();
import db from '../../models'
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


toolRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { toolName, condition, type, price, rentalStatus} = req.body;
  console.log(db.Tools)
  console.log(db.tools)
  try {
    await db.Tools.create({toolName, condition, type, price, rentalStatus})
    // return them to a completed page
    return res.status(200).json('tools added')
  }
  //appropriately add global error handler
  catch (err) {
    console.log(err)
    return res.status(404).json('tools could not be added')
  }

})

toolRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {

  try {
    const allTools = await db.Tools.finAll({})

    return res.status(200).json('tools retrieved')
  }
  //appropriately add global error handler
  catch (err) {
    console.log(err)
    return res.status(404).json('tools could not be added')
  }

})

module.exports = toolRouter; 