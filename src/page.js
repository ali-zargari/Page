/***
 *
 * Responsible for all of the content on the page
 *
 * @author Ali Zargari
 */

import nav from'./nav.js';


/***
 *
 * @returns {*} Load all of the content into the page.
 *
 */
function createPage(){
    return nav();
}

export default createPage;