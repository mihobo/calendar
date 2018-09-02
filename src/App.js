import React, { Component } from 'react';
import Calendar from './components/Calendar';
import BirthdayCake from './birthdayCake.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">
              <BirthdayCake />
            </span>
            <span>
              birthday<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
