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
  connection.query('SELECT * FROM products', 
  function (err, res) {
      if (err) throw err;

// Loop through and display inventory
  for (var i = 0; i < res.length; i++) {
    console.log(
      res[i].item_id + ").  " + 
      res[i].product_name + "  {$" + 
      res[i].price + "} " + "\n"
          );
      }
      inquirerFunction();
  }
)};

function inquirerFunction() {
  connection.query('SELECT * FROM products', 
  function (err, res) {
      if (err) throw err;

inquirer
.prompt([
  {
  type: "input",
  name: "itemID",
  message: "Please enter the Product ID of the item that you would like."
},
{
  type: "input",
  name: "quantity",
  message: "How many would you like to buy?"
}
]).then(function(data) {
  var itemID;
  for (var i = 0; i < res.length; i++) {
    if (res[i].id === parseInt(data.itemID)) {
      itemID = res[i];
      console.log(itemID);
    }
  }
}
)
});
}