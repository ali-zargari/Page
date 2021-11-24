/***
 *
 * Responsible for all of the content on the page
 *
 * @author Ali Zargari
 */


import nav from'./nav.js';

/***
 *
 * @returns {HTMLDivElement} header element
 */
function createHeader(){
    let elem = document.createElement('div');
    elem.appendChild(nav());

    elem.className = 'header';

    return elem;
}

export default createHeader;