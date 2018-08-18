import * as React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';

import './index.css';

import Top from './ui/top';
import Project from './project/index';
import Help from './help/index';
import Setting from './setting/index';
import System from './system/index';
import { AdminRoute } from '../shared/authRoute';
import { system } from '../store/actions';

interface IndexProps {
  isLogIn: boolean;
  location: any;
}

class Index extends React.Component<IndexProps> {
  componentWillMount() {
    system.loadLanguageList();
  }
  render() {
    console.debug('Index Page render:', this.props);
    return (
      <div className="page p-index">
        <Top location={this.props.location} />
        {
          this.props.isLogIn ? (
            <div className="container">
              <Switch>
                <AdminRoute path="/system" component={System} />
                <Route path="/setting" component={Setting} />
                <Route path="/help" component={Help} />
                <Route path="/" component={Project} />
              </Switch>
            </div>
          ) : null
        }
      </div>
    );
  }
}

export default connect(
  (state: Immutable.Map<String, any>) => {
    return {
      isLogIn: state.getIn(['auth', 'isLogIn']),
    };
  },
  {}
)(Index);
