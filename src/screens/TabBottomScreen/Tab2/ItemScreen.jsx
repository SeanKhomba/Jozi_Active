import React from 'react'
import Container from '../../../components/Container.jsx';
import Header from '../../../components/Header.jsx';
import InnerContainer from '../../../components/InnerContainer.jsx';

export default function ItemScreen () {

	return (    
	<div style={styles.storeContainer}>
		<Header logoTitle="STORE" divderTitle="Info"/>
		<Container>
			<InnerContainer>
				<div style={styles.storeContent}>
					<div style={styles.storeText}>
						"Coming Soon!"
					</div>
				</div>
			</InnerContainer>
		</Container>

	</div>
	)
}
const styles={ 
	storeContainer:{
		position: 'absolute',
		background: 'linear-gradient(0deg, #000000 0%, rgb(171, 171, 171) 100%)',
		width: '100%',
		height: '100%',
		left: 0, 
	},
	storeContent: {
		width: '90%',
		height: '90%',
		padding:10,
		display: 'flex',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	storeText: {
		color:'#ffff',
		fontSize:30,
	}


}
