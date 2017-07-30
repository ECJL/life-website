import { CHANGE_SECTION } from './action';
import {navItems} from '../utils/constants'

function currentSection(state = navItems[0].name, action) {
    switch (action.type) {
        case CHANGE_SECTION:
            return action.currSectionName;
        default:
            return state;
    }
}

export default currentSection;