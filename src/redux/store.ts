import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer'; // Assuming you have a rootReducer defined
import rootSaga from './sagas'; // Assuming you have a rootSaga defined

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(sagaMiddleware), 
});

// Run the saga middleware
sagaMiddleware.run(rootSaga);

export default store;
