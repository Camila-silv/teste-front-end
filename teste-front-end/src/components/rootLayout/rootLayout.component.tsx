import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../index';
import { FunctionComponent } from 'react';

const RootLayout: FunctionComponent = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default RootLayout;
