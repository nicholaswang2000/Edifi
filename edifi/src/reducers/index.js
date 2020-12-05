import {combineReducers } from 'redux';
import userReducer from './userReducer';
import resultReducer from './resultReducer';

export default combineReducers({
    user: userReducer,
    results: resultReducer 
});