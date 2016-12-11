/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';
import NotFound from '../../ui/pages/NotFound.js';

import UnitStudy from '../../ui/containers/UnitStudy.js';
import TestVideo from '../../ui/pages/TestVideo.js';

import Index from '../../ui/pages/Index.js';
import Units from '../../ui/pages/Units.js';
import Articles from '../../ui/pages/Articles.js';

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="units" path="/units" component={ Units } />
        <Route name="unitStudy" path="/units/:unit" component={ UnitStudy } />
        <Route name="articles" path="/articles" component={ Articles } />
        <Route name="testVideo" path="/videos" component={ TestVideo } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});
