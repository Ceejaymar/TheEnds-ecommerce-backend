DROP DATABASE IF EXISTS theends;
CREATE DATABASE theends;

\c theends;

CREATE TABLE users (
  "id" SERIAL PRIMARY KEY,
  "fname" VARCHAR NOT NULL,
  "lname" VARCHAR NOT NULL,
  "username" VARCHAR UNIQUE NOT NULL,
  "email" VARCHAR UNIQUE NOT NULL,
  "password" VARCHAR NOT NULL,
  "address" VARCHAR NOT NULL,
  "city" VARCHAR NOT NULL,
  "state" VARCHAR NOT NULL,
  "zipcode" VARCHAR NOT NULL,
  "seller" boolean NOT NULL
  -- hometown_id INT REFERENCES towns(id) NOT NULL
);

CREATE TABLE stores (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES users(id) NOT NULL,
  "name" VARCHAR NOT NULL,
  "address" VARCHAR NOT NULL,
  "city" VARCHAR NOT NULL,
  "state" VARCHAR NOT NULL,
  "zipcode" VARCHAR NOT NULL
  -- createdAt DATETIME
  -- updatedAt DATETIME
);

CREATE TABlE products (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR NOT NULL,
  "price" money NOT NULL,
  "storeID" int NOT NULL,
  "category" VARCHAR NOT NULL,
  "quantity" int   NOT NULL
);

-- INSERT INTO towns (name) VALUES
-- ('Pallet Town'), ('Viridian City'), ('Pewter City'), ('Cerulean City'), ('Vermillion City'), ('Lavender Town'), ('Celadon City'), ('Fuchsia City'), ('Saffron City'), ('Cinnabar Island');

INSERT INTO users (fname, lname, username, email, password, address, city, state, zipcode, seller) VALUES
('Carlos', 'Martinez', 'ceejaymar', 'cm@gmail.com', 'littt', '212 Throop ave', 'Brooklyn', 'New York', '11206', true),
('John', 'Chevy', 'knightblade', 'jc@gmail.com', 'littt', '212 Throop ave', 'Brooklyn', 'New York', '11206', false),
('Rigo', 'Berto', 'coppermonkey', 'rb@gmail.com', 'littt', '1 Menahan ave', 'Brooklyn', 'New York', '11345', true),
('Inoue', 'Kizaru', 'inouek', '1@gmail.com', 'littt', '1 Driggs ave', 'Brooklyn', 'New York', '11345', false),
('Anne', 'Diaz', 'arresteddiaz', '2@gmail.com', 'littt', '1 Menahan ave', 'Brooklyn', 'New York', '11345', true),
('Ash', 'Ketchum', 'pallettownking', '3@gmail.com', 'littt', '1 Menahan ave', 'Pallet Town', 'Kanto', '11345', false),
('Joe', 'Cruz', 'gumwrappin', '4@gmail.com', 'littt', '1 Menahan ave', 'Queens', 'New York', '11345', true);


INSERT INTO stores (user_id, name, address, city, state, zipcode) VALUES
(1, 'SolidBlack', '212 Throop ave', 'Brooklyn', 'New York', '11206'),
(1, 'byHOME', '10 Homey ave', 'New York', 'New York', '11001'),
(1, 'EssentialT', '200 Wayback st', 'Bronx', 'New York', '11306')