import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView, pushStateLocationPlugin} from 'ui-router-react';

import HomepageView from './components/homepage/homepage.view';
import LoginView from './components/login/login.view';

import './index.css';

// define your states
const states = [{
  name: 'app',
  url: '/',
  component: HomepageView
}, {
  name: 'login',
  url: '/login',
  component: LoginView
}];

// select your plugins
const plugins = [
  pushStateLocationPlugin
];

ReactDOM.render(
  <UIRouter plugins={plugins} states={states}>
    <UIView/>
  </UIRouter>,
  document.getElementById('root')
);
