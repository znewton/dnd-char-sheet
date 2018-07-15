import * as React from 'react';
import { View, ViewProps } from 'views/View';
import './ScribblesView.css';

export interface ScribblesViewState {}

export class ScribblesView extends View<ScribblesViewState> {
  constructor(props: ViewProps) {
    super(props);
    this.cnb.add('ScribblesView');
    this.state = {};
  }

  render() {
    return <div className={this.cnb.className}>Scribbles</div>;
  }
}
