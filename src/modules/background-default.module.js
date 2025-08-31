import {Module} from '../core/module';

export class BackgroundDefaultModule extends Module{// type: background-default, text: Стандартный цвет
  constructor() {
    super('background', 'background')
  }
  
  trigger() {
      const defaultColorBackground = '#fff';
      document.body.style.background = defaultColorBackground;
    }
}
