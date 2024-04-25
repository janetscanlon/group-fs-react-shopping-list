-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
-- create table
CREATE TABLE "groceries" (
	"id" SERIAL PRIMARY KEY,
	"item" VARCHAR(80),
	"quantity" TEXT,
	"unit" VARCHAR(20),
	"isPurchased" BOOLEAN DEFAULT FALSE
);

-- DUMMY DATA
INSERT INTO "groceries"
("item", "quantity","unit")
VALUES 
('Apples',5,'lbs'), 
('Bread',1,'loaf'),
('Milk',1,'gallon'),
('Sliced Almonds',2,'cups'),
('Bananas',1,'bunch');