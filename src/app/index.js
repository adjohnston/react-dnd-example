import React from 'react';
import ReactDOM from 'react-dom';
import JumbleBoard from 'components/app/jumble-board';

const cards = [
  'circle',
  null,
  null,
  null,
  'square',
  null,
  'triangle',
  'diamond',
];

ReactDOM.render(
  <JumbleBoard
    cards={cards} />,
  document.querySelector('#app')
);
