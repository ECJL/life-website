/*
 * action types
 */
export const CHANGE_SECTION = 'CHANGE_SECTION';

/*
 * action creators
 */
export function changeSection(currSectionName) {
    return { type: CHANGE_SECTION, currSectionName };
}
