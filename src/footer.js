/***
 *
 * Responsible for all of the content on the page
 *
 * @author Ali Zargari
 */


import nav from'./nav.js';

/***
 *
 * @returns {HTMLDivElement} footer element
 */
function createFooter(){
    let elem = document.createElement('div');
    elem.appendChild(nav());

    elem.className = 'footer';

    return elem;
}

export default createFooter;