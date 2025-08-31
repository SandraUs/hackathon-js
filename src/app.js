import './styles.css';
import './modules/css/Clicks_Module.css';
import './modules/css/timer.css';
import { showCustomMessage } from './modules/custom-massage.js';
import { Module } from "./core/module";
import { RandomSoundModule } from "./modules/random-sound";
import { ClicksModule } from './modules/clicks.module';
import { TimerModule } from './modules/timer.module';
import { BackgroundModule } from './modules/background.module';
import { BackgroundDefaultModule } from './modules/background-default.module';
import { HowMuchTimeSpentModule } from './modules/howmuch-time-spent.module';
import { ContextMenu } from './menu.js';
import { ShapeModule } from './modules/shape.module.js';

showCustomMessage("Привет! Мы успешно завершили модуль по JavaScript! 🎉", 4000);

const menu = new ContextMenu('#menu');

menu.add(new TimerModule());
menu.add(new ShapeModule());
menu.add(new ClicksModule());
menu.add(new RandomSoundModule());
menu.add(new BackgroundModule());
menu.add(new BackgroundDefaultModule());
menu.add(new HowMuchTimeSpentModule());
//menu.add(new TestModule1());
//enu.add(new TestModule2());
menu.add(new RandomSoundModule());

document.addEventListener('contextmenu', event => {
    event.preventDefault();
    menu.open(event.clientX, event.clientY)
});

document.addEventListener('click', () => {
    menu.close();
});
