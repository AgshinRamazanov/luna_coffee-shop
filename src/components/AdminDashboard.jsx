import { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabase';
import QRCode from 'qrcode';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS, INITIAL_MODIFICATIONS, INITIAL_SETTINGS } from '../initialData';
import { 
  FolderEdit, Coffee, Settings, QrCode, LogOut, 
  Plus, Edit2, Trash2, X, Wifi, 
  MapPin, Globe, Sliders, ToggleLeft, ToggleRight,
  Eye, Save, Upload, GripVertical
} from 'lucide-react';

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

export default function AdminDashboard({ isDemoMode, onLogout }) {
  const [activeTab, setActiveTab] = useState('products');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [modifications, setModifications] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);

  const categoriesRef = useRef([]);
  const productsRef = useRef([]);
  useEffect(() => { categoriesRef.current = categories; }, [categories]);
  useEffect(() => { productsRef.current = products; }, [products]);

  const [searchQuery, setSearchQuery] = useState('');
  const [modSearchQuery, setModSearchQuery] = useState('');
  
  // Dialog / Edit states
  const [showCatModal, setShowCatModal] = useState(false);
  const [editingCat, setEditingCat] = useState(null);
  const [catName, setCatName] = useState('');
  const [catNameEn, setCatNameEn] = useState('');
  const [catNameRu, setCatNameRu] = useState('');

  const [showProdModal, setShowProdModal] = useState(false);
  const [editingProd, setEditingProd] = useState(null);
  const [prodForm, setProdForm] = useState({
    name: '',
    name_en: '',
    name_ru: '',
    category_id: '',
    description: '',
    description_en: '',
    description_ru: '',
    price: '',
    photo_url: '',
    is_available: true,
    mods: []
  });
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const [showModModal, setShowModModal] = useState(false);
  const [editingMod, setEditingMod] = useState(null);
  const [modForm, setModForm] = useState({
    product_id: '',
    name: '',
    name_en: '',
    name_ru: '',
    price: ''
  });

  const [toast, setToast] = useState('');

  const qrCanvasRef = useRef(null);

  const [draggedCatIndex, setDraggedCatIndex] = useState(null);
  const [draggedProdIndex, setDraggedProdIndex] = useState(null);
  const draggedCatIndexRef = useRef(null);
  const draggedProdIndexRef = useRef(null);
  const touchState = useRef({ startIndex: null, currentIndex: null, type: null, draggedId: null });
  const initialCatOrderRef = useRef([]);
  const initialProdOrderRef = useRef([]);

  // Trigger Toast Alert
  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const sortProductsByMenuOrder = (prodsList, catsList) => {
    const catMap = {};
    catsList.forEach(c => {
      catMap[c.id] = c.sort_order;
    });
    return [...prodsList].sort((a, b) => {
      const orderA = catMap[a.category_id] ?? 0;
      const orderB = catMap[b.category_id] ?? 0;
      if (orderA !== orderB) return orderA - orderB;
      return a.sort_order - b.sort_order;
    });
  };

  const fetchData = async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      if (isDemoMode || !supabase) {
        // Force migration to version 4 to load the full menu list
        const currentVersion = localStorage.getItem('luna_demo_version');
        if (currentVersion !== 'v4') {
          localStorage.setItem('luna_demo_categories', JSON.stringify(INITIAL_CATEGORIES));
          localStorage.setItem('luna_demo_products', JSON.stringify(INITIAL_PRODUCTS));
          localStorage.setItem('luna_demo_modifications', JSON.stringify(INITIAL_MODIFICATIONS));
          localStorage.setItem('luna_demo_settings', JSON.stringify(INITIAL_SETTINGS));
          localStorage.setItem('luna_demo_version', 'v4');
        }

        const storedCats = localStorage.getItem('luna_demo_categories');
        const storedProds = localStorage.getItem('luna_demo_products');
        const storedMods = localStorage.getItem('luna_demo_modifications');
        const storedSets = localStorage.getItem('luna_demo_settings');

        const initialCats = storedCats ? JSON.parse(storedCats) : INITIAL_CATEGORIES;
        const initialProds = storedProds ? JSON.parse(storedProds) : INITIAL_PRODUCTS;
        const initialMods = storedMods ? JSON.parse(storedMods) : INITIAL_MODIFICATIONS;
        const initialSets = storedSets ? JSON.parse(storedSets) : INITIAL_SETTINGS;

        const sortedCats = initialCats.sort((a,b) => a.sort_order - b.sort_order);
        setCategories(sortedCats);
        setProducts(sortProductsByMenuOrder(initialProds, sortedCats));
        setModifications(initialMods);
        setSettings(initialSets);

        // Save back just in case they were not initialized
        localStorage.setItem('luna_demo_categories', JSON.stringify(initialCats));
        localStorage.setItem('luna_demo_products', JSON.stringify(initialProds));
        localStorage.setItem('luna_demo_modifications', JSON.stringify(initialMods));
        localStorage.setItem('luna_demo_settings', JSON.stringify(initialSets));
      } else {
        // Supabase DB fetch
        const { data: cats } = await supabase.from('categories').select('*').order('sort_order', { ascending: true });
        const { data: prods } = await supabase.from('products').select('*').order('sort_order', { ascending: true });
        const { data: mods } = await supabase.from('modifications').select('*');
        const { data: sets } = await supabase.from('settings').select('*');

        const settingsObj = {};
        if (sets) {
          sets.forEach(item => {
            settingsObj[item.key] = item.value;
          });
        }

        const sortedCats = cats || [];
        setCategories(sortedCats);
        setProducts(sortProductsByMenuOrder(prods || [], sortedCats));
        setModifications(mods || []);
        setSettings(settingsObj);
      }
    } catch (e) {
      console.error(e);
      triggerToast('Məlumatların yüklənməsində xəta baş verdi.');
    } finally {
      if (!silent) setLoading(false);
    }
  };

  // Load database structures
  useEffect(() => {
    const load = async () => {
      await fetchData();
    };
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Categories drag & drop handlers
  const handleCatDragStart = (e) => {
    const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    initialCatOrderRef.current = categoriesRef.current.map(c => c.id);
    draggedCatIndexRef.current = index;
    setDraggedCatIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleCatDragOver = (e) => {
    e.preventDefault();
    const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    const currentIdx = draggedCatIndexRef.current;
    if (currentIdx === null || currentIdx === index) return;

    setCategories(prev => {
      const updated = [...prev];
      const [draggedItem] = updated.splice(currentIdx, 1);
      updated.splice(index, 0, draggedItem);
      return updated;
    });
    draggedCatIndexRef.current = index;
    setDraggedCatIndex(index);
  };

  const handleCatDragEnd = async () => {
    if (draggedCatIndexRef.current === null) return;

    const currentIds = categoriesRef.current.map(c => c.id);
    const hasChanged = JSON.stringify(currentIds) !== JSON.stringify(initialCatOrderRef.current);
    if (!hasChanged) {
      setDraggedCatIndex(null);
      draggedCatIndexRef.current = null;
      return;
    }

    draggedCatIndexRef.current = null;
    setDraggedCatIndex(null);

    const updated = [...categoriesRef.current];
    const originalOrders = categoriesRef.current.map(c => c.sort_order).sort((a, b) => a - b);
    const sorted = updated.map((cat, idx) => ({
      ...cat,
      sort_order: originalOrders[idx]
    }));

    setCategories(sorted);

    try {
      if (isDemoMode) {
        localStorage.setItem('luna_demo_categories', JSON.stringify(sorted));
        setProducts(sortProductsByMenuOrder(products, sorted));
      } else {
        const payload = sorted.map(cat => ({
          id: cat.id,
          name: cat.name,
          name_en: cat.name_en || null,
          name_ru: cat.name_ru || null,
          sort_order: cat.sort_order,
          created_at: cat.created_at
        }));
        const { error } = await supabase.from('categories').upsert(payload);
        if (error) throw error;
        await fetchData(true);
      }
      triggerToast('Sıralama yeniləndi.');
    } catch (err) {
      console.error(err);
      triggerToast('Sıralamanın yenilənməsində xəta baş verdi.');
      await fetchData(true);
    }
  };

  // Products drag & drop handlers
  const handleProdDragStart = (e) => {
    if (searchQuery) return;
    const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    initialProdOrderRef.current = productsRef.current.map(p => p.id);
    draggedProdIndexRef.current = index;
    setDraggedProdIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleProdDragOver = (e) => {
    e.preventDefault();
    const index = parseInt(e.currentTarget.getAttribute('data-index'), 10);
    const currentIdx = draggedProdIndexRef.current;
    if (currentIdx === null || currentIdx === index) return;

    setProducts(prev => {
      const updated = [...prev];
      const [draggedItem] = updated.splice(currentIdx, 1);
      updated.splice(index, 0, draggedItem);
      return updated;
    });
    draggedProdIndexRef.current = index;
    setDraggedProdIndex(index);
  };

  const handleProdDragEnd = async () => {
    if (draggedProdIndexRef.current === null) return;

    const currentIds = productsRef.current.map(p => p.id);
    const hasChanged = JSON.stringify(currentIds) !== JSON.stringify(initialProdOrderRef.current);
    if (!hasChanged) {
      setDraggedProdIndex(null);
      draggedProdIndexRef.current = null;
      return;
    }

    const finalIdx = draggedProdIndexRef.current;
    draggedProdIndexRef.current = null;
    setDraggedProdIndex(null);

    const updated = [...productsRef.current];
    const draggedItem = updated[finalIdx];

    // Determine if the dragged product changed categories based on its new neighbors in the list
    if (updated.length > 1 && draggedItem) {
      let targetCategoryId;
      if (finalIdx === 0) {
        targetCategoryId = updated[1].category_id;
      } else if (finalIdx === updated.length - 1) {
        targetCategoryId = updated[updated.length - 2].category_id;
      } else {
        const prevCatId = updated[finalIdx - 1].category_id;
        const nextCatId = updated[finalIdx + 1].category_id;
        if (prevCatId === nextCatId) {
          targetCategoryId = prevCatId;
        } else {
          // Boundary: default to previous item's category
          targetCategoryId = prevCatId;
        }
      }

      if (draggedItem.category_id !== targetCategoryId) {
        draggedItem.category_id = targetCategoryId;
      }
    }

    const originalOrders = productsRef.current.map(p => p.sort_order).sort((a, b) => a - b);
    const sorted = updated.map((prod, idx) => ({
      ...prod,
      sort_order: originalOrders[idx]
    }));

    // In state, make sure it is sorted correctly by the helper
    const menuSorted = sortProductsByMenuOrder(sorted, categories);
    setProducts(menuSorted);

    try {
      if (isDemoMode) {
        localStorage.setItem('luna_demo_products', JSON.stringify(menuSorted));
      } else {
        const payload = menuSorted.map(prod => ({
          id: prod.id,
          category_id: prod.category_id,
          name: prod.name,
          name_en: prod.name_en || null,
          name_ru: prod.name_ru || null,
          description: prod.description || null,
          description_en: prod.description_en || null,
          description_ru: prod.description_ru || null,
          price: prod.price || null,
          photo_url: prod.photo_url || null,
          is_available: prod.is_available,
          sort_order: prod.sort_order,
          created_at: prod.created_at
        }));
        const { error } = await supabase.from('products').upsert(payload);
        if (error) throw error;
        await fetchData(true);
      }
      triggerToast('Məhsulların sıralaması yeniləndi.');
    } catch (err) {
      console.error(err);
      triggerToast('Məhsul sıralamasının yenilənməsində xəta baş verdi.');
      await fetchData(true);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    const target = e.currentTarget;
    const index = parseInt(target.getAttribute('data-index'), 10);
    const type = target.getAttribute('data-type');
    if (type === 'product' && searchQuery) return;
    const item = type === 'category' ? categoriesRef.current[index] : productsRef.current[index];
    const draggedId = item ? item.id : null;
    touchState.current = { startIndex: index, currentIndex: index, type, draggedId };
    if (type === 'category') {
      initialCatOrderRef.current = categoriesRef.current.map(c => c.id);
      draggedCatIndexRef.current = index;
      setDraggedCatIndex(index);
    } else {
      initialProdOrderRef.current = productsRef.current.map(p => p.id);
      draggedProdIndexRef.current = index;
      setDraggedProdIndex(index);
    }
  };

  const handleTouchMove = (e) => {
    const { startIndex, currentIndex, type, draggedId } = touchState.current;
    if (startIndex === null) return;

    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    const tr = element ? element.closest('tr') : null;
    if (!tr) return;

    const dataType = tr.getAttribute('data-type');
    if (dataType !== type) return;

    const dataIndexAttr = tr.getAttribute('data-index');
    if (dataIndexAttr === null) return;

    const targetIndex = parseInt(dataIndexAttr, 10);
    if (isNaN(targetIndex) || targetIndex === currentIndex) return;

    touchState.current.currentIndex = targetIndex;
    if (type === 'category') {
      draggedCatIndexRef.current = targetIndex;
      setDraggedCatIndex(targetIndex);
      setCategories(prev => {
        const currIdx = prev.findIndex(c => c.id === draggedId);
        if (currIdx === -1 || currIdx === targetIndex) return prev;
        const updated = [...prev];
        const [draggedItem] = updated.splice(currIdx, 1);
        updated.splice(targetIndex, 0, draggedItem);
        return updated;
      });
    } else {
      draggedProdIndexRef.current = targetIndex;
      setDraggedProdIndex(targetIndex);
      setProducts(prev => {
        const currIdx = prev.findIndex(p => p.id === draggedId);
        if (currIdx === -1 || currIdx === targetIndex) return prev;
        const updated = [...prev];
        const [draggedItem] = updated.splice(currIdx, 1);
        updated.splice(targetIndex, 0, draggedItem);
        return updated;
      });
    }
  };

  const handleTouchEnd = () => {
    const { startIndex, type } = touchState.current;
    if (startIndex === null) return;

    touchState.current = { startIndex: null, currentIndex: null, type: null, draggedId: null };

    if (type === 'category') {
      handleCatDragEnd();
    } else {
      handleProdDragEnd();
    }
  };

  // ----------------------------------------------------
  // CATEGORIES CRUD
  // ----------------------------------------------------
  const handleSaveCategory = async (e) => {
    e.preventDefault();
    if (!catName.trim()) return;

    try {
      if (isDemoMode) {
        let updatedCats = [...categories];
        if (editingCat) {
          updatedCats = updatedCats.map(c => c.id === editingCat.id ? { ...c, name: catName, name_en: catNameEn, name_ru: catNameRu } : c);
        } else {
          const newCat = {
            id: Date.now().toString(),
            name: catName,
            name_en: catNameEn,
            name_ru: catNameRu,
            sort_order: categories.length > 0 ? Math.max(...categories.map(c => c.sort_order)) + 1 : 0
          };
          updatedCats.push(newCat);
        }
        const sortedCats = updatedCats.sort((a,b) => a.sort_order - b.sort_order);
        setCategories(sortedCats);
        setProducts(sortProductsByMenuOrder(products, sortedCats));
        localStorage.setItem('luna_demo_categories', JSON.stringify(sortedCats));
        triggerToast('Kateqoriya yadda saxlanıldı.');
      } else {
        const payload = { name: catName, name_en: catNameEn || null, name_ru: catNameRu || null };
        if (editingCat) {
          const { error } = await supabase.from('categories').update(payload).eq('id', editingCat.id);
          if (error) throw error;
        } else {
          const maxOrder = categories.length > 0 ? Math.max(...categories.map(c => c.sort_order)) + 1 : 0;
          const { error } = await supabase.from('categories').insert({ ...payload, sort_order: maxOrder });
          if (error) throw error;
        }
        fetchData();
        triggerToast('Kateqoriya verilənlər bazasında yadda saxlanıldı.');
      }
      setShowCatModal(false);
      setEditingCat(null);
      setCatName('');
      setCatNameEn('');
      setCatNameRu('');
    } catch (err) {
      console.error(err);
      triggerToast('Kateqoriyanın yadda saxlanılmasında xəta baş verdi.');
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm('Bu kateqoriyanı silmək istədiyinizdən əminsiniz? Bütün müvafiq məhsullar silinəcək.')) return;

    try {
      if (isDemoMode) {
        const updatedCats = categories.filter(c => c.id !== id);
        const updatedProds = products.filter(p => p.category_id !== id);
        setCategories(updatedCats);
        setProducts(updatedProds);
        localStorage.setItem('luna_demo_categories', JSON.stringify(updatedCats));
        localStorage.setItem('luna_demo_products', JSON.stringify(updatedProds));
      } else {
        const { error } = await supabase.from('categories').delete().eq('id', id);
        if (error) throw error;
        fetchData();
      }
      triggerToast('Kateqoriya silindi.');
    } catch (err) {
      console.error(err);
      triggerToast('Kateqoriyanın silinməsində xəta baş verdi.');
    }
  };



  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      triggerToast('Fayl çox böyükdür (Maksimum 5MB).');
      return;
    }

    setUploadingPhoto(true);

    try {
      if (isDemoMode) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProdForm(prev => ({ ...prev, photo_url: reader.result }));
          setUploadingPhoto(false);
          triggerToast('Şəkil yükləndi (Demo rejimində Base64 kimi saxlanıldı).');
        };
        reader.readAsDataURL(file);
      } else {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('product-photos')
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: true
          });

        if (uploadError) {
          console.error('Upload error details:', uploadError);
          throw new Error(
            'Şəkil yüklənmədi. Zəhmət olmasa Supabase panelinizdə Storage bölməsinə daxil olub "product-photos" adında Public (İctimai) bucket yaradın və təkrar yoxlayın.'
          );
        }

        const { data: { publicUrl } } = supabase.storage
          .from('product-photos')
          .getPublicUrl(filePath);

        setProdForm(prev => ({ ...prev, photo_url: publicUrl }));
        setUploadingPhoto(false);
        triggerToast('Şəkil uğurla yükləndi.');
      }
    } catch (err) {
      console.error(err);
      alert(err.message || 'Şəkil yüklənməsində xəta baş verdi.');
      setUploadingPhoto(false);
    }
  };

  const handleAddModRow = () => {
    setProdForm(prev => ({
      ...prev,
      mods: [
        ...prev.mods,
        { id: '', name: '', name_en: '', name_ru: '', price: '' }
      ]
    }));
  };

  const handleModRowChange = (index, field, value) => {
    setProdForm(prev => {
      const updatedMods = prev.mods.map((mod, idx) => 
        idx === index ? { ...mod, [field]: value } : mod
      );
      return { ...prev, mods: updatedMods };
    });
  };

  const handleRemoveModRow = (index) => {
    setProdForm(prev => ({
      ...prev,
      mods: prev.mods.filter((_, idx) => idx !== index)
    }));
  };

  // ----------------------------------------------------
  // PRODUCTS CRUD
  // ----------------------------------------------------
  const handleSaveProduct = async (e) => {
    e.preventDefault();
    if (!prodForm.name.trim() || !prodForm.category_id) return;

    // Filter out modifications that are completely blank (both name and price are empty)
    const activeMods = (prodForm.mods || []).filter(m => {
      const hasName = m.name && m.name.toString().trim() !== '';
      const hasPrice = m.price && m.price.toString().trim() !== '';
      return hasName || hasPrice;
    });

    let basePrice = null;
    if (prodForm.price !== undefined && prodForm.price !== null && prodForm.price.toString().trim() !== '') {
      const parsed = parseFloat(prodForm.price);
      if (!isNaN(parsed)) {
        basePrice = parsed;
      }
    }

    if (activeMods.length > 0) {
      basePrice = null;
    }

    try {
      if (isDemoMode) {
        let updatedProds = [...products];
        const prodId = editingProd ? editingProd.id : 'p-' + Date.now().toString();

        if (editingProd) {
          updatedProds = updatedProds.map(p => p.id === editingProd.id ? { 
            ...p, 
            name: prodForm.name,
            name_en: prodForm.name_en,
            name_ru: prodForm.name_ru,
            category_id: prodForm.category_id,
            description: prodForm.description,
            description_en: prodForm.description_en,
            description_ru: prodForm.description_ru,
            price: basePrice,
            photo_url: prodForm.photo_url,
            is_available: prodForm.is_available
          } : p);
        } else {
          const newProd = {
            id: prodId,
            name: prodForm.name,
            name_en: prodForm.name_en,
            name_ru: prodForm.name_ru,
            category_id: prodForm.category_id,
            description: prodForm.description,
            description_en: prodForm.description_en,
            description_ru: prodForm.description_ru,
            price: basePrice,
            photo_url: prodForm.photo_url,
            is_available: prodForm.is_available,
            sort_order: products.length > 0 ? Math.max(...products.map(p => p.sort_order)) + 1 : 0
          };
          updatedProds.push(newProd);
        }
        const sortedProds = sortProductsByMenuOrder(updatedProds, categories);
        setProducts(sortedProds);
        localStorage.setItem('luna_demo_products', JSON.stringify(sortedProds));

        // Save modifications for demo mode
        let updatedMods = modifications.filter(m => m.product_id !== prodId);
        if (activeMods.length > 0) {
          const newMods = activeMods.map(m => ({
            id: m.id && m.id.startsWith('m-') ? m.id : 'm-' + Math.random().toString(36).substr(2, 9),
            product_id: prodId,
            name: m.name,
            name_en: m.name_en || '',
            name_ru: m.name_ru || '',
            price: m.price ? parseFloat(m.price) : 0
          }));
          updatedMods = [...updatedMods, ...newMods];
        }
        setModifications(updatedMods);
        localStorage.setItem('luna_demo_modifications', JSON.stringify(updatedMods));

        triggerToast('Məhsul yadda saxlanıldı.');
      } else {
        const payload = {
          name: prodForm.name,
          name_en: prodForm.name_en || null,
          name_ru: prodForm.name_ru || null,
          category_id: prodForm.category_id,
          description: prodForm.description || null,
          description_en: prodForm.description_en || null,
          description_ru: prodForm.description_ru || null,
          price: basePrice,
          photo_url: prodForm.photo_url || null,
          is_available: prodForm.is_available
        };

        let prodId;
        if (editingProd) {
          prodId = editingProd.id;
          const { error } = await supabase.from('products').update(payload).eq('id', prodId);
          if (error) throw error;
        } else {
          const maxOrder = products.length > 0 ? Math.max(...products.map(p => p.sort_order)) + 1 : 0;
          const { data, error } = await supabase.from('products').insert({ ...payload, sort_order: maxOrder }).select('id').single();
          if (error) throw error;
          prodId = data.id;
        }

        // Delete all old modifications for this product ID
        const { error: delErr } = await supabase.from('modifications').delete().eq('product_id', prodId);
        if (delErr) throw delErr;

        // Insert new modifications
        if (activeMods.length > 0) {
          const modsPayload = activeMods.map(m => ({
            product_id: prodId,
            name: m.name,
            name_en: m.name_en || null,
            name_ru: m.name_ru || null,
            price: m.price ? parseFloat(m.price) : 0
          }));
          const { error: insErr } = await supabase.from('modifications').insert(modsPayload);
          if (insErr) throw insErr;
        }

        fetchData();
        triggerToast('Məhsul yadda saxlanıldı.');
      }
      setShowProdModal(false);
      setEditingProd(null);
    } catch (err) {
      console.error(err);
      triggerToast('Məhsulun yadda saxlanılmasında xəta baş verdi.');
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!window.confirm('Bu məhsulu silmək istəyirsiniz? Bütün müvafiq ölçü/qiymət seçimləri silinəcək.')) return;

    try {
      if (isDemoMode) {
        const updated = products.filter(p => p.id !== id);
        const updatedMods = modifications.filter(m => m.product_id !== id);
        setProducts(updated);
        setModifications(updatedMods);
        localStorage.setItem('luna_demo_products', JSON.stringify(updated));
        localStorage.setItem('luna_demo_modifications', JSON.stringify(updatedMods));
      } else {
        const { error } = await supabase.from('products').delete().eq('id', id);
        if (error) throw error;
        fetchData();
      }
      triggerToast('Məhsul silindi.');
    } catch (err) {
      console.error(err);
      triggerToast('Məhsulun silinməsində xəta baş verdi.');
    }
  };

  const toggleProductAvailability = async (product) => {
    const updatedStatus = !product.is_available;
    try {
      if (isDemoMode) {
        const updated = products.map(p => p.id === product.id ? { ...p, is_available: updatedStatus } : p);
        setProducts(updated);
        localStorage.setItem('luna_demo_products', JSON.stringify(updated));
      } else {
        const { error } = await supabase.from('products').update({ is_available: updatedStatus }).eq('id', product.id);
        if (error) throw error;
        fetchData();
      }
      triggerToast(`${product.name} indi ${updatedStatus ? 'mövcuddur' : 'tükənib'}`);
    } catch (e) {
      console.error(e);
      triggerToast('Statusun yenilənməsində xəta baş verdi.');
    }
  };



  // ----------------------------------------------------
  // MODIFICATIONS CRUD (Sizes & Options)
  // ----------------------------------------------------
  const handleSaveMod = async (e) => {
    e.preventDefault();
    if (!modForm.name.trim() || !modForm.price || !modForm.product_id) return;

    try {
      if (isDemoMode) {
        let updated = [...modifications];
        if (editingMod) {
          updated = updated.map(m => m.id === editingMod.id ? {
            ...m,
            name: modForm.name,
            name_en: modForm.name_en,
            name_ru: modForm.name_ru,
            price: parseFloat(modForm.price),
            product_id: modForm.product_id
          } : m);
        } else {
          const newMod = {
            id: 'm-' + Date.now().toString(),
            name: modForm.name,
            name_en: modForm.name_en,
            name_ru: modForm.name_ru,
            price: parseFloat(modForm.price),
            product_id: modForm.product_id
          };
          updated.push(newMod);
        }
        setModifications(updated);
        localStorage.setItem('luna_demo_modifications', JSON.stringify(updated));
      } else {
        const payload = {
          name: modForm.name,
          name_en: modForm.name_en || null,
          name_ru: modForm.name_ru || null,
          price: parseFloat(modForm.price),
          product_id: modForm.product_id
        };

        if (editingMod) {
          const { error } = await supabase.from('modifications').update(payload).eq('id', editingMod.id);
          if (error) throw error;
        } else {
          const { error } = await supabase.from('modifications').insert(payload);
          if (error) throw error;
        }
        fetchData();
      }
      setShowModModal(false);
      setEditingMod(null);
      triggerToast('Seçim/Ölçü yadda saxlanıldı.');
    } catch (err) {
      console.error(err);
      triggerToast('Seçim/Ölçünün yadda saxlanılmasında xəta baş verdi.');
    }
  };

  const handleDeleteMod = async (id) => {
    if (!window.confirm('Bu ölçü seçimini silmək istəyirsiniz?')) return;

    try {
      if (isDemoMode) {
        const updated = modifications.filter(m => m.id !== id);
        setModifications(updated);
        localStorage.setItem('luna_demo_modifications', JSON.stringify(updated));
      } else {
        const { error } = await supabase.from('modifications').delete().eq('id', id);
        if (error) throw error;
        fetchData();
      }
      triggerToast('Seçim/Ölçü silindi.');
    } catch (e) {
      console.error(e);
      triggerToast('Seçim/Ölçünün silinməsində xəta baş verdi.');
    }
  };

  // ----------------------------------------------------
  // SETTINGS MANAGEMENT
  // ----------------------------------------------------
  const handleSaveSettings = async (e) => {
    e.preventDefault();

    try {
      if (isDemoMode) {
        localStorage.setItem('luna_demo_settings', JSON.stringify(settings));
        triggerToast('Ayarlar yerli yaddaşda yeniləndi.');
      } else {
        setLoading(true);
        // Save each settings key individually in settings table
        for (const [key, value] of Object.entries(settings)) {
          const { error } = await supabase
            .from('settings')
            .upsert({ key, value });
          if (error) throw error;
        }
        fetchData();
        triggerToast('Ayarlar verilənlər bazasında yadda saxlanıldı.');
      }
    } catch (err) {
      console.error(err);
      triggerToast('Ayarların yadda saxlanılmasında xəta baş verdi.');
      setLoading(false);
    }
  };

  // Draw QR code inside canvas
  useEffect(() => {
    if (activeTab === 'qrcode' && qrCanvasRef.current) {
      const menuUrl = window.location.origin + window.location.pathname + '#/';
      QRCode.toCanvas(
        qrCanvasRef.current,
        menuUrl,
        {
          width: 250,
          margin: 2,
          color: {
            dark: '#2C1A11', // Deep dark wood color
            light: '#FFFFFF' // White background
          }
        },
        (error) => {
          if (error) console.error('QR code generation failed:', error);
        }
      );
    }
  }, [activeTab]);

  const handlePrintQR = () => {
    window.print();
  };

  return (
    <div className="admin-container">
      {/* Toast popup */}
      {toast && <div className="toast">{toast}</div>}

      {/* Header bar */}
      <header className="admin-header">
        <div>
          <h1 style={{ fontSize: '2rem' }}>İdarəetmə Paneli</h1>
          <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>{settings.shop_name || 'Luna Cafe'}</span>
            {isDemoMode && <span style={{ padding: '2px 6px', backgroundColor: 'var(--bg-cream-dark)', borderRadius: '10px', fontSize: '0.7rem' }}>Demo Yaddaş</span>}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a href="#/" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <Eye size={16} /> Menyuya Bax
          </a>
          <button className="btn btn-danger" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} onClick={onLogout}>
            <LogOut size={16} /> Çıxış
          </button>
        </div>
      </header>

      {/* Navigation tabs */}
      <nav className="admin-nav">
        <button className={`admin-tab ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>
          <Coffee size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> Məhsullar
        </button>
        <button className={`admin-tab ${activeTab === 'categories' ? 'active' : ''}`} onClick={() => setActiveTab('categories')}>
          <FolderEdit size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> Kateqoriyalar
        </button>
        <button className={`admin-tab ${activeTab === 'modifications' ? 'active' : ''}`} onClick={() => setActiveTab('modifications')}>
          <Sliders size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> Ölçülər və Qiymətlər
        </button>
        <button className={`admin-tab ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
          <Settings size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> Mağaza Ayarları
        </button>
        <button className={`admin-tab ${activeTab === 'qrcode' ? 'active' : ''}`} onClick={() => setActiveTab('qrcode')}>
          <QrCode size={16} style={{ marginRight: '4px', verticalAlign: 'text-bottom' }} /> QR Kod
        </button>
      </nav>

      {/* Main dashboard panels */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--wood-medium)' }}>
          <p>Verilənlər bazasına qoşulur...</p>
        </div>
      ) : (
        <>
          {/* TAB 1: PRODUCTS / ITEMS */}
          {activeTab === 'products' && (() => {
            const filteredProducts = products.filter(prod => {
              const query = searchQuery.toLowerCase().trim();
              if (!query) return true;
              const nameMatch = prod.name.toLowerCase().includes(query);
              const nameEnMatch = prod.name_en && prod.name_en.toLowerCase().includes(query);
              const nameRuMatch = prod.name_ru && prod.name_ru.toLowerCase().includes(query);
              const descMatch = prod.description && prod.description.toLowerCase().includes(query);
              const descEnMatch = prod.description_en && prod.description_en.toLowerCase().includes(query);
              const descRuMatch = prod.description_ru && prod.description_ru.toLowerCase().includes(query);
              const cat = categories.find(c => c.id === prod.category_id);
              const catMatch = cat && cat.name.toLowerCase().includes(query);
              return nameMatch || nameEnMatch || nameRuMatch || descMatch || descEnMatch || descRuMatch || catMatch;
            });

            return (
              <div className="dashboard-panel">
                <div className="panel-header" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: 0 }}>Menyu Məhsulları ({filteredProducts.length} / {products.length})</h3>
                  
                  {/* Search Bar */}
                  <div style={{ flex: '1', minWidth: '220px', maxWidth: '350px', position: 'relative' }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Məhsulları ad, təsvir və ya kateqoriyaya görə axtar..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      style={{ paddingLeft: '2.5rem', borderRadius: '8px', width: '100%', height: '38px', margin: 0 }}
                    />
                    <span style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--wood-medium)', display: 'flex', alignItems: 'center' }}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </span>
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--wood-medium)', cursor: 'pointer', fontSize: '1rem', padding: '0.2rem' }}
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <button className="btn btn-primary" style={{ margin: 0 }} onClick={() => {
                    setEditingProd(null);
                    setProdForm({
                      name: '',
                      name_en: '',
                      name_ru: '',
                      category_id: categories[0]?.id || '',
                      description: '',
                      description_en: '',
                      description_ru: '',
                      price: '',
                      photo_url: '',
                      is_available: true,
                      mods: []
                    });
                    setShowProdModal(true);
                  }}>
                    <Plus size={16} /> Yeni Məhsul Əlavə et
                  </button>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th style={{ width: '60px' }}>Sıra</th>
                        <th>Şəkil</th>
                        <th>Ad</th>
                        <th>Kateqoriya</th>
                        <th>Təsvir</th>
                        <th>Baza Qiyməti</th>
                        <th>Status</th>
                        <th>Əməliyyatlar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProducts.map((prod) => {
                        const index = products.findIndex(p => p.id === prod.id);
                        const cat = categories.find(c => c.id === prod.category_id);
                        return (
                          <tr 
                            key={prod.id}
                            data-type="product"
                            data-index={index}
                            onDragOver={handleProdDragOver}
                            className={`draggable-row ${draggedProdIndex === index ? 'dragging-row' : ''}`}
                          >
                            <td>
                              {!searchQuery ? (
                                <div 
                                  className="drag-handle"
                                  draggable={true}
                                  data-type="product"
                                  data-index={index}
                                  onDragStart={handleProdDragStart}
                                  onDragEnd={handleProdDragEnd}
                                  onTouchStart={handleTouchStart}
                                  onTouchMove={handleTouchMove}
                                  onTouchEnd={handleTouchEnd}
                                  style={{ touchAction: 'none' }}
                                  title="Sıralamanı dəyişmək üçün sürüşdürün"
                                >
                                  <GripVertical size={16} />
                                </div>
                              ) : (
                                <span style={{ fontSize: '0.75rem', color: 'var(--wood-medium)', fontStyle: 'italic' }}>-</span>
                              )}
                            </td>
                            <td>
                              {prod.photo_url ? (
                                <img src={prod.photo_url} alt="" style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                              ) : (
                                <div style={{ width: '40px', height: '40px', backgroundColor: 'var(--bg-cream-dark)', borderRadius: '4px' }} />
                              )}
                            </td>
                            <td style={{ fontWeight: '600' }}>
                              {prod.name}
                              <div style={{ fontSize: '0.72rem', fontWeight: 'normal', color: 'var(--wood-medium)', marginTop: '4px' }}>
                                EN: {prod.name_en || '-'} | RU: {prod.name_ru || '-'}
                              </div>
                            </td>
                            <td>{cat ? cat.name : 'Kateqoriyasız'}</td>
                            <td style={{ fontSize: '0.85rem', color: 'var(--wood-medium)', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              <div>AZ: {prod.description || '-'}</div>
                              <div style={{ fontSize: '0.72rem', color: 'rgba(44, 26, 17, 0.6)' }}>EN: {prod.description_en || '-'} | RU: {prod.description_ru || '-'}</div>
                            </td>
                            <td style={{ fontWeight: '600' }}>{prod.price ? `${prod.price} AZN` : 'Ölçülər'}</td>
                            <td>
                              <button
                                onClick={() => toggleProductAvailability(prod)}
                                style={{ color: prod.is_available ? 'var(--success)' : 'var(--wood-medium)', background: 'none', border: 'none', cursor: 'pointer' }}
                              >
                                {prod.is_available ? <ToggleRight size={24} /> : <ToggleLeft size={24} />}
                              </button>
                            </td>
                            <td className="actions-cell">
                              <button className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem' }} onClick={() => {
                                setEditingProd(prod);
                                const prodMods = modifications.filter(m => m.product_id === prod.id);
                                setProdForm({
                                  name: prod.name,
                                  name_en: prod.name_en || '',
                                  name_ru: prod.name_ru || '',
                                  category_id: prod.category_id,
                                  description: prod.description || '',
                                  description_en: prod.description_en || '',
                                  description_ru: prod.description_ru || '',
                                  price: prod.price !== null ? prod.price.toString() : '',
                                  photo_url: prod.photo_url || '',
                                  is_available: prod.is_available,
                                  mods: prodMods.map(m => ({
                                    id: m.id,
                                    name: m.name,
                                    name_en: m.name_en || '',
                                    name_ru: m.name_ru || '',
                                    price: m.price.toString()
                                  }))
                                });
                                setShowProdModal(true);
                              }}>
                                <Edit2 size={14} />
                              </button>
                              <button className="btn btn-danger" style={{ padding: '0.3rem 0.6rem' }} onClick={() => handleDeleteProduct(prod.id)}>
                                <Trash2 size={14} />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()}

          {/* TAB 2: CATEGORIES */}
          {activeTab === 'categories' && (
            <div className="dashboard-panel">
              <div className="panel-header">
                <h3>Menyu Kateqoriyaları ({categories.length})</h3>
                <button className="btn btn-primary" onClick={() => {
                  setEditingCat(null);
                  setCatName('');
                  setShowCatModal(true);
                }}>
                  <Plus size={16} /> Kateqoriya Əlavə et
                </button>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th style={{ width: '40px' }}>Sıra</th>
                      <th>Kateqoriya Adı</th>
                      <th>Məhsul Sayı</th>
                      <th>Əməliyyatlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((cat, index) => {
                      const count = products.filter(p => p.category_id === cat.id).length;
                      return (
                        <tr 
                          key={cat.id}
                          data-type="category"
                          data-index={index}
                          onDragOver={handleCatDragOver}
                          className={`draggable-row ${draggedCatIndex === index ? 'dragging-row' : ''}`}
                        >
                          <td>
                            <div 
                              className="drag-handle"
                              draggable={true}
                              data-type="category"
                              data-index={index}
                              onDragStart={handleCatDragStart}
                              onDragEnd={handleCatDragEnd}
                              onTouchStart={handleTouchStart}
                              onTouchMove={handleTouchMove}
                              onTouchEnd={handleTouchEnd}
                              style={{ touchAction: 'none' }}
                              title="Sıralamanı dəyişmək üçün sürüşdürün"
                            >
                              <GripVertical size={16} />
                            </div>
                          </td>
                          <td style={{ fontWeight: '600' }}>
                            {cat.name}
                            <div style={{ fontSize: '0.72rem', fontWeight: 'normal', color: 'var(--wood-medium)', marginTop: '4px' }}>
                              EN: {cat.name_en || '-'} | RU: {cat.name_ru || '-'}
                            </div>
                          </td>
                          <td>{count} məhsul</td>
                          <td className="actions-cell">
                            <button className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem' }} onClick={() => {
                              setEditingCat(cat);
                              setCatName(cat.name);
                              setCatNameEn(cat.name_en || '');
                              setCatNameRu(cat.name_ru || '');
                              setShowCatModal(true);
                            }}>
                              <Edit2 size={14} />
                            </button>
                            <button className="btn btn-danger" style={{ padding: '0.3rem 0.6rem' }} onClick={() => handleDeleteCategory(cat.id)}>
                              <Trash2 size={14} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: MODIFICATIONS / PRICING */}
          {activeTab === 'modifications' && (() => {
            const filteredMods = modifications.filter(mod => {
              if (!modSearchQuery) return true;
              const query = modSearchQuery.toLowerCase().trim();
              const prod = products.find(p => p.id === mod.product_id);
              
              const prodNameMatch = prod && (
                (prod.name && prod.name.toLowerCase().includes(query)) ||
                (prod.name_en && prod.name_en.toLowerCase().includes(query)) ||
                (prod.name_ru && prod.name_ru.toLowerCase().includes(query))
              );
              
              const modNameMatch = (
                (mod.name && mod.name.toLowerCase().includes(query)) ||
                (mod.name_en && mod.name_en.toLowerCase().includes(query)) ||
                (mod.name_ru && mod.name_ru.toLowerCase().includes(query))
              );
              
              return prodNameMatch || modNameMatch;
            });

            return (
              <div className="dashboard-panel">
                <div className="panel-header" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                  <h3 style={{ margin: 0 }}>Məhsul Ölçüləri və Qiymətləri ({filteredMods.length} / {modifications.length})</h3>
                  
                  {/* Search Bar */}
                  <div style={{ flex: '1', minWidth: '220px', maxWidth: '350px', position: 'relative' }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ölçüləri məhsul və ya seçim adına görə axtar..."
                      value={modSearchQuery}
                      onChange={(e) => setModSearchQuery(e.target.value)}
                      style={{ paddingLeft: '2.5rem', borderRadius: '8px', width: '100%', height: '38px', margin: 0 }}
                    />
                    <span style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--wood-medium)', display: 'flex', alignItems: 'center' }}>
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.7" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </span>
                    {modSearchQuery && (
                      <button 
                        onClick={() => setModSearchQuery('')}
                        style={{ position: 'absolute', right: '0.85rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--wood-medium)', cursor: 'pointer', fontSize: '1rem', padding: '0.2rem' }}
                      >
                        ✕
                      </button>
                    )}
                  </div>

                  <button className="btn btn-primary" onClick={() => {
                    setEditingMod(null);
                    setModForm({ product_id: products[0]?.id || '', name: '', price: '' });
                    setShowModModal(true);
                  }}>
                    <Plus size={16} /> Xüsusi Qiymət Seçimi Əlavə et
                  </button>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Məhsulun Adı</th>
                        <th>Ölçü/Seçim Adı</th>
                        <th>Qiymət</th>
                        <th>Əməliyyatlar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMods.length === 0 ? (
                        <tr>
                          <td colSpan="4" style={{ textAlign: 'center', padding: '2rem', color: 'var(--wood-medium)' }}>
                            Axtarışa uyğun ölçü və ya qiymət seçimi tapılmadı.
                          </td>
                        </tr>
                      ) : (
                        filteredMods.map((mod) => {
                          const prod = products.find(p => p.id === mod.product_id);
                          return (
                            <tr key={mod.id}>
                              <td style={{ fontWeight: '600' }}>{prod ? prod.name : 'Naməlum Məhsul'}</td>
                              <td>
                                <span style={{ backgroundColor: 'var(--bg-cream-dark)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85rem' }}>
                                  {mod.name}
                                </span>
                                <div style={{ fontSize: '0.72rem', color: 'var(--wood-medium)', marginTop: '4px' }}>
                                  EN: {mod.name_en || '-'} | RU: {mod.name_ru || '-'}
                                </div>
                              </td>
                              <td style={{ fontWeight: '700', color: 'var(--accent-gold)' }}>{mod.price} AZN</td>
                              <td className="actions-cell">
                                <button className="btn btn-secondary" style={{ padding: '0.3rem 0.6rem' }} onClick={() => {
                                  setEditingMod(mod);
                                  setModForm({
                                    product_id: mod.product_id,
                                    name: mod.name,
                                    name_en: mod.name_en || '',
                                    name_ru: mod.name_ru || '',
                                    price: mod.price
                                  });
                                  setShowModModal(true);
                                }}>
                                  <Edit2 size={14} />
                                </button>
                                <button className="btn btn-danger" style={{ padding: '0.3rem 0.6rem', marginLeft: '0.5rem' }} onClick={() => handleDeleteMod(mod.id)}>
                                  <Trash2 size={14} />
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()}

          {/* TAB 4: SHOP SETTINGS */}
          {activeTab === 'settings' && (
            <form className="dashboard-panel" onSubmit={handleSaveSettings}>
              <div className="panel-header">
                <h3>Mağaza Konfiqurasiyası</h3>
                <button type="submit" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Save size={16} /> Ayarları Yadda Saxla
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Mağaza Adı</label>
                  <input
                    type="text"
                    className="form-control"
                    value={settings.shop_name || ''}
                    onChange={(e) => setSettings({ ...settings, shop_name: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label"><Wifi size={14} style={{ marginRight: '4px' }} /> Wi-Fi Şəbəkə Adı (SSID)</label>
                    <input
                      type="text"
                      className="form-control"
                      value={settings.wifi_name || ''}
                      onChange={(e) => setSettings({ ...settings, wifi_name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Wi-Fi Şifrəsi</label>
                    <input
                      type="text"
                      className="form-control"
                      value={settings.wifi_pass || ''}
                      onChange={(e) => setSettings({ ...settings, wifi_pass: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label"><MapPin size={14} style={{ marginRight: '4px' }} /> Mağaza Ünvanı</label>
                  <input
                    type="text"
                    className="form-control"
                    value={settings.address || ''}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label"><Instagram size={14} style={{ marginRight: '4px' }} /> Instagram Keçidi</label>
                    <input
                      type="url"
                      className="form-control"
                      value={settings.instagram_url || ''}
                      onChange={(e) => setSettings({ ...settings, instagram_url: e.target.value })}
                      placeholder="https://instagram.com/..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label"><Globe size={14} style={{ marginRight: '4px' }} /> TikTok / Veb Sayt Keçidi</label>
                    <input
                      type="url"
                      className="form-control"
                      value={settings.tiktok_url || ''}
                      onChange={(e) => setSettings({ ...settings, tiktok_url: e.target.value })}
                      placeholder="https://tiktok.com/@..."
                    />
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* TAB 5: QR CODE PRINTING */}
          {activeTab === 'qrcode' && (
            <div className="dashboard-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="panel-header">
                <h3>Menyu QR Kodu</h3>
                <button className="btn btn-primary" onClick={handlePrintQR}>
                  QR Menyu Kartını Çap Et
                </button>
              </div>

              <div className="printable-qr-area">
                <div className="qr-print-box">
                  <h2 style={{ fontFamily: 'var(--font-header)', fontSize: '1.75rem', marginBottom: '0.25rem', color: 'var(--wood-dark)', textAlign: 'center' }}>
                    {settings.shop_name}
                  </h2>
                  <p style={{ fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--wood-medium)', marginTop: '-0.25rem', marginBottom: '1rem' }}>
                    Rəqəmsal menyuya baxmaq üçün skan edin
                  </p>
                  
                  <div className="qr-canvas-wrapper">
                    <canvas ref={qrCanvasRef} id="qr-code-canvas"></canvas>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--wood-medium)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Wifi size={14} /> Wi-Fi: <strong>{settings.wifi_name}</strong>
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--wood-medium)', marginTop: '-0.5rem' }}>
                    Şifrə: <code>{settings.wifi_pass}</code>
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* ------------------------------------------------ */}
      {/* DIALOG MODALS */}
      {/* ------------------------------------------------ */}

      {/* Category Add/Edit Modal */}
      {showCatModal && (
        <div className="admin-modal-overlay">
          <form className="admin-modal" onSubmit={handleSaveCategory}>
            <div className="admin-modal-header">
              <h4>{editingCat ? 'Kateqoriyanın Adını Dəyişdir' : 'Yeni Kateqoriya Yarat'}</h4>
              <button type="button" className="close-button" style={{ position: 'static' }} onClick={() => setShowCatModal(false)}>
                <X size={16} />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Kateqoriya Adı (AZ - Standart)</label>
                <input
                  type="text"
                  className="form-control"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  placeholder="məs. SETLER"
                  required
                  autoFocus
                />
              </div>
              <div className="form-group">
                <label className="form-label">Kateqoriya Adı (EN - İstəyə görə)</label>
                <input
                  type="text"
                  className="form-control"
                  value={catNameEn}
                  onChange={(e) => setCatNameEn(e.target.value)}
                  placeholder="məs. SETS"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Kateqoriya Adı (RU - İstəyə görə)</label>
                <input
                  type="text"
                  className="form-control"
                  value={catNameRu}
                  onChange={(e) => setCatNameRu(e.target.value)}
                  placeholder="məs. СЕТЫ"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowCatModal(false)}>İmtina</button>
              <button type="submit" className="btn btn-primary">Kateqoriyanı Yadda Saxla</button>
            </div>
          </form>
        </div>
      )}

      {/* Product Add/Edit Modal */}
      {showProdModal && (
        <div className="admin-modal-overlay">
          <form className="admin-modal" onSubmit={handleSaveProduct}>
            <div className="admin-modal-header">
              <h4>{editingProd ? 'Məhsula Düzəliş et' : 'Yeni Məhsul Əlavə et'}</h4>
              <button type="button" className="close-button" style={{ position: 'static' }} onClick={() => setShowProdModal(false)}>
                <X size={16} />
              </button>
            </div>
            <div className="form-grid">
              <div className="form-group form-full">
                <label className="form-label">Məhsulun Adı (AZ - Standart)</label>
                <input
                  type="text"
                  className="form-control"
                  value={prodForm.name}
                  onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                  placeholder="məs. Cortado"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Məhsulun Adı (EN - İstəyə görə)</label>
                <input
                  type="text"
                  className="form-control"
                  value={prodForm.name_en || ''}
                  onChange={(e) => setProdForm({ ...prodForm, name_en: e.target.value })}
                  placeholder="məs. Cortado"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Məhsulun Adı (RU - İstəyə görə)</label>
                <input
                  type="text"
                  className="form-control"
                  value={prodForm.name_ru || ''}
                  onChange={(e) => setProdForm({ ...prodForm, name_ru: e.target.value })}
                  placeholder="məs. Кортадо"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Kateqoriya</label>
                <select
                  className="form-control"
                  value={prodForm.category_id}
                  onChange={(e) => setProdForm({ ...prodForm, category_id: e.target.value })}
                  required
                >
                  <option value="" disabled>Kateqoriya seçin...</option>
                  {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Baza Qiyməti (AZN)</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  value={prodForm.price}
                  onChange={(e) => setProdForm({ ...prodForm, price: e.target.value })}
                  placeholder="Seçimlər/ölçülər varsa, boş buraxın"
                />
              </div>

              <div className="form-group form-full" style={{ borderTop: '1px solid var(--bg-cream-dark)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="form-label" style={{ fontWeight: 'bold', margin: 0 }}>Məhsul Ölçüləri və Qiymətləri</span>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    style={{ padding: '0.3rem 0.75rem', fontSize: '0.85rem', margin: 0 }}
                    onClick={handleAddModRow}
                  >
                    + Ölçü Əlavə Et
                  </button>
                </div>
                
                {prodForm.mods && prodForm.mods.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {prodForm.mods.map((mod, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', background: 'var(--bg-cream)', padding: '0.75rem', borderRadius: '6px', border: '1px solid var(--bg-cream-dark)' }}>
                        <div style={{ flex: '1', minWidth: '120px' }}>
                          <label style={{ fontSize: '0.75rem', color: 'var(--wood-medium)', display: 'block', marginBottom: '0.2rem' }}>Ad (AZ)</label>
                          <input
                            type="text"
                            className="form-control"
                            style={{ height: '32px', padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}
                            value={mod.name}
                            onChange={(e) => handleModRowChange(idx, 'name', e.target.value)}
                            placeholder="məs. Böyük"
                            required
                          />
                        </div>
                        <div style={{ flex: '1', minWidth: '120px' }}>
                          <label style={{ fontSize: '0.75rem', color: 'var(--wood-medium)', display: 'block', marginBottom: '0.2rem' }}>Ad (EN)</label>
                          <input
                            type="text"
                            className="form-control"
                            style={{ height: '32px', padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}
                            value={mod.name_en || ''}
                            onChange={(e) => handleModRowChange(idx, 'name_en', e.target.value)}
                            placeholder="məs. Large"
                          />
                        </div>
                        <div style={{ flex: '1', minWidth: '120px' }}>
                          <label style={{ fontSize: '0.75rem', color: 'var(--wood-medium)', display: 'block', marginBottom: '0.2rem' }}>Ad (RU)</label>
                          <input
                            type="text"
                            className="form-control"
                            style={{ height: '32px', padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}
                            value={mod.name_ru || ''}
                            onChange={(e) => handleModRowChange(idx, 'name_ru', e.target.value)}
                            placeholder="məs. Большой"
                          />
                        </div>
                        <div style={{ width: '90px' }}>
                          <label style={{ fontSize: '0.75rem', color: 'var(--wood-medium)', display: 'block', marginBottom: '0.2rem' }}>Qiymət</label>
                          <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            style={{ height: '32px', padding: '0.25rem 0.5rem', fontSize: '0.85rem' }}
                            value={mod.price}
                            onChange={(e) => handleModRowChange(idx, 'price', e.target.value)}
                            placeholder="Qiymət"
                            required
                          />
                        </div>
                        <button
                          type="button"
                          className="btn btn-danger"
                          style={{ padding: '0.35rem', marginTop: '1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', minWidth: '32px', margin: 0 }}
                          onClick={() => handleRemoveModRow(idx)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ fontSize: '0.85rem', color: 'var(--wood-medium)', margin: 0, fontStyle: 'italic' }}>Heç bir ölçü əlavə edilməyib (Məhsul tək baza qiyməti ilə satılır).</p>
                )}
              </div>

              <div className="form-group form-full">
                <label className="form-label">Təsvir (AZ - Standart)</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={prodForm.description || ''}
                  onChange={(e) => setProdForm({ ...prodForm, description: e.target.value })}
                  placeholder="Tərkibi, detallar..."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Təsvir (EN - İstəyə görə)</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={prodForm.description_en || ''}
                  onChange={(e) => setProdForm({ ...prodForm, description_en: e.target.value })}
                  placeholder="məs. Ingredients, details..."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Təsvir (RU - İstəyə görə)</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={prodForm.description_ru || ''}
                  onChange={(e) => setProdForm({ ...prodForm, description_ru: e.target.value })}
                  placeholder="məs. Ингредиенты, детали..."
                />
              </div>

              <div className="form-group form-full">
                <label className="form-label">Məhsul Şəkli (Cihazdan yükləyin və ya URL daxil edin)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <label 
                      className="btn btn-secondary" 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        cursor: 'pointer',
                        margin: 0,
                        padding: '0.5rem 1rem',
                        fontSize: '0.9rem'
                      }}
                    >
                      <Upload size={16} />
                      {uploadingPhoto ? 'Yüklənir...' : 'Cihazdan Şəkil Seç'}
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handlePhotoUpload} 
                        style={{ display: 'none' }}
                        disabled={uploadingPhoto}
                      />
                    </label>
                    {prodForm.photo_url && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        style={{ color: 'var(--danger)', border: '1px solid var(--danger)', padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                        onClick={() => setProdForm({ ...prodForm, photo_url: '' })}
                      >
                        Şəkli Sil
                      </button>
                    )}
                  </div>
                  
                  <input
                    type="text"
                    className="form-control"
                    value={prodForm.photo_url}
                    onChange={(e) => setProdForm({ ...prodForm, photo_url: e.target.value })}
                    placeholder="Və ya birbaşa şəkil URL-i daxil edin..."
                  />

                  {prodForm.photo_url && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                      <span className="form-label" style={{ fontSize: '0.8rem' }}>Ön baxış:</span>
                      <img
                        src={prodForm.photo_url}
                        alt="Ön baxış"
                        style={{
                          maxWidth: '150px',
                          maxHeight: '120px',
                          borderRadius: 'var(--radius-md)',
                          objectFit: 'cover',
                          border: '1px solid var(--bg-cream-dark)'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group form-full" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                <button
                  type="button"
                  style={{ color: prodForm.is_available ? 'var(--success)' : 'var(--wood-medium)' }}
                  onClick={() => setProdForm({ ...prodForm, is_available: !prodForm.is_available })}
                >
                  {prodForm.is_available ? <ToggleRight size={32} /> : <ToggleLeft size={32} />}
                </button>
                <span className="form-label" style={{ cursor: 'pointer' }} onClick={() => setProdForm({ ...prodForm, is_available: !prodForm.is_available })}>
                  Məhsul menyuda mövcuddur
                </span>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowProdModal(false)}>İmtina</button>
              <button type="submit" className="btn btn-primary">Məhsulu Yadda Saxla</button>
            </div>
          </form>
        </div>
      )}

      {/* Modifications Modal */}
      {showModModal && (
        <div className="admin-modal-overlay">
          <form className="admin-modal" onSubmit={handleSaveMod}>
            <div className="admin-modal-header">
              <h4>{editingMod ? 'Seçim Qiymətinə Düzəliş et' : 'Yeni Ölçü və Qiymət Əlavə et'}</h4>
              <button type="button" className="close-button" style={{ position: 'static' }} onClick={() => setShowModModal(false)}>
                <X size={16} />
              </button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Müvafiq Məhsul</label>
                <select
                  className="form-control"
                  value={modForm.product_id}
                  onChange={(e) => setModForm({ ...modForm, product_id: e.target.value })}
                  required
                >
                  <option value="" disabled>Məhsul seçin...</option>
                  {products.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Ölçü / Seçim Adı (AZ - Standart)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="e.g. Böyük"
                      value={modForm.name}
                      onChange={(e) => setModForm({ ...modForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Qiymət (AZN)</label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      placeholder="0.00"
                      value={modForm.price}
                      onChange={(e) => setModForm({ ...modForm, price: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Ölçü Adı (EN - İstəyə görə)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="məs. Large"
                      value={modForm.name_en || ''}
                      onChange={(e) => setModForm({ ...modForm, name_en: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Ölçü Adı (RU - İstəyə görə)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="məs. Большой"
                      value={modForm.name_ru || ''}
                      onChange={(e) => setModForm({ ...modForm, name_ru: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModModal(false)}>İmtina</button>
              <button type="submit" className="btn btn-primary">Seçimi Yadda Saxla</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
