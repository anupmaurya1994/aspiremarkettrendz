import { combineReducers } from 'redux';
import rootReducer from './rootReducer'

const store = combineReducers({
  reducer: rootReducer,
})

export default store