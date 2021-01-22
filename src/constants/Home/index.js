import React, { Component } from 'react'
import {
	IonApp,
	IonTabs,
	IonTabBar,
	IonTabButton,
	IonRouterOutlet,
	IonIcon
} from '@ionic/react'
import { Route,Redirect } from 'react-router-dom'
import { IonPage } from '@ionic/react'
import { home,cart,informationCircle,call } from 'ionicons/icons'
// Tab 1 "Home" Screens Below
import WelcomeScreen from '../../screens/TabBottomScreen/Tab1/WelcomeScreen.jsx';
import CalendarScreen from '../../screens/TabBottomScreen/Tab1/CalendarScreen.jsx';
import EventScreen from '../../screens/TabBottomScreen/Tab1/EventScreen.jsx';
import BookingScreen from '../../screens/TabBottomScreen/Tab1/BookingScreen.jsx';
// // Tab 2 "Merch" Screens Below
import ItemScreen from '../../screens/TabBottomScreen/Tab2/ItemScreen.jsx';
import ItemListScreen from '../../screens/TabBottomScreen/Tab2/ItemListScreen.jsx';
import ItemPurchaseScreen from '../../screens/TabBottomScreen/Tab2/ItemPurchaseScreen.jsx';
// // Tab 3 "About" Screens Below
import AboutScreen from '../../screens/TabBottomScreen/Tab3/AboutScreen.jsx';
// // Tab 4 "Contact" Screens Below
import ContactScreen from '../../screens/TabBottomScreen/Tab4/ContactScreen.jsx';



class Home extends Component {
	render() {
		return (
			<IonApp style={{background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)'}}>
				<IonPage >
					<IonTabs>
						<IonRouterOutlet>
							{/****** MAIN SCREENS *******/}
							<Route path="/home" component={WelcomeScreen} exact={true} />
							<Route path="/home/calendar/:id/:event_type" component={CalendarScreen}/>
							<Route path="/home/events/:id/:event_type" component={EventScreen} exact={true} />
							<Route path="/home/bookings/:id/:event_type" component={BookingScreen} exact={true} />
							<Route path="/merch" component={ItemScreen} exact={true} />
							<Route path="/merch/list" component={ItemListScreen} exact={true} />
							<Route path="/merch/purchase" component={ItemPurchaseScreen} exact={true} />
							<Route path="/about" component={AboutScreen} exact={true} />
							<Route path="/contact" component={ContactScreen} exact={true} />
							<Redirect exact from="/" to="/home" />
						</IonRouterOutlet>

						<IonTabBar color={'dark'} style={{backgroundColor:'black'}} slot="bottom">
							<IonTabButton style={{backgroundColor:'black'}} tab="home" href="/home">
								<IonIcon style={{fontSize:20}} icon={home} />
							</IonTabButton>
							<IonTabButton style={{backgroundColor:'black'}} tab="merch" href="/merch" >
								<IonIcon style={{fontSize:20}} icon={cart} />
							</IonTabButton>
							<IonTabButton style={{backgroundColor:'black'}} tab="about" href="/about">
								<IonIcon style={{fontSize:20}} icon={informationCircle} />
							</IonTabButton>
							<IonTabButton style={{backgroundColor:'black'}} tab="contact" href="/contact">
								<IonIcon style={{fontSize:20}} icon={call} />
							</IonTabButton>
						</IonTabBar>
					</IonTabs>
				</IonPage>
			 </IonApp>
		);
	}
}

export default Home