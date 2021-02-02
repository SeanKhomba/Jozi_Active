import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Radium from 'radium';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import {useParams} from "react-router"
import  Jozi_Active_Events  from '../data/Event_Data.jsx';
import { getEventsData } from "../redux/actions/events";

const CardCalendar = (props) => {
	const {id,event_type} = useParams();
	const dispatch = useDispatch();

	// const {events,setEvents} = useState([]);
	// useEffect (() => {
	// 	try{
	// 		fetch('api end point goes here!')
	// 		.then(res => res.json())
	// 		.then((result) => {
	// 			console.log(result)
	// 					})
	// 	}catch(e) {
	// 		console.log(e)
	// 	}
	// },[]);

	const { allEvents } = useSelector(
        state => ({
            allEvents: state.eventsReducer.eventsData,
        })
      );
    
      useEffect(() => {
		const eventRequest ={
			category_id:id
		  }
        dispatch(getEventsData(eventRequest));
      }, [dispatch]);
          useEffect(() => {
        
      }, []);

console.log(allEvents);
	return (    
        <Scrollbars style={styles.scrollArea}>
        <div style={styles.cardContainer}>
		{/* filter(((events) => events.category_id === id)).filter((i) => i.date.toLowerCase().match(props.search)) */}
                {allEvents.map((events) => {
                    return(
                        <div key={events.id} style={{padding:10}}>
                        <Link style={{textDecoration:'none'}} to={`/home/events/${events.id}/${event_type}`}>
                        <div style={styles.calendarCard}>
                            <div style={[styles.calendarText,{marginRight:10,borderRightWidth:10,borderRight: '1px solid white',}]}>
                                <div style={styles.card_text_date}>{events.date}</div>
                                <div style={styles.card_text_month}>{events.month}</div>
                            </div>
                            <div style={[styles.calendarText,{alignItems: 'none'}]}>
                                <div style={styles.card_text_description}>{events.description}</div>
                                <div style={styles.card_text_address}>{events.location}</div>
                                <div style={styles.card_text_time}>{events.time}</div>
                            </div>
                            <div style={[styles.calendarText,{marginLeft:10}]}>
                                <div style={[styles.backgroundImage,(events.background_color)]}>
                                    <img src={events.image} alt={"Jozi Active Logo"}  style={styles.cardImage} />
                                </div>
                            </div>
                            </div>
                        </Link>
                        </div>
                    )
                })}
        </div>
        </Scrollbars>
    )
        
}
export default Radium (CardCalendar)

const styles = {
    scrollArea:{
		width: '90%', 
		height: '100%',
		margin:'auto',
	},
	cardContainer:{
		padding:5,
		flexDirection:'row'
	},
	calendarCard:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		width:500,
		height:120,
		overflow: 'visible',
		backgroundColor: '#1c1c1c',
		boxShadow: 'inset -8px -8px 20px 0px rgba(0, 0, 0, 0.25), inset 8px 8px 20px 0px rgba(0,0,0,0.25)',
		borderRadius: 10,
		margin:'auto',
		'@media (min-width: 320px)': {
			width:220,
			height:75,
		},
		'@media (min-width: 375px)': {
			width:250,
			height:75,
		},
		'@media (min-width: 425px)': {
			width:280,
			height:75,
		},

	},
	calendarText: {
		flexDirection:'column',
		color:'white',
		width:160,
		height:110,
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		// backgroundColor:'green',
		'@media (min-width: 320px)': {
			width:80,
			height:60,
		},
		'@media (min-width: 375px)': {
			width:80,
			height:60,
		},
		'@media (min-width: 425px)': {
			width:80,
			height:60,
		},
	},
	card_text_date: {
		fontSize:50,
		'@media (min-width: 320px)': {
			fontSize:25,
		},
	},
	card_text_month: {
		fontSize:15,
		'@media (min-width: 320px)': {
			fontSize:10,
		},
	},
	card_text_description: {
	
		fontWeight:'bold',
		padding:10,

		'@media (min-width: 320px)': {
			fontSize:5,
			padding:2
		},
		'@media (min-width: 375px)': {
			fontSize:6,
			padding:3
		},
		'@media (min-width: 425px)': {
			fontSize:6,
			padding:3
		},
	},
	card_text_address: {

		fontWeight:'bold',
		padding:10,
		'@media (min-width: 320px)': {
			fontSize:5,
			padding:2
		},
		'@media (min-width: 375px)': {
			fontSize:6,
			padding:3
		},
		'@media (min-width: 425px)': {
			fontSize:6,
			padding:3
		},
	},
	card_text_time: {
		fontWeight:'bold',
		padding:10,
		'@media (min-width: 320px)': {
			fontSize:5,
			padding:2
		},
		'@media (min-width: 375px)': {
			fontSize:6,
			padding:3
		},
		'@media (min-width: 425px)': {
			fontSize:6,
			padding:3
		},
	},
	backgroundImage: {
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
		'@media (min-width: 320px)': {
			width: 40,
			height: 40,
		},
		'@media (min-width: 375px)': {
			width: 50,
			height: 50,
		},
		'@media (min-width: 425px)': {
			width: 50,
			height: 50,
		},
	},
	cardImage: {
		width: 50,
		height: 50,
		'@media (min-width: 320px)': {
			width: 20,
			height: 20,
		},
		'@media (min-width: 375px)': {
			width: 30,
			height: 30,
		},
		'@media (min-width: 425px)': {
			width: 30,
			height: 30,
		},
	},
}

