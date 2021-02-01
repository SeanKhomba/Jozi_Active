import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import configureStore from './redux/store.jsx';
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser} from "./redux/actions/login";


const store = configureStore();

if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
  const userData = JSON.parse(localStorage.userData);
	setAuthToken(token);
	// Decode token and get user info and exp

	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(userData));
  // Check for expired token
	// const currentTime = Date.now() / 1000; // to get in milliseconds
	// if (user.exp < currentTime) {
	//   // Logout user
	//   store.dispatch(logoutUser());
	//   // Redirect to login
	//   window.location.href = "./login";
	// }
  }


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

