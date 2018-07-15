import * as React from 'react';
import { View, ViewProps } from 'views/View';
import './StatsView.css';

import { TextInput } from 'components/TextInput';
import { FlexRow, FlexColumn } from 'components/Layout';

export interface StatsViewState {}

export class StatsView extends View<StatsViewState> {
  constructor(props: ViewProps) {
    super(props);
    this.cnb.add('StatsView');
    this.state = {};
  }

  render() {
    return (
      <div className={this.cnb.className}>
        <FlexRow>
          <TextInput label="Character Name" style={{ width: '50%' }} />
          <FlexColumn>
            <FlexRow>
              <TextInput label="Class & Level" />
              <TextInput label="Background" />
              <TextInput label="Player Name" />
            </FlexRow>
            <FlexRow>
              <TextInput label="Race" />
              <TextInput label="Alignment" />
              <TextInput label="Experience Points" />
            </FlexRow>
          </FlexColumn>
        </FlexRow>
      </div>
    );
  }
}
