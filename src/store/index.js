import axios from 'axios';

import {compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root_reducer';
import * as api from '../config';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({ reducer: rootReducer }, composeEnhancers(
  applyMiddleware(
    thunk.withExtraArgument({
      client: axios,
      api,
    })
  )
))
