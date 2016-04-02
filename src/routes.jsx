import React from 'react';
import { Route } from 'react-router'

/* containers */
import { App } from 'containers/App';
import { PeoplePage } from 'containers/PeoplePage';
import { PeopleDetailsPage } from 'containers/PeopleDetailsPage';

export default (
  <Route path="/" component={ App }>
    <Route path="people" component={ PeoplePage } />
    <Route path="people/:id" component={ PeopleDetailsPage } />
  </Route>
);