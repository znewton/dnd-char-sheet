import * as React from 'react';
import './TextArea.css';

export interface TextAreaProps {}

export interface TextAreaState {}

export class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  constructor(props: TextAreaProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="TextArea" />;
  }
}
