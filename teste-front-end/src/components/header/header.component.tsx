import './header.styles.scss';

import { CreditCard, Truck, Shield } from '../../assets/icons/index';
import logo from '../../assets/logo.webp';

import { CiSearch } from 'react-icons/ci';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites.hooks';

const Header: FC = () => {
  const { favoritesList } = useFavorites();
  return (
    <>
      <div className="fixed-header-container">
        <div className="container ">
          <div className="top-container">
            <ul className="list-benefits">
              <li className="list-benefits__item">
                <CreditCard />
                <span>
                  Compra <span className="custom-span">100% segura</span>
                </span>
              </li>

              <li className="list-benefits__item">
                <Truck />
                <span>
                  <span className="custom-span">Frete grátis</span> acima de R$
                  200
                </span>
              </li>

              <li className="list-benefits__item">
                <Shield />
                <span>
                  <span className="custom-span">Parcele</span> suas compras
                </span>
              </li>
            </ul>
          </div>
        </div>
        <header className="container">
          <div className="header-container">
            <Link to="/" title="Página inicial">
              <h1>
                <img
                  src={logo}
                  alt="Logo Econverse"
                  title="Logo Econverse"
                  height="42"
                  width="139"
                />
              </h1>
            </Link>

            <form role="search">
              <input
                type="search"
                placeholder="O que você está buscando?"
                aria-label="Pesquise um produto"
              />
              <CiSearch />
            </form>

            <ul className="header-items">
              <li className="header-items__item">
                <a href="/" title="Compras realizadas"></a>
              </li>
              <li className="header-items__item" id="favorites">
                {favoritesList.length === 0 ? null : (
                  <span>{favoritesList.length}</span>
                )}

                <Link to="/favorites" title="Favoritos"></Link>
              </li>

              <li className="header-items__item">
                <a href="/" title="Usuário"></a>
              </li>

              <li className="header-items__item">
                <a href="/" title="Carrinho"></a>
              </li>
            </ul>
          </div>
          <nav>
            <ul className="navbar-items">
              <li className="navbar-items__item">
                <a href="/" title="Todas as compras">
                  Todas as compras
                </a>
              </li>
              <li className="navbar-items__item">
                <a href="/" title="Supermercado">
                  Supermercado
                </a>
              </li>
              <li className="navbar-items__item">
                <a href="/" title="Livros">
                  Livros
                </a>
              </li>
              <li className="navbar-items__item">
                <a href="/" title="Moda">
                  Moda
                </a>
              </li>
              <li className="navbar-items__item">
                <a href="/" title="Lançamentos">
                  Lançamentos
                </a>
              </li>
              <li className="navbar-items__item">
                <a href="/" title="Ofertas do dia">
                  Ofertas do dia
                </a>
              </li>
              <li className="navbar-items__item navbar-items__item--custom">
                <a href="/" title="Assinatura">
                  <span className="icon"></span> Assinatura
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="block header"></div>
    </>
  );
};

export default Header;
