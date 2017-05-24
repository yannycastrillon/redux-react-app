import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreator from '../actions/player';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetails from '../components/PlayerDetails';

// Connect recieves a function that maps stateData into PropsData (translator).
// It is used to pass data between components.

class Scoreboard extends Component {

  static PropTypes = {
    players: PropTypes.array.isRequired
  }

  render = () => {
    /* BindActionCreator takes a dispatch in order to send action to the reducer.
     * BindActionCreator ensures when an action is created also get dispatch.
    */
    console.log(this.props);
    const { dispatch, players, selectedPlayerIndex } = this.props

    console.log("********** This is the players OBJECT *********");
    console.log(players);
    console.log("*******************");

    const addPlayer = bindActionCreators(PlayerActionCreator.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreator.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreator.updatePlayerScore, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreator.selectPlayer, dispatch);

    let selectedPlayer;
    if (selectedPlayerIndex !== -1) {
      selectedPlayer = players[selectedPlayerIndex];
    }
    const playerComponents = players.map( (player, index) => (
        <Player
          index={index}
          name ={player.name}
          score={player.score}
          key={player.name}
          updatePlayerScore={updatePlayerScore}
          removePlayer={removePlayer}
          selectPlayer={selectPlayer}
        />
      )
    )

    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
          { playerComponents }
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
        <div className="player-detail">
          <PlayerDetails selectedPlayer={selectedPlayer}/>
        </div>
      </div>
    );
  };
}

// Return an object that gets merge into the scoreboard component Props.
const mapStateToProps = state => (
  {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
)

/* Connect take a function which contains the data that we want to transform STATE -> PROPS
 * Scoreboard is the container that we want to Connect to redux.
 * It subscribes Scoreboard to any changes/updates in state.
 * players gets injected as a prop to scoreboard container.
*/
export default connect(mapStateToProps)(Scoreboard)
