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