import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpData } from "../../redux/actions/signUp.jsx";
// import { typeSignUpUsername } from "../../redux/actions/signUp.jsx";
import TextInput from '../../components/TextInput.jsx';
import Radium from 'radium';
// import app from "../../base.jsx";
import PageContainer from '../../components/PageContainer.jsx';
import ImageSlide from '../../components/ImageSlide.jsx';
import signUp from '../../images/signUp.png'
import Header from '../../components/Header.jsx';
import Container from '../../components/Container.jsx';
import AuthContainer from '../../components/AuthContainer.jsx';
import Button from '../../components/Button.jsx';


const SignUpScreen = (props) => {
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [phone,setPhone] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirm_password,setConfirm_password] = useState('');

  const handleSignUp = (e) =>  {
    e.preventDefault();
    const sign_up_data ={
      name:name,
      surname:surname,
      phone:phone,
      email:email,
      password:password,
      confirm_password:confirm_password,
    }
    props.add(sign_up_data);
    setName('');setSurname('');setPhone('');
    setEmail('');setPassword('');setConfirm_password('');
  };

  return (
    <PageContainer>
      <ImageSlide imageWidth={{width:100}} image={`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${signUp})`}>
        <Header logoTitle="SIGN UP" divderTitle="Info"/>    
      </ImageSlide>
      <Container>
      <AuthContainer height={'65%'} top={'2%'}>
        <form style= {styles.inputForm} onSubmit={handleSignUp} >
            <TextInput 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            label="Name:"
            type="text"
            />
            <TextInput 
            value={surname} 
            onChange={(e) => setSurname(e.target.value)}
            label="Surname:"
            type="text"
            />
            <TextInput 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            label="Phone Number:"
            type="number"
            />
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
            <TextInput 
            value={confirm_password} 
            onChange={(e) => setConfirm_password(e.target.value)}
            label="Confirm Password:"
            type="password"
            />
          <Button position={styles.position} letterSpacing={5.8}  type="submit" buttonName="ACTIVATE SIGN UP!"/>
        </form>
        <Link style={styles.accountText} to="/login">
        Have Account Already?
        </Link>
      </AuthContainer>
      </Container>
    </PageContainer>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    user_signIn: state.signUpReducer.users_signUpArray,
  }
}
const mapDispatchToProps = (dispatch) => {
	return {
	  add: (sign_up_data) => dispatch(signUpData(sign_up_data))
	}
  }

export default connect(mapStateToProps, mapDispatchToProps)(Radium(SignUpScreen));

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
