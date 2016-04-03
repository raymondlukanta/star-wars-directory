import React from 'react';
import { Route } from 'react-router'

/* containers */
import { App } from 'containers/App';
import { AnalyticsPage } from 'containers/AnalyticsPage';
import { PeoplePage } from 'containers/PeoplePage';
import { PeopleDetailsPage } from 'containers/PeopleDetailsPage';
import { FilmsPage } from 'containers/FilmsPage';
import { FilmsDetailsPage } from 'containers/FilmsDetailsPage';
import { PlanetsPage } from 'containers/PlanetsPage';
import { PlanetsDetailsPage } from 'containers/PlanetsDetailsPage';
import { SpeciesPage } from 'containers/SpeciesPage';
import { SpeciesDetailsPage } from 'containers/SpeciesDetailsPage';
import { StarshipsPage } from 'containers/StarshipsPage';
import { StarshipsDetailsPage } from 'containers/StarshipsDetailsPage';
import { VehiclesPage } from 'containers/VehiclesPage';
import { VehiclesDetailsPage } from 'containers/VehiclesDetailsPage';

export default (
  <Route path="/" component={ App }>
    <Route path="analytics" component={ AnalyticsPage } />
    <Route path="people" component={ PeoplePage } />
    <Route path="people/:id" component={ PeopleDetailsPage } />
    <Route path="films" component={ FilmsPage } />
    <Route path="films/:id" component={ FilmsDetailsPage } />
    <Route path="planets" component={ PlanetsPage } />
    <Route path="planets/:id" component={ PlanetsDetailsPage } />
    <Route path="species" component={ SpeciesPage } />
    <Route path="species/:id" component={ SpeciesDetailsPage } />
    <Route path="starships" component={ StarshipsPage } />
    <Route path="starships/:id" component={ StarshipsDetailsPage } />
    <Route path="vehicles" component={ VehiclesPage } />
    <Route path="vehicles/:id" component={ VehiclesDetailsPage } />
  </Route>
);