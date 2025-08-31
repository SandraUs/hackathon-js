import {Module} from '../core/module'

import {getRandomColor} from "@/utils";

export class BackgroundModule extends Module {// type: background, text: Поменять цвет
  constructor() {
    super('background', 'random-background');
  }
  trigger() {
    document.body.style.backgroundImage = getRandomColor();
  }
}
