import React from 'react';
import { render } from 'react-dom';
import { provider } from 'react-redux'
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/player';
import Scoreboard from './src/containers/Scoreboard'

// createStore method takes the playerReducer and subscribes it to the store.
// PlayerReducer is now ready to participate in redux pipeline.
const store = createStore(
  PlayerReducer
)

// Provider can now subscribe to any data changes using the store.
// Escensial to pass data to other components.
render(
  <Provider store={ store }>
    <Scoreboard />
  </Provider>,
  document.getElementById('root')
)
