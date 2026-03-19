import { Outlet } from 'react-router-dom';
import { Footer, Header, Modal } from '../index';
import { FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

const RootLayout: FunctionComponent = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />

      {createPortal(<Modal />, document.body)}
    </>
  );
};

export default RootLayout;
