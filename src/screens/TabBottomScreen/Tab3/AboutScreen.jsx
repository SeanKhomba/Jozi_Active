import React from 'react'
import Radium from 'radium';
import ImageSlide from '../../../components/ImageSlide.jsx';
import Container from '../../../components/Container.jsx';
import InnerContainer from '../../../components/InnerContainer.jsx';
import aboutSlider from '../../../images/aboutSlider.jpg'
import Header from '../../../components/Header.jsx';
import about_content from '../../../data/About_Data.jsx';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';


const AboutScreen = () => {

	return (    
	<div style={styles.aboutContainer}>
		
		<ImageSlide image={`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${aboutSlider})`}>
		<Header logoTitle="ABOUT US" divderTitle="Info"/>
		</ImageSlide>
		<Container>
			<InnerContainer>
				<div style={styles.aboutContent}>
				<div style={styles.about_heading}>ABOUT US:</div>
					<ul>
						{about_content.map((list,index) => {
							return(
								<div key={index}style={styles.aboutText}>{list.text}</div>	
							)
						})}
					</ul>
					<div style={styles.follow_container}>
						<div style={styles.follow_heading}>
							FOLLOW US BELOW! 
						</div>
						<div style={styles.follow_icons}>
							<a style={{textDecoration:'none'}} href="https://www.facebook.com/joziactive/">
								<Facebook style={styles.follow_icons_style}/>
							</a>
							<a style={{textDecoration:'none'}} href="https://www.instagram.com/jozi_active/">
								<Instagram style={styles.follow_icons_style}/>
							</a>
							<a style={{textDecoration:'none'}} href="https://za.linkedin.com/?trk=public_profile_nav-header-logo">
								<LinkedIn style={styles.follow_icons_style}/>
							</a>
						</div>
					</div>
				</div>
			</InnerContainer>
		</Container>

	</div>
	)
}

export default Radium (AboutScreen);
const styles= { 
	aboutContainer:{
		position: 'absolute',
		background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)',
		width: '100%',
		height: '100vh',
		left: 0, 
	},
	about_heading:{
		display: 'flex',
		justifyContent: 'center',
		color:'white',
	},
	aboutContent: {
		backgroundSize:'contain',
		width: '90%',
		height: '90%',
		padding:10,
		overflow:'hidden',		
		'@media (min-height: 568px)': {
			padding:10,
		},
	},
	aboutText: {
		width: '90%',
		height: 50,
		color:'#ffff',
		fontSize:10,
		'@media (min-width: 320px)': {
			height:45,
			fontSize:8,
		},
		'@media (min-width: 375px)': {
			height:50,
			fontSize:10,
		},
		'@media (min-width: 425px)': {
			height:50,
			fontSize:10,
		},
		'@media (min-height: 568px)': {
			height:25,
			fontSize:5,
		},
		'@media (min-height: 667px)': {
			height:47,
			fontSize:9,
		},
		'@media (min-height: 736px)': {
			height:55,
			fontSize:10,
		},
		'@media (min-height: 812px)': {
			height:60,
			fontSize:10,
		},
	},
	follow_container:{
		position:'relative', 
		bottom:30,
		'@media (min-width: 320px)': {
			bottom:10,
		},
		'@media (min-width: 375px)': {
			bottom:15,
		},
		'@media (min-width: 425px)': {
			bottom:20,
		},
	},
	follow_heading:{
		display: 'flex',
		justifyContent: 'center',
		color:'white',
		position:'relative',
		bottom:10
	},
	follow_icons:{
		display: 'flex',
		justifyContent: 'center',
		flexDirection:'row',
		margin:5
	},
	follow_icons_style:{
		width:80,
		color:'#ffff',
		fontSize:40,
	}


}
