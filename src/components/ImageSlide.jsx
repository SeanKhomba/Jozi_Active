import React from 'react'
import Radium from 'radium';

 const ImageSlide = (props) => {

	return (    
		<div  style={{
			backgroundImage:props.image,
			maxWidth: "100%",
			height: 'auto',
			backgroundPosition:'center', 
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover'
		}}
        >
        {props.children}
        </div>
    )
        
}
export default Radium (ImageSlide);

