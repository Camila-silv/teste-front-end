import './header.styles.scss';

import creditCard from '../../../public/credit-card.svg';
import truck from '../../../public/truck.svg';
import shield from '../../../public/shield.svg';
import logo from '../../../public/logo.webp';

import { CiSearch } from 'react-icons/ci';
import { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <div>
      <div className="container ">
        <div className="top-container px">
          <ul className="list-benefits">
            <li className="list-benefits__item">
              <img
                src={creditCard}
                alt="Icone compra segura"
                title="Icone compra segura"
                height="20"
                width="20"
              />
              <span>
                Compra <span className="custom-span">100% segura</span>
              </span>
            </li>

            <li className="list-benefits__item">
              <img
                src={truck}
                alt="Icone Frete grátis"
                title="Icone Frete grátis"
                height="20"
                width="20"
              />
              <span>
                <span className="custom-span">Frete grátis</span> acima de R$
                200
              </span>
            </li>

            <li className="list-benefits__item">
              <img
                src={shield}
                alt="Icone Parcele suas compras"
                title="Icone Parcele suas compras"
                height="20"
                width="20"
              />
              <span>
                <span className="custom-span">Parcele</span> suas compras
              </span>
            </li>
          </ul>
        </div>
      </div>
      <header className="container">
        <div className="header-container">
          <img
            src={logo}
            alt="Logo Econverse"
            title="Logo Econverse"
            height="42"
            width="139"
          />

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
            <li className="header-items__item">
              <a href="/" title="Favoritos"></a>
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
  );
};

export default Header;
