import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Main from '../../components/main';
import HomePage from '../HomePage/Loadable';
import Products from '../Products/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={Products} />
          <Route component={NotFoundPage} />
        </Switch>
      </Main>
      <Footer />
    </div>
  );
}
