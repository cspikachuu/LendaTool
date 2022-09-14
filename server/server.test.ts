import request from 'supertest';
import app from './server';
/* the focus are:
sending responses, status codes errors and good and json objects 
interactions with the database 
*/

describe(' /tools', () => {
  
  describe('POST /tools', () => {

    describe('given all required details', () => {
      //should save the tool and associated details to the database

      test('should respond with a 200 status code', async () => {
      const response = await request(app).post('/tools').send({
        lender:'lender',
        condition:'condition',
        powertool:'powertool',
        type:'type',
        rentalStatus:'false',
        price: 1234,
      })
      expect(response.statusCode).toBe(200);
    })
    })
    
    describe('when lender is missing', () => {

      test('should respond with a 404 status code', async () => {
        const response = await request(app).post('/tools').send({
          condition:'condition',
          powertool:'powertool',
          type:'type',
          rentalStatus:'false',
          price: 1234,
        })
        expect(response.statusCode).toBe(404)
    })
    })
    

  })

  describe('GET /tools', () => {

    test('should respond with a status code 200', async () => {
        const response = await request(app).get('/tools');
        expect(response.statusCode).toBe(200)
    })

    test('should respond with an object containing all tools', async () => {
      const response = await request(app).get('/tools');
      expect(response.body.tools).toBeDefined()
    }) 

  })

})


describe(' /tools/:id', () => {

  describe('GET /tools/:id', () => {
    //should respond with an object containing a tool
  })

  describe('Update /tools/:id', () => {
    //should respond back with a tool containing the change from the database
  })

}) 
  
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
 

