import * as React from 'react';
import { View, ViewProps } from 'views/View';
import './HomeView.css';

export interface HomeViewState {}

export class HomeView extends View<HomeViewState> {
  constructor(props: ViewProps) {
    super(props);
    this.cnb.add('HomeView');
    this.state = {};
  }

  render() {
    return <div className={this.cnb.className}>Home</div>;
  }
}
