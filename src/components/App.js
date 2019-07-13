import React from 'react';
import Header from './Header';
import Top from './Top';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import '../styles/templete.scss';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Top} />
    </Switch>
  </BrowserRouter>
);

export default App;
