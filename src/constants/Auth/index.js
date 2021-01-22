import React, { Component } from 'react'
import {
	IonApp,
	IonRouterOutlet,
} from '@ionic/react'
import { Route} from "react-router-dom";
import { IonReactRouter } from '@ionic/react-router';
// Auth Screens below 
import LoginScreen from '../../screens/AuthScreen/LoginScreen.jsx';
import SignUpScreen from '../../screens/AuthScreen/SignUpScreen.jsx';
import ForgotPasswordScreen from '../../screens/AuthScreen/ForgotPasswordScreen.jsx';

class Auth extends Component {
	render() {
		return (
			<IonApp>
			<IonReactRouter>
			  <IonRouterOutlet>
			 	<Route path="/login" component={LoginScreen} exact={true} />
				<Route path="/signUp" component={SignUpScreen} exact={true} />
				<Route path="/forgotPassword" component={ForgotPasswordScreen} exact={true} />
			  </IonRouterOutlet>
			</IonReactRouter>
		  </IonApp>
			// <IonApp style={{background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)'}}>
			// 	<IonPage>
			// 	{/****** AUTH CREATE ACCOUNT *******/}
			// 	<Route path="/login" component={LoginScreen} exact={true} />
			// 	<Route path="/signUp" component={SignUpScreen} exact={true} />
			// 	<Route path="/forgotPassword" component={ForgotPasswordScreen} exact={true} />
			// 	{/* <Redirect exact from="/" to="/dashboard" /> */}
			// 	</IonPage> 
			// </IonApp>
		);
	}
}

export default Auth