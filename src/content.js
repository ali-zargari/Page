/***
 *
 * Responsible for all the content on the page
 *
 * @author Ali Zargari
 */


import nav from './nav.js';

import city_img from './city.jpg'
import desert_img_1 from './desert_1.jpg';
import space_img from './space.jpg';
//import ttt from './app1.js';


 let Content = (() => {

    let mainPane;
    mainPane = '';

    let nav_bar = nav.createNav(3);

    /***
     *
     */
    function loadContent(content) {

        mainPane.firstElementChild.style.background = "url("+content+")";
        console.log(content);
    }

    function getNav(){
        return nav;
    }

    /***
     *
     * @returns {*} Load all of the content into the page.
     *
     */
    function createPane() {


        mainPane = document.createElement('div');
        mainPane.className = 'content';

        let backgroundPanel = document.createElement("div");
        backgroundPanel.className = "background_panel";
        backgroundPanel.id = 'bp';

        let todo = document.createElement('object');
        todo.data = 'https://ali-zargari.github.io/TODO-App/';

        let ttt = document.createElement('object');
        ttt.data = 'https://ali-zargari.github.io/Tic-Tac-Toe/'

        let sketch = document.createElement('object');
        sketch.data = 'https://ali-zargari.github.io/Sketch/'


        todo.className = 'btn_0_background close';
        todo.id = 'btn_0_background'
        //todo.src = city_img;
        todo.title = 'city';
        todo.lang = "en";
        todo.style.width = '100vw';
        todo.style.height = '100vh';
        todo.style.top = '0';
        todo.style.position = 'absolute';
        todo.style.clipPath = 'circle(0% )';
        todo.transition = 'ease 1s';
        backgroundPanel.appendChild(todo);
        todo.style.clipPath = 'circle(3% at 43% top)';
        todo.style.visibility = 'hidden';


        ttt.className = 'btn_1_background close';
        ttt.id = 'btn_1_background';
        //ttt.src = desert_img_1;
        ttt.title = 'desert';
        ttt.lang = "en";
        ttt.style.width = '100vw';
        ttt.style.height = '100vh';
        ttt.style.top = '0';
        ttt.style.position = 'absolute';
        ttt.style.clipPath = 'circle(0%)';
        ttt.transition = 'ease 1s';
        backgroundPanel.appendChild(ttt);
        ttt.style.clipPath = 'circle(3% at 47% top)';
        ttt.style.visibility = 'hidden';


        sketch.className = 'btn_2_background close';
        sketch.id = 'btn_2_background'
        //sketch.src = space_img;
        sketch.title = 'space';
        sketch.lang = "en";
        sketch.style.width = '100vw';
        sketch.style.height = '100vh';
        sketch.style.top = '0';
        sketch.style.position = 'absolute';
        sketch.style.clipPath = 'circle(0%)';
        sketch.transition = 'ease 1s';
        backgroundPanel.appendChild(sketch);
        sketch.style.clipPath = 'circle(3% at 56% top)';
        sketch.style.visibility = 'hidden';

        console.log(todo);
        //mainPane.appendChild(city_background);
        mainPane.appendChild(backgroundPanel);
        mainPane.appendChild(nav_bar);

        return mainPane;
    }

    return {createPane, getNav};
})();

export default Content;