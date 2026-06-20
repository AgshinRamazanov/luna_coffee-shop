// Complete Seed and Mock Data for Luna Coffee Shop - V4

export const INITIAL_CATEGORIES = [
  { id: 'cat-setler', name: 'SETLER', name_en: 'SETS', name_ru: 'СЕТЫ', sort_order: 0 },
  { id: 'cat-hot-coffees', name: 'Hot Coffees', name_en: 'Hot Coffees', name_ru: 'Горячий Кофе', sort_order: 1 },
  { id: 'cat-cold-coffees', name: 'Cold Coffees', name_en: 'Cold Coffees', name_ru: 'Холодный Кофе', sort_order: 2 },
  { id: 'cat-frappe', name: 'Frappe / Cream Frappe', name_en: 'Frappe / Cream Frappe', name_ru: 'Фраппе', sort_order: 3 },
  { id: 'cat-frozen', name: 'Frozen', name_en: 'Frozen', name_ru: 'Фрозен', sort_order: 4 },
  { id: 'cat-milkshake', name: 'Milk Shake', name_en: 'Milk Shake', name_ru: 'Милкшейк', sort_order: 5 },
  { id: 'cat-mohito', name: 'Mohito', name_en: 'Mojito', name_ru: 'Мохито', sort_order: 6 },
  { id: 'cat-icetea', name: 'Ice-Tea', name_en: 'Ice Tea', name_ru: 'Айс-ти', sort_order: 7 },
  { id: 'cat-smoothie', name: 'Smoothie', name_en: 'Smoothie', name_ru: 'Смузи', sort_order: 8 },
  { id: 'cat-limonad', name: 'Limonad', name_en: 'Lemonade', name_ru: 'Лимонад', sort_order: 9 },
  { id: 'cat-kokteyl', name: 'Kokteyl', name_en: 'Cocktails', name_ru: 'Коктейли', sort_order: 10 },
  { id: 'cat-cay', name: 'Çay Çeşidleri', name_en: 'Teas', name_ru: 'Чайный Ассортимент', sort_order: 11 },
  { id: 'cat-deserts', name: 'Desertlər', name_en: 'Desserts', name_ru: 'Десерты', sort_order: 12 },
  { id: 'cat-icecream', name: 'Ice-Cream', name_en: 'Ice Cream', name_ru: 'Мороженое', sort_order: 13 },
  { id: 'cat-salads', name: 'Salatlar Çeşidleri', name_en: 'Salads', name_ru: 'Салаты', sort_order: 14 },
  { id: 'cat-toasts', name: 'Tost Çeşidleri', name_en: 'Toasts', name_ru: 'Тосты', sort_order: 15 },
  { id: 'cat-soyuq', name: 'Soyuq İçecekler', name_en: 'Cold Drinks', name_ru: 'Холодные Напитки', sort_order: 16 },
  { id: 'cat-ekstra', name: 'EKSTRA', name_en: 'EXTRAS', name_ru: 'ЭКСТРА', sort_order: 17 }
];

