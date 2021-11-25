import _ from 'lodash';
import page from './page.js';
import './style.scss';


function component() {
    const element = page();

    return element;
}

document.body.appendChild(component());