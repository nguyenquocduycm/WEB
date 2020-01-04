var mysql=require('mysql');

let conn=mysql.createConnection({
    host:'localhost',
    port:3308,
    user:'root',
    password:'',
    database:'auction'   
});

let query = 'SELECT * FROM account';
conn.query(query, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

conn.end();