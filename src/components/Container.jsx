import React from 'react'
import Radium from 'radium';

const Container = (props) => {

	return (    
		<div style={styles.content}>
            {props.children}
		</div>
    )
        
}
export default Radium (Container)

const styles = {
    content : {
		width:'100%',
		height:'100%',
		marginTop:-20,
		overflow: 'hidden',
		backgroundColor: 'black',
		borderRadius: '20px 20px 0 0',
		boxShadow: '0px 0px 19px 14px rgba(0, 0, 0, 0.25)',
	},
}

