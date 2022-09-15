//Imports and requirements here
const db = require('../models/sqlModel');
import { Request, Response, NextFunction, RequestHandler, ErrorRequestHandler, Application} from "express";

    //appropriately add global error handler


const toolController = {

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

  addTool: async (req: Request, res: Response, next: NextFunction) => {
    const { name, photo, condition, type, price, status, description, username } = req.body;
    console.log(req.body)
    // const {username} = req.params
    const query = "INSERT INTO tools (name, username, photo, condition, type, price, status, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"
    
    try {
      //need to test 
      const newTool = await db.query(query, [name, username, photo, condition, type, price, status, description])
      return next() 
    }
    catch (err) {
      console.log(err)
      return res.status(404).json('tools could not be added')
    }
  },

  getTool:  async (req: Request, res: Response, next: NextFunction) => {
    const {toolId} = req.params

    try {
      const tool = await db.query("SELECT * FROM tools WHERE tool_id = $1", [toolId])
  
      return next()
    }
    catch (err) {
      console.log(err)
      return res.status(404).json('tools could not be added')
    }
    },

  deleteTool:  async (req: Request, res: Response, next: NextFunction) => {
    const {toolId} = req.params

    try {
      const tool = await db.query("DELETE FROM tools WHERE tool_id = $1", [toolId])
      return next()
    }
    catch (err) {
      console.log(err)
      return res.status(404).json('Tools could not be deleted')
    }
    },

    updateTool:  async (req: Request, res: Response, next: NextFunction) => {
      const {toolId} = req.params //Where
      const {update} = req.body //Set-- what to change
  
      try {
        const updateTool = await db.query("UPDATE tools SET update = $1 WHERE tool_id = $1 RETU", [update, toolId])
        return next()
      }
      catch (err) {
        console.log(err)
        return res.status(404).json('tools could not be added')
      }
      },

      // borrowTool:  async (req: Request, res: Response, next: NextFunction) => {
//   //recieve a parameter 
  
//   try {
//     req.params
//       await db.query()

//     return next()
//     //res.status(200).json('tools retrieved')
//   }
//   //appropriately add global error handler
//   catch (err) {
//     console.log(err)
//     return res.status(404).json('tools could not be added')
//   }
//   },

  // getBtool:  async (req: Request, res: Response, next: NextFunction) => {
  //   const {user_id} = req.params

  //   try {
  //     const tool = await db.query("SELECT tool_id FROM borrower WHERE user_id = $1", [user_id])
  
  //     return res.status(200).json('Borrowed tool retrieved')
  //   }
  //   catch (err) {
  //     console.log(err)
  //     return res.status(404).json('tools could not be added')
  //   }
  //   },
};


module.exports = toolController;