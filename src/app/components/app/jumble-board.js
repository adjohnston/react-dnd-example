import React, { createClass } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Target from 'components/atoms/target';

const JumbleBoard = createClass({
  render() {
    const cards = this.props.cards;

    return (
      <main
        className="layout">
        <section
          className="layout__area">
          <Target
            card={cards[0]} />
          <Target
            card={cards[1]} />
          <Target
            card={cards[2]} />
          <Target
            card={cards[3]} />
        </section>

        <section
          className="layout__area">
          <Target
            card={cards[4]} />
          <Target
            card={cards[5]} />
          <Target
            card={cards[6]} />
          <Target
            card={cards[7]} />
        </section>
      </main>
    );
  }
});

export default DragDropContext(HTML5Backend)(JumbleBoard);
