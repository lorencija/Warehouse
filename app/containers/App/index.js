import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import Products from 'containers/Products/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Main from '../../components/main';
import Style from './style.css';

// import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div className={Style.main_content}>
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
