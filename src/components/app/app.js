import React from 'react';

import Routing from './routing';
import { combineStrings as cs } from '../../helpers';

import { app as appClass } from './app.module.sass';

class App extends React.Component {

  render () {
    return (
      <div className={cs()(appClass, 'appContainer')}>
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
