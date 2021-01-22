import React from 'react'
import Radium from 'radium';
const Button = (props) => {
    return (
		<div style= {props.position}>
			<button style={[styles.button,{letterSpacing: props.letterSpacing,}]} onClick={props.onClick}>
			{props.buttonName}
			</button>	
		</div>

		)
	}
export default Radium (Button)
 const styles = {
	button : {
		backgroundColor:'rgba(153, 153, 153, 0)',
		fontFamily:'Helvetica',
		borderStyle: 'solid',
		borderColor: '#ffffff',
		borderWidth: 1,
		borderRadius: 7,
		padding: 8,
		color:'#ffffff',
		display: 'flex',
		justifContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		outline: 'none',
		":hover": {
			color:'#ffffff',
			backgroundColor:'#b7b3b2',
			boxShadow: '0 0px 12px 0 rgba(255,255,255,0.24), 0 10px 80px 0 rgba(255,255,255,0.19)',
		  },
		  ":active": {
			backgroundColor:'#b7b3b2',
			borderColor: 'none',
		  },
	},
 }
