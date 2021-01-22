import { POST_CONTACT_US,POST_CONTACT_API } from './types';
// import axios from "axios";

// This is the data that is sent from contact form on "ContactScreen"
export const Contact_Post = (contact_data) => (
  {
    type: POST_CONTACT_US,
    contact_payload:contact_data
  }
);

// This is the data that is sent from contact form to the 'Jozi Active contact API'
export const Post_Contact= (contact_data) => dispatch => {
  fetch('', {
    method:'POST',
    headers: {'content-type': 'application/json'},
    body:JSON.stringify(contact_data) 
  })
  .then (response => response.json())
  .then (response => dispatch({
      type:POST_CONTACT_API,
      payload:response
  }));
};

//  "AXIOS POST" this is the data that is sent from contact form to the 'Jozi Active contact API'
// export const Post_Contact = (contact_data) => dispatch => {
//   console.log(contact_data)
//   axios.post('https://api.joziactive.com/api/captureBooking',contact_data)
//   .then(res => {console.log(res)})
//   .then (res => dispatch({
//     type:POST_CONTACT_API,
//     payload:res
//   }))
//   .catch(err => {console.log(err)})
// } 
