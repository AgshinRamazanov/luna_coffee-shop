-- SQL Script to Initialize Supabase Tables for Luna Coffee Shop - Complete Menu Seed

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist
DROP TABLE IF EXISTS modifications CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS settings CASCADE;

-- 1. Create categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC(10,2) DEFAULT NULL,
  photo_url TEXT,
  is_available BOOLEAN DEFAULT TRUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Create modifications table (for sizes/options)
CREATE TABLE modifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  price NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Create settings table
CREATE TABLE settings (
  key TEXT PRIMARY KEY,
  value TEXT
);

-- 5. Create password verification RPC function
CREATE OR REPLACE FUNCTION verify_admin_password(input_hash TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM settings 
    WHERE key = 'admin_password_hash' AND value = input_hash
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Insert Default Settings
-- Default admin password is 'luna2026'
-- Hashed (SHA-256) value of 'luna2026' is: b35ce111fab10d7303a0bbc4ebde88646f157e8863cbf14a42f3e7c9c2c9c43c
INSERT INTO settings (key, value) VALUES
  ('admin_password_hash', 'b35ce111fab10d7303a0bbc4ebde88646f157e8863cbf14a42f3e7c9c2c9c43c'),
  ('wifi_name', 'Coffee Luna'),
  ('wifi_pass', 'Luna2002'),
  ('shop_name', 'Luna Coffee Shop'),
  ('address', 'Ganja, Azerbaijan'),
  ('instagram_url', 'https://www.instagram.com/lunacafeshop.gence'),
  ('tiktok_url', 'https://www.tiktok.com/@lunacafeshop.gence');

-- 7. Seed Initial Categories
INSERT INTO categories (name, sort_order) VALUES
  ('SETLER', 0),
  ('Hot Coffees', 1),
  ('Cold Coffees', 2),
  ('Frappe / Cream Frappe', 3),
  ('Frozen', 4),
  ('Milk Shake', 5),
  ('Mohito', 6),
  ('Ice-Tea', 7),
  ('Smoothie', 8),
  ('Limonad', 9),
  ('Kokteyl', 10),
  ('Çay Çeşidleri', 11),
  ('Desertlər', 12),
  ('Ice-Cream', 13),
  ('Salatlar Çeşidleri', 14),
  ('Tost Çeşidleri', 15),
  ('Soyuq İçecekler', 16),
  ('EKSTRA', 17);

-- 8. Seed Initial Products & Modifications

-- SETLER
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'SETLER';

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Tatlı Tabağı Seti', 'Assorted dessert platter set', 21.00, 0);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Saatlik Teklifler', 'Hourly combo specials', NULL, 1)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'Carrot Cake + Salted Caramel Macchiato 11.00 - 14.30', 9.50),
    (prod_id, 'Caramel Cheescake + Fresh Mocha 14.00 - 17.30', 9.50),
    (prod_id, 'Chocolate San Sebastian + Fresh Chai Tea 17.00 - 20.30', 9.50);
END $$;

