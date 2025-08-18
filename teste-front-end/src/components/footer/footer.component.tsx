import { FunctionComponent } from 'react';
import './footer.styles.scss';

import logo from '../../../public/logo.webp';

import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';

const Footer: FunctionComponent = () => {
  return (
    <>
      <div className="top-footer">
        <div className="container">
          <div className="top-footer__container">
            <div>
              <h2>Inscreva-se na nossa newsletter</h2>
              <p>
                Assine a nossa newsletter e receba as novidades e conteúdos
                exclusivos da Econverse.
              </p>
            </div>
            <div>
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    aria-label="Digite seu nome"
                    name="name"
                    required
                    className="input-group__input"
                  />
                  <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    aria-label="Digite seu e-mail"
                    name="mail"
                    required
                    className="input-group__input"
                  />
                  <input
                    type="submit"
                    value="Inscrever"
                    className="input-group__btn"
                  />
                </div>
                <div className="input-group input-group--custom">
                  <input
                    type="checkbox"
                    name="terms-conditions"
                    aria-label="termos e condições"
                    required
                  />
                  <label htmlFor="terms-conditions">
                    Aceito os termos e condições
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footer-container">
            <div className="left">
              <img
                src={logo}
                alt="Logo Econverse"
                title="Logo Econverse"
                height="48"
                width="164"
                loading="lazy"
              />

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <div className="icons-container">
                <a href="/" title="Instagram">
                  <FaInstagram />
                </a>
                <a href="/" title="Facebook">
                  <FiFacebook />
                </a>
                <a href="/" title="Linkedin">
                  <FiLinkedin />
                </a>
              </div>
            </div>
            <hr />
            <div className="right">
              <div className='right__container'>
                <h3>Institucional</h3>
                <ul>
                  <li>
                    <a href="/" title="Sobre Nós">
                      Sobre Nós
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Movimento">
                      Movimento
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Trabalhe conosco">
                      Trabalhe conosco
                    </a>
                  </li>
                </ul>
              </div>
              <div className='right__container'>
                <h3>Ajuda</h3>
                <ul>
                  <li>
                    <a href="/" title="Suporte">
                      Suporte
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Fale Conosco">
                      Fale Conosco
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Perguntas Frequentes">
                      Perguntas Frequentes
                    </a>
                  </li>
                </ul>
              </div>
              <div className='right__container'>
                <h3>Termos</h3>
                <ul>
                  <li>
                    <a href="/" title="Termos e Condições">
                      Termos e Condições
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Política de Privacidade">
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="/" title="Troca e Devolução">
                      Troca e Devolução
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copywriting-container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  );
};

export default Footer;
