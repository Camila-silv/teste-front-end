import { Outlet } from 'react-router-dom';
import { Footer, Header, Modal, HeaderMobile } from '../index';
import { FC } from 'react';
import { createPortal } from 'react-dom';

const RootLayout: FC = () => {
  return (
    <>
      <HeaderMobile />
      <Header />

      <Outlet />

      <Footer />

      {typeof document !== 'undefined' &&
        createPortal(<Modal />, document.body)}
    </>
  );
};

export default RootLayout;
