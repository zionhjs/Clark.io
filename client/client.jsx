import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/router.jsx';
 
// import App from '../imports/ui/App.jsx';
 
Meteor.startup(() => {
  // render(<App />, document.getElementById('global-container'));
  render(renderRoutes(), document.getElementById('app-container'));
});