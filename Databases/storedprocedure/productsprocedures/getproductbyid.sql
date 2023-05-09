CREATE OR ALTER PROCEDURE getProductById(@id VARCHAR(200)
AS 
BEGIN
SELECT * FROM products WHERE productid = @id AND isDeleted=0
END