import React, {useState}from 'react'
import ImageSlide from '../../../components/ImageSlide.jsx';
import Container from '../../../components/Container.jsx';
import InnerContainer from '../../../components/InnerContainer.jsx';
import aboutSlider from '../../../images/aboutSlider.jpg'
import Header from '../../../components/Header.jsx';
import Button from '../../../components/Button.jsx';
import TextInput from '../../../components/TextInput.jsx';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Radium from 'radium';
import { connect } from 'react-redux'; 
import { Contact_Post } from '../../../redux/actions/contact';
import { Post_Contact } from '../../../redux/actions/contact';

const ContactScreen = (props) => {
	const [name,setName] = useState('');
	const [phone,setPhone] = useState('');
	const [message,setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const contact_data = {
			name:name,
			phone:phone,
			message:message,
		}
		props.add(contact_data);
		console.log(contact_data);
		setName('');setPhone('');setMessage('');
	}
	return (    
	<div style={styles.contactContainer}>
		
		<ImageSlide image={`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${aboutSlider})`}>
		<Header logoTitle="CONTACT US!" divderTitle="Info"/>
		</ImageSlide>
		<Container>
			<InnerContainer>
				<div style={styles.contactContent}>
					<div style={styles.contactText}>Contact us below!</div>
					<form style={styles.inputForm} onSubmit={handleSubmit}>
						<TextInput 
						value={name} 
						onChange={(e) => setName(e.target.value)}
						label="Full Name:"
						type="text"
						/>
						<TextInput 
						value={phone} 
						onChange={(e) => setPhone(e.target.value)}
						label="Phone Number:"
						type="number"
						/>
						<TextareaAutosize 
						style={styles.inputMessage}
						aria-label="empty textarea" 
						placeholder="Message:" 
						value={message} 
						onChange={(e) => setMessage(e.target.value)}
						rowsMin={4}
						/>
						<div style={styles.button_container}>
							<Button letterSpacing={8}  type="submit" className='button' buttonName="ACTIVATE MESSAGE!"/>
						</div>					
					</form>
				</div>
			</InnerContainer>
		</Container>
	</div>
	)
}
const styles={ 
	contactContainer:{
		position: 'absolute',
		background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)',
		width: '100%',
		height: '100%',
		left: 0, 
	},
	contactContent: {
		width: '100%',
		height: '100%', 
		display:'flex',
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		padding:5,
		},
	contactText: {
		color:'#ffff',
		margin: 'auto',
		position:'relative',
		top:'5%'
	},
	inputForm: {
		display: 'flex',
		width:'100%',
		height:'90%',
		flexDirection:'column',
		justifyContent:'center',
		alignItems: 'center',
		margin: 'auto',
	},
	inputMessage: {
		width:250,
		height:100,
		paddingTop:10,
		borderRadius:8,
		borderColor:'#333333',
		backgroundColor:'transparent',
		borderWidth:2,
		paddingLeft:10,
		color:'#747474',
		margin: 5,
		outline: 'none',
		'@media screen and (max-height: 667px)': {
			height:100,
		},
	},
	button_container:{
		height:'10%',
		position:'relative',
		top:'5%',
		display:'flex',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		'@media screen and (min-height: 568px)': {
			top:'22%',
		},
		'@media screen and (min-height: 667px)': {
			top:'25%',
		},
		'@media screen and (min-height: 736px)': {
			top:'30%',
		},
	},
}


const mapStateToProps = (state) => {
	console.log(state);
	return {
	  contact: state.contactReducer.contact_data
	}
  }
  const mapDispatchToProps = (dispatch) => {
	return {
	  add: (contact_data) => dispatch(Contact_Post(contact_data),Post_Contact(contact_data))
	}
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Radium(ContactScreen));