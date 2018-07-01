import * as React from 'react';
import { Hello } from 'components/Hello';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello compiler="TypeScript" framework="React" />
      </div>
    );
  }
}