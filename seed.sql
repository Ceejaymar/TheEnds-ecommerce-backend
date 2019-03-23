DROP DATABASE IF EXISTS theends;
CREATE DATABASE theends;

\c theends;

CREATE TABLE users (
  "id" SERIAL PRIMARY KEY,
  "fname" VARCHAR NOT NULL,
  "lname" VARCHAR NOT NULL,
  "email" VARCHAR UNIQUE NOT NULL,
  "token" VARCHAR NOT NULL,
  "address" VARCHAR NOT NULL,
  "city" VARCHAR NOT NULL,
  "state" VARCHAR NOT NULL,
  "zipcode" VARCHAR NOT NULL,
  "seller" BOOLEAN NOT NULL,
  "createdat" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedat" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE stores (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT NOT NULL,
  "name" VARCHAR NOT NULL,
  "address" VARCHAR NOT NULL,
  "city" VARCHAR NOT NULL,
  "state" VARCHAR NOT NULL,
  "zipcode" VARCHAR NOT NULL,
  "createdat" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedat" TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) 
      REFERENCES users(id)
      ON DELETE CASCADE
);

CREATE TABlE products (
  "id" SERIAL PRIMARY KEY,
  "store_id" INT NOT NULL,
  "name" VARCHAR NOT NULL,
  "price" MONEY NOT NULL,
  "category" VARCHAR NOT NULL,
  "description" VARCHAR, 
  "url" VARCHAR NOT NULL,
  "stock" JSON NOT NULL,
  "createdat" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedat" TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (store_id) 
      REFERENCES stores(id)
      ON DELETE CASCADE
);

CREATE TABLE orders (
  "id" SERIAL PRIMARY KEY,
  "customer" INT NOT NULL,
  "total" MONEY NOT NULL,
  "status" VARCHAR NOT NULL,
  "createdat" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedat" TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (customer) 
      REFERENCES users(id)
      ON DELETE CASCADE
);

CREATE TABLE orderline (
  "id" SERIAL PRIMARY KEY,
  "order_id" INT NOT NULL,
  "product_id" INT NOT NULL,
  "store_id" INT NOT NULL,
  "size" VARCHAR,
  "quantity" INT NOT NULL,
  "createdat" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedat" TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (order_id) 
      REFERENCES orders(id)
      ON DELETE CASCADE,
    FOREIGN KEY (product_id) 
      REFERENCES products(id)
      ON DELETE CASCADE,
    FOREIGN KEY (store_id) 
      REFERENCES stores(id)
      ON DELETE CASCADE
);

INSERT INTO users (fname, lname, email, token, address, city, state, zipcode, seller) VALUES
('Carlos', 'Martinez', 'cm@gmail.com', 'littt', '212 Throop ave', 'Brooklyn', 'New York', '11206', true),
('John', 'Chevy', 'jc@gmail.com', 'littt', '212 Throop ave', 'Brooklyn', 'New York', '11206', false),
('Rigo', 'Berto', 'rb@gmail.com', 'littt', '1 Menahan ave', 'Brooklyn', 'New York', '11345', true),
('Inoue', 'Kizaru', '1@gmail.com', 'littt', '1 Driggs ave', 'Brooklyn', 'New York', '11345', false),
('Anne', 'Diaz', '2@gmail.com', 'littt', '1 Menahan ave', 'Brooklyn', 'New York', '11345', true),
('Ash', 'Ketchum', '3@gmail.com', 'littt', '1 Menahan ave', 'Pallet Town', 'Kanto', '11345', false),
('Joe', 'Cruz', '4@gmail.com', 'littt', '1 Menahan ave', 'Queens', 'New York', '11345', true);

INSERT INTO stores (user_id, name, address, city, state, zipcode) VALUES
(1, 'SolidBlack', '212 Throop ave', 'Brooklyn', 'New York', '11206'),
(3, 'byHOME', '10 Homey ave', 'New York', 'New York', '11001'),
(5, 'EssentialT', '200 Wayback st', 'Bronx', 'New York', '11306');

INSERT INTO products (store_id, name, price, category, description, url, stock) VALUES
(1, 'grey', 25.00, 'tops', '20', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/grey-1.jpg?alt=media&token=afd3c77d-288d-4b75-bf4c-59dd2e89c504', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'orange', 25.00, 'tops', '25', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/orange-1.jpg?alt=media&token=3d74c963-f8e4-413a-867d-601449d238fe', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'yellow', 25.00, 'tops', '20', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/yellow-1.jpg?alt=media&token=4606f0f7-e10c-4f98-888c-2df94ffd4660', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'white stripes', 9.99, 'tops', '5', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/stripe-1.jpg?alt=media&token=938c6ad8-5f05-4333-8f32-a30c63835574', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'firebrick', 25.00, 'tops', '17', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/burg-1.jpg?alt=media&token=93ee0cf6-a372-4c8e-82c0-2064b647a691', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'knit tan', 9.99, 'tops', '20', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/tan-sweater-1.jpg?alt=media&token=8b427fe8-ef58-45ed-af7a-a95df9f9c5a0', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'Long T-shirt tan', 25.00, 'tops', '5', 'https://photo-cdn.icons8.com/assets/previews/255/79e00fcd-d720-4135-9742-96f62c4601e92x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'pastel pink', 9.99, 'tops', '25', 'https://photo-cdn.icons8.com/assets/previews/257/d22f24ca-54b6-4623-a6a4-b25f606039c32x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'short pink', 25.00, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/413/4225cc56-2bbf-4622-af7a-eedccd3aff3f2x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'short grey', 9.99, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/265/602c9ae2-914d-48c2-ad0f-07eaaaca302a2x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'short white', 9.99, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/432/22316bc2-8fc0-4529-8653-974c02efb1cf2x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'short green', 9.99, 'tops', '20', 'https://photos.icons8.com/basic-khaki-t-shirt-5ba920738b6588000152f6c3', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-1.png?alt=media&token=f1032cfc-28ca-4e69-a181-6dac42dbbb70', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-2.png?alt=media&token=0ca8b1b2-6fc0-45bc-8b6d-8f14172b4d11', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-3.png?alt=media&token=11bdfccc-6c0c-42b1-bdd3-fdd70c7ab372', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-4.png?alt=media&token=63ea7b85-3f65-4df9-a7c0-b2b3ec26a944', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/star-5.png?alt=media&token=584de7a9-e74f-49a0-ba82-4edc45113348', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }');

INSERT INTO orders (customer, total, status) VALUES
(1, 34.99, 'shipped'),
(1, 50, 'shipped'),
(1, 19.98, 'shipped'),
(1, 34.99, 'shipped');

INSERT INTO orderline (order_id, product_id, store_id, size, quantity) VALUES
(1, 9, 2, 'medium', 1),
(1, 10, 2,'medium', 1),
(2, 2, 1, 'large', 1),
(2, 2, 1, 'large', 1),
(3, 4, 1, 'large', 2),
(4, 1, 1, 'x-large', 1),
(4, 4, 1, 'x-large', 1);