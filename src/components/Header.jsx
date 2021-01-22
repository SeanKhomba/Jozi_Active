import React from 'react'
import Radium from 'radium';

const Header = (props) => {
    return (
			<div style={styles.headerContainer}>
				<div style={styles.logoContainer}>
						<img src={require('/Users/sean/sites/jozi_active/src/images/transparent-logo.png')} alt={"Jozi Active Logo"}  style={styles.logoImage} />
						<p style={styles.logoTitle}>
						{props.logoTitle}
						</p>
					<div style={styles.dividerContainer}>
						<div style={styles.dividerBorder} />
							<span style={styles.dividerContent}>
							{props.divderTitle}
							</span>
						<div style={styles.dividerBorder} />
					</div>
				</div>
			</div>
		)
	}
export default Radium(Header)

const styles = {
	headerContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoContainer: {
		width: '100%',
		alignSelf: 'flex-start',
	},
	logoImage: {
		width: 170, 
		height: 162,
		textAlign: 'center',
		display: 'block',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
		filter: 'drop-shadow(0px 13px 6px rgba(0, 0, 0, 0.25))',
	},
	logoTitle: {
		width: '100%',
		height: 30,
		position: 'relative',
		bottom: 25,
		textShadow: '6px 0px 5px rgba(0, 0, 0, 0.25)',
		color: '#ffffff',
		fontSize: 26,
		lineHeight: 1.2,
		fontWeight: 450,
		fontStyle: 'normal',
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
	},
	dividerContainer: {
		width: 300,
		position: 'relative',
		bottom: 23,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '10px  auto 10px',
	  },
	dividerBorder: {
		borderBottom: '1.2px solid #e8e8e8',
		width: '100%',
	},
	dividerContent: {
		padding: '0 10px 0 10px',
		color: '#b7b3b2',
	}
}