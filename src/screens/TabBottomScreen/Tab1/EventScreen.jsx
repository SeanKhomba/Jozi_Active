import React,{useEffect,useState} from 'react';
import Radium from 'radium';
import axios from "axios";
import Container from '../../../components/Container.jsx';
import InnerContainer from '../../../components/InnerContainer.jsx';
import Header from '../../../components/Header.jsx';
import Button from '../../../components/Button.jsx';
import { Link } from 'react-router-dom';
import {FaCalendarAlt } from 'react-icons/fa';
import {FaCalendarTimes } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';
import {useParams} from "react-router"
import  Jozi_Active_Events  from '../../../data/Event_Data.jsx';


const EventScreen = () => {
const {id,event_type} = useParams();
const [eventData, setEvent] = useState([]);

useEffect(() => {
    // POST request using axios inside useEffect React hook
    const eventResponse = { id:id };
    axios.post('http://127.0.0.1:8000/api/getEventById', eventResponse)
        .then(resp => {

   
			const{ status,data} = resp.data;
			console.log(data)
			if(status == 'OK'){
				setEvent(data);
			}
		});;

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

console.log('evdat',eventData);
	return (    
	<div style={styles.eventsContainer}>
		<Header logoTitle="EVENTS" divderTitle="Info"/>
		<Container>
			<InnerContainer>
			{eventData.map((events) => {
				return(
					<div style={styles.eventsContent} key={events.id}>
						<div style={[styles.roundImage,(events.background_color)]}>
							<img src={events.image} alt={"Jozi Active Logo"}  style={styles.logoImage} />
						</div>
						<div style={styles.eventsText}>
							<div style={styles.textContainer}>
							<FaCalendarAlt  style={styles.iconImage}/>
							<div style={styles.text}>{events.date}</div>
							</div>
							<div style={styles.textContainer}>
							<FaCalendarTimes  style={styles.iconImage}/>
							<div style={[styles.text,{paddingRight:10}]}>{events.start_time}</div>
							</div>
							<div style={styles.textContainer}>
							<BiMoney  style={styles.iconImage}/>
							<div style={styles.text2}>{events.price}</div>
							</div>					
						</div>
					</div>
				)
			})}
			</InnerContainer>
			<Link style={{textDecoration:'none'}} to={`/home/bookings/${id}/${event_type}`}>
				<Button position={styles.button} letterSpacing={10} buttonName="BOOK NOW!"/>
			</Link>
		</Container>
	</div>
	)
}
export default Radium(EventScreen);

const styles = { 
	eventsContainer:{
		position: 'absolute',
		background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)',
		width: '100%',
		height: '100%',
		left: 0, 
	},
	roundImage: {
		width: 80,
		height: 80,
		overflow: 'hidden',
		background: 'linear-gradient(180deg,#DAA520 0%, #514211 100%)',
		borderRadius: 105,
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		'@media (max-height: 568px)': {
			width: 60,
			height: 60,
		},
	},
	logoImage: {
		width: 50,
		height: 50,
		'@media (max-height: 568px)': {
			width: 40,
			height: 40,
		},
	},
	eventsContent: {
		paddingTop:30,
		width: '90%',
		height: '90%',
		'@media (max-height: 568px)': {
			paddingTop:0,
		},
	},
	textContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop:5,
		height:40,
		'@media (max-height: 568px)': {
			height:35,
			marginTop:0,
		},
	},
	eventsText: {
		display: 'flex',
		paddingTop:10,
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		'@media (max-height: 568px)': {
			paddingTop:5,
		},
	},
	iconImage: {
		marginRight:10,
		color:'#5b5a5a',
		fontSize:20,
	},
	text: {
		color:'#ffff',
		fontSize:16,
		'@media (max-height: 568px)': {
			fontSize:10,
		},
	},
	text2: {
		color:'#ffff',
		fontSize:15,
		paddingRight:99,
		'@media (max-height: 568px)': {
			fontSize:10,
			paddingRight:64,
		},
	},
	button:{
		fontSize:20,
		position: 'relative',
		top:60,
		'@media (min-width: 320px)': {
			top:40,
		},
		'@media (min-height: 568px)': {
			top:26,
		},
		'@media (min-height: 667px)': {
			top:50,
		},
		'@media (min-height: 736px)': {
			top:70,
		},
		'@media (min-height: 812px)': {
			top:90,
		},
		
	},
}
