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

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="/">Todas as compras</a>
          </li>
          <li>
            <a href="/">Supermercado</a>
          </li>
          <li>
            <a href="/">Livros</a>
          </li>
          <li>
            <a href="/">Moda</a>
          </li>
          <li>
            <a href="/">Lançamentos</a>
          </li>
          <li>
            <a href="/">Ofertas do dia</a>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </div>
  );
};

export default HeaderMobile;