-- Hot Coffees
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Hot Coffees';

  -- Espresso
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Espresso', 'Rich, concentrated shot of espresso', NULL, 0)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'Single', 2.50),
    (prod_id, 'Double', 3.50);

  -- Cortado
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Cortado', 'Espresso cut with a small amount of warm milk', 4.50, 1);

  -- Americano
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Americano', 'Espresso shot topped with hot water', NULL, 2)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 3.00),
    (prod_id, 'M', 4.00);

  -- Südlü Americano
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Südlü Americano', 'Americano served with milk', NULL, 3)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.50),
    (prod_id, 'M', 5.50);

  -- Espresso Macchiato
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Espresso Macchiato', 'Espresso marked with a dollop of foam', NULL, 4)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'Single', 2.50),
    (prod_id, 'Double', 3.50);

  -- Flat White
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Flat White', 'Espresso with velvet microfoam milk', NULL, 5)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.50),
    (prod_id, 'M', 5.50);

  -- Latte
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Latte', 'Classic espresso and steamed milk', NULL, 6)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.50),
    (prod_id, 'M', 5.50),
    (prod_id, 'L', 6.50);

  -- Luna Latte
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Luna Latte', 'Luna signature latte recipe', NULL, 7)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 5.50),
    (prod_id, 'M', 6.50),
    (prod_id, 'L', 7.50);

  -- Cappucino
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Cappucino', 'Espresso, steamed milk, and heavy foam layer', NULL, 8)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 3.90),
    (prod_id, 'M', 4.90),
    (prod_id, 'L', 5.90);

  -- Caramel Macchiato
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Caramel Macchiato', 'Espresso with vanilla syrup, milk, and caramel drizzle', NULL, 9)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.90),
    (prod_id, 'M', 5.90),
    (prod_id, 'L', 6.90);

  -- Salt Caramel Macchiato
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Salt Caramel Macchiato', 'Salted caramel flavoured macchiato', NULL, 10)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.90),
    (prod_id, 'M', 5.90),
    (prod_id, 'L', 6.90);

  -- Coconut Latte
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Coconut Latte', 'Latte flavoured with sweet coconut', NULL, 11)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.90),
    (prod_id, 'M', 5.90),
    (prod_id, 'L', 6.90);

  -- Chai Tea Latte
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Chai Tea Latte', 'Spiced chai tea concentrate with steamed milk', NULL, 12)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.50),
    (prod_id, 'M', 5.50),
    (prod_id, 'L', 6.50);

  -- Fresh Tea Latte
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Fresh Tea Latte', 'Brewed fresh tea latte blend', NULL, 13)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 5.00),
    (prod_id, 'M', 6.00),
    (prod_id, 'L', 7.00);

  -- Coffee Mocha
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Coffee Mocha', 'Espresso with rich chocolate sauce and milk', NULL, 14)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.50),
    (prod_id, 'M', 5.50),
    (prod_id, 'L', 6.50);

  -- White Chocolate Mocha
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'White Chocolate Mocha', 'Mocha made with white chocolate sauce', NULL, 15)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.50),
    (prod_id, 'M', 5.50),
    (prod_id, 'L', 6.50);

  -- Fresh Mocha
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Fresh Mocha', 'Premium mocha served fresh', NULL, 16)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.90),
    (prod_id, 'M', 5.90),
    (prod_id, 'L', 6.90);

  -- Fındıklı Mocha
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Fındıklı Mocha', 'Hazelnut infused chocolate mocha', NULL, 17)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.90),
    (prod_id, 'M', 5.90),
    (prod_id, 'L', 6.90);

  -- Happy Mocha
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Happy Mocha', 'Luna special recipe mocha', NULL, 18)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'S', 4.90),
    (prod_id, 'M', 5.90),
    (prod_id, 'L', 6.90);

  -- Raff
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Raff', 'Smooth espresso cream drink', NULL, 19)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 5.00),
    (prod_id, 'L', 5.50);

  -- Türk Kahvesi
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Türk Kahvesi', 'Traditional Turkish ground coffee', 3.00, 20);

  -- Hot Chocolate
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Hot Chocolate', 'Rich chocolate cocoa with steamed milk', NULL, 21)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'Classic Hot Chocolate', 3.00),
    (prod_id, 'White Hot Chocolate', 4.00),
    (prod_id, 'Luna Special', 4.00),
    (prod_id, 'Cherry Siroplu', 4.00),
    (prod_id, 'Salted Caramel Siroplu', 4.00);
END $$;

