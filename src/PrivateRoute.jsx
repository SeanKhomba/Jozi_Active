import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


const PrivateRoute = ({ component: Component, auth, ...rest }) => {
 console.log( 'checking auth',auth);
  return (
    <Route
      {...rest}
      render={props =>
        auth === true ? (
          <Component {...props} />
        ) : (
       <Redirect to={"/login"} />
      
        )
      }
    />
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.loginReducer.isAuthenticated
  }
}

export default connect(mapStateToProps)(PrivateRoute);