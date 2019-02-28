CREATE DATABASE cupcakes_db;
USE cupcakes_db;

CREATE TABLE cupcakes
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);