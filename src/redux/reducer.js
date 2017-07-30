import { CHANGE_SECTION } from './action';
import {navItems} from '../utils/constants';
import {combineReducers} from 'redux';

function currSectionName(state = navItems[0].name, action) {
    switch (action.type) {
        case CHANGE_SECTION:
            return action.currSectionName;
        default:
            return state;
    }
}

export default combineReducers({
    currSectionName
});