import { POST_BOOKING, POST_EVENTS_API } from './types';
// import axios from "axios";

// this is the data that is sent from booking form on "BookingScreen"
export const Booking_Data = (booking_data) => (
    {
      type: POST_BOOKING,
      event_booking:booking_data,
    }
  );


 
// this is the data that is sent from booking form to the 'Jozi Active captureBooking API'
export const PostBookings = (booking_data) => dispatch => {
    fetch('http://api.joziactive.com/api/captureBooking', {
      method:'POST',
      headers: {'content-type': 'application/json'},
      body:JSON.stringify(booking_data) 
    })
    .then (response => response.json())
    .then (response => dispatch({
        type:POST_EVENTS_API,
        payload:response
    }));
} 

//  "AXIOS POST" this is the data that is sent from booking form to the 'Jozi Active captureBooking API'
// export const PostBookings = (booking_data) => dispatch => {
//   console.log(booking_data)
//   axios.post('https://api.joziactive.com/api/captureBooking',booking_data)
//   .then(res => {console.log(res)})
//   .then (res => dispatch({
//     type:POST_EVENTS_API,
//     payload:res
//   }))
//   .catch(err => {console.log(err)})
// } 