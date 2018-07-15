import * as React from 'react';
import { View, ViewProps } from 'views/View';
import './StoryView.css';

export interface StoryViewState {}

export class StoryView extends View<StoryViewState> {
  constructor(props: ViewProps) {
    super(props);
    this.cnb.add('StoryView');
    this.state = {};
  }

  render() {
    return <div className={this.cnb.className}>Story</div>;
  }
}
