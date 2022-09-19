/***
 *
 * Responsible for all the content on the page
 *
 * @author Ali Zargari
 */

import content from './content.js';
import footer from './footer.js';

/***
 *
 * @returns {*} Load all of the content into the page.
 *
 */
function createPage(){
    let elem = document.createElement('div');
    elem.className = 'page';

    elem.appendChild(content.createPane());
    return elem;
}

export default createPage;