-- Cold Coffees
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Cold Coffees';

  -- İce Coffee Americano
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'İce Coffee Americano', 'Chilled espresso over ice', NULL, 0)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 3.50),
    (prod_id, 'L', 4.50);

  -- İce Südlü Americano
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'İce Südlü Americano', 'Iced Americano served with milk', NULL, 1)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 4.00),
    (prod_id, 'L', 5.00);

  -- İce Cappucino
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'İce Cappucino', 'Iced espresso with frothy cold milk', NULL, 2)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 4.90),
    (prod_id, 'L', 5.90);

  -- İce Latte
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'İce Latte', 'Chilled espresso with cold milk over ice', NULL, 3)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 5.50),
    (prod_id, 'L', 6.50);

  -- Iced Chai Tea Latte
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Iced Chai Tea Latte', 'Chilled spiced chai with cold milk', NULL, 4)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 5.50),
    (prod_id, 'L', 6.50);

  -- Iced Fresh Tea Latte
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Iced Fresh Tea Latte', 'Chilled brewed tea latte over ice', NULL, 5)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 6.00),
    (prod_id, 'L', 7.00);

  -- İce Coffee Mocha
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'İce Coffee Mocha', 'Iced espresso with chocolate sauce and milk', NULL, 6)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 5.50),
    (prod_id, 'L', 6.50);

  -- İce White Mocha
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'İce White Mocha', 'Iced white chocolate espresso mocha', NULL, 7)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'M', 5.50),
    (prod_id, 'L', 6.50);
END $$;

-- Frappe / Cream Frappe
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Frappe / Cream Frappe';

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Bananlı Krem Frappe', 'Banana flavoured cream frappe', NULL, 0)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.00), (prod_id, 'L', 5.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Caramel Krem Frappe', 'Caramel flavoured cream frappe', NULL, 1)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.00), (prod_id, 'L', 5.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Çiyələkli Krem Frappe', 'Strawberry flavoured cream frappe', NULL, 2)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.00), (prod_id, 'L', 5.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Vanili Krem Frappe', 'Vanilla flavoured cream frappe', NULL, 3)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.00), (prod_id, 'L', 5.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Caramel Frappe', 'Caramel coffee frappe blend', NULL, 4)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.50), (prod_id, 'L', 6.50);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Chocolate Frappe', 'Chocolate coffee frappe blend', NULL, 5)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.50), (prod_id, 'L', 6.50);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Coconut Frappe', 'Coconut coffee frappe blend', NULL, 6)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.50), (prod_id, 'L', 6.50);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Espresso Frappe', 'Bold espresso blended coffee drink', NULL, 7)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.50), (prod_id, 'L', 6.50);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Mocha Frappe', 'Chocolate espresso blended coffee drink', NULL, 8)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.50), (prod_id, 'L', 6.50);
END $$;

-- Frozen
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Frozen';

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Çiyələkli Frozen', 'Blended frozen strawberry slush', NULL, 0)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Fresh Frozen', 'Blended frozen fresh fruit slush', NULL, 1)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Lime Frozen', 'Blended frozen lime slush', NULL, 2)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Malina Frozen', 'Blended frozen raspberry slush', NULL, 3)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Mango Frozen', 'Blended frozen mango slush', NULL, 4)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Qarağatlı Frozen', 'Blended frozen blackcurrant slush', NULL, 5)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Şaftalı Frozen', 'Blended frozen peach slush', NULL, 6)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Special Çiyələkli Frozen', 'Special strawberry recipe frozen drink', NULL, 7)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.50), (prod_id, 'L', 6.50);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Special Mango Frozen', 'Special mango recipe frozen drink', NULL, 8)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.50), (prod_id, 'L', 6.50);
END $$;

