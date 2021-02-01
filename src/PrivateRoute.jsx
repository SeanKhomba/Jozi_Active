import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
 
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
          // <Component {...props} />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  auth: state.loginReducer.isAuthenticated,
});
export default connect(mapStateToProps)(PrivateRoute);