/***
 *
 * Helps initialize nav-bar
 *
 * @author Ali Zargari
 *
 */

import 'animate.css';

let Button = function (){

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
    let buttons = [];

    function generate_buttons(n){
        let btns = [];
        for(let i = 0; i < n; i++) {
            let temp = new Button();
            temp.initButton('btn_'+i , expand);
            btns.push(temp);
        }
        return btns;
    }

    function expand(e){
        let button = e.target;

        let correspondingBackgroundElement = document.getElementById(button.className+'_background');
        let bgcopy = correspondingBackgroundElement;

        let panel = document.getElementById('bp');
        panel.getElementsByClassName(button.className+"_background")[0].remove();
        panel.append(bgcopy);

        correspondingBackgroundElement.classList.add('open');

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
        let elem = document.createElement('ul');
        elem.className = 'nav-bar'
        elem = attachNavButtons(elem);

        return elem;
    }

    function getButtons(){
        return buttons;
    }

    return {createNav, getButtons};
})();



export default Nav;