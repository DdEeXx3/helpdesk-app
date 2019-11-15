import {tipsReducer} from './tips';
import {tipsFormReducer} from './tips-form';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    tips: tipsReducer,
    tipsForm: tipsFormReducer
});

export default allReducers;