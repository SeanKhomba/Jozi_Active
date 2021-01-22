import { NEW_SIGN_UP,TYPE_SIGN_UP_USER } from '../../redux/actions/types';

const initialState = {
  users_sign_up:[],
  users_signUpArray:[]
}

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_SIGN_UP:
      return {
        ...state,
        users_sign_up: state.users_sign_up.concat({
          key: Math.random(),
          data: action.payload,
        })
      };
    case TYPE_SIGN_UP_USER:
      return{
          ...state,
          users_signUpArray: state.users_signUpArray.concat({
            key: Math.random(),
            user: action.users_payload,
          })
      }
    default:
      return state;
  }
}

export default signUpReducer;