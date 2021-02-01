import React from 'react';
import Radium, {StyleRoot}from 'radium';
import { IonReactRouter } from '@ionic/react-router';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {Route,Redirect} from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from './PrivateRoute.jsx'

// Auth Routes Below
import Auth from './constants/Auth/index.js'

// Main Routes Below
import Home from './constants/Home/index.js'


// Check for token to keep user logged in


const AuthRoutes = () => {
	return (
	  <IonReactRouter>
		<Route  path="/login" component={Auth} />
        <Route path="/" render={() => <Redirect to="/login" />} />
	  </IonReactRouter>
	);
  };

  const MainRoutes = () => {
	return (
	  <IonReactRouter>
		<Route path="/" component={Home} />
		<Route path="/" render={() => <Redirect from="/" to="/home" />} />
	  </IonReactRouter>
	);
  };

  const App = () => {
		return (
			<StyleRoot>
				<AuthProvider>
					<IonReactRouter>
						<PrivateRoute  path="/" component={MainRoutes} />
						<Route exact path="/login" component={AuthRoutes} />
					</IonReactRouter>
				</AuthProvider>
			</StyleRoot>
    )
	}

export default Radium (App)
