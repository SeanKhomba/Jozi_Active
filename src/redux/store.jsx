import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers imported
import eventsReducer from '../redux/reducers/eventsReducer.jsx';
import loginReducer from '../redux/reducers/loginReducer.jsx';
import signUpReducer from '../redux/reducers/signUpReducer.jsx';
import contactReducer from '../redux/reducers/contactReducer.jsx';

const initialState = {};
const middleware = [thunk];
const rootReducer = combineReducers({
  eventsReducer: eventsReducer,
  loginReducer: loginReducer,
  signUpReducer: signUpReducer,
  contactReducer: contactReducer,
})

const configureStore = () => createStore(rootReducer, initialState,composeWithDevTools(
  applyMiddleware(...middleware),
));

export default configureStore;