import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, NavLink,Link, Routes, Route } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const handleLogout = async () => {
    try {
      await axios.post('/api/logout');
      setUser(null);
      window.location.reload();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      {/* Sub Header */}
      <div className="sub-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <ul className="info">
                <li><i className="fa fa-envelope"></i> m_mcreationn@gmail.com</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4">
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com/m_mcreationn/"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <h1>m_mcreationn</h1>
                </Link>
                
                <ul className="nav">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => isActive ? "active" : ""}
                    >
                      Principale
                    </NavLink>
                  </li>
                  <li>
                    <NavLink 
                      to="/propos" 
                      className={({ isActive }) => isActive ? "active" : ""}
                    >
                      À propos
                    </NavLink>
                  </li>
                  <li><div></div></li>
                </ul>
                
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/06213060259" 
      className="whatsapp-btn" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <i className="fab fa-whatsapp"></i> commander sur WhatsApp
    </a>
  );
};

const SearchFilter = ({ categories, onSearch, onCategoryFilter, selectedCategory }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    onCategoryFilter(categoryId);
  };

  const clearFilters = () => {
    setSearchValue('');
    onSearch('');
    onCategoryFilter('');
  };

  return (
    <div className="search-filter-container">
      <form onSubmit={handleSearchSubmit} className="search-box">
        <input 
          type="search" 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Rechercher des produits..." 
        />
        <button type="submit" className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </form>

      <div className="category-filter">
        <select 
          value={selectedCategory} 
          onChange={handleCategoryChange}
        >
          <option value="">Toutes les catégories</option>
          {categories.map(categorie => (
            <option key={categorie.id} value={categorie.id}>
              {categorie.categorie}
            </option>
          ))}
        </select>
      </div>

      {(searchValue || selectedCategory) && (
        <button onClick={clearFilters} className="clear-filters-btn">
          Effacer les filtres
        </button>
      )}
    </div>
  );
};

