import * as React from 'react';
// import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';

import './index.css';

// import { AdminRoute } from '../shared/authRoute';
import store from '../store';
import { system } from '../store/actions';

interface IndexProps {
  isLogIn: boolean;
  location: any;
}

class Index extends React.Component<IndexProps> {
  componentWillMount() {
    store.dispatch(system.loadLanguageList());
  }
  render() {
    console.debug('Index Page render:', this.props);
    return (
      <div className="page p-index">
        <Top location={this.props.location} />
        {
          this.props.isLogIn ? (
            <div className="container">
              正文
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
