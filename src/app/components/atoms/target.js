import React, { createClass } from 'react';
import { DropTarget } from 'react-dnd';
import Card from 'components/atoms/card';
import config from 'app/config';

const types = config.types;

const dropSource = {
  drop(props, monitor, component) {
    console.log(props, monitor, component);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
};

const Target = createClass({
  render() {
    let hasCard = null;

    const {
      connectDropTarget,
      isOver,
      card
    } = this.props;

    if (card) {
      hasCard = <Card>{card}</Card>;
    }

    return connectDropTarget(
      <div
        className="placeholder"
        style={isOver ? {background: 'black'} : null}>
        {hasCard}
      </div>
    );
  }
});

Target.propTypes = {
  connectDropTarget: React.PropTypes.func.isRequired,
  isOver: React.PropTypes.bool.isRequired
};

export default DropTarget(types.CARD, dropSource, collect)(Target);
