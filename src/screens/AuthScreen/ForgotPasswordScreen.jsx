import React from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import PageContainer from '../../components/PageContainer.jsx';
import ImageSlide from '../../components/ImageSlide.jsx';
import signUp from '../../images/signUp.png'
import Header from '../../components/Header.jsx';
import Container from '../../components/Container.jsx';
import AuthContainer from '../../components/AuthContainer.jsx';
import Button from '../../components/Button.jsx';
import Radium from 'radium';


const ForgotPasswordScreen = () => {


  return (
    <PageContainer>
      <ImageSlide imageWidth={{width:100}} image={`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${signUp})`}>
        <Header logoTitle="Forgot Password" divderTitle="Info"/>    
      </ImageSlide>
      <Container>
      <AuthContainer>
        <form style= {styles.inputForm}>
          <input type="email" placeholder='Forgot Password:' style={styles.input}/>
          <Button position={styles.position} type="submit" buttonName="ACTIVATE FORGOT PASSWORD!"/>
        </form>
        <Link style={styles.backLogin} to="/login">
        Back to Login?
        </Link>
      </AuthContainer>
      </Container>
    </PageContainer>
  );
};
export default withRouter(Radium(ForgotPasswordScreen));

const styles = {
  
  image: {
    width:10
  },
  inputForm: {
		display: 'flex',
		paddingTop:35,
		width:'100%',
		flexDirection:'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto',
  },
  input: {
		width:240,
		height:45,
		borderRadius:8,
		backgroundColor:'#333333',
		borderWidth:0,
		paddingLeft:10,
		margin:10,
		color:'#ffff',
    outline: 'none',
    '@media (min-width: 768px)': {
        width:600,
    },
  },
  position: {
    paddingTop:20
  },
  backLogin: {
    color: 'white',
    justifyContent: 'center',
    display: 'flex',
    margin: 10,
    fontSize: 10,
    textDecoration:'none',
    '@media (min-width: 768px)': {
      fontSize: 50,
    },
  },    
}
