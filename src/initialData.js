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
  { id: 'set-tatli', category_id: 'cat-setler', name: 'Tatlı Tabağı Seti', name_en: 'Dessert Platter Set', name_ru: 'Десертное Ассорти', description: 'Qarışıq desert çeşidləri seti', description_en: 'Assorted dessert platter set', description_ru: 'Ассорти из различных десертов', price: 21.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'set-saatlik', category_id: 'cat-setler', name: 'Saatlik Teklifler', name_en: 'Hourly Combo Specials', name_ru: 'Почасовые Комбо', description: 'Saatlıq kombo təklifləri', description_en: 'Hourly combo specials', description_ru: 'Специальные почасовые комбо-предложения', price: null, photo_url: null, is_available: true, sort_order: 1 },

  // Hot Coffees
  { id: 'hot-espresso', category_id: 'cat-hot-coffees', name: 'Espresso', name_en: 'Espresso', name_ru: 'Эспрессо', description: 'Zəngin və tünd espresso şotu', description_en: 'Rich, concentrated shot of espresso', description_ru: 'Крепкий концентрированный кофе эспрессо', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'hot-cortado', category_id: 'cat-hot-coffees', name: 'Cortado', name_en: 'Cortado', name_ru: 'Кортадо', description: 'Az miqdarda isti süd ilə espresso qəhvəsi', description_en: 'Espresso cut with a small amount of warm milk', description_ru: 'Эспрессо с небольшим количеством теплого молока', price: 4.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'hot-americano', category_id: 'cat-hot-coffees', name: 'Americano', name_en: 'Americano', name_ru: 'Американо', description: 'İsti su ilə qarışdırılmış espresso şotu', description_en: 'Espresso shot topped with hot water', description_ru: 'Порция эспрессо с горячей водой', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'hot-sudlu-americano', category_id: 'cat-hot-coffees', name: 'Südlü Americano', name_en: 'Americano with Milk', name_ru: 'Американо с Молоком', description: 'Süd ilə servis edilən americano', description_en: 'Americano served with milk', description_ru: 'Американо с добавлением свежего молока', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'hot-espresso-macchiato', category_id: 'cat-hot-coffees', name: 'Espresso Macchiato', name_en: 'Espresso Macchiato', name_ru: 'Эспрессо Макиато', description: 'Üzərində az miqdarda süd köpüyü olan espresso', description_en: 'Espresso marked with a dollop of foam', description_ru: 'Эспрессо с каплей молочной пены', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'hot-flat-white', category_id: 'cat-hot-coffees', name: 'Flat White', name_en: 'Flat White', name_ru: 'Флэт Уайт', description: 'Məxməri südlü mikro-köpüklə espresso', description_en: 'Espresso with velvet microfoam milk', description_ru: 'Эспрессо с бархатистой микропеной молока', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'hot-latte', category_id: 'cat-hot-coffees', name: 'Latte', name_en: 'Latte', name_ru: 'Латте', description: 'Klassik espresso və buxarla qızdırılmış süd', description_en: 'Classic espresso and steamed milk', description_ru: 'Классический эспрессо и вспененное молоко', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'hot-luna-latte', category_id: 'cat-hot-coffees', name: 'Luna Latte', name_en: 'Luna Latte', name_ru: 'Луна Латте', description: 'Luna-dan xüsusi reseptli latte', description_en: 'Luna signature latte recipe', description_ru: 'Фирменный латте по рецепту Луна', price: null, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'hot-cappucino', category_id: 'cat-hot-coffees', name: 'Cappucino', name_en: 'Cappuccino', name_ru: 'Капучино', description: 'Espresso, buxarla qızdırılmış süd və bol köpük', description_en: 'Espresso, steamed milk, and heavy foam layer', description_ru: 'Эспрессо, вспененное молоко и густая пена', price: null, photo_url: null, is_available: true, sort_order: 8 },
  { id: 'hot-caramel-macchiato', category_id: 'cat-hot-coffees', name: 'Caramel Macchiato', name_en: 'Caramel Macchiato', name_ru: 'Карамель Макиато', description: 'Espresso vanil siropu, süd və karamel sousu ilə', description_en: 'Espresso with vanilla syrup, milk, and caramel drizzle', description_ru: 'Эспрессо с ванильным сиропом, молоком и карамельным соусом', price: null, photo_url: null, is_available: true, sort_order: 9 },
  { id: 'hot-salt-caramel-macchiato', category_id: 'cat-hot-coffees', name: 'Salt Caramel Macchiato', name_en: 'Salt Caramel Macchiato', name_ru: 'Соленая Карамель Макиато', description: 'Duzlu karamel dadlı makiyato', description_en: 'Salted caramel flavoured macchiato', description_ru: 'Макиато со вкусом соленой карамели', price: null, photo_url: null, is_available: true, sort_order: 10 },
  { id: 'hot-coconut-latte', category_id: 'cat-hot-coffees', name: 'Coconut Latte', name_en: 'Coconut Latte', name_ru: 'Кокосовый Латте', description: 'Şirin kokos dadlı latte', description_en: 'Latte flavoured with sweet coconut', description_ru: 'Латте со вкусом сладкого кокоса', price: null, photo_url: null, is_available: true, sort_order: 11 },
  { id: 'hot-chai-tea-latte', category_id: 'cat-hot-coffees', name: 'Chai Tea Latte', name_en: 'Chai Tea Latte', name_ru: 'Чай Ти Латте', description: 'Ədviyyatlı çay konsentratı və isti süd', description_en: 'Spiced chai tea concentrate with steamed milk', description_ru: 'Пряный чайный концентрат с горячим молоком', price: null, photo_url: null, is_available: true, sort_order: 12 },
  { id: 'hot-fresh-tea-latte', category_id: 'cat-hot-coffees', name: 'Fresh Tea Latte', name_en: 'Fresh Tea Latte', name_ru: 'Фреш Ти Латте', description: 'Təzə dəmlənmiş çay və süd qarışığı', description_en: 'Brewed fresh tea latte blend', description_ru: 'Свежезаваренный чайный латте', price: null, photo_url: null, is_available: true, sort_order: 13 },
  { id: 'hot-coffee-mocha', category_id: 'cat-hot-coffees', name: 'Coffee Mocha', name_en: 'Coffee Mocha', name_ru: 'Кофейный Мокко', description: 'Espresso zəngin şokolad sousu və süd ilə', description_en: 'Espresso with rich chocolate sauce and milk', description_ru: 'Эспрессо с насыщенным шоколадным соусом и молоком', price: null, photo_url: null, is_available: true, sort_order: 14 },
  { id: 'hot-white-chocolate-mocha', category_id: 'cat-hot-coffees', name: 'White Chocolate Mocha', name_en: 'White Chocolate Mocha', name_ru: 'Белый Шоколадный Мокко', description: 'Ağ şokolad sousu ilə hazırlanmış mokko', description_en: 'Mocha made with white chocolate sauce', description_ru: 'Мокко с соусом из белого шоколада', price: null, photo_url: null, is_available: true, sort_order: 15 },
  { id: 'hot-fresh-mocha', category_id: 'cat-hot-coffees', name: 'Fresh Mocha', name_en: 'Fresh Mocha', name_ru: 'Фреш Мокко', description: 'Təzə servis edilən premium mokko', description_en: 'Premium mocha served fresh', description_ru: 'Премиальный мокко, подается свежим', price: null, photo_url: null, is_available: true, sort_order: 16 },
  { id: 'hot-findikli-mocha', category_id: 'cat-hot-coffees', name: 'Fındıklı Mocha', name_en: 'Hazelnut Mocha', name_ru: 'Фундучный Мокко', description: 'Fındıq dadlı şokoladlı mokko', description_en: 'Hazelnut infused chocolate mocha', description_ru: 'Шоколадный мокко с добавлением фундука', price: null, photo_url: null, is_available: true, sort_order: 17 },
  { id: 'hot-happy-mocha', category_id: 'cat-hot-coffees', name: 'Happy Mocha', name_en: 'Happy Mocha', name_ru: 'Хэппи Мокко', description: 'Luna-dan xüsusi reseptli mokko', description_en: 'Luna special recipe mocha', description_ru: 'Фирменный мокко по рецепту Луна', price: null, photo_url: null, is_available: true, sort_order: 18 },
  { id: 'hot-raff', category_id: 'cat-hot-coffees', name: 'Raff', name_en: 'Raf Coffee', name_ru: 'Раф Кофе', description: 'Yumşaq kremli espresso içkisi', description_en: 'Smooth espresso cream drink', description_ru: 'Нежный сливочный кофейный напиток раф', price: null, photo_url: null, is_available: true, sort_order: 19 },
  { id: 'hot-turk-kahvesi', category_id: 'cat-hot-coffees', name: 'Türk Kahvesi', name_en: 'Turkish Coffee', name_ru: 'Турецкий Кофе', description: 'Ənənəvi Türk qəhvəsi', description_en: 'Traditional Turkish ground coffee', description_ru: 'Традиционный турецкий кофе мелкого помола', price: 3.00, photo_url: null, is_available: true, sort_order: 20 },
  { id: 'hot-hot-chocolate', category_id: 'cat-hot-coffees', name: 'Hot Chocolate', name_en: 'Hot Chocolate', name_ru: 'Горячий Шоколад', description: 'Buxarda qızdırılmış südlü zəngin şokoladlı kakao', description_en: 'Rich chocolate cocoa with steamed milk', description_ru: 'Насыщенный горячий шоколад с нежным молоком', price: null, photo_url: null, is_available: true, sort_order: 21 },

  // Cold Coffees
  { id: 'cold-americano', category_id: 'cat-cold-coffees', name: 'İce Coffee Americano', name_en: 'Iced Coffee Americano', name_ru: 'Айс Кофе Американо', description: 'Buzlu soyuq espresso', description_en: 'Chilled espresso over ice', description_ru: 'Охлажденный эспрессо со льдом', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'cold-sudlu-americano', category_id: 'cat-cold-coffees', name: 'İce Südlü Americano', name_en: 'Iced Americano with Milk', name_ru: 'Айс Американо с Молоком', description: 'Süd ilə buzlu soyuq americano', description_en: 'Iced Americano served with milk', description_ru: 'Айс американо с молоком', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'cold-cappucino', category_id: 'cat-cold-coffees', name: 'İce Cappucino', name_en: 'Iced Cappuccino', name_ru: 'Айс Капучино', description: 'Köpüklü soyuq süd ilə buzlu espresso', description_en: 'Iced espresso with frothy cold milk', description_ru: 'Айс капучино со льдом и холодной молочной пеной', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'cold-latte', category_id: 'cat-cold-coffees', name: 'İce Latte', name_en: 'Iced Latte', name_ru: 'Айс Латте', description: 'Buz üzərində soyuq süd ilə soyuq espresso', description_en: 'Chilled espresso with cold milk over ice', description_ru: 'Охлажденный эспрессо с холодным молоком и льдом', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'cold-iced-chai-latte', category_id: 'cat-cold-coffees', name: 'Iced Chai Tea Latte', name_en: 'Iced Chai Tea Latte', name_ru: 'Айс Чай Ти Латте', description: 'Soyuq süd ilə soyuq ədviyyatlı çay', description_en: 'Chilled spiced chai with cold milk', description_ru: 'Охлажденный пряный чай с холодным молоком', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'cold-iced-fresh-tea-latte', category_id: 'cat-cold-coffees', name: 'Iced Fresh Tea Latte', name_en: 'Iced Fresh Tea Latte', name_ru: 'Айс Фреш Ти Латте', description: 'Buz üzərində soyuq dəmlənmiş çay lattesı', description_en: 'Chilled brewed tea latte over ice', description_ru: 'Охлажденный чайный латте со льдом', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'cold-coffee-mocha', category_id: 'cat-cold-coffees', name: 'İce Coffee Mocha', name_en: 'Iced Coffee Mocha', name_ru: 'Айс Кофе Мокко', description: 'Şokolad sousu və süd ilə buzlu espresso', description_en: 'Iced espresso with chocolate sauce and milk', description_ru: 'Айс мокко с шоколадным соусом и молоком', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'cold-white-mocha', category_id: 'cat-cold-coffees', name: 'İce White Mocha', name_en: 'Iced White Mocha', name_ru: 'Айс Белый Мокко', description: 'Ağ şokoladlı buzlu espresso mokko', description_en: 'Iced white chocolate espresso mocha', description_ru: 'Айс белый мокко с белым шоколадом и молоком', price: null, photo_url: null, is_available: true, sort_order: 7 },

  // Frappe / Cream Frappe
  { id: 'frappe-banana', category_id: 'cat-frappe', name: 'Bananlı Krem Frappe', name_en: 'Banana Cream Frappe', name_ru: 'Банановый Крем Фраппе', description: 'Banan dadlı kremli frappe', description_en: 'Banana flavoured cream frappe', description_ru: 'Банановый кремовый фраппе', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'frappe-caramel-cream', category_id: 'cat-frappe', name: 'Caramel Krem Frappe', name_en: 'Caramel Cream Frappe', name_ru: 'Карамельный Крем Фраппе', description: 'Karamel dadlı kremli frappe', description_en: 'Caramel flavoured cream frappe', description_ru: 'Карамельный кремовый фраппе', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'frappe-strawberry-cream', category_id: 'cat-frappe', name: 'Çiyələkli Krem Frappe', name_en: 'Strawberry Cream Frappe', name_ru: 'Клубничный Крем Фраппе', description: 'Çiyələk dadlı kremli frappe', description_en: 'Strawberry flavoured cream frappe', description_ru: 'Клубничный кремовый фраппе', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'frappe-vanilla-cream', category_id: 'cat-frappe', name: 'Vanili Krem Frappe', name_en: 'Vanilla Cream Frappe', name_ru: 'Ванильный Крем Фраппе', description: 'Vanil dadlı kremli frappe', description_en: 'Vanilla flavoured cream frappe', description_ru: 'Ванильный кремовый фраппе', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'frappe-caramel', category_id: 'cat-frappe', name: 'Caramel Frappe', name_en: 'Caramel Frappe', name_ru: 'Карамельный Фраппе', description: 'Karamelli qəhvə frappe qarışığı', description_en: 'Caramel coffee frappe blend', description_ru: 'Карамельно-кофейный фраппе', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'frappe-chocolate', category_id: 'cat-frappe', name: 'Chocolate Frappe', name_en: 'Chocolate Frappe', name_ru: 'Шоколадный Фраппе', description: 'Şokoladlı qəhvə frappe qarışığı', description_en: 'Chocolate coffee frappe blend', description_ru: 'Шоколадно-кофейный фраппе', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'frappe-coconut', category_id: 'cat-frappe', name: 'Coconut Frappe', name_en: 'Coconut Frappe', name_ru: 'Кокосовый Фраппе', description: 'Kokoslu qəhvə frappe qarışığı', description_en: 'Coconut coffee frappe blend', description_ru: 'Кокосово-кофейный фраппе', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'frappe-espresso', category_id: 'cat-frappe', name: 'Espresso Frappe', name_en: 'Espresso Frappe', name_ru: 'Эспрессо Фраппе', description: 'Tünd espresso ilə frappe qarışığı', description_en: 'Bold espresso blended coffee drink', description_ru: 'Крепкий кофейный фраппе на основе эспрессо', price: null, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'frappe-mocha', category_id: 'cat-frappe', name: 'Mocha Frappe', name_en: 'Mocha Frappe', name_ru: 'Мокко Фраппе', description: 'Şokoladlı espresso frappe qarışığı', description_en: 'Chocolate espresso blended coffee drink', description_ru: 'Шоколадный кофейный фраппе на основе эспрессо', price: null, photo_url: null, is_available: true, sort_order: 8 },

  // Frozen
  { id: 'frozen-strawberry', category_id: 'cat-frozen', name: 'Çiyələkli Frozen', name_en: 'Strawberry Frozen', name_ru: 'Клубничный Фрозен', description: 'Buzlu çiyələk qarışığı (frozen)', description_en: 'Blended frozen strawberry slush', description_ru: 'Освежающий клубничный фрозен', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'frozen-fresh', category_id: 'cat-frozen', name: 'Fresh Frozen', name_en: 'Fresh Frozen', name_ru: 'Фреш Фрозен', description: 'Təzə meyvəli buzlu qarışıq (frozen)', description_en: 'Blended frozen fresh fruit slush', description_ru: 'Фруктовый освежающий фрозен', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'frozen-lime', category_id: 'cat-frozen', name: 'Lime Frozen', name_en: 'Lime Frozen', name_ru: 'Лаймовый Фрозен', description: 'Buzlu laym qarışığı (frozen)', description_en: 'Blended frozen lime slush', description_ru: 'Лаймовый освежающий фрозен', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'frozen-raspberry', category_id: 'cat-frozen', name: 'Malina Frozen', name_en: 'Raspberry Frozen', name_ru: 'Малиновый Фрозен', description: 'Buzlu malina qarışığı (frozen)', description_en: 'Blended frozen raspberry slush', description_ru: 'Малиновый освежающий фрозен', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'frozen-mango', category_id: 'cat-frozen', name: 'Mango Frozen', name_en: 'Mango Frozen', name_ru: 'Манго Фрозен', description: 'Buzlu mango qarışığı (frozen)', description_en: 'Blended frozen mango slush', description_ru: 'Манговый освежающий фрозен', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'frozen-currant', category_id: 'cat-frozen', name: 'Qarağatlı Frozen', name_en: 'Currant Frozen', name_ru: 'Смородиновый Фрозен', description: 'Buzlu qarağat qarışığı (frozen)', description_en: 'Blended frozen blackcurrant slush', description_ru: 'Смородиновый освежающий фрозен', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'frozen-peach', category_id: 'cat-frozen', name: 'Şaftalı Frozen', name_en: 'Peach Frozen', name_ru: 'Персиковый Фрозен', description: 'Buzlu şaftalı qarışığı (frozen)', description_en: 'Blended frozen peach slush', description_ru: 'Персиковый освежающий фрозен', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'frozen-special-strawberry', category_id: 'cat-frozen', name: 'Special Çiyələkli Frozen', name_en: 'Special Strawberry Frozen', name_ru: 'Спешл Клубничный Фрозен', description: 'Xüsusi reseptlə çiyələkli frozen', description_en: 'Special strawberry recipe frozen drink', description_ru: 'Фирменный клубничный фрозен', price: null, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'frozen-special-mango', category_id: 'cat-frozen', name: 'Special Mango Frozen', name_en: 'Special Mango Frozen', name_ru: 'Спешл Манго Фрозен', description: 'Xüsusi reseptlə mangolu frozen', description_en: 'Special mango recipe frozen drink', description_ru: 'Фирменный манговый фрозен', price: null, photo_url: null, is_available: true, sort_order: 8 },

  // Milk Shake
  { id: 'milkshake-coffee', category_id: 'cat-milkshake', name: 'Coffe Milkshake', name_en: 'Coffee Milkshake', name_ru: 'Кофейный Милкшейк', description: 'Kremli espresso südlü kokteyli', description_en: 'Creamy espresso milkshake', description_ru: 'Кофейный молочный коктейль милкшейк', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'milkshake-banana', category_id: 'cat-milkshake', name: 'Bananlı Milkshake', name_en: 'Banana Milkshake', name_ru: 'Банановый Милкшейк', description: 'Kremli bananlı südlü kokteyl', description_en: 'Creamy banana milkshake', description_ru: 'Банановый молочный коктейль милкшейк', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'milkshake-strawberry', category_id: 'cat-milkshake', name: 'Çiyələkli Milkshake', name_en: 'Strawberry Milkshake', name_ru: 'Клубничный Милкшейк', description: 'Kremli çiyələkli südlü kokteyl', description_en: 'Creamy strawberry milkshake', description_ru: 'Клубничный молочный коктейль милкшейк', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'milkshake-raspberry', category_id: 'cat-milkshake', name: 'Malinalı Milkshake', name_en: 'Raspberry Milkshake', name_ru: 'Малиновый Милкшейк', description: 'Kremli malinalı südlü kokteyl', description_en: 'Creamy raspberry milkshake', description_ru: 'Малиновый молочный коктейль милкшейк', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'milkshake-chocolate', category_id: 'cat-milkshake', name: 'Şokoladlı Milkshake', name_en: 'Chocolate Milkshake', name_ru: 'Шоколадный Милкшейк', description: 'Kremli şokoladlı klassik südlü kokteyl', description_en: 'Creamy classic chocolate milkshake', description_ru: 'Классический шоколадный молочный коктейль', price: null, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/5def41d5-9462-426d-842a-3dc0b60d24d3-image.jpeg', is_available: true, sort_order: 4 },
  { id: 'milkshake-vanilla', category_id: 'cat-milkshake', name: 'Vanilli Milkshake', name_en: 'Vanilla Milkshake', name_ru: 'Ванильный Милкшейк', description: 'Kremli şirin vanilli südlü kokteyl', description_en: 'Creamy sweet vanilla milkshake', description_ru: 'Ванильный молочный коктейль милкшейк', price: null, photo_url: null, is_available: true, sort_order: 5 },

  // Mohito
  { id: 'mohito-classic', category_id: 'cat-mohito', name: 'Classic Mohito', name_en: 'Classic Mojito', name_ru: 'Классический Мохито', description: 'Laym, nanə, şəkər, qazlı su və buz', description_en: 'Lime, mint, sugar, soda, and ice', description_ru: 'Лайм, мята, сахар, содовая и лед', price: 4.50, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'mohito-secimli', category_id: 'cat-mohito', name: 'Seçimli Mohito', name_en: 'Select Flavored Mojito', name_ru: 'Мохито с сиропом', description: 'İstədiyiniz sirop dadı ilə mohito', description_en: 'Choose your syrup flavour mojito', description_ru: 'Мохито с сиропом на ваш выбор', price: 5.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'mohito-special', category_id: 'cat-mohito', name: 'Special Mohito', name_en: 'Special Mojito', name_ru: 'Спешл Мохито', description: 'Luna-dan xüsusi reseptli mohito', description_en: 'Luna signature recipe mojito', description_ru: 'Фирменный мохито по рецепту Луна', price: 6.00, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'mohito-strawberry', category_id: 'cat-mohito', name: 'Çiyələkli Mohito', name_en: 'Strawberry Mojito', name_ru: 'Клубничный Мохито', description: 'Nanə və laymlı çiyələkli mohito', description_en: 'Strawberry mojito with mint and lime', description_ru: 'Клубничный мохито с мятой и лаймом', price: 5.00, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'mohito-peach', category_id: 'cat-mohito', name: 'Şaftalı Mohito', name_en: 'Peach Mojito', name_ru: 'Персиковый Мохито', description: 'Nanə və laymlı şaftalı mohito', description_en: 'Peach mojito with mint and lime', description_ru: 'Персиковый мохито с мятой и лаймом', price: 5.00, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'mohito-watermelon', category_id: 'cat-mohito', name: 'Qarpızlı Mohito', name_en: 'Watermelon Mojito', name_ru: 'Арбузный Мохито', description: 'Nanə və laymlı qarpızlı mohito', description_en: 'Watermelon mojito with mint and lime', description_ru: 'Арбузный мохито с мятой и лаймом', price: 5.00, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'mohito-raspberry', category_id: 'cat-mohito', name: 'Malina Mohito', name_en: 'Raspberry Mojito', name_ru: 'Малиновый Мохито', description: 'Nanə və laymlı malinalı mohito', description_en: 'Raspberry mojito with mint and lime', description_ru: 'Малиновый мохито с мятой и лаймом', price: 5.00, photo_url: null, is_available: true, sort_order: 6 },

  // Ice-Tea
  { id: 'icetea-peach-mango', category_id: 'cat-icetea', name: 'Şaftalı - Mango Ice Tea', name_en: 'Peach - Mango Ice Tea', name_ru: 'Персиково-Манговый Айс Ти', description: 'Şaftalı və mango dadlı soyuq çay', description_en: 'Peach and mango iced tea blend', description_ru: 'Холодный чай со вкусом персика и манго', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'icetea-strawberry', category_id: 'cat-icetea', name: 'Çiyələkli İce Tea', name_en: 'Strawberry Ice Tea', name_ru: 'Клубничный Айс Ти', description: 'Çiyələk dadlı soyuq çay', description_en: 'Strawberry flavoured iced tea', description_ru: 'Холодный чай со вкусом клубники', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'icetea-lime', category_id: 'cat-icetea', name: 'Limelı Ice Tea', name_en: 'Lime Ice Tea', name_ru: 'Лаймовый Айс Ти', description: 'Laym dadlı soyuq çay', description_en: 'Lime flavoured iced tea', description_ru: 'Холодный чай со вкусом лайма', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'icetea-watermelon', category_id: 'cat-icetea', name: 'Qarpızlı Ice Tea', name_en: 'Watermelon Ice Tea', name_ru: 'Арбузный Айс Ти', description: 'Qarpız dadlı soyuq çay', description_en: 'Watermelon flavoured iced tea', description_ru: 'Холодный чай со вкусом арбуза', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'icetea-peach', category_id: 'cat-icetea', name: 'Şaftalı Ice Tea', name_en: 'Peach Ice Tea', name_ru: 'Персиковый Айс Ти', description: 'Klassik şaftalı dadlı soyuq çay', description_en: 'Classic peach iced tea', description_ru: 'Классический персиковый холодный чай', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'icetea-luna', category_id: 'cat-icetea', name: 'Luna Ice Tea', name_en: 'Luna Ice Tea', name_ru: 'Луна Айс Ти', description: 'Luna-dan xüsusi reseptli soyuq çay', description_en: 'Luna signature recipe iced tea', description_ru: 'Фирменный холодный чай по рецепту Луна', price: null, photo_url: null, is_available: true, sort_order: 5 },

  // Smoothie
  { id: 'smoothie-banana', category_id: 'cat-smoothie', name: 'Bananlı Smoothie', name_en: 'Banana Smoothie', name_ru: 'Банановый Смузи', description: 'Bananlı smuzi içkisi', description_en: 'Blended banana smoothie drink', description_ru: 'Густой банановый смузи', price: 4.50, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'smoothie-coffee', category_id: 'cat-smoothie', name: 'Canlandıran Smoothie - Coffeeli', name_en: 'Coffee Smoothie', name_ru: 'Кофейный Смузи', description: 'Enerji verən qəhvəli-bananlı smuzi', description_en: 'Energizing coffee banana smoothie', description_ru: 'Бодрящий бананово-кофейный смузи', price: 5.00, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'smoothie-chocolate', category_id: 'cat-smoothie', name: 'Şokolad Smoothie', name_en: 'Chocolate Smoothie', name_ru: 'Шоколадный Смузи', description: 'Şokoladlı desert smuzi', description_en: 'Blended chocolate dessert smoothie', description_ru: 'Шоколадный десертный смузи', price: 5.00, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'smoothie-rasp-straw', category_id: 'cat-smoothie', name: 'Malina-Çiyelek Smoothie', name_en: 'Raspberry-Strawberry Smoothie', name_ru: 'Малиново-Клубничный Смузи', description: 'Malinalı və çiyələkli smuzi', description_en: 'Blended raspberry and strawberry smoothie', description_ru: 'Смузи из свежей малины и клубники', price: 5.50, photo_url: null, is_available: true, sort_order: 3 },

  // Limonad
  { id: 'limonad-fresh', category_id: 'cat-limonad', name: 'Fresh Limonad', name_en: 'Fresh Lemonade', name_ru: 'Свежий Лимонад', description: 'Təzə sıxılmış klassik limonad', description_en: 'Freshly squeezed classic lemonade', description_ru: 'Свежевыжатый классический лимонад', price: 3.50, photo_url: null, is_available: true, sort_order: 0 },

  // Kokteyl
  { id: 'kokteyl-bloody', category_id: 'cat-kokteyl', name: 'Bloody Candy', name_en: 'Bloody Candy', name_ru: 'Блади Кэнди', description: 'Şirin kokteyl resepti', description_en: 'Sweet mocktail recipe', description_ru: 'Сладкий безалкогольный коктейль', price: 4.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'kokteyl-blue', category_id: 'cat-kokteyl', name: 'Blue Dream', name_en: 'Blue Dream', name_ru: 'Блю Дрим', description: 'Şirin kurasao kokteyli', description_en: 'Sweet curacao mocktail', description_ru: 'Сладкий коктейль с сиропом блю курасао', price: 4.20, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'kokteyl-mango', category_id: 'cat-kokteyl', name: 'Mango Cream', name_en: 'Mango Cream', name_ru: 'Манго Крем', description: 'Kremli mango kokteyli', description_en: 'Creamy mango mocktail', description_ru: 'Нежный манговый коктейль', price: 4.40, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'kokteyl-sunset', category_id: 'cat-kokteyl', name: 'Sunset Ice Tea', name_en: 'Sunset Ice Tea', name_ru: 'Сансет Айс Ти', description: 'sunset soyuq çay kokteyli', description_en: 'Balanced sunset iced tea cocktail', description_ru: 'Освежающий коктейль Сансет', price: 4.00, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'kokteyl-berry', category_id: 'cat-kokteyl', name: 'Berry Ice Tea', name_en: 'Berry Ice Tea', name_ru: 'Ягодный Айс Ти', description: 'giləmeyvəli soyuq çay kokteyli', description_en: 'Balanced berry iced tea cocktail', description_ru: 'Освежающий ягодный коктейль', price: 4.20, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'kokteyl-tropical', category_id: 'cat-kokteyl', name: 'Tropical Banan', name_en: 'Tropical Banana', name_ru: 'Тропический Банан', description: 'bananlı kokteyl', description_en: 'Balanced banana mocktail', description_ru: 'Банановый безалкогольный коктейль', price: 4.20, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'kokteyl-watermelon-fresh', category_id: 'cat-kokteyl', name: 'Qarpızlı Fresh', name_en: 'Watermelon Fresh', name_ru: 'Арбузный Фреш', description: 'Təzə qarpızlı kokteyl içkisi', description_en: 'Fresh watermelon cocktail drink', description_ru: 'Освежающий арбузный коктейль', price: 4.00, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'kokteyl-citrus-fresh', category_id: 'cat-kokteyl', name: 'Citrus Fresh', name_en: 'Citrus Fresh', name_ru: 'Цитрусовый Фреш', description: 'Təzə sitrus qarışığı kokteyl', description_en: 'Fresh citrus blend cocktail drink', description_ru: 'Освежающий цитрусовый коктейль', price: 4.00, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'kokteyl-mango-fresh', category_id: 'cat-kokteyl', name: 'Mango Fresh', name_en: 'Mango Fresh', name_ru: 'Манго Фреш', description: 'Təzə mangolu kokteyl içkisi', description_en: 'Fresh mango cocktail drink', description_ru: 'Освежающий манговый коктейль', price: 4.20, photo_url: null, is_available: true, sort_order: 8 },

  // Çay Çeşidleri
  { id: 'cay-sade', category_id: 'cat-cay', name: 'Sadə çay', name_en: 'Plain Tea', name_ru: 'Простой Чай', description: 'Klassik qara çay', description_en: 'Classic black tea', description_ru: 'Классический черный чай', price: null, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'cay-keklik', category_id: 'cat-cay', name: 'Keklik Otu', name_en: 'Thyme Tea', name_ru: 'Чай с Чабрецом', description: 'Kəklikotulu bitki çayı', description_en: 'Wild thyme herbal tea', description_ru: 'Травяной чай с диким чабрецом', price: null, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'cay-ihlamur', category_id: 'cat-cay', name: 'Ihlamur çayı', name_en: 'Linden Tea', name_ru: 'Липовый Чай', description: 'İhlamur (cökə) bitki çayı', description_en: 'Linden flower herbal tea', description_ru: 'Липовый чай', price: null, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'cay-hibiskus', category_id: 'cat-cay', name: 'Hibiskus çayı', name_en: 'Hibiscus Tea', name_ru: 'Гибискус (Каркаде)', description: 'Hibiskus (karkade) bitki çayı', description_en: 'Hibiscus herbal tea', description_ru: 'Травяной чай каркаде (гибискус)', price: null, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'cay-lavanta', category_id: 'cat-cay', name: 'Lavanta çayı', name_en: 'Lavender Tea', name_ru: 'Лавандовый Чай', description: 'Lavanda bitki çayı', description_en: 'Lavender herbal tea', description_ru: 'Лавандовый чай', price: null, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'cay-blue', category_id: 'cat-cay', name: 'Blue Butterfly Çay', name_en: 'Blue Butterfly Tea', name_ru: 'Синий Чай', description: 'Mavi kəpənək bitki çayı', description_en: 'Blue butterfly pea flower tea', description_ru: 'Синий чай Анчан', price: null, photo_url: null, is_available: true, sort_order: 5 },
  { id: 'cay-luna', category_id: 'cat-cay', name: 'Luna çayı', name_en: 'Luna Signature Tea', name_ru: 'Луна Чай', description: 'Luna-dan xüsusi qarışıqlı bitki çayı', description_en: 'Luna signature herbal blend tea', description_ru: 'Фирменный травяной сбор Луна', price: null, photo_url: null, is_available: true, sort_order: 6 },
  { id: 'cay-yasil', category_id: 'cat-cay', name: 'Yaşıl çay', name_en: 'Green Tea', name_ru: 'Зеленый Чай', description: 'Klassik yaşıl çay', description_en: 'Classic green tea', description_ru: 'Классический зеленый чай', price: null, photo_url: null, is_available: true, sort_order: 7 },
  { id: 'cay-melisa', category_id: 'cat-cay', name: 'Melisa çayı', name_en: 'Melissa Tea', name_ru: 'Чай с Мелиссой', description: 'Melisa bitki çayı', description_en: 'Lemon balm herbal tea', description_ru: 'Травяной чай с мелиссой', price: null, photo_url: null, is_available: true, sort_order: 8 },
  { id: 'cay-papatya', category_id: 'cat-cay', name: 'Papatya Çayı', name_en: 'Chamomile Tea', name_ru: 'Ромашковый Чай', description: 'Papatya bitki çayı', description_en: 'Chamomile herbal tea', description_ru: 'Ромашковый чай', price: null, photo_url: null, is_available: true, sort_order: 9 },
  { id: 'cay-darcin', category_id: 'cat-cay', name: 'Darçın Çayı', name_en: 'Cinnamon Tea', name_ru: 'Коричный Чай', description: 'Darçınlı ədviyyatlı çay', description_en: 'Cinnamon spiced tea', description_ru: 'Чай с ароматной корицей', price: null, photo_url: null, is_available: true, sort_order: 10 },
  { id: 'cay-rezene', category_id: 'cat-cay', name: 'Rezene Çayı', name_en: 'Fennel Tea', name_ru: 'Фенхелевый Чай', description: 'Rezene bitki çayı', description_en: 'Fennel seed herbal tea', description_ru: 'Чай из семян фенхеля', price: null, photo_url: null, is_available: true, sort_order: 11 },
  { id: 'cay-qarisig', category_id: 'cat-cay', name: 'Qarışıq( istediğiniz )', name_en: 'Custom Mixed Herbal Tea', name_ru: 'Травяной Сбор', description: 'Qarışıq bitki çayı', description_en: 'Custom herbal tea mixture', description_ru: 'Травяной сбор на ваш выбор', price: null, photo_url: null, is_available: true, sort_order: 12 },

  // Desertlər
  { id: 'des-islak', category_id: 'cat-deserts', name: 'Islak Kek', name_en: 'Wet Chocolate Cake', name_ru: 'Влажный Шоколадный Пирог', description: 'Şokolad souslu nəm şokoladlı kek', description_en: 'Moist chocolate cake with chocolate glaze', description_ru: 'Влажный шоколадный пирог с глазурью', price: 4.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'des-havuc', category_id: 'cat-deserts', name: 'Markoflu - Darçınlı Tort Dilimi', name_en: 'Carrot & Cinnamon Cake Slice', name_ru: 'Морковно-Коричный Пирог', description: 'Kök və darçınlı tort dilimi', description_en: 'Carrot cinnamon cake slice', description_ru: 'Морковно-коричный пирог', price: 4.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/22f239ce-f117-4559-bafe-b9d5740ae03a-image.png', is_available: true, sort_order: 1 },
  { id: 'des-sutlac', category_id: 'cat-deserts', name: 'Sütlaç', name_en: 'Sutlac (Baked Rice Pudding)', name_ru: 'Сютлач (Рисовый Пудинг)', description: 'Fırında bişmiş südlü düyü pudinqi (sütlaç)', description_en: 'Turkish baked rice pudding', description_ru: 'Турецкий рисовый пудинг с румяной корочкой (сютлач)', price: 4.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/7336ec10-a892-4918-912b-0a575ca263c2-image.png', is_available: true, sort_order: 2 },
  { id: 'des-tiramisu', category_id: 'cat-deserts', name: 'Tiramisu', name_en: 'Tiramisu', name_ru: 'Тирамису', description: 'Qəhvəli peçenye və maskarpone kremli tiramisu', description_en: 'Espresso-soaked ladyfingers with mascarpone', description_ru: 'Тирамису на кофейном печенье савоярди с кремом маскарпоне', price: 4.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/96d89b64-ea3d-4f27-8398-cebb8b88dffe-image.jpeg', is_available: true, sort_order: 3 },
  { id: 'des-malaga', category_id: 'cat-deserts', name: 'Malaga', name_en: 'Malaga', name_ru: 'Малага', description: 'Şokoladla örtülmüş bananlı krem tortu (Malaga)', description_en: 'Banana custard cake coated with chocolate', description_ru: 'Банановый торт с заварным кремом в шоколаде (Малага)', price: 4.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/03baa208-9062-4d09-a831-1de124ecc96d-image.jpeg', is_available: true, sort_order: 4 },
  { id: 'des-magnolia', category_id: 'cat-deserts', name: 'Magnolia', name_en: 'Magnolia', name_ru: 'Магнолия', description: 'Peçenye və meyvə dilimləri ilə kremli pudinq (Maqnoliya)', description_en: 'Creamy pudding with biscuits and fruit slices', description_ru: 'Сливочный пудинг с печеньем и фруктами (Магнолия)', price: 4.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/39261e8f-a5d7-4881-8232-ee87872c5e51-image.jpeg', is_available: true, sort_order: 5 },
  { id: 'des-midnight', category_id: 'cat-deserts', name: 'Midnight', name_en: 'Midnight Cake', name_ru: 'Шоколадный Торт Миднайт', description: 'Luna-dan xüsusi tünd şokoladlı tort (Midnight)', description_en: 'Luna signature dark chocolate cake', description_ru: 'Фирменный шоколадный торт Миднайт', price: 4.90, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/f4c2de78-a373-41ab-b219-cef8da43171d-image.jpeg', is_available: true, sort_order: 6 },
  { id: 'des-cheesecake', category_id: 'cat-deserts', name: 'Cheescake', name_en: 'Cheesecake', name_ru: 'Чизкейк', description: 'Zəngin və kremli çizkeyk dilimi', description_en: 'Rich and creamy cheesecake slice', description_ru: 'Нежный сливочный чизкейк', price: null, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/c4e0db56-d64c-4a02-9fe1-55d8b79a1795-image.jpeg', is_available: true, sort_order: 7 },
  { id: 'des-sebastian', category_id: 'cat-deserts', name: 'San Sebastian', name_en: 'San Sebastian', name_ru: 'Сан-Себастьян', description: 'Yanmış kənarlı Bask çizkeyk dilimi (San Sebastian)', description_en: 'Basque burnt cheesecake slice', description_ru: 'Испанский обожженный чизкейк Сан-Себастьян', price: 5.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/ad686d97-a19c-416a-be05-ad8c2774b3cc-image.jpeg', is_available: true, sort_order: 8 },
  { id: 'des-kakao-sebastian', category_id: 'cat-deserts', name: 'Kakaolu San Sebastian', name_en: 'Cocoa San Sebastian', name_ru: 'Какао Сан-Себастьян', description: 'Kakaolu Bask çizkeyk dilimi (San Sebastian)', description_en: 'Cocoa infused burnt cheesecake slice', description_ru: 'Какао Сан-Себастьян', price: 5.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/57830002-04db-4c19-a13d-96309ba0f6b8-image.jpeg', is_available: true, sort_order: 9 },
  { id: 'des-blincik', category_id: 'cat-deserts', name: 'Blinçik Tortu', name_en: 'Crepe Cake', name_ru: 'Блинный Торт', description: 'Şirin kremli blinçik tortu qatları', description_en: 'Crepe cake layers with sweet cream', description_ru: 'Нежные блинные слои со сладким кремом', price: 5.50, photo_url: null, is_available: true, sort_order: 10 },
  { id: 'des-baklava', category_id: 'cat-deserts', name: 'Türk Baklavası', name_en: 'Turkish Baklava', name_ru: 'Турецкая Пахлава', description: 'Ənənəvi qat-qat Türk paxlavası (dilim)', description_en: 'Traditional flaky Turkish baklava piece', description_ru: 'Традиционная турецкая слоеная пахлава', price: 0.70, photo_url: null, is_available: true, sort_order: 11 },
  { id: 'des-sok-baklava', category_id: 'cat-deserts', name: 'Şokoladlı Türk Baklavası', name_en: 'Chocolate Turkish Baklava', name_ru: 'Шоколадная Турецкая Пахлава', description: 'Şokoladlı Türk paxlavası (dilim)', description_en: 'Chocolate infused baklava piece', description_ru: 'Турецкая пахлава с добавлением шоколада', price: 0.90, photo_url: null, is_available: true, sort_order: 12 },
  { id: 'des-tiramit', category_id: 'cat-deserts', name: 'Tiramit', name_en: 'Tiramit (Pyramid Cake)', name_ru: 'Пирамида', description: 'Piramida formalı tiramisu tort dilimi', description_en: 'Tiramisu cake pyramid slice', description_ru: 'Пирамида Тирамису', price: 4.90, photo_url: null, is_available: true, sort_order: 13 },

  // Ice-Cream
  { id: 'ice-kakao', category_id: 'cat-icecream', name: 'Kakao', name_en: 'Chocolate Scoop', name_ru: 'Шоколадный Шарик', description: 'Zəngin kakao dadlı dondurma topu', description_en: 'Rich cocoa ice cream scoop', description_ru: 'Насыщенный шоколадный шарик мороженого', price: 1.50, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'ice-banana', category_id: 'cat-icecream', name: 'Banan', name_en: 'Banana Scoop', name_ru: 'Банановый Шарик', description: 'Şirin banan dadlı dondurma topu', description_en: 'Sweet banana ice cream scoop', description_ru: 'Банановый шарик мороженого', price: 1.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'ice-strawberry', category_id: 'cat-icecream', name: 'Çiyələk', name_en: 'Strawberry Scoop', name_ru: 'Клубничный Шарик', description: 'Təzə çiyələk dadlı dondurma topu', description_en: 'Fresh strawberry ice cream scoop', description_ru: 'Клубничный шарик мороженого', price: 1.50, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'ice-lime', category_id: 'cat-icecream', name: 'Limon', name_en: 'Lemon Scoop', name_ru: 'Лимонный Шарик', description: 'Turşməzə limon dadlı dondurma topu', description_en: 'Zesty lemon ice cream scoop', description_ru: 'Лимонный освежающий шарик мороженого', price: 1.50, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'ice-vanil', category_id: 'cat-icecream', name: 'Vanil', name_en: 'Vanilla Scoop', name_ru: 'Ванильный Шарик', description: 'Klassik vanil dadlı dondurma topu', description_en: 'Classic vanilla ice cream scoop', description_ru: 'Классический ванильный шарик мороженого', price: 1.50, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'ice-karamel', category_id: 'cat-icecream', name: 'Karamel', name_en: 'Caramel Scoop', name_ru: 'Карамельный Шарик', description: 'Şirin karamel dadlı dondurma topu', description_en: 'Sweet caramel ice cream scoop', description_ru: 'Карамельный шарик мороженого', price: 1.50, photo_url: null, is_available: true, sort_order: 5 },

  // Salatlar Çeşidleri
  { id: 'sal-sezar', category_id: 'cat-salads', name: 'Sezar salatı', name_en: 'Caesar Salad', name_ru: 'Салат Цезарь', description: 'Toyuq və suxari ilə klassik Sezar salatı', description_en: 'Classic Caesar salad with chicken and croutons', description_ru: 'Классический салат Цезарь с курицей', price: 4.50, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/8f2e7c4f-b975-4ab9-a56a-090da4d74c8f-image.jpeg', is_available: true, sort_order: 0 },
  { id: 'sal-toyuq', category_id: 'cat-salads', name: 'Toyuq salatı', name_en: 'Chicken Salad', name_ru: 'Куриный Салат', description: 'Təzə tərəvəzlərlə toyuq salatı', description_en: 'Chicken salad with fresh vegetables', description_ru: 'Куриный салат со свежими овощами', price: 4.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/328b2d64-6d60-4523-873c-faacb831119a-image.jpeg', is_available: true, sort_order: 1 },
  { id: 'sal-luna', category_id: 'cat-salads', name: 'Luna salatı', name_en: 'Luna Salad', name_ru: 'Салат Луна', description: 'Luna-dan xüsusi aşpaz salatı resepti', description_en: 'Luna signature chef salad recipe', description_ru: 'Фирменный салат по рецепту шеф-повара Луна', price: 5.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/f896145e-8f42-4c8c-9bdc-7be0c9f7416f-image.jpeg', is_available: true, sort_order: 2 },

  // Tost Çeşidleri
  { id: 'tost-qarisig', category_id: 'cat-toasts', name: 'Qarışıq Tost', name_en: 'Mixed Toast', name_ru: 'Ассорти Тост', description: 'Pendir və kolbasalı qarışıq tost', description_en: 'Mixed toasted sandwich with cheese and sausage', description_ru: 'Тост-ассорти с сыром и колбасой', price: 4.00, photo_url: 'https://img.postershop.me/6863d2b88c3d3d9d1254b5df/96701d6b-ceba-4126-9f52-4999511b1751-image.jpeg', is_available: true, sort_order: 0 },
  { id: 'tost-sucuk', category_id: 'cat-toasts', name: 'Sucuklu Tost', name_en: 'Sujuk Toast', name_ru: 'Тост с Суджуком', description: 'Sucuk və pendirli tost', description_en: 'Toasted sandwich with Turkish beef sausage and cheese', description_ru: 'Тост с турецким суджуком и сыром', price: 3.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'tost-kasar', category_id: 'cat-toasts', name: 'Kaşarlı Tost', name_en: 'Kashar Cheese Toast', name_ru: 'Тост с Сыром Кашар', description: 'Kaşar pendirli klassik tost', description_en: 'Classic toasted sandwich with kashar cheese', description_ru: 'Классический тост с сыром кашар', price: 3.00, photo_url: null, is_available: true, sort_order: 2 },

  // Soyuq İçecekler
  { id: 'soyuq-su', category_id: 'cat-soyuq', name: 'Su', name_en: 'Water', name_ru: 'Вода', description: 'Qazsız bulaq suyu', description_en: 'Still spring water', description_ru: 'Чистая негазированная вода', price: 1.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'soyuq-qazli', category_id: 'cat-soyuq', name: 'Qazlı Su', name_en: 'Sparkling Water', name_ru: 'Газированная Вода', description: 'Qazlı mineral su', description_en: 'Sparkling mineral water', description_ru: 'Газированная минеральная вода', price: 1.50, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'soyuq-cola', category_id: 'cat-soyuq', name: 'Cola', name_en: 'Coca-Cola', name_ru: 'Кока-Кола', description: 'Klassik Coca-Cola', description_en: 'Coca-Cola classic', description_ru: 'Классическая Кока-Кола', price: 1.50, photo_url: null, is_available: true, sort_order: 2 },
  { id: 'soyuq-sok', category_id: 'cat-soyuq', name: 'Meyve Soku', name_en: 'Fruit Juice', name_ru: 'Фруктовый Сок', description: 'Meyvə şirəsi (paketdə)', description_en: 'Fruit juice box', description_ru: 'Фруктовый сок в упаковке', price: 1.00, photo_url: null, is_available: true, sort_order: 3 },
  { id: 'soyuq-fanta', category_id: 'cat-soyuq', name: 'Fanta', name_en: 'Fanta', name_ru: 'Фанта', description: 'Portağallı Fanta', description_en: 'Fanta orange', description_ru: 'Апельсиновая Фанта', price: 2.00, photo_url: null, is_available: true, sort_order: 4 },
  { id: 'soyuq-fusetea', category_id: 'cat-soyuq', name: 'Fuse-Tea', name_en: 'Fuse Tea', name_ru: 'Фьюз Ти', description: 'Fuse soyuq çayı (dəmirdə)', description_en: 'Fuse iced tea can', description_ru: 'Холодный чай Fuse в банке', price: 2.00, photo_url: null, is_available: true, sort_order: 5 },

  // EKSTRA
  { id: 'eks-sirop', category_id: 'cat-ekstra', name: 'Sirop', name_en: 'Syrup Shot', name_ru: 'Сироп', description: 'Əlavə sirop şotu', description_en: 'Extra syrup shot', description_ru: 'Дополнительная порция сиропа', price: 1.00, photo_url: null, is_available: true, sort_order: 0 },
  { id: 'eks-double', category_id: 'cat-ekstra', name: 'Double Coffee', name_en: 'Double Espresso Shot', name_ru: 'Двойной Эспрессо', description: 'Əlavə espresso şotu', description_en: 'Extra espresso shot add-on', description_ru: 'Дополнительный шот эспрессо', price: 1.00, photo_url: null, is_available: true, sort_order: 1 },
  { id: 'eks-smoothie', category_id: 'cat-ekstra', name: 'Kivi-Banan Smoothie', name_en: 'Kiwi-Banana Smoothie', name_ru: 'Киви-Банановый Смузи', description: 'Kivi və bananlı premium smuzi', description_en: 'Premium kiwi and banana blended smoothie', description_ru: 'Киви-банановый премиум смузи', price: 6.50, photo_url: null, is_available: true, sort_order: 2 }
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
