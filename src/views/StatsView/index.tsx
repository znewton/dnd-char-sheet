import * as React from 'react';
import { View, ViewProps } from 'views/View';
import './StatsView.css';

export interface StatsViewState {}

export class StatsView extends View<StatsViewState> {
  constructor(props: ViewProps) {
    super(props);
    this.cnb.add('StatsView');
    this.state = {};
  }

  render() {
    return <div className={this.cnb.className}>Stats</div>;
  }
}
