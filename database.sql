-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:
CREATE TABLE "favorites" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR (500) NOT NULL,
  "category_id" integer REFERENCES categories
);

INSERT INTO "favorites" (
  ("url", "category_id")
  VALUES
  ("https://giphy.com/gifs/greenwave-football-smoke-3o6nV9CyXKejXREHVm", 3);
)

-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.
