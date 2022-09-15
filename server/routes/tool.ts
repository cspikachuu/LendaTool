"use strict"
const express = require('express');
const toolController = require('../controllers/toolController');
const toolRouter = express.Router();
const db = require('../models/apiModel');
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";


toolRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const { tool_id, listingName, photo, condition, type, price, status} = req.body;
  try {
    //add query
    await db.query()
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
 await db.query('SELECT * FROM tools')

    return res.status(200).json('tools retrieved')
  }
  //appropriately add global error handler
  catch (err) {
    console.log(err)
    return res.status(404).json('tools could not be retrieved')
  }

})

toolRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {

  try {
    req.params
      //find a tool by anything passed into the params from tools route
     await db.query()

    return res.status(200).json('tools retrieved')
  }
  //appropriately add global error handler
  catch (err) {
    console.log(err)
    return res.status(404).json('tools could not be added')
  }
})
module.exports = toolRouter; 