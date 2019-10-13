import {tipsReducer} from './tips';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    tips: tipsReducer
});

export default allReducers;