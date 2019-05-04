var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "goPackgo!",
  database: "bamazonDB"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the listInventory function after the connection is made to prompt the user
  listInventory();
});


function listInventory() {
  connection.query('SELECT * FROM products', function (err, res) {
      if (err) throw err;

      // Table display 
      var table = new Table(
          {
              head: [
                "Product ID", 
                "Product Name", 
                "Price", 
                "Quantity"],
              colWidths: [12, 75, 12, 12],
          });

      // Loop through inventory
      for (var i = 0; i < res.length; i++) {
          table.push(
              [
              res[i].id, 
              res[i].product_name, 
              res[i].department_name, 
              parseFloat(res[i].price).toFixed(2), 
              res[i].stock_quantity
            ]
          );
      }

      console.log(table.toString());
    }
  )};


    // inquirer
    //   .prompt({
    //     name: "postOrBid",
    //     type: "list",
    //     message: "Would you like to [POST] an auction or [BID] on an auction?",
    //     choices: ["POST", "BID", "EXIT"]
    //   })
    //   .then(function(answer) {
    //     // based on their answer, either call the bid or the post functions
    //     if (answer.postOrBid === "POST") {
    //       postAuction();
    //     }
    //     else if(answer.postOrBid === "BID") {
    //       bidAuction();
    //     } else{
    //       connection.end();
    //     }
    //   });
  