import React, { useState,useContext, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginData } from "../../redux/actions/login.jsx";
// import { typeLoginUsername } from "../../redux/actions/login.jsx";
import TextInput from '../../components/TextInput.jsx';
import Radium from 'radium';
// import app from "../../base.jsx";
import { AuthContext } from "../../Auth.jsx";
import PageContainer from '../../components/PageContainer.jsx';
import ImageSlide from '../../components/ImageSlide.jsx';
import login from '../../images/login.jpg'
import Header from '../../components/Header.jsx';
import Container from '../../components/Container.jsx';
import AuthContainer from '../../components/AuthContainer.jsx';
import Button from '../../components/Button.jsx';


const LoginScreen = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [redirctTo, setRedirctTo] = useState(false); 

  const handleLogin = (e) => {
    e.preventDefault();
    const login_data ={
      email:email,
      password:password,
    }
    props.add(login_data);
    console.log(login_data);
    //setName('');setSurname('');setPhone('');
    //setEmail('');setPassword(''); 
  }
;

  useEffect(()=>{
    (() => {
      if (props.auth) {
        setRedirctTo(true)
      }
  
     
    })();
  });

  if (redirctTo) {
    return <Redirect from="/" to="/home"  />;
  }
  return (
    <PageContainer>
      <ImageSlide imageWidth={{width:100}} image={`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${login})`}>
        <Header logoTitle="LOGIN" divderTitle="Info"/>    
      </ImageSlide>
      <Container>
      <AuthContainer height={'60%'} top={'5%'}>
        <form style= {styles.inputForm} onSubmit={handleLogin} >
            <TextInput 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            label="Email:"
            type="email"
            />
            <TextInput 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            label="Password:"
            type="password"
            />
          <Button position={styles.position} letterSpacing={7.8} type="submit" buttonName="ACTIVATE LOGIN!"/>
        </form>
        <Link style={styles.accountText} to="/signUp">
        Dont have Account?
        </Link>
      </AuthContainer>
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.loginReducer.user,
    auth: state.loginReducer.isAuthenticated
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
	  add: (login_data) => dispatch(loginData(login_data))
	}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Radium(LoginScreen));

const styles = {
  
  image: {
    width:10
  },
  inputForm: {
		display: 'flex',
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
    paddingTop:10
  },
  accountText: {
    marginTop:10,
    color: 'white',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    fontSize: 10,
    textDecoration:'none',
    '@media (min-width: 768px)': {
      fontSize: 50,
    },
  },    
}
