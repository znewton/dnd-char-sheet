import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/pro-solid-svg-icons';
import './TopNav.css';

export interface TopNavProps {}

export interface TopNavState {}

export class TopNav extends React.Component<TopNavProps, TopNavState> {
  constructor(props: TopNavProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="TopNav">
        <div className="TopNav__left" />
        <div className="TopNav__right">
          <button className="TopNav__button TopNav__profile-button">
            <span className="TopNav__profile-label">Log in / Sign up</span>
            <FontAwesomeIcon icon={faUserCircle} size="2x" />
          </button>
        </div>
      </div>
    );
  }
}
