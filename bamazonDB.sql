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

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bluetooth wireless mouse", "Electronics", 18.49, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("disc golf starter set", "Sporting Goods", 35.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("febreeze: 128oz. bucket", "Household", 10.49, 28);


-- Updates the row where the column name is peter --
-- UPDATE products
-- SET department_name = true, price = "Franklin", stock_quantity = 2
-- WHERE id = 4;

SELECT * FROM products;
