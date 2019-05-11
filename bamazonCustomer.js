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
// 
]).then(function(data) {
  var itemID = (data.itemID);
  var quantityInput = parseInt(data.quantity);
  
  

  connection.query(`SELECT stock_quantity, price FROM products WHERE item_id = ${itemID}`, 
  function (err, res) {
      if (err) throw err;
    console.log(res)
    
    if (res[0].stock_quantity < quantityInput) {
      console.log("We're sorry. We do not have enough of this in stock...");
    } else {
      console.log("Your order total is {$" + (res[0].price * quantityInput) + "}");
      console.log("Placing Order...");
      console.log("Updating Quantities...");
      console.log("Thank you for your business!");
      var quantityUpdate = res[0].stock_quantity - quantityInput;
      var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: quantityUpdate
            },
            {
                item_id: itemID
            }
        ])
    }
    connection.end();
  });

});
}