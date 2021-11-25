/***
 *
 * Helps initialize nav-bar
 *
 * @author Ali Zargari
 *
 */

import 'animate.css';

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
        temp = document.createElement('li');
        temp.className = 'btn_'+i;


        temp.addEventListener('click',function (e){
            e.target.style.cssText += 'transform: scale(3);\nmargin: 0 5.5%;';
            //e.target.classList.add('animate__animated', 'animate__bounceOutLeft');
        });

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
    let elem = document.createElement('ul');
    elem.className = 'nav-bar'
    elem = attachNavButtons(elem, 3);

    return elem;
}

export default createNav;