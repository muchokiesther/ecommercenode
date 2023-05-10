-- add user
CREATE OR ALTER PROCEDURE addUser(@id VARCHAR(200) , @username VARCHAR(155), @fullname VARCHAR(155), @email VARCHAR(155),@phonenumber INT, @password VARCHAR(200))
AS 
BEGIN
INSERT INTO Users(id,userName,fullName,email,phoneNumber,password) VALUES (@id, @username, @fullname, @email, @phonenumber, @password)

END
