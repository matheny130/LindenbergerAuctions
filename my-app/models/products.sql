CREATE database lindenberger_auctions;
CREATE TABLE products (
	id INT PRIMARY KEY,
    category VARCHAR(20),
    title VARCHAR(50),
    price INT,
    description VARCHAR(500),
    picture BLOB
);

DESCRIBE products;

ALTER TABLE products;
ALTER Table products MODIFY COLUMN price decimal (10, 2);

DESCRIBE products;

ALTER TABLE products 
MODIFY category varchar(20) NOT NULL;
ALTER TABLE products MODIFY title varchar(50) NOT NULL;
ALTER TABLE products MODIFY price decimal (10, 2) NOT NULL;
ALTER TABLE products MODIFY description varchar (500) NOT NULL;
ALTER TABLE products MODIFY picture blob NOT NULL;

DESCRIBE products;

ALTER TABLE products MODIFY id INT AUTO_INCREMENT;

INSERT INTO products(category, title, price, description, picture)
VALUES ("lamp", "gas lamp", 50.00, "Vintage gas lamp. Beautifully restored.", "lamp1.jpg"), 
("furniture", "rolltop desk", 2000.00, "Antique Rolltop Desk. No scratches or dings. All drawers open.", "desk1.jpg"),
("miscellaneous", "antique telephone", 300.00, "Antique Telephone. No longer operationational.", "phone1.jpg");

DESCRIBE products;

SHOW tables;

SELECT * from products;

INSERT INTO products(category, title, price, description, picture)
VALUES ("furniture", "antique chest", 750.00, "Antique chest. Pretty Cool.","chest1.jpg"), 
("miscellaneous", "globes", 1300.00, "Two Globes. Only available as set.", "globe1.jpg"),
("lamp", "lamp with green shade", 95.00, "Small lamp with green stained glass shade.", "lamp2.jpg");

DESCRIBE products;

SHOW TABLES;

SELECT * FROM products;

DELETE FROM products WHERE id = 7;
DELETE FROM products WHERE id = 8;
DELETE FROM products WHERE id = 9;

SELECT * FROM products;
