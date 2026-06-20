import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabase';
import { Search, X, Wifi, MapPin, Globe, Loader, Sun, Moon } from 'lucide-react';

const Instagram = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

import { INITIAL_CATEGORIES, INITIAL_PRODUCTS, INITIAL_MODIFICATIONS, INITIAL_SETTINGS } from '../initialData';

const UI_TRANSLATIONS = {
  az: {
    searchPlaceholder: "Axtar (məs: espresso, şirniyyat...)",
    allCategories: "Bütün Kateqoriyalar",
    staffPanel: "İşçi Paneli",
    demoModeNotice: "Demo rejimi: Canlı qiymətləri redaktə etmək üçün Supabase qoşulun.",
    gatheringBeans: "Qəhvə dənələri yığılır...",
    noProducts: "Axtarışa uyğun məhsul tapılmadı.",
    fromPrice: "başlayan qiymət",
    outOfStock: "Tükənib",
    price: "Qiymət",
    selectSize: "Ölçü / Seçim",
    password: "Şifrə",
    close: "Bağla",
    tbd: "TBD"
  },
  en: {
    searchPlaceholder: "Search (e.g. espresso, dessert...)",
    allCategories: "All Categories",
    staffPanel: "Staff Panel",
    demoModeNotice: "Demo Mode: Connect to Supabase to update prices/items in real-time.",
    gatheringBeans: "Gathering coffee beans...",
    noProducts: "No products found matching your search.",
    fromPrice: "From",
    outOfStock: "Out of stock",
    price: "Price",
    selectSize: "Select Size / Option",
    password: "Password",
    close: "Close",
    tbd: "TBD"
  },
  ru: {
    searchPlaceholder: "Поиск (например: эспрессо, десерт...)",
    allCategories: "Все категории",
    staffPanel: "Персонал",
    demoModeNotice: "Демо-режим: подключите Supabase для обновления цен.",
    gatheringBeans: "Собираем кофейные зерна...",
    noProducts: "Товары не найдены по вашему запросу.",
    fromPrice: "От",
    outOfStock: "Нет в наличии",
    price: "Цена",
    selectSize: "Выберите размер / вариант",
    password: "Пароль",
    close: "Закрыть",
    tbd: "TBD"
  }
};

