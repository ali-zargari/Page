/***
 *
 * Responsible for all of the content on the page
 *
 * @author Ali Zargari
 */

import './style.scss';
import header from './header.js';
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

    elem.appendChild(header());
    elem.appendChild(content());
    elem.appendChild(footer());

    return elem;
}

export default createPage;