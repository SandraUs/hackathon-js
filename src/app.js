import { showCustomMessage } from './modules/custom-massage.js';

showCustomMessage("Привет! Мы успешно завершили модуль по JavaScript! 🎉", 4000);

import { Module } from "./core/module";
import { RandomSoundModule } from "./modules/random-sound";

// Простые тестовые модули
class TestModule1 extends Module {
  constructor() {
    super("test1", "Module 1");
  }
import './modules/css/timer.css';
import { TimerModule } from './modules/timer.module';

import './styles.css'
import './modules/css/Clicks_Module.css'
import { ClicksModule } from './modules/clicks.module'

import {BackgroundModule} from "@/modules/background.module";
import {BackgroundDefaultModule} from "@/modules/background-default.module";
import {HowMuchTimeSpentModule} from "@/modules/howmuch-time-spent.module";

import { ContextMenu } from './menu.js'
import { ShapeModule } from './modules/shape.module.js'


menu.add(new ShapeModule())

const menu = new ContextMenu('#menu');
menu.add(new TimerModule());


  trigger() {
    alert("Сработал Module 1!");
    console.log("Module 1 активирован");
  }
}

class TestModule2 extends Module {
  constructor() {
    super("test2", "Module 2");
  }

  trigger() {
    alert("Сработал Module 2!");
    console.log("Module 2 активирован");
  }
}


// Добавляем модули
contextMenu.add(new TestModule1());
contextMenu.add(new TestModule2());
contextMenu.add(new RandomSoundModule());

document.addEventListener('click', () => {
    menu.close();
})
