/*
 * action types
 */
export const CHANGE_SECTION = 'CHANGE_SECTION';

/*
 * action creators
 */
export function changeSection(sectionName) {
    return { type: CHANGE_SECTION, sectionName };
}
