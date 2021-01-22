import React from 'react';
import Radium from 'radium';
import Header from '../../../components/Header.jsx';
import Button from '../../../components/Button.jsx';
import Carousel from '../../../components/Carousel.jsx';
import { Link } from 'react-router-dom';

const WelcomeScreen = () => {
return (

	<div style={styles.welcomeContainer}>
		<Header logoTitle="WELCOME!" divderTitle="Info"/>
		<div style={styles.contentContainer}>
		<Carousel/>
		</div>
		<Link style={{textDecoration:'none',position:'relative',top:35}} to="/home/calendar/">
			<Button position={styles.button} letterSpacing={10} buttonName="SEE CALENDAR"/>
		</Link>
		{/* <Button position={styles.signOutButton} buttonName="SIGN OUT" onClick={() => app.auth().signOut()}/> */}
	</div>
	)
}

export default Radium(WelcomeScreen)

const styles = {
	welcomeContainer : {
		flex:1,
	},
	contentContainer: {
		width:'100%',
		height: 300,
		position: 'relative',
		top:0,
		overflow: 'hidden',
		backgroundColor:' #333333',
		boxShadow: 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0.25)',
		'@media (max-width: 425px)': {
            height: 200,
		},
		'@media (max-height: 568px)': {
            height: 160,
        }
	},
	button:{
		position: 'relative',
		bottom:-10,
		'@media (min-width: 320px)': {
			bottom:10,
		},
	},
	signOutButton:{
		position: 'relative',
		bottom:-0,
		'@media (max-height: 568px)': {
			bottom:25,
		},
		'@media (min-width: 768px)': {
			bottom:-20,
		},
	}
}