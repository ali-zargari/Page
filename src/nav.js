/***
 *
 * Helps initialize nav-bar
 *
 * @author Ali Zargari
 *
 */


/***
 * Helper method to place btn DOMS in nav bar.
 *
 * @param elem element to attach the buttons to.
 * @param n number of buttons to be added
 * @returns {*} an element with n buttons + class names representing them.
 */
function attachNavButtons (elem, n){
    let temp = '';
    for(let i = 0; i < n; i++){
        temp = document.createElement('div');
        temp.className = 'btn '+i;
        elem.appendChild(temp);
    }
    return elem;
}

/***
 *
 * @returns {any} a nav-bar element. class='nav-bar'
 *
 */
function createNav (){
    let elem = document.createElement('div');
    elem.className = 'nav-bar'
    elem = attachNavButtons(elem, 3);

    return elem;
}

export default createNav;