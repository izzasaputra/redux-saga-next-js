import { combineReducers } from 'redux';
import dataReducer from './user';


const rootReducer = combineReducers({
  user: dataReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;