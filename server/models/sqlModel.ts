const { Pool } = require('pg');

const PG_URI = 'postgres://myvejgxi:XoqIMAVH9TwX81L8cmJ5dGQS_ESzKd34@jelani.db.elephantsql.com/myvejgxi'

const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text: any, params: any, callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
