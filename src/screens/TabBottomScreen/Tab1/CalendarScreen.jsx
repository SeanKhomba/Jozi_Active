import React, { useState } from 'react';
import Radium from 'radium';
import Container from '../../../components/Container.jsx';
import Header from '../../../components/Header.jsx';
import CardCalendar from '../../../components/CardCalendar.jsx';


const CalendarScreen = (props) => {
	const [search,setSearch] = useState('');
	
	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value)

	}

	return (    
	<div style={styles.calendarContainer}>
		<Header logoTitle="CALENDAR" divderTitle="Info"/>
		<Container>
				<div style={styles.calendarContent}>
				<div style={styles.search_description}>SEARCH DATE OF EVENT YOU LOOKING FOR?</div>
				<input
				style={styles.searchInput}
				type="text"
				color={'red'}
				placeholder="Search Date Here!"
				onChange={handleChange}
				value={search}
				/>				
				<CardCalendar search={search}/>
				</div>
		</Container> 

	</div>
	)
}
export default Radium(CalendarScreen);

const styles={ 
	calendarContainer:{
		position: 'absolute',
		background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)',
		width: '100%',
		height: '100%',
		left: 0, 
	},
	calendarContent: {
		paddingTop:10,
		width: '90%',
		height: '65%',
		display: 'flex',
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		'@media (max-height: 568px)': {
			height: '55%',
			paddingTop:20,
			paddingBottom:20,
		},
	},
	search_description:{
		color:'white', 
		fontSize:20,
		padding:20,
		'@media (min-width: 320px)': {
			fontSize:11,
		},
		'@media (min-width: 375px)': {
			fontSize:12,
		},
		'@media (min-width: 425px)': {
			fontSize:13,
		},
	},
	searchInput:{
		width:300,
		height:40,
		color:'#ffffff',
		textAlign:'center',
		marginBottom:10,
		backgroundColor:'transparent',
		borderRadius:10,
		borderStyle: 'solid',
		borderColor: '#ffffff',
		borderWidth: 1,
		outline: 'none',
		'@media (min-width: 320px)': {
			width:230,
			height:40,
		},
		'@media (min-width: 375px)': {
			width:250,
			height:40,
		},
		'@media (min-width: 425px)': {
			width:280,
			height:40,
		},
	},
}
