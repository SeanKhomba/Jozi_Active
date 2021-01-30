import { TYPE_SIGN_UP_USER,NEW_SIGN_UP} from './types';


// this is the data that is sent from  Sign Up  form on "SignUpScreen"
export const typeSignUpUsername = (sign_up_data) => (
  {
    type: TYPE_SIGN_UP_USER,
    users_payload: sign_up_data,
  }
);

// this is the data that is sent from  Sign Up  form to the 'Jozi Active SignUp API'
export const signUpData = (sign_up_data) => dispatch => {
  fetch('http://127.0.0.1:8000/api/register', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(sign_up_data)
  })
  .then (response => response.json())
  //.then (response => console.log(response))
  // .then(res => {
  //   localStorage.setItem('token', res.config.data.token);
  // })
  .then (response => dispatch({
    type:NEW_SIGN_UP,
    payload:response
  }))
  .catch(err => {console.log(err)})
} 

//  "AXIOS POST" this is the data that is sent from Sign Up form to the 'Jozi Active register API'
// export const signUpData = (sign_up_data) => dispatch => {
//   console.log(sign_up_data)
//   axios.post('https://api.joziactive.com/api/captureBooking',sign_up_data)
//   .then(res => {console.log(res)})
//   .then (res => dispatch({
//     type:NEW_SIGN_UP,
//     payload:res
//   }))
//   .catch(err => {console.log(err)})
// } 
