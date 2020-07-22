import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {Body} from './AppElements';
import Header from '../../components/Header';

import {content} from '../../content';

export const App = () => {
  const renderHeader = () => <Header contentForHeader={content.header} />;

  return (
    <Body>
      <Router>
        <Switch>
          <Route path="/faq">
            {/* <Faq /> */}
            {renderHeader()}
            FAQ
          </Route>
          <Route path="/conditions">
            {/* <GeneralConditions /> */}
            {renderHeader()}
            General Conditions
          </Route>
          <Route path="/rules">
            {/* <Rules /> */}
            {renderHeader()}
            Rules
          </Route>
          <Route path="/profile">
            {/* <Profile /> */}
            {renderHeader()}
            Profile
          </Route>
          <Route path="/contact">
            {/* <Contact /> */}
            {renderHeader()}
            Contact
          </Route>
          <Route exact path="/">
            {/* <Homepage /> */}
            {renderHeader()}
            Homepage
          </Route>
        </Switch>
      </Router>
    </Body>
  );
};