export default function MenuPage({ isDarkMode, setIsDarkMode }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [modifications, setModifications] = useState([]);
  const [settings, setSettings] = useState(INITIAL_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [isDemoMode, setIsDemoMode] = useState(false);
  
  const [language, setLanguage] = useState(() => localStorage.getItem('luna_language') || 'az');

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const categoryRefs = useRef({});
  const categoriesNavRef = useRef(null);

  // Load menu data from Supabase or Fallback to Mock Data
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        
        // Check if env vars are present and client initialized
        const hasEnv = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY && supabase;
        
        if (!hasEnv) {
          console.log('No Supabase client initialized. Running in Demo Mode.');
          loadMockData();
          setIsDemoMode(true);
          return;
        }

        // Fetch Categories
        const { data: cats, error: catsErr } = await supabase
          .from('categories')
          .select('*')
          .order('sort_order', { ascending: true });
        
        if (catsErr) throw catsErr;

        // Fetch Products
        const { data: prods, error: prodsErr } = await supabase
          .from('products')
          .select('*')
          .order('sort_order', { ascending: true });

        if (prodsErr) throw prodsErr;

        // Fetch Modifications
        const { data: mods, error: modsErr } = await supabase
          .from('modifications')
          .select('*');

        if (modsErr) throw modsErr;

        // Fetch Settings
        const { data: sets, error: setsErr } = await supabase
          .from('settings')
          .select('*');

        if (setsErr) throw setsErr;

        // Process Settings into Object
        const settingsObj = { ...INITIAL_SETTINGS };
        if (sets && sets.length > 0) {
          sets.forEach(item => {
            settingsObj[item.key] = item.value;
          });
        }

        setCategories(cats || []);
        setProducts(prods || []);
        setModifications(mods || []);
        setSettings(settingsObj);
        setIsDemoMode(false);

        if (cats && cats.length > 0) {
          setActiveCategory(cats[0].id);
        }
      } catch (err) {
        console.error('Error fetching Supabase data, falling back to local demo data:', err);
        loadMockData();
        setIsDemoMode(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('luna_language', language);
  }, [language]);

  const t = (key) => {
    return UI_TRANSLATIONS[language]?.[key] || UI_TRANSLATIONS['az'][key] || '';
  };

  const getTranslatedName = (item) => {
    if (!item) return '';
    if (language === 'en' && item.name_en) return item.name_en;
    if (language === 'ru' && item.name_ru) return item.name_ru;
    return item.name;
  };

  const getTranslatedDescription = (item) => {
    if (!item) return '';
    if (language === 'en' && item.description_en) return item.description_en;
    if (language === 'ru' && item.description_ru) return item.description_ru;
    return item.description;
  };

  const loadMockData = () => {
    // Force migration to version 5 to load the full menu list with translations
    const currentVersion = localStorage.getItem('luna_demo_version');
    if (currentVersion !== 'v5') {
      localStorage.setItem('luna_demo_categories', JSON.stringify(INITIAL_CATEGORIES));
      localStorage.setItem('luna_demo_products', JSON.stringify(INITIAL_PRODUCTS));
      localStorage.setItem('luna_demo_modifications', JSON.stringify(INITIAL_MODIFICATIONS));
      localStorage.setItem('luna_demo_settings', JSON.stringify(INITIAL_SETTINGS));
      localStorage.setItem('luna_demo_version', 'v5');
    }

    const storedCats = localStorage.getItem('luna_demo_categories');
    const storedProds = localStorage.getItem('luna_demo_products');
    const storedMods = localStorage.getItem('luna_demo_modifications');
    const storedSets = localStorage.getItem('luna_demo_settings');

    const loadedCats = storedCats ? JSON.parse(storedCats) : INITIAL_CATEGORIES;
    const loadedProds = storedProds ? JSON.parse(storedProds) : INITIAL_PRODUCTS;
    const loadedMods = storedMods ? JSON.parse(storedMods) : INITIAL_MODIFICATIONS;
    const loadedSets = storedSets ? JSON.parse(storedSets) : INITIAL_SETTINGS;

    setCategories(loadedCats.sort((a,b) => a.sort_order - b.sort_order));
    setProducts(loadedProds.sort((a,b) => a.sort_order - b.sort_order));
    setModifications(loadedMods);
    setSettings(loadedSets);

    if (loadedCats.length > 0) {
      setActiveCategory(loadedCats[0].id);
    }
  };

  // Scroll category section into view
  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const element = categoryRefs.current[categoryId];
    if (element) {
      const offset = 140; // Height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track scroll position to update active category tab
  useEffect(() => {
    const handleScroll = () => {
      if (loading || categories.length === 0) return;
      
      const scrollPosition = window.scrollY + 160; // Offset for header trigger

      for (let i = 0; i < categories.length; i++) {
        const cat = categories[i];
        const element = categoryRefs.current[cat.id];
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveCategory(cat.id);
            // Center the active tab in navigation
            const activeTab = document.getElementById(`tab-${cat.id}`);
            if (activeTab && categoriesNavRef.current) {
              const nav = categoriesNavRef.current;
              const navWidth = nav.offsetWidth;
              const tabLeft = activeTab.offsetLeft;
              const tabWidth = activeTab.offsetWidth;
              nav.scrollLeft = tabLeft - navWidth / 2 + tabWidth / 2;
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, categories]);

  // Filtering products by search query
  const filteredProducts = products.filter(p => {
    const query = searchQuery.toLowerCase();
    const nameMatch = p.name.toLowerCase().includes(query);
    const descMatch = p.description && p.description.toLowerCase().includes(query);
    return nameMatch || descMatch;
  });

  // Group products by category ID
  const productsByCategory = categories.reduce((acc, cat) => {
    const catProds = filteredProducts.filter(p => p.category_id === cat.id && p.is_available);
    if (catProds.length > 0) {
      acc[cat.id] = catProds;
    }
    return acc;
  }, {});

  // Find modifications for a specific product
  const getProductModifications = (productId) => {
    return modifications.filter(m => m.product_id === productId);
  };

  // Get display price for item card
  const getDisplayPrice = (product) => {
    const mods = getProductModifications(product.id);
    if (mods.length > 0) {
      const minPrice = Math.min(...mods.map(m => Number(m.price)));
      if (language === 'az') {
        return `${minPrice.toFixed(2)} AZN-dən`;
      }
      return `${t('fromPrice')} ${minPrice.toFixed(2)} AZN`;
    }
    if (product.price !== null && product.price !== undefined && product.price > 0) {
      return `${Number(product.price).toFixed(2)} AZN`;
    }
    return t('tbd');
  };

  return (
    <div className="app-container">
      {/* Sticky Header */}
      <header className="header-glass">
        <div className="header-top">
          <h1 className="brand-title" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <img 
              src={isDarkMode ? "/dark_mode.png" : "/light_mode.png"} 
              alt={settings.shop_name || "Luna Coffee Shop"} 
              style={{ height: '48px', width: 'auto', display: 'block' }} 
            />
            <span style={{ 
              fontFamily: 'var(--font-body)', 
              fontWeight: 300, 
              fontSize: '0.65rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              color: 'var(--wood-medium)',
              paddingLeft: '2px'
            }}>Menu</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Theme Toggle */}
            <button 
              className="lang-pill" 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              aria-label="Toggle Theme"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.4rem', borderRadius: '50%', width: '32px', height: '32px' }}
            >
              {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Language Switcher */}
            <div className="language-selector">
              <button className={`lang-pill ${language === 'az' ? 'active' : ''}`} onClick={() => setLanguage('az')}>AZ</button>
              <button className={`lang-pill ${language === 'en' ? 'active' : ''}`} onClick={() => setLanguage('en')}>EN</button>
              <button className={`lang-pill ${language === 'ru' ? 'active' : ''}`} onClick={() => setLanguage('ru')}>RU</button>
            </div>
            <a href="#/admin" className="btn btn-secondary" style={{ padding: '0.4rem 0.6rem', fontSize: '0.75rem', borderRadius: '20px' }}>
              {t('staffPanel')}
            </a>
          </div>
        </div>

        {/* Demo Mode Notice */}
        {isDemoMode && (
          <div style={{ backgroundColor: 'rgba(198, 139, 89, 0.12)', border: '1px solid var(--accent-gold)', borderRadius: '8px', padding: '0.5rem 0.75rem', fontSize: '0.75rem', color: 'var(--wood-dark)', textAlign: 'center' }}>
            <strong>Demo Mode:</strong> {t('demoModeNotice')}
          </div>
        )}

        {/* Search */}
        <div className="search-bar">
          <Search className="search-icon" size={16} />
          <input
            type="text"
            className="search-input"
            placeholder={t('searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="close-button" style={{ top: '50%', right: '0.5rem', transform: 'translateY(-50%)', backgroundColor: 'transparent' }} onClick={() => setSearchQuery('')}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* Categories navigation tab scroll */}
        {categories.length > 0 && !searchQuery && (
          <nav className="categories-nav no-scrollbar" ref={categoriesNavRef}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`tab-${cat.id}`}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => scrollToCategory(cat.id)}
              >
                {getTranslatedName(cat)}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '300px', gap: '1rem', color: 'var(--wood-medium)' }}>
            <Loader className="animate-spin" style={{ animation: 'spin 1.5s linear infinite' }} />
            <p>{t('gatheringBeans')}</p>
            <style>{`
              @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : categories.length === 0 || Object.keys(productsByCategory).length === 0 ? (
          <div style={{ padding: '3rem 1.5rem', textAlign: 'center', color: 'var(--wood-medium)' }}>
            <p>{t('noProducts')}</p>
          </div>
        ) : (
          categories.map((cat) => {
            const catProds = productsByCategory[cat.id];
            if (!catProds) return null;

            return (
              <section
                key={cat.id}
                ref={(el) => (categoryRefs.current[cat.id] = el)}
                className="menu-section"
              >
                <h2 className="section-title">{getTranslatedName(cat)}</h2>
                <div className="items-grid">
                  {catProds.map((prod) => (
                    <article
                      key={prod.id}
                      className="item-card"
                      onClick={() => setSelectedItem(prod)}
                    >
                      {prod.photo_url && (
                        <img
                          src={prod.photo_url}
                          alt={getTranslatedName(prod)}
                          className="item-image"
                          loading="lazy"
                        />
                      )}
                      <div className="item-info">
                        <div className="item-header">
                          <h3 className="item-title">{getTranslatedName(prod)}</h3>
                          <span className="item-price">{getDisplayPrice(prod)}</span>
                        </div>
                        {getTranslatedDescription(prod) && (
                          <p className="item-description">{getTranslatedDescription(prod)}</p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>

      {/* Item Details Popup Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedItem(null)}>
              <X size={18} />
            </button>
            
            {selectedItem.photo_url && (
              <img
                src={selectedItem.photo_url}
                alt={getTranslatedName(selectedItem)}
                className="modal-photo"
              />
            )}

            <h2 className="modal-title">{getTranslatedName(selectedItem)}</h2>
            {getTranslatedDescription(selectedItem) && (
              <p className="modal-desc">{getTranslatedDescription(selectedItem)}</p>
            )}

            {/* Price section / Modifications */}
            {getProductModifications(selectedItem.id).length > 0 ? (
              <div>
                <h4 className="form-label" style={{ marginBottom: '0.75rem' }}>{t('selectSize')}</h4>
                <div className="modifications-list">
                  {getProductModifications(selectedItem.id).map((mod) => (
                    <div key={mod.id} className="mod-item">
                      <span className="mod-name">{getTranslatedName(mod)}</span>
                      <span className="mod-price">{Number(mod.price).toFixed(2)} AZN</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', backgroundColor: 'var(--white)', border: '1px solid var(--wood-light)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontWeight: '500' }}>{t('price')}</span>
                <span className="mod-price" style={{ fontSize: '1.25rem' }}>
                  {selectedItem.price ? `${Number(selectedItem.price).toFixed(2)} AZN` : t('tbd')}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <footer className="menu-footer">
        <div className="footer-socials">
          {settings.instagram_url && (
            <a href={settings.instagram_url} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <Instagram size={22} />
            </a>
          )}
          {settings.tiktok_url && (
            <a href={settings.tiktok_url} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="TikTok">
              <Globe size={22} />
            </a>
          )}
        </div>

        <div className="footer-info-block">
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: '500', color: 'var(--wood-dark)' }}>
            <Wifi size={16} /> Wi-Fi: {settings.wifi_name}
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--wood-medium)', marginTop: '-0.25rem' }}>
            {t('password')}: <code>{settings.wifi_pass}</code>
          </p>
        </div>

        <div className="footer-info-block" style={{ marginTop: '0.25rem' }}>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <MapPin size={16} /> {settings.address}
          </p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} {settings.shop_name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
