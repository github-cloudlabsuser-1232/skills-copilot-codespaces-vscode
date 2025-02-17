CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_fname VARCHAR(50),
    customer_lname VARCHAR(50),
    customer_phone VARCHAR(15),
    customer_address VARCHAR(100)
);

-- fill in 5 rows in customers table
INSERT INTO customers VALUES (1, 'John', 'Doe', '123-456-7890', '123 Main St'); 
INSERT INTO customers VALUES (2, 'Jane', 'Doe', '123-456-7891', '124 Main St');
INSERT INTO customers VALUES (3, 'Alice', 'Smith', '123-456-7892', '125 Main St');
INSERT INTO customers VALUES (4, 'Bob', 'Smith', '123-456-7893', '126 Main St');
INSERT INTO customers VALUES (5, 'Charlie', 'Brown', '123-456-7894', '127 Main St');

-- show the data in customers table 
SELECT * FROM customers;