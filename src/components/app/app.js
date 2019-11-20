import React from 'react';

import Routing from './routing';
import { combineStrings as cs } from '../../helpers';

import { container as containerClass } from './app.module.sass';

class App extends React.Component {

  render () {
    return (
      <div className={cs()(containerClass, 'appContainer')}>
        <header>{}</header>
        <main>
          <Routing/>
        </main>
        <footer>{}</footer>
      </div>
    );
  }
}

export default App;
