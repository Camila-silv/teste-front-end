import './header.styles.scss';

import { useState, FC } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.webp';

const HeaderMobile: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className="mobile-header">
        <div className="mobile-header__top">
          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link to="/" title="Página inicial">
            <img src={logo} alt="Logo Econverse" />
          </Link>

          <button type="button" className="mobile-icons">
            <CiSearch />
          </button>
        </div>

        <nav className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="/" title="Todas as compras">Todas as compras</a>
            </li>
            <li>
              <a href="/" title="Supermercado">Supermercado</a>
            </li>
            <li>
              <a href="/" title="Livros">Livros</a>
            </li>
            <li>
              <a href="/" title="Moda">Moda</a>
            </li>
            <li>
              <a href="/" title="Lançamentos">Lançamentos</a>
            </li>
            <li>
              <a href="/" title="Ofertas do dia">Ofertas do dia</a>
            </li>
          </ul>
        </nav>

        {menuOpen && (
          <div
            className="overlay"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>
    </>
  );
};

export default HeaderMobile;