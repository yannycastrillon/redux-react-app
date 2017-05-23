import * as PlayerActionTypes from '../actiontypes/player';


const initialState = {
  players: [
    {
      name: 'Jim Hoskins',
      score: 31,
      created:'11/08/2016',
      updated:'11/09/2016',
    },
    {
      name: 'Andrew Chalkley',
      score: 20,
      created:'11/09/2016',
      updated:'11/10/2016',
    },
    {
      name: 'Alena Holligan',
      score: 50,
      created:'11/11/2016',
      updated:'11/12/2016',
    }
  ],
  selectedPlayerIndex: -1,
};

// Reducer is a pure function and SHOULD NOT mutate the current state.
export default function Player (state=initialState, action){
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      const addPlayerList = [...state.players, {
        name: action.name,
        score: 0,
        created: `${month}/${day}/${year}`
      }]
      return [
        // all items in the state array
        ...state,
        players: addPlayerList
      ];
    case PlayerActionTypes.REMOVE_PLAYER:
      const removePlayerList = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      return {
        ...state,
        players: removePlayerList
      }

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      const updatePlayerList = state.map( (player, index) => {
        if (index === action.index) {
          return {
            ...player,
            score:player.score + action.score,
            updated: Date.now
          };
        }
        return player;
      });
      return {
        ...state,
        players: updatePlayerList
      };

    case PlayerActionTypes.SELECT_PLAYER:
      return {
          ...state,
          selectedPlayerIndex = action.index
      }
    default:
      return state;
  }
}
