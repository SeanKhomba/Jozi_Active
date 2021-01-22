import { POST_CONTACT_US,POST_CONTACT_API } from '../../redux/actions/types';
const initialState = {
    contact_data:[],
    contact_api:{},
}

 const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CONTACT_US:
        return{
            ...state,
            contact_data: state.contact_data.concat({
              key: Math.random(),
              contact_data: action.contact_payload,
            })
        }
        case POST_CONTACT_API:
        return{
            ...state,
            contact_api: state.contact_api.concat({
              key: Math.random(),
              contact_api:action.payload
            })
        }
      default:
        return state;
    }
  }
export default contactReducer;