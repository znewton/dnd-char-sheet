import * as React from 'react';
import { LeftNav } from 'LeftNav';
import { TopNav } from 'TopNav';
import { Route } from 'react-router-dom';
import './App.css';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LeftNav />
        <div className="App__view-pane">
          <TopNav />
          <div className="App__route-pane">
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route path="/stats" component={() => <div>Stats</div>} />
            <Route path="/story" component={() => <div>Story</div>} />
            <Route path="/spells" component={() => <div>Spells</div>} />
          </div>
        </div>
      </div>
    );
  }
}
