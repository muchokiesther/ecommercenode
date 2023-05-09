CREATE OR ALTER PROCEDURE updateUser(@id VARCHAR(200), @username VARCHAR(155), @fullname VARCHAR(155), @email VARCHAR(155), @phonenumber, @password VARCHAR(200))
AS
BEGIN
	UPDATE users SET id=@id, userName=@username, fullName=@fullname, email=@email, phoneNumber=@phonenumber, password=@password
END