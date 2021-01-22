import React, {useState}from 'react'
import Container from '../../../components/Container.jsx';
import InnerContainer from '../../../components/InnerContainer.jsx';
import Header from '../../../components/Header.jsx';
import Button from '../../../components/Button.jsx';
import TextInput from '../../../components/TextInput.jsx';
import InputSelect from '../../../components/InputSelect.jsx';
import food_options from '../../../data/Food_Data.jsx';
import quantity_options from '../../../data/Quantity_Data.jsx';
import Radium from 'radium';
import { connect } from 'react-redux'; 
import { PostBookings } from '../../../redux/actions/events';
import { Booking_Data } from '../../../redux/actions/events';
import {useParams} from "react-router"



const BookingScreen = (props) => {
	const {event_type} = useParams();

	const [type,setType] = useState(event_type);
	const [fullName,setFullName] = useState('');
	const [phone,setPhone] = useState('');
	const [options,setOptions] = useState('');
	const [quantity,setQuantity] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const booking_data ={
			type:type,
			fullName:fullName,
			phone:phone,
			options:options,
			quantity:quantity,
		  }
		props.add(booking_data);
		setType('');setFullName('');setPhone('');setOptions('');setQuantity('');
	}
	return (    
	<div style={styles.bookingContainer}>
		<Header logoTitle="BOOKING" divderTitle="Info"/>
		<Container>
			<InnerContainer>
				<div style={styles.bookingContent}>
					<div style={styles.bookingTextTop}>Thank You!</div>
					<div style={styles.bookingTextBottom}>Below is the info you need to fill in to secure your booking </div>
					<form style={styles.inputForm} onSubmit={handleSubmit}>
					<TextInput 
					 value={fullName} 
					 onChange={(e) => setFullName(e.target.value)}
					 label="First Name.."
					 type="text"
					 />
					<TextInput 
					 value={phone} 
					 onChange={(e) => setPhone(e.target.value)}
					 label="Phone Number.."
					 type="number"
					 />
					<InputSelect
					id="outlined-select-currency-native"
					select
					label="Food Option:"
					value={options}
					onChange={(e) => setOptions(e.target.value)}
					>
					{food_options.map((option) => (
						<option key={option.value} value={option.value}>
						{option.label}
						</option>
					))}
					</InputSelect>
					<InputSelect
					id="outlined-select-currency-native"
					select
					label="Quantity:"
					value={quantity}
					onChange={(e) => setQuantity(e.target.value)}
					>
					{quantity_options.map((option) => (
						<option key={option.value} value={option.value}>
						{option.label}
						</option>
					))}
					</InputSelect>	
						<Button position={styles.button} letterSpacing={10} type="submit" buttonName="BOOK NOW!"/>
					</form>
				</div>
			</InnerContainer>
		</Container>

	</div>
	)
}
const styles={ 
	bookingContainer:{
		position: 'absolute',
		background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)',
		width: '100%',
		height: '100%',
		left: 0, 
	},
	bookingContent: {
		display: 'flex',
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		'@media (min-height: 568px)': {
			height:'90%',
			marginTop:35,
		},
	},
	bookingTextTop: {
		color: '#ffff',
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		'@media (min-width: 320px)': {
			fontSize:15
		},
		'@media (min-height: 568px)': {
			fontSize:10
		},
	},
	bookingTextBottom: {
		color: '#ffff',
		fontSize:10,
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		'@media (min-width: 320px)': {
			fontSize:8
		},
		'@media (min-width: 375px)': {
			fontSize:10
		},
		'@media (min-width: 425px)': {
			fontSize:10
		},
		'@media (min-height: 568px)': {
			fontSize:7
		},
	},
	inputForm: {
		display: 'flex',
		width:'100%',
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		'@media (min-height: 667px)': {
			paddingTop:10,
		},
		'@media (min-height: 736px)': {
			paddingTop:20,
		},
		'@media (min-height: 812px)': {
			paddingTop:30,
		},
	},

	button:{
		fontSize:20,
		position: 'relative',
		top:'20%',
		'@media (min-width: 320px)': {
			top:'14%',
		},
		'@media (min-height: 568px)': {
			top:'6%',
		},
		'@media (min-height: 667px)': {
			top:'15%',
		},
		'@media (min-height: 736px)': {
			top:'23%',
		},
		'@media (min-height: 812px)': {
			top:'33%',
		},
	},
}
const mapStateToProps = (state) => {
	console.log(state);
	return {
	  booking: state.eventsReducer.events_booked

	}
  }
  const mapDispatchToProps = (dispatch) => {
	return {
	  add: (booking_data) => dispatch(Booking_Data(booking_data),PostBookings(booking_data))
	}
  }
export default connect(mapStateToProps, mapDispatchToProps)(Radium(BookingScreen));