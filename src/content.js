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

        let city_background = document.createElement('img');
        let desert_background = document.createElement('img');
        let space_background = document.createElement('img');



        city_background.className = 'btn_0_background';
        city_background.id = 'btn_0_background'
        city_background.src = city_img;
        city_background.title = 'city';
        city_background.lang = "en";
        city_background.style.width = '100vw';
        city_background.style.top = '0';
        city_background.style.position = 'absolute';
        //city_background.style.clipPath = 'circle(0% )';
        city_background.transition = 'ease 1s';
        backgroundPanel.appendChild(city_background);
        city_background.style.clipPath = 'circle(3% at 43% top)';


        desert_background.className = 'btn_1_background';
        desert_background.id = 'btn_1_background';
        desert_background.src = desert_img_1;
        desert_background.title = 'desert';
        desert_background.lang = "en";
        desert_background.style.width = '105vw';
        desert_background.style.top = '0';
        desert_background.style.position = 'absolute';
        desert_background.style.clipPath = 'circle(0%)';
        desert_background.transition = 'ease 1s';
        backgroundPanel.appendChild(desert_background);
        desert_background.style.clipPath = 'circle(3% at 47% top)';


        space_background.className = 'btn_2_background';
        space_background.id = 'btn_2_background'
        space_background.src = space_img;
        space_background.title = 'space';
        space_background.lang = "en";
        space_background.style.width = '100vw';
        space_background.style.top = '0';
        space_background.style.position = 'absolute';
        space_background.style.clipPath = 'circle(0%)';
        space_background.transition = 'ease 1s';
        backgroundPanel.appendChild(space_background);
        space_background.style.clipPath = 'circle(3% at 56% top)';



        mainPane.appendChild(backgroundPanel);
        mainPane.appendChild(nav_bar);

        return mainPane;
    }

    return {createPane, getNav};
})();

export default Content;