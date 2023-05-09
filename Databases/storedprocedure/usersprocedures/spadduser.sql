-- add user
CREATE OR ALTER PROCEDURE addUser(@id INT , @username VARCHAR, @fullname VARCHAR, @email VARCHAR,@phonenumber VARCHAR, @password VARCHAR)
AS 
BEGIN
INSERT INTO Users(id,userName,fullName,email,phoneNumber,password) VALUES (@id, @username, @fullname, @email, @phonenumber, @password)

END
