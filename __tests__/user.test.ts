import request from 'supertest';
import app from '../server/server';
/* the focus are:
sending responses, status codes errors and good and json objects 
interactions with the database 
*/

describe(' /user', () => {

  describe('POST /user', () => {
    //should respond with 200 status code when user info is complete
    // should respond with 404 status code when missing username or password
  })

  describe(' /user/id', () => {

    describe('GET /user/:id', () => {
      //should respond with a 200 status code
      // should respond with users page
    })
  
  }) 
}) 
 

