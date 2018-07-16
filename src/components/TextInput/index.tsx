import * as React from 'react';
import './TextInput.css';
import { ClassNameBuilder } from 'lib/ClassNameBuilder';

export type TextInputChangeHandler = (value: string) => void;

export enum TextInputLabelPosition {
  TOP = 'Top',
  LEFT = 'Left',
  BOTTOM = 'Bottom',
  RIGHT = 'Right',
}

export interface TextInputProps {
  label: string;

  value?: string | number;
  className?: string;
  initialValue?: string | number;
  onChange?: TextInputChangeHandler;
  name?: string;
  type?: string;
  hint?: string | React.ReactElement<any>;
  style?: React.CSSProperties;
  displayLabel?: boolean;
  labelPosition?: TextInputLabelPosition;
  labelStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;

  inputProps?: any;
  labelProps?: any;
  children?: React.ReactChild | React.ReactChildren;
}

export interface TextInputState {
  value: string | number;
}

export class TextInput extends React.Component<TextInputProps, TextInputState> {
  constructor(props: TextInputProps) {
    super(props);
    this.state = { value: props.initialValue || '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (this.props.onChange) this.props.onChange(e.target.value);
    this.setState({ value: e.target.value });
  }

  render() {
    const inputName = this.props.name || this.props.label.replace(' ', '_').toLowerCase();
    const cnb = new ClassNameBuilder('TextInput');
    cnb.add(`TextInputLabelPosition--${this.props.labelPosition || TextInputLabelPosition.BOTTOM}`);
    cnb.add(this.props.className);

    return (
      <div className={cnb.className} style={this.props.style}>
        <input
          id={inputName}
          type={this.props.type || 'text'}
          className="TextInput__input"
          value={this.props.value || this.state.value}
          onChange={this.handleChange}
          style={this.props.inputStyle}
          {...this.props.inputProps}
        />
        <label
          htmlFor={inputName}
          className="TextInput__label"
          style={{
            display: this.props.displayLabel === false ? 'none' : null,
            ...this.props.labelStyle,
          }}
          {...this.props.labelProps}
        >
          {this.props.label}
        </label>
        {this.props.children}
      </div>
    );
  }
}
