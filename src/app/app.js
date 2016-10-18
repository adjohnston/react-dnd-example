import React, { createClass } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Target from 'components/atoms/target';
import Card from 'components/atoms/card';

const App = createClass({
  render() {
    return (
      <main
        className="layout">
        <section
          className="layout__area">
          <Target />
          <Target />
          <Target />
          <Target />
        </section>

        <section
          className="layout__area">
          <Card>
            😨
          </Card>
          <Card>
            😱
          </Card>
          <Card>
            😂
          </Card>
          <Card>
            😎
          </Card>
        </section>
      </main>
    );
  }
});

export default DragDropContext(HTML5Backend)(App);
