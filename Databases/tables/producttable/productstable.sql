USE  ASSIGNMENT
go

 CREATE TABLE products(
 productid VARCHAR(200) PRIMARY KEY,
 productName VARCHAR(155),
 productDescription VARCHAR (155),
 productImage VARCHAR(155),
 price INT,
 isDeleted INT DEFAULT 0
 )
