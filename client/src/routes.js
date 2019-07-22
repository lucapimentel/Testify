import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';

import Collection from './components/pages/collection';
import ListAlbum from './components/pages/listAlbum';
import EditAlbum from './components/pages/editAlbum';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Collection} />
    <Route path="add-album" component={ListAlbum} />
    <Route path="edit-album" component={EditAlbum} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
