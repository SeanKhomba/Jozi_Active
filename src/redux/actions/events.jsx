import { POST_BOOKING, POST_EVENTS_API,GET_EVENT_CATEGORY_API,GET_EVENTS_API } from './types';
 import axios from "axios";


// this is the data that is sent from booking form on "BookingScreen"
export const Booking_Data = (booking_data) => (
    {
      type: POST_BOOKING,
      event_booking:booking_data,
    }
  );


 
// this is the data that is sent from booking form to the 'Jozi Active captureBooking API'
export const PostBookings = (booking_data) => dispatch => {
  
  
  axios.post('http://127.0.0.1:8000/api/captureBooking',booking_data).then(resp => {


      dispatch({
            type:POST_EVENTS_API,
            payload:resp.data
        })
   
}).catch(err => {console.log(err)});


    // fetch('http://127.0.0.1:8000/api/captureBooking', {
    //   method:'POST',
    //   headers: {'content-type': 'application/json'},
    //   body:JSON.stringify(booking_data) 
    // })
    // .then (response => response.json())
    // .then (response => dispatch({
    //     type:POST_EVENTS_API,
    //     payload:response
    // }));
} 


export const getEventCategories = () => dispatch => {
  axios.get('http://127.0.0.1:8000/api/getEventsCategory').then(resp => {

   
    const{ status,data} = resp.data;
    
    if(status == 'OK'){
      dispatch(setEventsCategories(data));
    }
});
} 

export const setEventsCategories = decoded => {
  return {
    type: GET_EVENT_CATEGORY_API,
    payload: decoded
  };
};


export const getEventsData = (eventRequest) => dispatch => {
  axios.post('http://127.0.0.1:8000/api/getEventsByCat',eventRequest).then(resp => {

   
    const{ status,data} = resp.data;
    
    if(status == 'OK'){
      dispatch(setEventsData(data));
    }
});
} 

export const setEventsData = decoded => {
  return {
    type: GET_EVENTS_API,
    payload: decoded
  };
};



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