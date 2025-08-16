import { FunctionComponent } from 'react';
import { Header, Banner, Categories } from './components';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <Banner />
      <main className="container px">
        <section>
          <Categories />
        </section>
      </main>
    </>
  );
};

export default App;
