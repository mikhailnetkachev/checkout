import React from 'react';

import { combineStrings as cs } from '../../helpers';

import { app as appClass } from './app.module.sass';

class App extends React.Component {

  render () {
    return (
      <div className={cs()(appClass, 'appContainer')}>
        <header>Header is here!</header>
        <main>Main is here!</main>
        <footer>Footer is here!</footer>
      </div>
    );
  }
}

export default App;
