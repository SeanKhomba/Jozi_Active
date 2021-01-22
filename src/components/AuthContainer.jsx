import React from 'react'
import Radium from 'radium';
const AuthContainer = (props) => {
    return (
        <div style={[styles.innerContainer,{height:props.height,top:props.top,}]}>
          <div style={styles.innerContent}>
            {props.children}
          </div>
        </div> 
		)
	}
export default Radium (AuthContainer)
 const styles = {
    innerContainer: {
        maxWidth: 425,
        position:'relative',
        top:'4%',
        overflow: 'visible',
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        boxShadow: 'inset -8px -8px 20px 0px rgba(0, 0, 0, 0.25), inset 8px 8px 20px 0px rgba(0,0,0,0.25), 0px 2px 5px 0px rgba(0,0,0,0.25)',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        '@media (min-width: 320px)': {
          maxWidth:'90%',
        },
        '@media (min-width: 375px)': {
          maxWidth:'90%',
        },
        '@media (min-width: 425px)': {
          maxWidth:375,	
        },
        '@media (max-height: 568px)': {
          fontSize:10,
          top:'2%',
        },
    
      },
      innerContent : {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '90%', 
        padding:10,
      },
 }
