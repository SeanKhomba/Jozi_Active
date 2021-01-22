import {TYPE_LOGIN_USER, NEW_LOGIN } from '../../redux/actions/types';

const initialState = {
  data:[],
  users_loginArray:[]
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_LOGIN:
      return {
        ...state,
        data: state.data.concat({
          key: Math.random(),
          data: action.payload,
        })
      };
    case TYPE_LOGIN_USER:
      return{
          ...state,
          users_loginArray: state.users_loginArray.concat({
            key: Math.random(),
            users_loginArray: action.users_payload,
          })
      }
    default:
      return state;
  }
}

export default loginReducer;