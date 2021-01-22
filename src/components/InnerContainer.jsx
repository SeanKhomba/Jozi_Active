import React from 'react'
import Radium from 'radium';

const InnerContainer = (props) => {

	return (    
        <div style={styles.innerContainer}>
            {props.children}
        </div>
    )
        
}
export default Radium (InnerContainer)

const styles = {
	innerContainer: {
		maxWidth: 425,
		height: '45%',
		position:'relative',
		top:'5%',
		overflow: 'visible',
		backgroundColor: '#1c1c1c',
		borderRadius: 20,
		boxShadow: 'inset -8px -8px 20px 0px rgba(0, 0, 0, 0.25), inset 8px 8px 20px 0px rgba(0,0,0,0.25), 0px 2px 5px 0px rgba(0,0,0,0.25)',
		display: 'flex',
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		'@media (min-width: 320px)': {
			maxWidth:'90%',
			height: '50%',
		},
		'@media (min-width: 375px)': {
			maxWidth:'90%',
			height: '50%',
		},
		'@media (min-width: 425px)': {
			maxWidth:375,	
			maxHeight: '50%',
		},
		'@media (max-height: 568px)': {
			fontSize:10,
			top:'3%',
			maxHeight: '47%',
		},
	},
}

