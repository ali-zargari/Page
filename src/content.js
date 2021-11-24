/***
 *
 * Responsible for all of the content on the page
 *
 * @author Ali Zargari
 */

/***
 *
 * @returns {*} Load all of the content into the page.
 *
 */
function createContentPane(){
    let elem = document.createElement('div');
    elem.className = 'content';

    return elem;
}

export default createContentPane;