import _ from 'lodash';
import './style.scss';
import p from './page.js';

console.log('testing13');

function component() {
    const element = document.createElement('div');
    element.className = 'container';

    element.appendChild(p());
    return element;
}

document.body.appendChild(component());