import React, { PropTypes } from 'react'


const PlayerDetails = ( props ) => {
  // if (props.selectedPlayerIndex != -1 ) {
  console.log("******* PROPS INSIDE PLAYER DETAILS**********");
  console.log(props);

  if (props.selectPlayer) {
      return (
        <div>
          <h3> { props.selectPlayer.name } </h3>
          <ul>
            <li>
              <span> Score: </span>
              { props.selectPlayer.score }
            </li>
            <li>
              <span> Created: </span>
              { props.selectPlayer.created }
            </li>
            <li>
              <span> Updated: </span>
              { props.selectPlayer.updated }
            </li>
          </ul>
        </div>
      );
    }
    else {
      return (<p>Click on a Player to see more details</p>);
    }
}

export default PlayerDetails;
