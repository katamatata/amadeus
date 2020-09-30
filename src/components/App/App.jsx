import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from '../Header';
import Homepage from '../Homepage';
import Footer from '../Footer';
import {content} from '../../content';

import {Body} from './AppElements';

export const App = () => (
  <Body>
    <Router>
      <Header content={content.header} />
      <Switch>
        <Route path="/faq">
          {/* <Faq /> */}
          FAQ
        </Route>
        <Route path="/conditions">
          {/* <GeneralConditions /> */}
          General Conditions
        </Route>
        <Route path="/rules">
          {/* <Rules /> */}
          Rules
        </Route>
        <Route path="/profile">
          {/* <Profile /> */}
          Profile
        </Route>
        <Route path="/contact">
          {/* <Contact /> */}
          Contact
        </Route>
        <Route exact path="/">
          <Homepage content={content.homepage} />
        </Route>
      </Switch>
      <Footer content={content.footer} />
    </Router>
  </Body>
);
