/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';
import Index from '../../ui/pages/Index.js';
import NotFound from '../../ui/pages/NotFound.js';
import UnitStudy from '../../ui/containers/UnitStudy.js';
import ShowUnits from '../../ui/pages/ShowUnits.js';


Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="showUnits" path="/units" component={ ShowUnits } />
        <Route name="unitStudy" path="/units/:theme" component={ UnitStudy } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});