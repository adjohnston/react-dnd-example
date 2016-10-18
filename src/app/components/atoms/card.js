import React, { createClass } from 'react';
import { DragSource } from 'react-dnd';
import config from 'app/config';

const types = config.types;

const cardSource = {
  beginDrag(props) {
    return {};
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

const Card = createClass({
  render() {
    const {
      connectDragSource,
      isDragging,
      children
    } = this.props;

    return connectDragSource(
      <div
        className="card">
        {children}
      </div>
    );
  }
});

Card.propTypes = {
  connectDragSource: React.PropTypes.func.isRequired,
  isDragging: React.PropTypes.bool.isRequired,
  children: React.PropTypes.string.isRequired
};

export default DragSource(types.CARD, cardSource, collect)(Card);
