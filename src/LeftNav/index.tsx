import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/pro-solid-svg-icons';

import { PageRoute } from 'App';

export interface LeftNavProps {
  characterAvailable?: boolean;
  pageRoutes: Array<PageRoute>;
}

export class LeftNav extends React.Component<LeftNavProps> {
  render() {
    return (
      <nav className="LeftNav">
        <div className="LeftNav__brand">
          <FontAwesomeIcon icon={faBookOpen} size="2x" />
        </div>
        {this.props.pageRoutes.map(({ label, path, icon }: PageRoute) => (
          <NavLink
            exact
            key={label}
            to={path}
            className="LeftNav__link"
            activeClassName="LeftNav__link--active"
          >
            {icon ? <FontAwesomeIcon icon={icon} size="2x" /> : null}
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    );
  }
}
