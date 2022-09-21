/***
 *
 * Helps initialize nav-bar
 *
 * @author Ali Zargari
 *
 */

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

let Nav = (() =>{
    let buttons = [];
    let selected = -1;

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


        if(selected === document.getElementById(button.className+'_background')){
            return;
        }


        //let correspondingBackgroundElement = document.getElementById(button.className+'_background');
        let panel = document.getElementById('bp');

        //console.log(panel);
        panel.childNodes.forEach(bg =>{
            if(bg.className.includes(button.className+"_background")){
                bg.style.visibility = 'visible';
                panel.appendChild(bg);
                bg.classList.add('open');
                bg.classList.remove('close');
                selected = bg;
            } else {

                bg.classList.add('close');
                bg.classList.remove('open');
            }
        });

    }

    /***
     * Helper method to place btn DOMS in nav bar.
     *
     * @param elem element to attach the buttons to.
     * @returns {*} an element with n buttons + class names representing them.
     */
    function attachNavButtons (elem){

        buttons.forEach(l =>{
            elem.appendChild(l.getElement());
        });

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


    return {createNav};
})();



export default Nav;