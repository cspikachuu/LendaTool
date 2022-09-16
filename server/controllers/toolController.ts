//Imports and requirements here
const db = require('../models/sqlModel');
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";
 //appropriately add global error handler

/* tool controller object with methods */
const toolController = {

  /* method for getting all the tools from the database. */
  getAllTools: async (req: Request, res: Response, next: NextFunction) => {
    const getQuery = 'SELECT * FROM tools';
    try {
      const data = await db.query(getQuery);
      res.locals.tools = data.rows;
      return next();
    }
    catch (err) {
      return next(err);
    }
  },
  /* method for adding a tool to the database */
  addTool: async (req: Request, res: Response, next: NextFunction) => {
    const { name, photo, condition, type, price, status, description, username } = req.body;
    // const {username} = req.params
    const query = "INSERT INTO tools (name, username, photo, condition, type, price, status, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
    
    try {
      //need to test 
      const newTool = await db.query(query, [name, username, photo, condition, type, price, status, description])
      return next() 
    }
    catch (err) {
      return res.status(404).json('tools could not be added')
    }
  },
  /* method for get a specific tool */
  getTool:  async (req: Request, res: Response, next: NextFunction) => {
    const {toolId} = req.params
    try {
      const tool = await db.query("SELECT * FROM tools WHERE tool_id = $1", [toolId]);
      return next()
    }
    catch (err) {
      return res.status(404).json('tools could not be added')
    }
    },
  /* method for deleteing a tool from the database*/
  deleteTool:  async (req: Request, res: Response, next: NextFunction) => {
    const {toolId} = req.params
    try {
      const tool = await db.query("DELETE FROM tools WHERE tool_id = $1", [toolId])
      return next()
    }
    catch (err) {
      return res.status(404).json('Tools could not be deleted')
    }
    },
    /* method for updating a tool */
    updateTool:  async (req: Request, res: Response, next: NextFunction) => {
      const {toolId} = req.params //Where
      const {update} = req.body //Set-- what to change
      try {
        const updateTool = await db.query("UPDATE tools SET update = $1 WHERE tool_id = $1 RETU", [update, toolId])
        return next()
      }
      catch (err) {
        return res.status(404).json('tools could not be added')
      }
      }
};


/* Exporting the toolController object so that it can be used in other files. */
module.exports = toolController;