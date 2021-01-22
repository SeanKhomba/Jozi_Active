import React from 'react'
import Radium from 'radium';

const PageContainer = (props) => {
    return (
        <div style={styles.pageContainer}>
            {props.children}
		</div>

		)
	}
export default Radium (PageContainer)
 const styles = {
    pageContainer: {
        position: 'absolute',
            background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)',
            width: '100%',
            height: '100%',
            left: 0, 
            top: 0, 
      },
 }
