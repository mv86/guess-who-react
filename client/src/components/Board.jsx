import React from 'react';
import Cell from './Cell.jsx';

const Board = function(props) {
  return(
    <div>
      {props.characters.map(function(character, index) {
        return(<Cell character={character} key={index} index={index}
          onClick={props.onButtonClick}></Cell>)
      })}
    </div>
  )
};

export default Board;