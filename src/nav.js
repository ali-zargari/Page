/***
 *
 * Helps initialize nav-bar
 *
 * @author Ali Zargari
 *
 */

import 'animate.css';
import content from './content.js';

let Button = function (){

    this.shrink = function (){

    }

    this.expand = function (){

    }

    this.buttonSelected = function (b){
        b.style.cssText += 'transform: scale(3);\nmargin: 0 5.5%;';
    }

    this.addListener = function (listener, func){
        this.elem.addEventListener(listener, func)
    }

    this.getElement = function (){
        return this.elem;
    }

    this.initButton = function (name, task) {

        this.name = name;
        this.elem = document.createElement('li');
        this.elem.className = this.name;
        this.addListener('click', task);

    }

}

let Nav = ((n) =>{
    let buttons = 'new Array()';

    function generate_buttons(n){
        let btns = new Array();
        for(let i = 0; i < n; i++) {
            let temp = new Button();
            temp.initButton('btn_'+i , test);
            btns.push(temp);
            console.log(btns[i].getElement());
        }

        return btns;
    }

    function test(){
        content.loadContent('url(\'./desert_1.jpg\');');

    }

    function getNav(){
        return buttons;
    }

    /***
     * Helper method to place btn DOMS in nav bar.
     *
     * @param elem element to attach the buttons to.
     * @param n number of buttons to be added
     * @returns {*} an element with n buttons + class names representing them.
     */
    function attachNavButtons (elem){

        buttons.forEach(l =>{
            elem.appendChild(l.getElement());
            //console.log(l.getElement());
        })

        return elem;
    }

    /***
     *
     * @returns {any} a nav-bar element. class='nav-bar'
     *
     */
    function createNav (n){
        buttons = generate_buttons(n);
        //console.log(buttons);
        let elem = document.createElement('ul');
        elem.className = 'nav-bar'
        elem = attachNavButtons(elem);

        return elem;
    }

    return {createNav};
})();



export default Nav;