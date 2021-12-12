/***
 *
 * Responsible for all of the content on the page
 *
 * @author Ali Zargari
 */



 let Content = (() => {

    let mainPane;
    mainPane = '';

    let background;
    background = '';

    /***
     *
     */
    function loadContent(content) {

        mainPane.firstElementChild.style.background = "url("+content+")";
        console.log(content);
    }

    /***
     *
     * @returns {*} Load all of the content into the page.
     *
     */
    function createPane() {
        mainPane = document.createElement('div');
        mainPane.className = 'content';

        background = document.createElement('div');
        background.className = 'content_background'

        mainPane.appendChild(background);

        return mainPane;
    }

    return {createPane, loadContent};
})();

export default Content;