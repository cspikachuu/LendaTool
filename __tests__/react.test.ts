import React from 'React';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from "../client/App"
import * as types from "../client/types"
import Login from '../client/pages/Login';
import Market from '../client/pages/Market';
import Profile from '../client/pages/Profile';
import SignUp from '../client/pages/SignUp';
import Welcome from '../client/pages/Welcome';
import store from '../client/store';

describe('Unit testing React components', () => {

  describe('Login', () => {
    
  });

  describe('Market', () => {

  });

  describe('Profile', () => {

  });

  describe('SignUp', () => {

  });

  describe('Welcome', () => {

  });
});