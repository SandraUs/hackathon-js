import './modules/css/timer.css';
import { TimerModule } from './modules/timer.module';

import './styles.css'
import { ContextMenu } from './menu.js'
import { ShapeModule } from './modules/shape.module.js'


menu.add(new ShapeModule())

const menu = new ContextMenu('#menu');
menu.add(new TimerModule());

document.addEventListener('contextmenu', event => {
    event.preventDefault();
    menu.open(event.clientX, event.clientY)
})

document.addEventListener('click', () => {
    menu.close();
})