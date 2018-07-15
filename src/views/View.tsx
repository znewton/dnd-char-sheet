import * as React from 'react';
import { ClassNameBuilder } from 'lib/ClassNameBuilder';
import './View.css';

export interface ViewProps {}

export class View<T> extends React.Component<ViewProps, T> {
  protected cnb: ClassNameBuilder = new ClassNameBuilder('view');

  constructor(props: ViewProps) {
    super(props);
  }
}
