CREATE OR ALTER PROCEDURE updateProduct(@id VARCHAR(200), @pname VARCHAR(155), @pdesc VARCHAR(155), @pimage VARCHAR(155), @price INT)
AS 
BEGIN
UPDATE products SET productid=@id, productName=@pname, productDescription=@pdesc, productImage=@pimage, price=@price 
END