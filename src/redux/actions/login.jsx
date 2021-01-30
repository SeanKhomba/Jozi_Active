import { TYPE_LOGIN_USER,NEW_LOGIN } from './types';

// this is the data that is sent from login form on "LoginScreen"
export const typeLoginUsername = (login_data) => (
  {
    type: TYPE_LOGIN_USER,
    users_payload: login_data
  }
);

// this is the data that is sent from login form to the 'Jozi Active login API'
export const loginData = (login_data) => dispatch => {
  fetch('http://127.0.0.1:8000/api/login', {
    method:'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(login_data)
  })
  .then (response => response.json())
  .then (response => console.log(response))
  // .then(res => {
  //   localStorage.setItem('token', res.config.data.token);
  // })
  .then (response => dispatch({
    type:NEW_LOGIN, 
    payload:response
  }))
  .catch(err => {console.log(err)})

} 

//  "AXIOS POST" this is the data that is sent from login form to the 'Jozi Active Login API'
// export const loginData = (login_data) => dispatch => {
//   console.log(login_data)
//   axios.post('https://api.joziactive.com/api/captureBooking',login_data)
//   .then(res => {console.log(res)})
//   .then (res => dispatch({
//     type:NEW_LOGIN,
//     payload:res
//   }))
//   .catch(err => {console.log(err)})
// } 