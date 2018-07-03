import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './LeftNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faChartPie,
  faBook,
  faMagic,
  IconDefinition,
} from '@fortawesome/pro-solid-svg-icons';

interface Link {
  path: string;
  label: string;
  icon?: IconDefinition;
}

export interface LeftNavProps {
  characterAvailable?: boolean;
}

export class LeftNav extends React.Component<LeftNavProps> {
  links: Array<Link>;

  constructor(props: LeftNavProps) {
    super(props);
    this.links = [
      { path: '/', label: 'Home', icon: faHome },
      { path: '/stats', label: 'Stats', icon: faChartPie },
      { path: '/story', label: 'Story', icon: faBook },
      { path: '/spells', label: 'Spells', icon: faMagic },
    ];
  }
  render() {
    return (
      <nav className="LeftNav">
        {this.links.map((link: Link) => (
          <NavLink
            exact
            key={link.label}
            to={link.path}
            className="LeftNav__link"
            activeClassName="LeftNav__link--active"
          >
            {link.icon ? <FontAwesomeIcon icon={link.icon} size="2x" /> : null}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    );
  }
}
