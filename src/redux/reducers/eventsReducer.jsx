import { POST_EVENTS_API, POST_BOOKING } from '../../redux/actions/types';
const initialState = {
    events_booked:{},
    bookings_data:[]
}

 const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_BOOKING:
        return{
            ...state,
            bookings_data: state.bookings_data.concat({
              key: Math.random(),
              bookings_data: action.event_booking,
            })
        }
        case POST_EVENTS_API:
          return{
              ...state,
              events_booked: action.payload
        }
      default:
        return state;
    }
  }

export default eventsReducer;