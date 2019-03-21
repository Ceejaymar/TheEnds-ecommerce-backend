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
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE stores (
  "id" SERIAL PRIMARY KEY,
  "user_id" INT REFERENCES users(id) NOT NULL,
  "name" VARCHAR NOT NULL,
  "address" VARCHAR NOT NULL,
  "city" VARCHAR NOT NULL,
  "state" VARCHAR NOT NULL,
  "zipcode" VARCHAR NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABlE products (
  "id" SERIAL PRIMARY KEY,
  "store_id" INT REFERENCES stores(id) NOT NULL,
  "name" VARCHAR NOT NULL,
  "price" MONEY NOT NULL,
  "category" VARCHAR NOT NULL,
  "description" VARCHAR, 
  "url" VARCHAR NOT NULL,
  "stock" JSON NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE orders (
  "id" SERIAL PRIMARY KEY,
  "customer" INT REFERENCES users(id) NOT NULL,
  "total" MONEY NOT NULL,
  "status" VARCHAR NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE orderline (
  "id" SERIAL PRIMARY KEY,
  "order_id" INT REFERENCES orders(id) NOT NULL,
  "product_id" INT REFERENCES products(id) NOT NULL,
  -- "store_id" INT REFERENCES stores(id) NOT NULL,
  "size" VARCHAR,
  "quantity" INT NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
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
(1, 'grey', 25.00, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/260/13779375-1370-40c1-abb4-93b5caa1b7052x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'orange', 25.00, 'tops', '25', 'https://photo-cdn.icons8.com/assets/previews/866/1ed641c6-49f3-47f9-a621-a87f0c4580de2x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'yellow', 25.00, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/280/c68fd564-49e6-4eb9-9037-a084a7afa0192x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'white stripes', 9.99, 'tops', '5', 'https://photo-cdn.icons8.com/assets/previews/854/badfb2f1-30d8-4b82-ae7d-a9efd94dc1c62x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'firebrick', 25.00, 'tops', '17', 'https://photo-cdn.icons8.com/assets/previews/370/afc9e21c-ce4f-49a1-b511-edcd7dbc7edd2x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(1, 'knit tan', 9.99, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/374/d7befafb-1784-4861-abda-c74a673a00a02x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'Long T-shirt tan', 25.00, 'tops', '5', 'https://photo-cdn.icons8.com/assets/previews/255/79e00fcd-d720-4135-9742-96f62c4601e92x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'pastel pink', 9.99, 'tops', '25', 'https://photo-cdn.icons8.com/assets/previews/257/d22f24ca-54b6-4623-a6a4-b25f606039c32x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'short pink', 25.00, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/413/4225cc56-2bbf-4622-af7a-eedccd3aff3f2x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'short grey', 9.99, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/265/602c9ae2-914d-48c2-ad0f-07eaaaca302a2x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'short white', 9.99, 'tops', '20', 'https://photo-cdn.icons8.com/assets/previews/432/22316bc2-8fc0-4529-8653-974c02efb1cf2x.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(2, 'short green', 9.99, 'tops', '20', 'https://photos.icons8.com/basic-khaki-t-shirt-5ba920738b6588000152f6c3', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://img1.g-star.com/product/c_fill,f_auto,h_3135,q_80/v1533339140/D06154-8973-9401-F02/G-Star-RAW%25C2%25AE-Motac-Deconstructed-3D-Slim-Jeans-Medium-blue.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://img1.g-star.com/product/c_fill,f_auto,h_3135,q_80/v1537366760/51001-8970-082-F02/G-Star-RAW%25C2%25AE-3301-Slim-Jeans-Black.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://img1.g-star.com/product/c_fill,f_auto,h_3135,q_80/v1543328886/D05655-7209-89-F02/G-Star-RAW%25C2%25AE-5620-G-Star-Elwood-3D-Straight-Jeans-Dark-blue.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://img1.g-star.com/product/c_fill,f_auto,h_3135,q_80/v1549362581/51001-8968-8436-F02/G-Star-RAW%25C2%25AE-3301-Slim-Jeans-Medium-blue.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }'),
(3, 'pants Blue', 9.99, 'bottoms', '20', 'https://img1.g-star.com/product/c_fill,f_auto,h_3135,q_80/v1524342640/51010-7101-2967-F02/G-Star-RAW%25C2%25AE-Revend-Skinny-Jeans-Black.jpg', '{ "small": "5", "medium": "4", "large": "5", "xlarge": "5" }');

INSERT INTO orders (customer, total, status) VALUES
(1, 34.99, 'shipped'),
(1, 50, 'shipped'),
(1, 19.98, 'shipped'),
(1, 34.99, 'shipped');

INSERT INTO orderline (order_id, product_id, size, quantity) VALUES
(1, 9, 'medium', 1),
(1, 10, 'medium', 1),
(2, 2, 'large', 1),
(2, 2, 'large', 1),
(3, 4, 'large', 2),
(4, 1, 'x-large', 1),
(4, 4, 'x-large', 1);