import { POST_EVENTS_API, POST_BOOKING,GET_EVENT_CATEGORY_API,GET_EVENTS_API } from '../../redux/actions/types';
const initialState = {
    events_booked:{},
    bookings_data:{},
    eventsCategories:[],
    eventsData:[],
}

 const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_BOOKING:
        return{
            ...state,
            bookings_data: action.payload
        }
        case POST_EVENTS_API:
          return{
              ...state,
              events_booked: action.payload
        }
        case GET_EVENT_CATEGORY_API:
          return{
              ...state,
              eventsCategories: action.payload
        } 
        case GET_EVENTS_API:
        return{
            ...state,
            eventsData: action.payload
      }
      default:
        return state;
    }
  }

export default eventsReducer;