const CategoryGrid = ({ categories, onCategoryClick }) => {
  const categoryData = [
    {
      id: 1,
      title: 'Accessoires',
      copy: 'Découvrez nos accessoires de qualité pour tous vos besoins',
      button: 'Voir les produits',
      image_url: 'martin-de-arriba-uf_IDewI6iQ-unsplash.jpg'
    },
    {
      id: 2,
      title: 'Offres',
      copy: 'Profitez de nos offres spéciales et promotions exclusives',
      button: 'Découvrir',
      image_url: 'khampha-phimmachak-QRVx6D5fbpE-unsplash.jpg'
    },
    {
      id: 3,
      title: 'Bracelets',
      copy: 'Explorez notre collection de bracelets élégants et modernes',
      button: 'Voir la collection',
      image_url: 'diego-castaneda-5LMam0Cn88k-unsplash.jpg'
    },
    {
      id: 4,
      title: 'Anneaux',
      copy: "Explorez notre collection d'anneaux élégants et modernes",
      button: 'Voir la collection',
      image_url: 'jackie-tsang-3_YP8_mh-Kg-unsplash.jpg'
    }
  ];

  return (
    <div className="categories-section">
      <div className="page-header">
        <h1>Nos Catégories</h1>
        <p>Découvrez nos produits à travers nos différentes catégories. Survolez les cartes pour plus de détails.</p>
      </div>

      <main className="page-content">
        {categoryData.map(category => (
          <div 
            key={category.id}
            className="card" 
            style={{ '--bg-image': `url('${category.image_url}')` }}
            onClick={() => onCategoryClick(category.id)}
          >
            <div className="content">
              <h2 className="title">{category.title}</h2>
              <p className="copy">{category.copy}</p>
              <span className="btn">{category.button}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

const ProductSection = ({ categoryId, products, categoryName, onWhatsAppOrder }) => {
  const getCategoryIcon = (catId) => {
    const icons = {
      '1': 'necklace.png',
      '2': 'discount.png',
      '3': 'bracelet.png',
      '4': 'ring.png'
    };
    return icons[catId] || 'default.png';
  };

  const getCategoryTitle = (catId) => {
    const titles = {
      '1': 'Accessoires',
      '2': 'Offres',
      '3': 'Bracelets',
      '4': 'Anneaux'
    };
    return titles[catId] || 'Catégorie';
  };

  if (products.length === 0) return null;

  return (
    <div className="product-section">
      <div className="section-header">
        <div className="category-title">
          <img src={getCategoryIcon(categoryId)} alt="" style={{maxWidth: '52px'}} />
          <h6>
            {getCategoryTitle(categoryId)}
            <br />
            <span>Commander tous les {getCategoryTitle(categoryId).toLowerCase()} disponibles</span>
          </h6>
        </div>
      </div>

      <div className="properties section">
        <div className="container">
          <div className="row">
            {products.map(produit => (
              <div key={produit.id} className="col-lg-4 col-md-6">
                <div className="item">
                  <img src={produit.image} alt={produit.nom} />
                  
                  <span className="category">{categoryName}</span>
                  <h6>{produit.prix}dh</h6>
                  <h4>{produit.nom}</h4>

                  <div className="product-actions">
                    <button 
                      className="whatsapp-order-btn"
                      onClick={() => onWhatsAppOrder(produit)}
                    >
                      <i className="fab fa-whatsapp"></i> Commander sur WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="main-content">
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <span className="breadcrumb"><a href="#">Accueil</a>  /  À Propos</span>
              <h3>Notre Histoire</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="single-property section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-image">
                <img src="https://i.ibb.co/twc251yv/Whats-App-Image-2025-10-27-at-12-07-23-1.jpg" alt="Atelier M-CREATION - Création de bijoux artisanaux" />
              </div>
              <div className="main-content">
                <span className="category">Bijoux Artisanaux & Pierres Naturelles</span>
                <h4>Créateurs de Bijoux Uniques Depuis Nos Débuts</h4>
                <p>Bienvenue chez <strong>M-CREATION</strong>, votre créateur de bijoux faits main en pierres naturelles. Fondée par des passionnés d'artisanat et de minéralogie, notre atelier s'est consacré à créer des pièces uniques qui subliment votre style personnel.
                
                <br /><br />Chaque bijou est soigneusement conçu et réalisé à la main dans notre atelier, avec des pierres naturelles sélectionnées pour leur beauté et leur énergie unique. Nous croyons en une création responsable qui allie esthétique, authenticité et connexion avec la nature.</p>
              </div> 
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Notre Philosophie
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Chez <strong>M-CREATION</strong>, nous suivons trois principes fondamentaux : <code>création artisanale</code>, <code>pierres naturelles authentiques</code> et <code>pièces uniques</code>. Chaque bijou est conçu avec passion et réalisé main, garantissant son caractère exclusif et sa connexion avec les énergies naturelles des pierres.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Notre Savoir-Faire Artisanal
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Notre équipe d'artisans passionnés maîtrise les techniques traditionnelles de création de bijoux. Chaque pièce est travaillée avec soin, de la sélection des pierres naturelles à la finition, créant des bijoux qui racontent une histoire et portent une énergie unique.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Engagement Qualité
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Nous nous engageons à utiliser exclusivement des pierres naturelles et des matériaux de qualité. Chaque bijou est créé spécialement pour vous, avec une attention particulière portée aux détails et à la symbolique des pierres choisies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="info-table">
                <ul>
                  <li>
                    <i className="fas fa-hands" style={{fontSize: '32px', color: '#d4af37'}}></i>
                    <h4>100%<br /><span>Fait Main</span></h4>
                  </li>
                  <li>
                    <i className="fas fa-mountain" style={{fontSize: '32px', color: '#d4af37'}}></i>
                    <h4>Pierres<br /><span>Naturelles</span></h4>
                  </li>
                  <li>
                    <i className="fas fa-snowflake" style={{fontSize: '32px', color: '#d4af37'}}></i>
                    <h4>Pièces<br /><span>Uniques</span></h4>
                  </li>
                  <li>
                    <i className="fas fa-smile" style={{fontSize: '32px', color: '#d4af37'}}></i>
                    <h4>100%<br /><span>Satisfaction</span></h4>
                  </li>
                </ul>
              </div>
              <div className="contact-info">
                <h4>Rejoignez Notre Univers</h4>
                <div className="social-links">
                  <a href="#" className="social-link">Facebook</a>
                  <a href="https://instagram.com/m_mcreationn" className="social-link">Instagram</a>
                </div>
                <div className="contact-details">
                  <p><strong>Téléphone:</strong> +212 613-060259</p>
                  <p><strong>Email:</strong> contact@m-creation.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="brand-message text-center">
                <h3>"Des bijoux faits main en pierres naturelles, créés avec passion pour sublimer votre style unique."</h3>
                <p className="signature">- M-CREATION</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const productsRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Scroll to products when filtered results change
    if ((searchTerm || selectedCategory) && productsRef.current) {
      setTimeout(() => {
        productsRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [filteredProducts, searchTerm, selectedCategory]);

  const fetchData = async () => {
    try {
      const [categoriesRes, productsRes] = await Promise.all([
        axios.get('https://livraison-master-arwqnj.laravel.cloud/api/categories'),
        axios.get('https://livraison-master-arwqnj.laravel.cloud/api/produits')
      ]);
      setCategories(categoriesRes.data);
      setProducts(productsRes.data);
      setFilteredProducts(productsRes.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    filterProducts(searchValue, selectedCategory);
  };

  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    filterProducts(searchTerm, categoryId);
  };

  const filterProducts = (search, category) => {
    let filtered = products;

    // Filter by search term
    if (search) {
      filtered = filtered.filter(product =>
        product.nom.toLowerCase().includes(search.toLowerCase()) ||
        product.description?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter(product => product.categorie_id == category);
    }

    setFilteredProducts(filtered);
  };

  const handleWhatsAppOrder = (product) => {
    const message = `Bonjour! Je souhaite commander le produit suivant:\n\n*${product.nom}*\nPrix: ${product.prix}dh\n\nPouvez-vous me donner plus d'informations?`;
    const whatsappUrl = `https://wa.me/06213060259?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return <div className="loading">Chargement...</div>;
  }

  return (
    <div className="main-content">
      <WhatsAppButton />
      
      <SearchFilter 
        categories={categories}
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        selectedCategory={selectedCategory}
      />
      
      {!searchTerm && !selectedCategory && (
        <CategoryGrid 
          categories={categories}
          onCategoryClick={handleCategoryFilter}
        />
      )}

      {/* Products section with ref for scrolling */}
      <div ref={productsRef}>
        {(searchTerm || selectedCategory) && (
          <div className="filter-results-header">
            <h3>
              {searchTerm && `Résultats pour "${searchTerm}"`}
              {searchTerm && selectedCategory && ' dans '}
              {selectedCategory && `Catégorie: ${categories.find(c => c.id == selectedCategory)?.categorie}`}
              {!searchTerm && !selectedCategory && 'Tous les produits'}
            </h3>
            <p>{filteredProducts.length} produit(s) trouvé(s)</p>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          ['1', '2', '3', '4'].map(categoryId => {
            const categoryProducts = filteredProducts.filter(p => p.categorie_id == categoryId);
            if (categoryProducts.length === 0) return null;
            
            return (
              <ProductSection
                key={categoryId}
                categoryId={categoryId}
                products={categoryProducts}
                categoryName={categories.find(c => c.id == categoryId)?.categorie || 'Catégorie'}
                onWhatsAppOrder={handleWhatsAppOrder}
              />
            );
          })
        ) : (
          <div className="no-products">
            <h3>Aucun produit trouvé</h3>
            <p>Essayez de modifier vos critères de recherche</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component with Routing
function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/propos" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;