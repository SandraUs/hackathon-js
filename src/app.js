import './modules/css/timer.css';
import { TimerModule } from './modules/timer.module';

import './styles.css'

import {BackgroundModule} from "@/modules/background.module";
import {BackgroundDefaultModule} from "@/modules/background-default.module";
import {HowMuchTimeSpentModule} from "@/modules/howmuch-time-spent.module";

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

