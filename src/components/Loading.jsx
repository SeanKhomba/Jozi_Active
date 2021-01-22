import React from 'react'
import Radium from 'radium';
import { HoopSpinner } from "react-spinners-kit";

const Loading = () => {
    return (
        <div style={styles.spinner_container}>
            <div style={styles.spinner_styles}>
                <HoopSpinner color={'#fff'} size={45}/>
            </div>
        </div>
		)
	}
export default Radium(Loading)

const styles = {
    spinner_container:{
        position:'absolute',
        width:'100%',
        height:'100%',
        background: '#333333'
    },
	spinner_styles:{
        position: "absolute", 
        top: "50%", 
        left: "47%",
	}
}