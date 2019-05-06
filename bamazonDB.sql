-- Drops the bamazonDB if it exists currently --
DROP DATABASE IF EXISTS bamazonDB;
-- Creates the "bamazonDB" database --
CREATE DATABASE bamazonDB;
-- Makes it so all of the following code will affect bamazonDB --
USE bamazonDB;

-- Creates the table "products" within bamazonDB --
CREATE TABLE products (
  -- Creates a numeric column called "item_id" which will automatically increment its default value as we create new rows --
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "product_name" which cannot contain null --
  product_name VARCHAR(100) NOT NULL,
  -- Makes a boolean column called "department_name" which cannot contain null --
  department_name VARCHAR(100) NOT NULL,
  -- Makes a sting column called "price" --
  price DECIMAL(10,2) NOT NULL,
  -- Makes an numeric column called "stock_quantity" --
  stock_quantity INTEGER(100) NOT NULL,
  -- Sets item_id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (item_id)
);

-- ### Alternative way to insert more than one row
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("bluetooth wireless mouse", "Electronics", 18.49, 14),
("disc golf starter set", "Sporting Goods", 35.99, 3),
("febreeze: 128oz. bucket", "Household", 10.49, 28),
("febreeze: 5 gal. bucket", "Household", 45.49, 12),
("CDR rewritable discs: 10pk.", "Electronics", 6.49, 82),
("Ladder Golf Backyard Set", "Sporting Goods", 38.99, 9),
("Flip Cup/Beer Pong Party Set", "Parties & Entertainment", 17.99, 15),
("Thigh Master", "Sporting Goods", 82.98, 90),
("Massage Wand", "Electronics", 24.95, 15),
("Bowl for your guests car Keys", "Parties & Entertainment", 25.49, 2);

SELECT * FROM products;
