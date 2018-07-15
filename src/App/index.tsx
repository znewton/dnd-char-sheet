import * as React from 'react';
import { LeftNav } from 'LeftNav';
import { TopNav } from 'TopNav';
import { Route } from 'react-router-dom';
import './App.css';
import {
  faHome,
  faChartPie,
  faBook,
  faMagic,
  faPencil,
  IconDefinition,
} from '@fortawesome/pro-solid-svg-icons';

import { HomeView } from 'views/HomeView';
import { StatsView } from 'views/StatsView';
import { StoryView } from 'views/StoryView';
import { SpellsView } from 'views/SpellsView';
import { ScribblesView } from 'views/ScribblesView';

export interface PageRoute {
  path: string;
  label: string;
  isExact?: boolean;
  component: any;
  icon: IconDefinition;
}

export class App extends React.Component {
  pageRoutes: Array<PageRoute> = [
    { path: '/', isExact: true, label: 'Home', icon: faHome, component: HomeView },
    { path: '/stats', label: 'Stats', icon: faChartPie, component: StatsView },
    { path: '/story', label: 'Story', icon: faBook, component: StoryView },
    { path: '/spells', label: 'Spells', icon: faMagic, component: SpellsView },
    { path: '/scribbles', label: 'Scribbles', icon: faPencil, component: ScribblesView },
  ];

  render() {
    return (
      <div className="App">
        <LeftNav pageRoutes={this.pageRoutes} />
        <div className="App__view-pane">
          <TopNav />
          <div className="App__route-pane">
            {this.pageRoutes.map(({ path, component, isExact = false }: PageRoute) => (
              <Route exact={isExact} path={path} component={component} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
