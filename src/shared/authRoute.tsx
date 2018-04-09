import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Immutable from 'immutable';
import { AUTH_TYPE } from '../constant/authType';

interface AuthProps {
  auth: AUTH_TYPE;
  isLogIn: boolean;
  path: string;
  component: any;
}

class AdminAuth extends React.PureComponent<AuthProps> {
  isRoot() {
    return this.props.auth === AUTH_TYPE.ROOT;
  }

  isAdmin() {
    return this.props.auth === AUTH_TYPE.ADMIN;
  }

  render() {
    const {  component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          (this.props.isLogIn && (this.isAdmin() || this.isRoot())) ? (
            <Component {...this.props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
}

const mapProps = (state: Immutable.Map<String, any>) => {
  return {
    isLogIn: state.getIn(['auth', 'isLogIn']),
    auth: state.getIn(['auth', 'auth']),
  };
};

export const AdminRoute = connect(mapProps)(AdminAuth);
