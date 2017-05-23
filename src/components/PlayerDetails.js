import React, { PropTypes } from 'react'


const PlayerDetails = ( { selectedPlayer } ) => {

  if (selectedPlayer) {
      return (
        <div>
          <h3> { selectedPlayer.name } </h3>
          <ul>
            <li>
              <span> Score: </span>
              { selectedPlayer.score }
            </li>
            <li>
              <span> Created: </span>
              { selectedPlayer.created }
            </li>
            <li>
              <span> Updated: </span>
              { selectedPlayer.updated }
            </li>
          </ul>
        </div>
      );
    }
    else {
      return (<p>Click on a Player to see more details</p>);
    }
}

PlayerDetails.propTypes = {
  selectedPlayer: PropTypes.object
}
export default PlayerDetails;