-- Milk Shake
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Milk Shake';

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Coffe Milkshake', 'Creamy espresso milkshake', NULL, 0)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Bananlı Milkshake', 'Creamy banana milkshake', NULL, 1)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.50), (prod_id, 'L', 5.50);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Çiyələkli Milkshake', 'Creamy strawberry milkshake', NULL, 2)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.50), (prod_id, 'L', 5.50);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Malinalı Milkshake', 'Creamy raspberry milkshake', NULL, 3)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.50), (prod_id, 'L', 5.50);

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Şokoladlı Milkshake', 'Creamy classic chocolate milkshake', NULL, 4, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/5def41d5-9462-426d-842a-3dc0b60d24d3-image.jpeg')
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.50), (prod_id, 'L', 5.50);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Vanilli Milkshake', 'Creamy sweet vanilla milkshake', NULL, 5)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.50), (prod_id, 'L', 5.50);
END $$;

-- Mohito
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Mohito';

  INSERT INTO products (category_id, name, description, price, sort_order) VALUES
    (cat_id, 'Classic Mohito', 'Lime, mint, sugar, soda, and ice', 4.50, 0),
    (cat_id, 'Seçimli Mohito', 'Choose your syrup flavour mojito', 5.50, 1),
    (cat_id, 'Special Mohito', 'Luna signature recipe mojito', 6.00, 2),
    (cat_id, 'Çiyələkli Mohito', 'Strawberry mojito with mint and lime', 5.00, 3),
    (cat_id, 'Şaftalı Mohito', 'Peach mojito with mint and lime', 5.00, 4),
    (cat_id, 'Qarpızlı Mohito', 'Watermelon mojito with mint and lime', 5.00, 5),
    (cat_id, 'Malina Mohito', 'Raspberry mojito with mint and lime', 5.00, 6);
END $$;

-- Ice-Tea
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Ice-Tea';

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Şaftalı - Mango Ice Tea', 'Peach and mango iced tea blend', NULL, 0)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Çiyələkli İce Tea', 'Strawberry flavoured iced tea', NULL, 1)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.00), (prod_id, 'L', 5.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Limelı Ice Tea', 'Lime flavoured iced tea', NULL, 2)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.00), (prod_id, 'L', 5.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Qarpızlı Ice Tea', 'Watermelon flavoured iced tea', NULL, 3)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.00), (prod_id, 'L', 5.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Şaftalı Ice Tea', 'Classic peach iced tea', NULL, 4)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 4.00), (prod_id, 'L', 5.00);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Luna Ice Tea', 'Luna signature recipe iced tea', NULL, 5)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'M', 5.00), (prod_id, 'L', 6.00);
END $$;

-- Smoothie
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Smoothie';

  INSERT INTO products (category_id, name, description, price, sort_order) VALUES
    (cat_id, 'Bananlı Smoothie', 'Blended banana smoothie drink', 4.50, 0),
    (cat_id, 'Canlandıran Smoothie - Coffeeli', 'Energizing coffee banana smoothie', 5.00, 1),
    (cat_id, 'Şokolad Smoothie', 'Blended chocolate dessert smoothie', 5.00, 2),
    (cat_id, 'Malina-Çiyelek Smoothie', 'Blended raspberry and strawberry smoothie', 5.50, 3);
END $$;

-- Limonad
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Limonad';

  INSERT INTO products (category_id, name, description, price, sort_order) VALUES
    (cat_id, 'Fresh Limonad', 'Freshly squeezed classic lemonade', 3.50, 0);
END $$;

-- Kokteyl
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Kokteyl';

  INSERT INTO products (category_id, name, description, price, sort_order) VALUES
    (cat_id, 'Bloody Candy', 'Sweet mocktail recipe', 4.00, 0),
    (cat_id, 'Blue Dream', 'Sweet curacao mocktail', 4.20, 1),
    (cat_id, 'Mango Cream', 'Creamy mango mocktail', 4.40, 2),
    (cat_id, 'Sunset Ice Tea', 'Balanced sunset iced tea cocktail', 4.00, 3),
    (cat_id, 'Berry Ice Tea', 'Balanced berry iced tea cocktail', 4.20, 4),
    (cat_id, 'Tropical Banan', 'Balanced banana mocktail', 4.20, 5),
    (cat_id, 'Qarpızlı Fresh', 'Fresh watermelon cocktail drink', 4.00, 6),
    (cat_id, 'Citrus Fresh', 'Fresh citrus blend cocktail drink', 4.00, 7),
    (cat_id, 'Mango Fresh', 'Fresh mango cocktail drink', 4.20, 8);
