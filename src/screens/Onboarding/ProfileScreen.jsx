import React from 'react'
import Button from '../../components/Button.jsx';
import './styles.css'
import waterfalls from '../../images/waterfalls.jpg'

export default function ProfileScreen () {

	return (    
	<div style={styles.profileContainer}>
		<div  style={styles.profileBackground}>
		<div style={styles.roundImage}>
			<img src={require('/Users/sean/sites/jozi-active/src/images/transparent-logo.png')} alt={"Jozi Active Logo"}  style={styles.logoImage} />
		</div>
		</div>
		<div style={styles.profileContent}>
			<div style={styles.profileDescription}>
				<text style={styles.descriptionText}>WELCOME BACK!</text>
				<text style={styles.descriptionText}>BRETT</text>
			</div>
			<div style={styles.profileInnerContainer}>
				<div style={styles.roundImageInnerGold}>
					<text style={styles.textInner}>GOLD</text>
				</div>
				<div style={styles.roundImageInnerBlack}>
					<text style={styles.textInner}>BLACK</text>
				</div>
			</div>
			<Button style={styles.button} className='button'buttonName="GET ACTIVE"/>
		</div>
	</div>
	)
}
const styles={ 
	profileContainer: {
		position: 'absolute',
		background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)',
		width: '100%',
		height: '100%',
		left: 0, 
	},
	profileBackground:{ 
		backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${waterfalls})`,
		height: 300, 
		backgroundPosition:'center', 
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover' 
	},
	profileContent : {
		width:'100%',
		height:'110%',
		marginTop:-20,
		overflow: 'hidden',
		backgroundColor: 'black',
		borderRadius: '20px 20px 0 0',
		boxShadow: '0px 0px 19px 14px rgba(0, 0, 0, 0.25)',
	},
	roundImage: {
		width: 140,
		height: 140,
		overflow: 'hidden',
		background: 'linear-gradient(180deg,#DAA520 0%, #514211 100%)',
		borderRadius: 105,
		boxShadow: '0px -2px 21px 0px #777777, 0px 0px 5px 0px rgba(0, 0, 0, 0.25)',
		position:'relative',
		top:'70%',
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	logoImage: {
		width:80,
		height: 80,

		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		boxShadow: 'inset 0px 0px 0px 0px rgba(0, 0, 0, 0.25)',
		filter: 'drop-shadow(0px 13px 6px rgba(0, 0, 0, 0.25))',
	},
	profileInnerContainer: {
		width: '90%',
		height: 150,
		position:'relative',
		top:'10%',
		overflow: 'visible',
		backgroundColor: '#1c1c1c',
		borderRadius: 20,
		boxShadow: 'inset -8px -8px 20px 0px rgba(0, 0, 0, 0.25), inset 8px 8px 20px 0px rgba(0,0,0,0.25), 0px 2px 5px 0px rgba(0,0,0,0.25)',
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	roundImageInnerGold: {
		width: 40,
		height: 40,
		overflow: 'hidden',
		background: 'linear-gradient(180deg, 	#DAA520 0%, #514211 100%)',
		borderRadius: 105,
		boxShadow: '0px 0px 4px 0px #777777',
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	roundImageInnerBlack: {
		width: 40,
		height: 40,
		overflow: 'hidden',
		backgroundColor: '#000000',
		borderRadius: 105,
		boxShadow:' 0px 0px 4px 0px #777777',
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	textInner: {
		color:'#ffff',
		fontSize:10,
	},
	profileDescription: {
		width: 300,
		height: 70,
		position: 'relative',
		top:'10%',
		display:'flex',
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	descriptionText: {
		color: '#ffffff',
		flexDirection:'column',
		fontSize: 15,
		lineHeight: 1.2,
		fontWeight: 400,
		fontStyle: 'normal',
	},
	button: {
		position: 'relative',
		top:'15%',
	}

}
