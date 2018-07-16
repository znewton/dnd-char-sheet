import * as React from 'react';
import { View, ViewProps } from 'views/View';
import './StatsView.css';
import { MockCharacter } from 'mocks/mockCharacter';
import { Character } from 'lib/Character';

import { TextInput, TextInputLabelPosition } from 'components/TextInput';
import { FlexRow, FlexColumn } from 'components/Layout';

type AbilityModifierProps = { score: number };
const AbilityModifier = ({ score }: AbilityModifierProps) => (
  <div className="AbilityModifier">{Math.floor((score - 10) / 2)}</div>
);
type AbilityScoreInputProps = { score: number; onChange?: Function; ability: string };
const AbilityScoreInput = (props: AbilityScoreInputProps) => (
  <TextInput
    className="AbilityScoreInput"
    label={props.ability}
    name={`${props.ability.toLowerCase()}_score`}
    type="number"
    initialValue={props.score}
    labelPosition={TextInputLabelPosition.TOP}
  >
    <AbilityModifier score={props.score} />
  </TextInput>
);

export interface StatsViewState {}

export class StatsView extends View<StatsViewState> {
  constructor(props: ViewProps) {
    super(props);
    this.cnb.add('StatsView');
    this.state = {};
  }

  render() {
    const character: Character = MockCharacter;
    return (
      <div className={this.cnb.className}>
        <FlexRow>
          <TextInput label="Character Name" style={{ width: '50%' }} value={character.name} />
          <FlexColumn>
            <FlexRow>
              <TextInput label="Class & Level" value={character.classAndLevel} />
              <TextInput label="Background" value={character.background} />
              <TextInput label="Player Name" value={character.playerName} />
            </FlexRow>
            <FlexRow>
              <TextInput label="Race" value={character.race} />
              <TextInput label="Alignment" value={character.alignment} />
              <TextInput type="number" label="Experience Points" value={character.xp} />
            </FlexRow>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <FlexColumn>
            <FlexColumn className="l-flex-align-center">
              <AbilityScoreInput score={character.abilityScores.strength} ability="Strength" />
              <AbilityScoreInput score={character.abilityScores.dexterity} ability="Dexterity" />
              <AbilityScoreInput
                score={character.abilityScores.constitution}
                ability="Constitution"
              />
              <AbilityScoreInput
                score={character.abilityScores.intelligence}
                ability="Intelligence"
              />
              <AbilityScoreInput score={character.abilityScores.wisdom} ability="Wisdom" />
              <AbilityScoreInput score={character.abilityScores.charisma} ability="Charisma" />
            </FlexColumn>
          </FlexColumn>
        </FlexRow>
      </div>
    );
  }
}