END $$;

-- Çay Çeşidleri
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Çay Çeşidleri';

  -- Sadə çay
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Sadə çay', 'Classic black tea', NULL, 0)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'Fincan', 2.00),
    (prod_id, 'Küçük Demlik', 4.00),
    (prod_id, 'Büyük Demlik', 6.00);

  -- Keklik Otu
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Keklik Otu', 'Wild thyme herbal tea', NULL, 1)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Ihlamur çayı
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Ihlamur çayı', 'Linden flower herbal tea', NULL, 2)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Hibiskus çayı
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Hibiskus çayı', 'Hibiscus herbal tea', NULL, 3)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Lavanta çayı
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Lavanta çayı', 'Lavender herbal tea', NULL, 4)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.50), (prod_id, 'Büyük Demlik', 6.50);

  -- Blue Butterfly Çay
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Blue Butterfly Çay', 'Blue butterfly pea flower tea', NULL, 5)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Luna çayı
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Luna çayı', 'Luna signature herbal blend tea', NULL, 6)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 5.50), (prod_id, 'Büyük Demlik', 7.50);

  -- Yaşıl çay
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Yaşıl çay', 'Classic green tea', NULL, 7)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Melisa çayı
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Melisa çayı', 'Lemon balm herbal tea', NULL, 8)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Papatya Çayı
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Papatya Çayı', 'Chamomile herbal tea', NULL, 9)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Darçın Çayı
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Darçın Çayı', 'Cinnamon spiced tea', NULL, 10)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Rezene Çayı
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Rezene Çayı', 'Fennel seed herbal tea', NULL, 11)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Küçük Demlik', 4.00), (prod_id, 'Büyük Demlik', 6.00);

  -- Qarışıq( istediğiniz )
  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Qarışıq( istediğiniz )', 'Custom herbal tea mixture', NULL, 12)
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES (prod_id, 'Böyük Demlik', 8.00);
END $$;

-- Desertlər
DO $$
DECLARE
  cat_id UUID;
  prod_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Desertlər';

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Islak Kek', 'Moist chocolate cake with chocolate glaze', 4.00, 0);

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Markoflu - Darçınlı Tort Dilimi', 'Carrot cinnamon cake slice', 4.00, 1, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/22f239ce-f117-4559-bafe-b9d5740ae03a-image.png');

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Sütlaç', 'Turkish baked rice pudding', 4.00, 2, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/7336ec10-a892-4918-912b-0a575ca263c2-image.png');

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Tiramisu', 'Espresso-soaked ladyfingers with mascarpone', 4.50, 3, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/96d89b64-ea3d-4f27-8398-cebb8b88dffe-image.jpeg');

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Malaga', 'Banana custard cake coated with chocolate', 4.50, 4, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/03baa208-9062-4d09-a831-1de124ecc96d-image.jpeg');

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Magnolia', 'Creamy pudding with biscuits and fruit slices', 4.50, 5, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/39261e8f-a5d7-4881-8232-ee87872c5e51-image.jpeg');

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Midnight', 'Luna signature dark chocolate cake', 4.90, 6, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/f4c2de78-a373-41ab-b219-cef8da43171d-image.jpeg');

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Cheescake', 'Rich and creamy cheesecake slice', NULL, 7, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/c4e0db56-d64c-4a02-9fe1-55d8b79a1795-image.jpeg')
  RETURNING id INTO prod_id;
  INSERT INTO modifications (product_id, name, price) VALUES
    (prod_id, 'Malinalı', 4.90),
    (prod_id, 'Oreo', 4.90),
    (prod_id, 'Karamelli', 4.90);

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'San Sebastian', 'Basque burnt cheesecake slice', 5.00, 8, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/ad686d97-a19c-416a-be05-ad8c2774b3cc-image.jpeg');

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url)
  VALUES (cat_id, 'Kakaolu San Sebastian', 'Cocoa infused burnt cheesecake slice', 5.50, 9, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/57830002-04db-4c19-a13d-96309ba0f6b8-image.jpeg');

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Blinçik Tortu', 'Crepe cake layers with sweet cream', 5.50, 10);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Türk Baklavası', 'Traditional flaky Turkish baklava piece', 0.70, 11);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Şokoladlı Türk Baklavası', 'Chocolate infused baklava piece', 0.90, 12);

  INSERT INTO products (category_id, name, description, price, sort_order)
  VALUES (cat_id, 'Tiramit', 'Tiramisu cake pyramid slice', 4.90, 13);
