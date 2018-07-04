import * as React from 'react';

export type TextInputChangeHandler = (value: string) => void;

export interface TextInputProps {
  value?: string;
  onChange?: TextInputChangeHandler;
  label: string;
  hint?: string | React.ReactElement<any>;
}

export interface TextInputState {
  value: string;
}

export class TextInput extends React.Component<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange) this.props.onChange(e.target.value);
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="TextInput">
        <input value={this.state.value} onChange={this.handleChange} />
        <label>{this.props.label}</label>
      </div>
    );
  }
}