export const INITIAL_PRODUCTS = [
  // SETLER
  { id: 'set-tatli', category_id: 'cat-setler', name: 'Tatlı Tabağı Seti', name_en: 'Dessert Platter Set', name_ru: 'Десертное Ассорти', description: 'Assorted dessert platter set', description_en: 'Assorted dessert platter set', description_ru: 'Ассорти из различных десертов', price: 21.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'set-saatlik', category_id: 'cat-setler', name: 'Saatlik Teklifler', name_en: 'Hourly Combo Specials', name_ru: 'Почасовые Комбо', description: 'Hourly combo specials', description_en: 'Hourly combo specials', description_ru: 'Специальные почасовые комбо-предложения', price: null, photo_url: null, is_available: true, sort_order: 1 },

  // Hot Coffees
  { id: 'hot-espresso', category_id: 'cat-hot-coffees', name: 'Espresso', name_en: 'Espresso', name_ru: 'Эспрессо', description: 'Rich, concentrated shot of espresso', description_en: 'Rich, concentrated shot of espresso', description_ru: 'Крепкий концентрированный кофе эспрессо', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'hot-cortado', category_id: 'cat-hot-coffees', name: 'Cortado', name_en: 'Cortado', name_ru: 'Кортадо', description: 'Espresso cut with a small amount of warm milk', description_en: 'Espresso cut with a small amount of warm milk', description_ru: 'Эспрессо с небольшим количеством теплого молока', price: 4.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'hot-americano', category_id: 'cat-hot-coffees', name: 'Americano', name_en: 'Americano', name_ru: 'Американо', description: 'Espresso shot topped with hot water', description_en: 'Espresso shot topped with hot water', description_ru: 'Порция эспрессо с горячей водой', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'hot-sudlu-americano', category_id: 'cat-hot-coffees', name: 'Südlü Americano', name_en: 'Americano with Milk', name_ru: 'Американо с Молоком', description: 'Americano served with milk', description_en: 'Americano served with milk', description_ru: 'Американо с добавлением свежего молока', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'hot-espresso-macchiato', category_id: 'cat-hot-coffees', name: 'Espresso Macchiato', name_en: 'Espresso Macchiato', name_ru: 'Эспрессо Макиато', description: 'Espresso marked with a dollop of foam', description_en: 'Espresso marked with a dollop of foam', description_ru: 'Эспрессо с каплей молочной пены', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'hot-flat-white', category_id: 'cat-hot-coffees', name: 'Flat White', name_en: 'Flat White', name_ru: 'Флэт Уайт', description: 'Espresso with velvet microfoam milk', description_en: 'Espresso with velvet microfoam milk', description_ru: 'Эспрессо с бархатистой микропеной молока', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'hot-latte', category_id: 'cat-hot-coffees', name: 'Latte', description: 'Classic espresso and steamed milk', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'hot-luna-latte', category_id: 'cat-hot-coffees', name: 'Luna Latte', description: 'Luna signature latte recipe', price: null, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'hot-cappucino', category_id: 'cat-hot-coffees', name: 'Cappucino', description: 'Espresso, steamed milk, and heavy foam layer', price: null, photo_url: null, is_available: true, sort_order: 8 },
  { id: 'hot-caramel-macchiato', category_id: 'cat-hot-coffees', name: 'Caramel Macchiato', description: 'Espresso with vanilla syrup, milk, and caramel drizzle', price: null, photo_url: null, is_available: true, sort_order: 9 },
  { id: 'hot-salt-caramel-macchiato', category_id: 'cat-hot-coffees', name: 'Salt Caramel Macchiato', description: 'Salted caramel flavoured macchiato', price: null, photo_url: null, is_available: true, sort_order: 10 },
  { id: 'hot-coconut-latte', category_id: 'cat-hot-coffees', name: 'Coconut Latte', description: 'Latte flavoured with sweet coconut', price: null, photo_url: null, is_available: true, sort_order: 11 },
  { id: 'hot-chai-tea-latte', category_id: 'cat-hot-coffees', name: 'Chai Tea Latte', description: 'Spiced chai tea concentrate with steamed milk', price: null, photo_url: null, is_available: true, sort_order: 12 },
  { id: 'hot-fresh-tea-latte', category_id: 'cat-hot-coffees', name: 'Fresh Tea Latte', description: 'Brewed fresh tea latte blend', price: null, photo_url: null, is_available: true, sort_order: 13 },
  { id: 'hot-coffee-mocha', category_id: 'cat-hot-coffees', name: 'Coffee Mocha', description: 'Espresso with rich chocolate sauce and milk', price: null, photo_url: null, is_available: true, sort_order: 14 },
  { id: 'hot-white-chocolate-mocha', category_id: 'cat-hot-coffees', name: 'White Chocolate Mocha', description: 'Mocha made with white chocolate sauce', price: null, photo_url: null, is_available: true, sort_order: 15 },
  { id: 'hot-fresh-mocha', category_id: 'cat-hot-coffees', name: 'Fresh Mocha', description: 'Premium mocha served fresh', price: null, photo_url: null, is_available: true, sort_order: 16 },
  { id: 'hot-findikli-mocha', category_id: 'cat-hot-coffees', name: 'Fındıklı Mocha', description: 'Hazelnut infused chocolate mocha', price: null, photo_url: null, is_available: true, sort_order: 17 },
  { id: 'hot-happy-mocha', category_id: 'cat-hot-coffees', name: 'Happy Mocha', description: 'Luna special recipe mocha', price: null, photo_url: null, is_available: true, sort_order: 18 },
  { id: 'hot-raff', category_id: 'cat-hot-coffees', name: 'Raff', description: 'Smooth espresso cream drink', price: null, photo_url: null, is_available: true, sort_order: 19 },
  { id: 'hot-turk-kahvesi', category_id: 'cat-hot-coffees', name: 'Türk Kahvesi', description: 'Traditional Turkish ground coffee', price: 3.00, photo_url: null, is_available: true, sort_order: 20 },
  { id: 'hot-hot-chocolate', category_id: 'cat-hot-coffees', name: 'Hot Chocolate', description: 'Rich chocolate cocoa with steamed milk', price: null, photo_url: null, is_available: true, sort_order: 21 },

  // Cold Coffees
  { id: 'cold-americano', category_id: 'cat-cold-coffees', name: 'İce Coffee Americano', description: 'Chilled espresso over ice', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'cold-sudlu-americano', category_id: 'cat-cold-coffees', name: 'İce Südlü Americano', description: 'Iced Americano served with milk', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'cold-cappucino', category_id: 'cat-cold-coffees', name: 'İce Cappucino', description: 'Iced espresso with frothy cold milk', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'cold-latte', category_id: 'cat-cold-coffees', name: 'İce Latte', description: 'Chilled espresso with cold milk over ice', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'cold-iced-chai-latte', category_id: 'cat-cold-coffees', name: 'Iced Chai Tea Latte', description: 'Chilled spiced chai with cold milk', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'cold-iced-fresh-tea-latte', category_id: 'cat-cold-coffees', name: 'Iced Fresh Tea Latte', description: 'Chilled brewed tea latte over ice', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'cold-coffee-mocha', category_id: 'cat-cold-coffees', name: 'İce Coffee Mocha', description: 'Iced espresso with chocolate sauce and milk', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'cold-white-mocha', category_id: 'cat-cold-coffees', name: 'İce White Mocha', description: 'Iced white chocolate espresso mocha', price: null, photo_url: null, is_available: true, sort_order: 7 },

  // Frappe / Cream Frappe
  { id: 'frappe-banana', category_id: 'cat-frappe', name: 'Bananlı Krem Frappe', description: 'Banana flavoured cream frappe', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'frappe-caramel-cream', category_id: 'cat-frappe', name: 'Caramel Krem Frappe', description: 'Caramel flavoured cream frappe', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'frappe-strawberry-cream', category_id: 'cat-frappe', name: 'Çiyələkli Krem Frappe', description: 'Strawberry flavoured cream frappe', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'frappe-vanilla-cream', category_id: 'cat-frappe', name: 'Vanili Krem Frappe', description: 'Vanilla flavoured cream frappe', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'frappe-caramel', category_id: 'cat-frappe', name: 'Caramel Frappe', description: 'Caramel coffee frappe blend', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'frappe-chocolate', category_id: 'cat-frappe', name: 'Chocolate Frappe', description: 'Chocolate coffee frappe blend', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'frappe-coconut', category_id: 'cat-frappe', name: 'Coconut Frappe', description: 'Coconut coffee frappe blend', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'frappe-espresso', category_id: 'cat-frappe', name: 'Espresso Frappe', description: 'Bold espresso blended coffee drink', price: null, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'frappe-mocha', category_id: 'cat-frappe', name: 'Mocha Frappe', description: 'Chocolate espresso blended coffee drink', price: null, photo_url: null, is_available: true, sort_order: 8 },

  // Frozen
  { id: 'frozen-strawberry', category_id: 'cat-frozen', name: 'Çiyələkli Frozen', description: 'Blended frozen strawberry slush', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'frozen-fresh', category_id: 'cat-frozen', name: 'Fresh Frozen', description: 'Blended frozen fresh fruit slush', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'frozen-lime', category_id: 'cat-frozen', name: 'Lime Frozen', description: 'Blended frozen lime slush', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'frozen-raspberry', category_id: 'cat-frozen', name: 'Malina Frozen', description: 'Blended frozen raspberry slush', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'frozen-mango', category_id: 'cat-frozen', name: 'Mango Frozen', description: 'Blended frozen mango slush', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'frozen-currant', category_id: 'cat-frozen', name: 'Qarağatlı Frozen', description: 'Blended frozen blackcurrant slush', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'frozen-peach', category_id: 'cat-frozen', name: 'Şaftalı Frozen', description: 'Blended frozen peach slush', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'frozen-special-strawberry', category_id: 'cat-frozen', name: 'Special Çiyələkli Frozen', description: 'Special strawberry recipe frozen drink', price: null, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'frozen-special-mango', category_id: 'cat-frozen', name: 'Special Mango Frozen', description: 'Special mango recipe frozen drink', price: null, photo_url: null, is_available: true, sort_order: 8 },

  // Milk Shake
  { id: 'milkshake-coffee', category_id: 'cat-milkshake', name: 'Coffe Milkshake', description: 'Creamy espresso milkshake', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'milkshake-banana', category_id: 'cat-milkshake', name: 'Bananlı Milkshake', description: 'Creamy banana milkshake', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'milkshake-strawberry', category_id: 'cat-milkshake', name: 'Çiyələkli Milkshake', description: 'Creamy strawberry milkshake', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'milkshake-raspberry', category_id: 'cat-milkshake', name: 'Malinalı Milkshake', description: 'Creamy raspberry milkshake', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'milkshake-chocolate', category_id: 'cat-milkshake', name: 'Şokoladlı Milkshake', description: 'Creamy classic chocolate milkshake', price: null, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/5def41d5-9462-426d-842a-3dc0b60d24d3-image.jpeg', is_available: true, sort_order: 4 },
  { id: 'milkshake-vanilla', category_id: 'cat-milkshake', name: 'Vanilli Milkshake', description: 'Creamy sweet vanilla milkshake', price: null, photo_url: null, is_available: true, sort_order: 5 },

  // Mohito
  { id: 'mohito-classic', category_id: 'cat-mohito', name: 'Classic Mohito', description: 'Lime, mint, sugar, soda, and ice', price: 4.50, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'mohito-secimli', category_id: 'cat-mohito', name: 'Seçimli Mohito', description: 'Choose your syrup flavour mojito', price: 5.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'mohito-special', category_id: 'cat-mohito', name: 'Special Mohito', description: 'Luna signature recipe mojito', price: 6.00, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'mohito-strawberry', category_id: 'cat-mohito', name: 'Çiyələkli Mohito', description: 'Strawberry mojito with mint and lime', price: 5.00, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'mohito-peach', category_id: 'cat-mohito', name: 'Şaftalı Mohito', description: 'Peach mojito with mint and lime', price: 5.00, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'mohito-watermelon', category_id: 'cat-mohito', name: 'Qarpızlı Mohito', description: 'Watermelon mojito with mint and lime', price: 5.00, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'mohito-raspberry', category_id: 'cat-mohito', name: 'Malina Mohito', description: 'Raspberry mojito with mint and lime', price: 5.00, photo_url: null, is_available: true, sort_order: 6 },

  // Ice-Tea
  { id: 'icetea-peach-mango', category_id: 'cat-icetea', name: 'Şaftalı - Mango Ice Tea', description: 'Peach and mango iced tea blend', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'icetea-strawberry', category_id: 'cat-icetea', name: 'Çiyələkli İce Tea', description: 'Strawberry flavoured iced tea', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'icetea-lime', category_id: 'cat-icetea', name: 'Limelı Ice Tea', description: 'Lime flavoured iced tea', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'icetea-watermelon', category_id: 'cat-icetea', name: 'Qarpızlı Ice Tea', description: 'Watermelon flavoured iced tea', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'icetea-peach', category_id: 'cat-icetea', name: 'Şaftalı Ice Tea', description: 'Classic peach iced tea', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'icetea-luna', category_id: 'cat-icetea', name: 'Luna Ice Tea', description: 'Luna signature recipe iced tea', price: null, photo_url: null, is_available: true, sort_order: 5 },

  // Smoothie
  { id: 'smoothie-banana', category_id: 'cat-smoothie', name: 'Bananlı Smoothie', description: 'Blended banana smoothie drink', price: 4.50, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'smoothie-coffee', category_id: 'cat-smoothie', name: 'Canlandıran Smoothie - Coffeeli', description: 'Energizing coffee banana smoothie', price: 5.00, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'smoothie-chocolate', category_id: 'cat-smoothie', name: 'Şokolad Smoothie', description: 'Blended chocolate dessert smoothie', price: 5.00, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'smoothie-rasp-straw', category_id: 'cat-smoothie', name: 'Malina-Çiyelek Smoothie', description: 'Blended raspberry and strawberry smoothie', price: 5.50, photo_url: null, is_available: true, sort_order: 3 },

  // Limonad
  { id: 'limonad-fresh', category_id: 'cat-limonad', name: 'Fresh Limonad', description: 'Freshly squeezed classic lemonade', price: 3.50, photo_url: null, is_available: true, sort_order: 0 },

  // Kokteyl
  { id: 'kokteyl-bloody', category_id: 'cat-kokteyl', name: 'Bloody Candy', description: 'Sweet mocktail recipe', price: 4.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'kokteyl-blue', category_id: 'cat-kokteyl', name: 'Blue Dream', description: 'Sweet curacao mocktail', price: 4.20, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'kokteyl-mango', category_id: 'cat-kokteyl', name: 'Mango Cream', description: 'Creamy mango mocktail', price: 4.40, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'kokteyl-sunset', category_id: 'cat-kokteyl', name: 'Sunset Ice Tea', description: 'Balanced sunset iced tea cocktail', price: 4.00, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'kokteyl-berry', category_id: 'cat-kokteyl', name: 'Berry Ice Tea', description: 'Balanced berry iced tea cocktail', price: 4.20, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'kokteyl-tropical', category_id: 'cat-kokteyl', name: 'Tropical Banan', description: 'Balanced banana mocktail', price: 4.20, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'kokteyl-watermelon-fresh', category_id: 'cat-kokteyl', name: 'Qarpızlı Fresh', description: 'Fresh watermelon cocktail drink', price: 4.00, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'kokteyl-citrus-fresh', category_id: 'cat-kokteyl', name: 'Citrus Fresh', description: 'Fresh citrus blend cocktail drink', price: 4.00, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'kokteyl-mango-fresh', category_id: 'cat-kokteyl', name: 'Mango Fresh', description: 'Fresh mango cocktail drink', price: 4.20, photo_url: null, is_available: true, sort_order: 8 },

  // Çay Çeşidleri
  { id: 'cay-sade', category_id: 'cat-cay', name: 'Sadə çay', description: 'Classic black tea', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'cay-keklik', category_id: 'cat-cay', name: 'Keklik Otu', description: 'Wild thyme herbal tea', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'cay-ihlamur', category_id: 'cat-cay', name: 'Ihlamur çayı', description: 'Linden flower herbal tea', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'cay-hibiskus', category_id: 'cat-cay', name: 'Hibiskus çayı', description: 'Hibiscus herbal tea', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'cay-lavanta', category_id: 'cat-cay', name: 'Lavanta çayı', description: 'Lavender herbal tea', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'cay-blue', category_id: 'cat-cay', name: 'Blue Butterfly Çay', description: 'Blue butterfly pea flower tea', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'cay-luna', category_id: 'cat-cay', name: 'Luna çayı', description: 'Luna signature herbal blend tea', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'cay-yasil', category_id: 'cat-cay', name: 'Yaşıl çay', description: 'Classic green tea', price: null, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'cay-melisa', category_id: 'cat-cay', name: 'Melisa çayı', description: 'Lemon balm herbal tea', price: null, photo_url: null, is_available: true, sort_order: 8 },
  { id: 'cay-papatya', category_id: 'cat-cay', name: 'Papatya Çayı', description: 'Chamomile herbal tea', price: null, photo_url: null, is_available: true, sort_order: 9 },
  { id: 'cay-darcin', category_id: 'cat-cay', name: 'Darçın Çayı', description: 'Cinnamon spiced tea', price: null, photo_url: null, is_available: true, sort_order: 10 },
  { id: 'cay-rezene', category_id: 'cat-cay', name: 'Rezene Çayı', description: 'Fennel seed herbal tea', price: null, photo_url: null, is_available: true, sort_order: 11 },
  { id: 'cay-qarisig', category_id: 'cat-cay', name: 'Qarışıq( istediğiniz )', description: 'Custom herbal tea mixture', price: null, photo_url: null, is_available: true, sort_order: 12 },

  // Desertlər
  { id: 'des-islak', category_id: 'cat-deserts', name: 'Islak Kek', description: 'Moist chocolate cake with chocolate glaze', price: 4.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'des-havuc', category_id: 'cat-deserts', name: 'Markoflu - Darçınlı Tort Dilimi', description: 'Carrot cinnamon cake slice', price: 4.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/22f239ce-f117-4559-bafe-b9d5740ae03a-image.png', is_available: true, sort_order: 1 },
  { id: 'des-sutlac', category_id: 'cat-deserts', name: 'Sütlaç', description: 'Turkish baked rice pudding', price: 4.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/7336ec10-a892-4918-912b-0a575ca263c2-image.png', is_available: true, sort_order: 2 },
  { id: 'des-tiramisu', category_id: 'cat-deserts', name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone', price: 4.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/96d89b64-ea3d-4f27-8398-cebb8b88dffe-image.jpeg', is_available: true, sort_order: 3 },
  { id: 'des-malaga', category_id: 'cat-deserts', name: 'Malaga', description: 'Banana custard cake coated with chocolate', price: 4.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/03baa208-9062-4d09-a831-1de124ecc96d-image.jpeg', is_available: true, sort_order: 4 },
  { id: 'des-magnolia', category_id: 'cat-deserts', name: 'Magnolia', description: 'Creamy pudding with biscuits and fruit slices', price: 4.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/39261e8f-a5d7-4881-8232-ee87872c5e51-image.jpeg', is_available: true, sort_order: 5 },
  { id: 'des-midnight', category_id: 'cat-deserts', name: 'Midnight', description: 'Luna signature dark chocolate cake', price: 4.90, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/f4c2de78-a373-41ab-b219-cef8da43171d-image.jpeg', is_available: true, sort_order: 6 },
  { id: 'des-cheesecake', category_id: 'cat-deserts', name: 'Cheescake', description: 'Rich and creamy cheesecake slice', price: null, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/c4e0db56-d64c-4a02-9fe1-55d8b79a1795-image.jpeg', is_available: true, sort_order: 7 },
  { id: 'des-sebastian', category_id: 'cat-deserts', name: 'San Sebastian', description: 'Basque burnt cheesecake slice', price: 5.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/ad686d97-a19c-416a-be05-ad8c2774b3cc-image.jpeg', is_available: true, sort_order: 8 },
  { id: 'des-kakao-sebastian', category_id: 'cat-deserts', name: 'Kakaolu San Sebastian', description: 'Cocoa infused burnt cheesecake slice', price: 5.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/57830002-04db-4c19-a13d-96309ba0f6b8-image.jpeg', is_available: true, sort_order: 9 },
  { id: 'des-blincik', category_id: 'cat-deserts', name: 'Blinçik Tortu', description: 'Crepe cake layers with sweet cream', price: 5.50, photo_url: null, is_available: true, sort_order: 10 },
  { id: 'des-baklava', category_id: 'cat-deserts', name: 'Türk Baklavası', description: 'Traditional flaky Turkish baklava piece', price: 0.70, photo_url: null, is_available: true, sort_order: 11 },
  { id: 'des-sok-baklava', category_id: 'cat-deserts', name: 'Şokoladlı Türk Baklavası', description: 'Chocolate infused baklava piece', price: 0.90, photo_url: null, is_available: true, sort_order: 12 },
  { id: 'des-tiramit', category_id: 'cat-deserts', name: 'Tiramit', description: 'Tiramisu cake pyramid slice', price: 4.90, photo_url: null, is_available: true, sort_order: 13 },

  // Ice-Cream
  { id: 'ice-kakao', category_id: 'cat-icecream', name: 'Kakao', description: 'Rich cocoa ice cream scoop', price: 1.50, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'ice-banana', category_id: 'cat-icecream', name: 'Banan', description: 'Sweet banana ice cream scoop', price: 1.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'ice-strawberry', category_id: 'cat-icecream', name: 'Çiyələk', description: 'Fresh strawberry ice cream scoop', price: 1.50, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'ice-lime', category_id: 'cat-icecream', name: 'Limon', description: 'Zesty lemon ice cream scoop', price: 1.50, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'ice-vanil', category_id: 'cat-icecream', name: 'Vanil', description: 'Classic vanilla ice cream scoop', price: 1.50, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'ice-karamel', category_id: 'cat-icecream', name: 'Karamel', description: 'Sweet caramel ice cream scoop', price: 1.50, photo_url: null, is_available: true, sort_order: 5 },

  // Salatlar Çeşidleri
  { id: 'sal-sezar', category_id: 'cat-salads', name: 'Sezar salatı', description: 'Classic Caesar salad with chicken and croutons', price: 4.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/8f2e7c4f-b975-4ab9-a56a-090da4d74c8f-image.jpeg', is_available: true, sort_order: 0 },
  { id: 'sal-toyuq', category_id: 'cat-salads', name: 'Toyuq salatı', description: 'Chicken salad with fresh vegetables', price: 4.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/328b2d64-6d60-4523-873c-faacb831119a-image.jpeg', is_available: true, sort_order: 1 },
  { id: 'sal-luna', category_id: 'cat-salads', name: 'Luna salatı', description: 'Luna signature chef salad recipe', price: 5.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/f896145e-8f42-4c8c-9bdc-7be0c9f7416f-image.jpeg', is_available: true, sort_order: 2 },

  // Tost Çeşidleri
  { id: 'tost-qarisig', category_id: 'cat-toasts', name: 'Qarışıq Tost', description: 'Mixed toasted sandwich with cheese and sausage', price: 4.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/96701d6b-ceba-4126-9f52-4999511b1751-image.jpeg', is_available: true, sort_order: 0 },
  { id: 'tost-sucuk', category_id: 'cat-toasts', name: 'Sucuklu Tost', description: 'Toasted sandwich with Turkish beef sausage and cheese', price: 3.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'tost-kasar', category_id: 'cat-toasts', name: 'Kaşarlı Tost', description: 'Classic toasted sandwich with kashar cheese', price: 3.00, photo_url: null, is_available: true, sort_order: 2 },

  // Soyuq İçecekler
  { id: 'soyuq-su', category_id: 'cat-soyuq', name: 'Su', description: 'Still spring water', price: 1.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'soyuq-qazli', category_id: 'cat-soyuq', name: 'Qazlı Su', description: 'Sparkling mineral water', price: 1.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'soyuq-cola', category_id: 'cat-soyuq', name: 'Cola', description: 'Coca-Cola classic', price: 1.50, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'soyuq-sok', category_id: 'cat-soyuq', name: 'Meyve Soku', description: 'Fruit juice box', price: 1.00, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'soyuq-fanta', category_id: 'cat-soyuq', name: 'Fanta', description: 'Fanta orange', price: 2.00, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'soyuq-fusetea', category_id: 'cat-soyuq', name: 'Fuse-Tea', description: 'Fuse iced tea can', price: 2.00, photo_url: null, is_available: true, sort_order: 5 },

  // EKSTRA
  { id: 'eks-sirop', category_id: 'cat-ekstra', name: 'Sirop', description: 'Extra syrup shot', price: 1.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'eks-double', category_id: 'cat-ekstra', name: 'Double Coffee', description: 'Extra espresso shot add-on', price: 1.00, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'eks-smoothie', category_id: 'cat-ekstra', name: 'Kivi-Banan Smoothie', description: 'Premium kiwi and banana blended smoothie', price: 6.50, photo_url: null, is_available: true, sort_order: 2 }
];

export const INITIAL_MODIFICATIONS = [
  // Combo Setler
  { id: 'm-comb1', product_id: 'set-saatlik', name: 'Carrot Cake + Salted Caramel Macchiato 11.00 - 14.30', price: 9.50 },
  { id: 'm-comb2', product_id: 'set-saatlik', name: 'Caramel Cheescake + Fresh Mocha 14.00 - 17.30', price: 9.50 },
  { id: 'm-comb3', product_id: 'set-saatlik', name: 'Chocolate San Sebastian + Fresh Chai Tea 17.00 - 20.30', price: 9.50 },

  // Espresso
  { id: 'm-esp-s', product_id: 'hot-espresso', name: 'Single', price: 2.50 },
  { id: 'm-esp-d', product_id: 'hot-espresso', name: 'Double', price: 3.50 },

  // Americano
  { id: 'm-ame-s', product_id: 'hot-americano', name: 'S', price: 3.00 },
  { id: 'm-ame-m', product_id: 'hot-americano', name: 'M', price: 4.00 },

  // Südlü Americano
  { id: 'm-samed-s', product_id: 'hot-sudlu-americano', name: 'S', price: 4.50 },
  { id: 'm-samed-m', product_id: 'hot-sudlu-americano', name: 'M', price: 5.50 },

  // Espresso Macchiato
  { id: 'm-espmac-s', product_id: 'hot-espresso-macchiato', name: 'Single', price: 2.50 },
  { id: 'm-espmac-d', product_id: 'hot-espresso-macchiato', name: 'Double', price: 3.50 },

  // Flat White
  { id: 'm-fw-s', product_id: 'hot-flat-white', name: 'S', price: 4.50 },
  { id: 'm-fw-m', product_id: 'hot-flat-white', name: 'M', price: 5.50 },

  // Latte
  { id: 'm-lat-s', product_id: 'hot-latte', name: 'S', price: 4.50 },
  { id: 'm-lat-m', product_id: 'hot-latte', name: 'M', price: 5.50 },
  { id: 'm-lat-l', product_id: 'hot-latte', name: 'L', price: 6.50 },

  // Luna Latte
  { id: 'm-lun-s', product_id: 'hot-luna-latte', name: 'S', price: 5.50 },
  { id: 'm-lun-m', product_id: 'hot-luna-latte', name: 'M', price: 6.50 },
  { id: 'm-lun-l', product_id: 'hot-luna-latte', name: 'L', price: 7.50 },

  // Cappucino
  { id: 'm-cap-s', product_id: 'hot-cappucino', name: 'S', price: 3.90 },
  { id: 'm-cap-m', product_id: 'hot-cappucino', name: 'M', price: 4.90 },
  { id: 'm-cap-l', product_id: 'hot-cappucino', name: 'L', price: 5.90 },

  // Caramel Macchiato
  { id: 'm-cmac-s', product_id: 'hot-caramel-macchiato', name: 'S', price: 4.90 },
  { id: 'm-cmac-m', product_id: 'hot-caramel-macchiato', name: 'M', price: 5.90 },
  { id: 'm-cmac-l', product_id: 'hot-caramel-macchiato', name: 'L', price: 6.90 },

  // Salt Caramel Macchiato
  { id: 'm-scmac-s', product_id: 'hot-salt-caramel-macchiato', name: 'S', price: 4.90 },
  { id: 'm-scmac-m', product_id: 'hot-salt-caramel-macchiato', name: 'M', price: 5.90 },
  { id: 'm-scmac-l', product_id: 'hot-salt-caramel-macchiato', name: 'L', price: 6.90 },

  // Coconut Latte
  { id: 'm-coc-s', product_id: 'hot-coconut-latte', name: 'S', price: 4.90 },
  { id: 'm-coc-m', product_id: 'hot-coconut-latte', name: 'M', price: 5.90 },
  { id: 'm-coc-l', product_id: 'hot-coconut-latte', name: 'L', price: 6.90 },

  // Chai Tea Latte
  { id: 'm-chai-s', product_id: 'hot-chai-tea-latte', name: 'S', price: 4.50 },
  { id: 'm-chai-m', product_id: 'hot-chai-tea-latte', name: 'M', price: 5.50 },
  { id: 'm-chai-l', product_id: 'hot-chai-tea-latte', name: 'L', price: 6.50 },

  // Fresh Tea Latte
  { id: 'm-ftl-s', product_id: 'hot-fresh-tea-latte', name: 'S', price: 5.00 },
  { id: 'm-ftl-m', product_id: 'hot-fresh-tea-latte', name: 'M', price: 6.00 },
  { id: 'm-ftl-l', product_id: 'hot-fresh-tea-latte', name: 'L', price: 7.00 },

  // Coffee Mocha
  { id: 'm-moc-s', product_id: 'hot-coffee-mocha', name: 'S', price: 4.50 },
  { id: 'm-moc-m', product_id: 'hot-coffee-mocha', name: 'M', price: 5.50 },
  { id: 'm-moc-l', product_id: 'hot-coffee-mocha', name: 'L', price: 6.50 },

  // White Chocolate Mocha
  { id: 'm-wcm-s', product_id: 'hot-white-chocolate-mocha', name: 'S', price: 4.50 },
  { id: 'm-wcm-m', product_id: 'hot-white-chocolate-mocha', name: 'M', price: 5.50 },
  { id: 'm-wcm-l', product_id: 'hot-white-chocolate-mocha', name: 'L', price: 6.50 },

  // Fresh Mocha
  { id: 'm-fmoc-s', product_id: 'hot-fresh-mocha', name: 'S', price: 4.90 },
  { id: 'm-fmoc-m', product_id: 'hot-fresh-mocha', name: 'M', price: 5.90 },
  { id: 'm-fmoc-l', product_id: 'hot-fresh-mocha', name: 'L', price: 6.90 },

  // Fındıklı Mocha
  { id: 'm-findmoc-s', product_id: 'hot-findikli-mocha', name: 'S', price: 4.90 },
  { id: 'm-findmoc-m', product_id: 'hot-findikli-mocha', name: 'M', price: 5.90 },
  { id: 'm-findmoc-l', product_id: 'hot-findikli-mocha', name: 'L', price: 6.90 },

  // Happy Mocha
  { id: 'm-hapmoc-s', product_id: 'hot-happy-mocha', name: 'S', price: 4.90 },
  { id: 'm-hapmoc-m', product_id: 'hot-happy-mocha', name: 'M', price: 5.90 },
  { id: 'm-hapmoc-l', product_id: 'hot-happy-mocha', name: 'L', price: 6.90 },

  // Raff
  { id: 'm-raff-m', product_id: 'hot-raff', name: 'M', price: 5.00 },
  { id: 'm-raff-l', product_id: 'hot-raff', name: 'L', price: 5.50 },

  // Hot Chocolate
  { id: 'm-hc-classic', product_id: 'hot-hot-chocolate', name: 'Classic Hot Chocolate', price: 3.00 },
  { id: 'm-hc-white', product_id: 'hot-hot-chocolate', name: 'White Hot Chocolate', price: 4.00 },
  { id: 'm-hc-special', product_id: 'hot-hot-chocolate', name: 'Luna Special', price: 4.00 },
  { id: 'm-hc-cherry', product_id: 'hot-hot-chocolate', name: 'Cherry Siroplu', price: 4.00 },
  { id: 'm-hc-salted', product_id: 'hot-hot-chocolate', name: 'Salted Caramel Siroplu', price: 4.00 },

  // İce Coffee Americano
  { id: 'm-coldame-m', product_id: 'cold-americano', name: 'M', price: 3.50 },
  { id: 'm-coldame-l', product_id: 'cold-americano', name: 'L', price: 4.50 },

  // İce Südlü Americano
  { id: 'm-coldsud-m', product_id: 'cold-sudlu-americano', name: 'M', price: 4.00 },
  { id: 'm-coldsud-l', product_id: 'cold-sudlu-americano', name: 'L', price: 5.00 },

  // İce Cappucino
  { id: 'm-coldcap-m', product_id: 'cold-cappucino', name: 'M', price: 4.90 },
  { id: 'm-coldcap-l', product_id: 'cold-cappucino', name: 'L', price: 5.90 },

  // İce Latte
  { id: 'm-coldlat-m', product_id: 'cold-latte', name: 'M', price: 5.50 },
  { id: 'm-coldlat-l', product_id: 'cold-latte', name: 'L', price: 6.50 },

  // Iced Chai Tea Latte
  { id: 'm-coldchai-m', product_id: 'cold-iced-chai-latte', name: 'M', price: 5.50 },
  { id: 'm-coldchai-l', product_id: 'cold-iced-chai-latte', name: 'L', price: 6.50 },

  // Iced Fresh Tea Latte
  { id: 'm-coldftl-m', product_id: 'cold-iced-fresh-tea-latte', name: 'M', price: 6.00 },
  { id: 'm-coldftl-l', product_id: 'cold-iced-fresh-tea-latte', name: 'L', price: 7.00 },

  // İce Coffee Mocha
  { id: 'm-coldmoc-m', product_id: 'cold-coffee-mocha', name: 'M', price: 5.50 },
  { id: 'm-coldmoc-l', product_id: 'cold-coffee-mocha', name: 'L', price: 6.50 },

  // İce White Mocha
  { id: 'm-coldwcm-m', product_id: 'cold-white-mocha', name: 'M', price: 5.50 },
  { id: 'm-coldwcm-l', product_id: 'cold-white-mocha', name: 'L', price: 6.50 },

  // Bananlı Krem Frappe
  { id: 'm-frban-m', product_id: 'frappe-banana', name: 'M', price: 4.00 },
  { id: 'm-frban-l', product_id: 'frappe-banana', name: 'L', price: 5.00 },

  // Caramel Krem Frappe
  { id: 'm-frcarc-m', product_id: 'frappe-caramel-cream', name: 'M', price: 4.00 },
  { id: 'm-frcarc-l', product_id: 'frappe-caramel-cream', name: 'L', price: 5.00 },

  // Çiyələkli Krem Frappe
  { id: 'm-frstrc-m', product_id: 'frappe-strawberry-cream', name: 'M', price: 4.00 },
  { id: 'm-frstrc-l', product_id: 'frappe-strawberry-cream', name: 'L', price: 5.00 },

  // Vanili Krem Frappe
  { id: 'm-frvanc-m', product_id: 'frappe-vanilla-cream', name: 'M', price: 4.00 },
  { id: 'm-frvanc-l', product_id: 'frappe-vanilla-cream', name: 'L', price: 5.00 },

  // Caramel Frappe
  { id: 'm-frcar-m', product_id: 'frappe-caramel', name: 'M', price: 5.50 },
  { id: 'm-frcar-l', product_id: 'frappe-caramel', name: 'L', price: 6.50 },

  // Chocolate Frappe
  { id: 'm-frchoc-m', product_id: 'frappe-chocolate', name: 'M', price: 5.50 },
  { id: 'm-frchoc-l', product_id: 'frappe-chocolate', name: 'L', price: 6.50 },

  // Coconut Frappe
  { id: 'm-frcoc-m', product_id: 'frappe-coconut', name: 'M', price: 5.50 },
  { id: 'm-frcoc-l', product_id: 'frappe-coconut', name: 'L', price: 6.50 },

  // Espresso Frappe
  { id: 'm-fresp-m', product_id: 'frappe-espresso', name: 'M', price: 5.50 },
  { id: 'm-fresp-l', product_id: 'frappe-espresso', name: 'L', price: 6.50 },

  // Mocha Frappe
  { id: 'm-frmoc-m', product_id: 'frappe-mocha', name: 'M', price: 5.50 },
  { id: 'm-frmoc-l', product_id: 'frappe-mocha', name: 'L', price: 6.50 },

  // Çiyələkli Frozen
  { id: 'm-frozstr-m', product_id: 'frozen-strawberry', name: 'M', price: 5.00 },
  { id: 'm-frozstr-l', product_id: 'frozen-strawberry', name: 'L', price: 6.00 },

  // Fresh Frozen
  { id: 'm-frozfre-m', product_id: 'frozen-fresh', name: 'M', price: 5.00 },
  { id: 'm-frozfre-l', product_id: 'frozen-fresh', name: 'L', price: 6.00 },

  // Lime Frozen
  { id: 'm-frozlim-m', product_id: 'frozen-lime', name: 'M', price: 5.00 },
  { id: 'm-frozlim-l', product_id: 'frozen-lime', name: 'L', price: 6.00 },

  // Malina Frozen
  { id: 'm-frozras-m', product_id: 'frozen-raspberry', name: 'M', price: 5.00 },
  { id: 'm-frozras-l', product_id: 'frozen-raspberry', name: 'L', price: 6.00 },

  // Mango Frozen
  { id: 'm-frozman-m', product_id: 'frozen-mango', name: 'M', price: 5.00 },
  { id: 'm-frozman-l', product_id: 'frozen-mango', name: 'L', price: 6.00 },

  // Qarağatlı Frozen
  { id: 'm-frozcur-m', product_id: 'frozen-currant', name: 'M', price: 5.00 },
  { id: 'm-frozcur-l', product_id: 'frozen-currant', name: 'L', price: 6.00 },

  // Şaftalı Frozen
  { id: 'm-frozpch-m', product_id: 'frozen-peach', name: 'M', price: 5.00 },
  { id: 'm-frozpch-l', product_id: 'frozen-peach', name: 'L', price: 6.00 },

  // Special Çiyələkli Frozen
  { id: 'm-frozsstr-m', product_id: 'frozen-special-strawberry', name: 'M', price: 5.50 },
  { id: 'm-frozsstr-l', product_id: 'frozen-special-strawberry', name: 'L', price: 6.50 },

  // Special Mango Frozen
  { id: 'm-frozsman-m', product_id: 'frozen-special-mango', name: 'M', price: 5.50 },
  { id: 'm-frozsman-l', product_id: 'frozen-special-mango', name: 'L', price: 6.50 },

  // Coffe Milkshake
  { id: 'm-shkcof-m', product_id: 'milkshake-coffee', name: 'M', price: 5.00 },
  { id: 'm-shkcof-l', product_id: 'milkshake-coffee', name: 'L', price: 6.00 },

  // Bananlı Milkshake
  { id: 'm-shkban-m', product_id: 'milkshake-banana', name: 'M', price: 4.50 },
  { id: 'm-shkban-l', product_id: 'milkshake-banana', name: 'L', price: 5.50 },

  // Çiyələkli Milkshake
  { id: 'm-shkstr-m', product_id: 'milkshake-strawberry', name: 'M', price: 4.50 },
  { id: 'm-shkstr-l', product_id: 'milkshake-strawberry', name: 'L', price: 5.50 },

  // Malinalı Milkshake
  { id: 'm-shkras-m', product_id: 'milkshake-raspberry', name: 'M', price: 4.50 },
  { id: 'm-shkras-l', product_id: 'milkshake-raspberry', name: 'L', price: 5.50 },

  // Şokoladlı Milkshake
  { id: 'm-shkcho-m', product_id: 'milkshake-chocolate', name: 'M', price: 4.50 },
  { id: 'm-shkcho-l', product_id: 'milkshake-chocolate', name: 'L', price: 5.50 },

  // Vanilli Milkshake
  { id: 'm-shkvan-m', product_id: 'milkshake-vanilla', name: 'M', price: 4.50 },
  { id: 'm-shkvan-l', product_id: 'milkshake-vanilla', name: 'L', price: 5.50 },

  // Şaftalı - Mango Ice Tea
  { id: 'm-itpm-m', product_id: 'icetea-peach-mango', name: 'M', price: 5.00 },
  { id: 'm-itpm-l', product_id: 'icetea-peach-mango', name: 'L', price: 6.00 },

  // Çiyələkli İce Tea
  { id: 'm-itstr-m', product_id: 'icetea-strawberry', name: 'M', price: 4.00 },
  { id: 'm-itstr-l', product_id: 'icetea-strawberry', name: 'L', price: 5.00 },

  // Limelı Ice Tea
  { id: 'm-itlim-m', product_id: 'icetea-lime', name: 'M', price: 4.00 },
  { id: 'm-itlim-l', product_id: 'icetea-lime', name: 'L', price: 5.00 },

  // Qarpızlı Ice Tea
  { id: 'm-itwat-m', product_id: 'icetea-watermelon', name: 'M', price: 4.00 },
  { id: 'm-itwat-l', product_id: 'icetea-watermelon', name: 'L', price: 5.00 },

  // Şaftalı Ice Tea
  { id: 'm-itpch-m', product_id: 'icetea-peach', name: 'M', price: 4.00 },
  { id: 'm-itpch-l', product_id: 'icetea-peach', name: 'L', price: 5.00 },

  // Luna Ice Tea
  { id: 'm-itlun-m', product_id: 'icetea-luna', name: 'M', price: 5.00 },
  { id: 'm-itlun-l', product_id: 'icetea-luna', name: 'L', price: 6.00 },

  // Sadə çay
  { id: 'm-tea-fincan', product_id: 'cay-sade', name: 'Fincan', price: 2.00 },
  { id: 'm-tea-kdemlik', product_id: 'cay-sade', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-bdemlik', product_id: 'cay-sade', name: 'Büyük Demlik', price: 6.00 },

  // Keklik Otu
  { id: 'm-tea-ko-k', product_id: 'cay-keklik', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-ko-b', product_id: 'cay-keklik', name: 'Büyük Demlik', price: 6.00 },

  // Ihlamur çayı
  { id: 'm-tea-ih-k', product_id: 'cay-ihlamur', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-ih-b', product_id: 'cay-ihlamur', name: 'Büyük Demlik', price: 6.00 },

  // Hibiskus çayı
  { id: 'm-tea-hb-k', product_id: 'cay-hibiskus', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-hb-b', product_id: 'cay-hibiskus', name: 'Büyük Demlik', price: 6.00 },

  // Lavanta çayı
  { id: 'm-tea-lv-k', product_id: 'cay-lavanta', name: 'Küçük Demlik', price: 4.50 },
  { id: 'm-tea-lv-b', product_id: 'cay-lavanta', name: 'Büyük Demlik', price: 6.50 },

  // Blue Butterfly Çay
  { id: 'm-tea-bb-k', product_id: 'cay-blue', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-bb-b', product_id: 'cay-blue', name: 'Büyük Demlik', price: 6.00 },

  // Luna çayı
  { id: 'm-tea-lu-k', product_id: 'cay-luna', name: 'Küçük Demlik', price: 5.50 },
  { id: 'm-tea-lu-b', product_id: 'cay-luna', name: 'Büyük Demlik', price: 7.50 },

  // Yaşıl çay
  { id: 'm-tea-yc-k', product_id: 'cay-yasil', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-yc-b', product_id: 'cay-yasil', name: 'Büyük Demlik', price: 6.00 },

  // Melisa çayı
  { id: 'm-tea-ml-k', product_id: 'cay-melisa', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-ml-b', product_id: 'cay-melisa', name: 'Büyük Demlik', price: 6.00 },

  // Papatya Çayı
  { id: 'm-tea-pp-k', product_id: 'cay-papatya', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-pp-b', product_id: 'cay-papatya', name: 'Büyük Demlik', price: 6.00 },

  // Darçın Çayı
  { id: 'm-tea-dc-k', product_id: 'cay-darcin', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-dc-b', product_id: 'cay-darcin', name: 'Büyük Demlik', price: 6.00 },

  // Rezene Çayı
  { id: 'm-tea-rz-k', product_id: 'cay-rezene', name: 'Küçük Demlik', price: 4.00 },
  { id: 'm-tea-rz-b', product_id: 'cay-rezene', name: 'Büyük Demlik', price: 6.00 },

  // Qarışıq( istediğiniz )
  { id: 'm-tea-qar-b', product_id: 'cay-qarisig', name: 'Böyük Demlik', price: 8.00 },

  // Cheesecake
  { id: 'm-des-ch-malina', product_id: 'des-cheesecake', name: 'Malinalı', price: 4.90 },
  { id: 'm-des-ch-oreo', product_id: 'des-cheesecake', name: 'Oreo', price: 4.90 },
  { id: 'm-des-ch-caramel', product_id: 'des-cheesecake', name: 'Karamelli', price: 4.90 }
];

export const INITIAL_SETTINGS = {
  shop_name: 'Luna Coffee Shop',
  wifi_name: 'Coffee Luna',
  wifi_pass: 'Luna2002',
  address: 'Ganja, Azerbaijan',
  instagram_url: 'https://www.instagram.com/lunacafeshop.gence',
  tiktok_url: 'https://www.tiktok.com/@lunacafeshop.gence'
};