END $$;

-- Ice-Cream
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Ice-Cream';

  INSERT INTO products (category_id, name, description, price, sort_order) VALUES
    (cat_id, 'Kakao', 'Rich cocoa ice cream scoop', 1.50, 0),
    (cat_id, 'Banan', 'Sweet banana ice cream scoop', 1.50, 1),
    (cat_id, 'Çiyələk', 'Fresh strawberry ice cream scoop', 1.50, 2),
    (cat_id, 'Limon', 'Zesty lemon ice cream scoop', 1.50, 3),
    (cat_id, 'Vanil', 'Classic vanilla ice cream scoop', 1.50, 4),
    (cat_id, 'Karamel', 'Sweet caramel ice cream scoop', 1.50, 5);
END $$;

-- Salatlar Çeşidleri
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Salatlar Çeşidleri';

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url) VALUES
    (cat_id, 'Sezar salatı', 'Classic Caesar salad with chicken and croutons', 4.50, 0, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/8f2e7c4f-b975-4ab9-a56a-090da4d74c8f-image.jpeg'),
    (cat_id, 'Toyuq salatı', 'Chicken salad with fresh vegetables', 4.00, 1, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/328b2d64-6d60-4523-873c-faacb831119a-image.jpeg'),
    (cat_id, 'Luna salatı', 'Luna signature chef salad recipe', 5.00, 2, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/f896145e-8f42-4c8c-9bdc-7be0c9f7416f-image.jpeg');
END $$;

-- Tost Çeşidleri
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Tost Çeşidleri';

  INSERT INTO products (category_id, name, description, price, sort_order, photo_url) VALUES
    (cat_id, 'Qarışıq Tost', 'Mixed toasted sandwich with cheese and sausage', 4.00, 0, 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/96701d6b-ceba-4126-9f52-4999511b1751-image.jpeg'),
    (cat_id, 'Sucuklu Tost', 'Toasted sandwich with Turkish beef sausage and cheese', 3.50, 1, NULL),
    (cat_id, 'Kaşarlı Tost', 'Classic toasted sandwich with kashar cheese', 3.00, 2, NULL);
END $$;

-- Soyuq İçecekler
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'Soyuq İçecekler';

  INSERT INTO products (category_id, name, description, price, sort_order) VALUES
    (cat_id, 'Su', 'Still spring water', 1.00, 0),
    (cat_id, 'Qazlı Su', 'Sparkling mineral water', 1.50, 1),
    (cat_id, 'Cola', 'Coca-Cola classic', 1.50, 2),
    (cat_id, 'Meyve Soku', 'Fruit juice box', 1.00, 3),
    (cat_id, 'Fanta', 'Fanta orange', 2.00, 4),
    (cat_id, 'Fuse-Tea', 'Fuse iced tea can', 2.00, 5);
END $$;

-- EKSTRA
DO $$
DECLARE
  cat_id UUID;
BEGIN
  SELECT id INTO cat_id FROM categories WHERE name = 'EKSTRA';

  INSERT INTO products (category_id, name, description, price, sort_order) VALUES
    (cat_id, 'Sirop', 'Extra syrup shot', 1.00, 0),
    (cat_id, 'Double Coffee', 'Extra espresso shot add-on', 1.00, 1),
    (cat_id, 'Kivi-Banan Smoothie', 'Premium kiwi and banana blended smoothie', 6.50, 2);
END $$;

-- ====================================================
-- MULTI-LANGUAGE TRANSLATION COLUMNS (AZ, EN, RU)
-- ====================================================

-- 1. Add translation columns to categories
ALTER TABLE categories ADD COLUMN IF NOT EXISTS name_en TEXT;
ALTER TABLE categories ADD COLUMN IF NOT EXISTS name_ru TEXT;

-- 2. Add translation columns to products
ALTER TABLE products ADD COLUMN IF NOT EXISTS name_en TEXT;
ALTER TABLE products ADD COLUMN IF NOT EXISTS name_ru TEXT;
ALTER TABLE products ADD COLUMN IF NOT EXISTS description_en TEXT;
ALTER TABLE products ADD COLUMN IF NOT EXISTS description_ru TEXT;

-- 3. Add translation columns to modifications (Sizes & Options)
ALTER TABLE modifications ADD COLUMN IF NOT EXISTS name_en TEXT;
ALTER TABLE modifications ADD COLUMN IF NOT EXISTS name_ru TEXT;

-- 4. Seed translation labels for initial categories
UPDATE categories SET name_en = 'SETS', name_ru = 'СЕТЫ' WHERE name = 'SETLER';
UPDATE categories SET name_en = 'Hot Coffees', name_ru = 'Горячий Кофе' WHERE name = 'Hot Coffees';
UPDATE categories SET name_en = 'Cold Coffees', name_ru = 'Холодный Кофе' WHERE name = 'Cold Coffees';
UPDATE categories SET name_en = 'Frappe / Cream Frappe', name_ru = 'Фраппе' WHERE name = 'Frappe / Cream Frappe';
UPDATE categories SET name_en = 'Frozen', name_ru = 'Фрозен' WHERE name = 'Frozen';
UPDATE categories SET name_en = 'Milk Shake', name_ru = 'Милкшейк' WHERE name = 'Milk Shake';
UPDATE categories SET name_en = 'Mojito', name_ru = 'Мохито' WHERE name = 'Mohito';
UPDATE categories SET name_en = 'Ice Tea', name_ru = 'Айс-ти' WHERE name = 'Ice-Tea';
UPDATE categories SET name_en = 'Smoothie', name_ru = 'Смузи' WHERE name = 'Smoothie';
UPDATE categories SET name_en = 'Lemonade', name_ru = 'Лимонад' WHERE name = 'Limonad';
UPDATE categories SET name_en = 'Cocktails', name_ru = 'Коктейли' WHERE name = 'Kokteyl';
UPDATE categories SET name_en = 'Teas', name_ru = 'Чайный Ассортимент' WHERE name = 'Çay Çeşidleri';
UPDATE categories SET name_en = 'Desserts', name_ru = 'Десерты' WHERE name = 'Desertlər';
UPDATE categories SET name_en = 'Ice Cream', name_ru = 'Мороженое' WHERE name = 'Ice-Cream';
UPDATE categories SET name_en = 'Salads', name_ru = 'Салаты' WHERE name = 'Salatlar Çeşidleri';
UPDATE categories SET name_en = 'Toasts', name_ru = 'Тосты' WHERE name = 'Tost Çeşidleri';
UPDATE categories SET name_en = 'Cold Drinks', name_ru = 'Холодные Напитки' WHERE name = 'Soyuq İçecekler';
UPDATE categories SET name_en = 'EXTRAS', name_ru = 'ЭКСТРА' WHERE name = 'EKSTRA';

