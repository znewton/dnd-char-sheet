import * as React from 'react';
import { View, ViewProps } from 'views/View';
import './SpellsView.css';

export interface SpellsViewState {}

export class SpellsView extends View<SpellsViewState> {
  constructor(props: ViewProps) {
    super(props);
    this.cnb.add('SpellsView');
    this.state = {};
  }

  render() {
    return <div className={this.cnb.className}>Spells</div>;
  }
}
