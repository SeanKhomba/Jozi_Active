import React, { useState } from 'react'
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';
import './styles.css'
import friendZone from '../../images/friendZone.jpeg'
import { FaRegStar } from 'react-icons/fa';

export default function ReferFriendScreen () {
	const [name,setName] = useState('');
	const [surname,setSurname] = useState('');
	const [phone,setPhone] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name,phone,surname);
		setName('');setSurname('');setPhone('');
	}
	return (    
	<div className='referContainer'>
		<div  style={styles.referBackground}>
			<Header logoTitle="FRIENDZONE" divderTitle="Info"/>
		</div>
		<div style={styles.referContent}>
			<div style={styles.description}>
				<FaRegStar  style={{ position:'absolute',right:'8%',top:'45%',color:'#5b5a5a', fontSize:20}}/>
				<text style={styles.descriptionText}>GET A FRIEND ACTIVE</text>
				<text style={styles.descriptionText}>TODAY!</text>
				<FaRegStar   style={{ position:'absolute',left:'8%',top:'45%',color:'#5b5a5a',fontSize:20}} />
			</div>
			<div style={styles.benefitContainer}>
				<text style={styles.benefitTextTop}>WHY?</text>
				<div style={styles.benefitInnerContainer}>
					<text style={styles.benefitTextInner}>" CONTENT ABOUT WHAT BENEFITS COME WITH REFERRING FRIENDS " </text>
				</div>
			</div>
			<div style={styles.inputContainer}>
				<form style={styles.inputForm} onSubmit={handleSubmit}>
					<input type="text" placeholder='Name:' style={styles.input} value={name} onChange={(e) => setName(e.target.value)}/>
					<input type="text" placeholder='Surname:' style={styles.input} value={surname} onChange={(e) => setSurname(e.target.value)}/>
					<input type="phone" placeholder='Phone Number:'style={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)}/>
					<Button style={styles.button} type="submit" className='button' buttonName="ACTIVATE FRIEND!"/>
				</form>
			</div>
		</div>
	</div>
	)
}
const styles={ 
	referBackground:{ 
		backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${friendZone})`,
		height: 300, 
		backgroundPosition:'center', 
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover' 
	},
	referContent : {
		width:'100%',
		height:'110%',
		marginTop:-20,
		overflow: 'hidden',
		backgroundColor: 'black',
		borderRadius: '20px 20px 0 0',
		boxShadow: '0px 0px 19px 14px rgba(0, 0, 0, 0.25)',
	},
	description: {
		width: 300,
		height: 70,
		paddingTop:20,
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
	benefitContainer: {
		width: 300,
		height: 70,
		position:'relative',
		top:10,
		overflow: 'visible',
		backgroundColor: '#1c1c1c',
		borderRadius: 20,
		boxShadow: 'inset -8px -8px 20px 0px rgba(0, 0, 0, 0.25), inset 8px 8px 20px 0px rgba(0,0,0,0.25), 0px 2px 5px 0px rgba(0,0,0,0.25)',
		display: 'block',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	benefitTextTop:{
		color: '#ffffff',
		fontSize: 12,
		padding:5,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	benefitInnerContainer: {
		width: 270,
		height: 30,
		borderRadius:10,
		overflow: 'visible',
		backgroundColor: 'rgba(184, 184, 184, 0.33)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	benefitTextInner: {
		color: '#ffffff',
		fontSize: 7,
		padding:5,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	inputContainer: {
		width: 300,
		height: 200,
		position:'relative',
		top:20,
		overflow: 'visible',
		backgroundColor: '#1c1c1c',
		borderRadius: 20,
		boxShadow: 'inset -8px -8px 20px 0px rgba(0, 0, 0, 0.25), inset 8px 8px 20px 0px rgba(0,0,0,0.25), 0px 2px 5px 0px rgba(0,0,0,0.25)',
		display: 'flex',
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	inputForm: {
		display: 'flex',
		paddingTop:30,
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	input: {
		width:240,
		height:45,
		borderRadius:8,
		backgroundColor:'#333333',
		borderWidth:0,
		paddingLeft:10,
		color:'#ffff',
		margin: 5,
		outline: 'none',
	},
	button: {
		position: 'relative',
		top:'14%',
		
	}

}
