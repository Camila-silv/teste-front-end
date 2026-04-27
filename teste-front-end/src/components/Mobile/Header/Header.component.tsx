import './header.styles.scss';

import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.webp';

const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobile-header">
      <div className="mobile-header__top">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <Link to="/">
           <img src={logo} alt="Logo" /> 
        </Link>

        <button className="mobile-icons">
          <CiSearch />
        </button>
      </div>

      <nav className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="/" title='Todas as compras'>Todas as compras</a>
          </li>
          <li>
            <a href="/" title='Supermercado'>Supermercado</a>
          </li>
          <li>
            <a href="/" title='Livros'>Livros</a>
          </li>
          <li>
            <a href="/" title='Moda'>Moda</a>
          </li>
          <li>
            <a href="/" title='Lançamentos'>Lançamentos</a>
          </li>
          <li>
            <a href="/" title='Ofertas do dia'>Ofertas do dia</a>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
};

export default HeaderMobile;
