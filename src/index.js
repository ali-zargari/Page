import _ from 'lodash';
import './style.scss';
import './_essentials.scss';
import './_variables.scss';
import page from './page.js';

function component() {
    const element = page();

    return element;
}

document.body.appendChild(component());