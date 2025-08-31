import {Module} from "@/core/module";
import {showSpentTime} from "@/utils";

export class HowMuchTimeSpentModule extends Module {// type: how-much-time, text: Время проведённое на сайте
  constructor() {
    super('how-much-time', 'Время проведённое на сайте')
    this.startTimeValue = Date.now()
  }

  animateBlockSpentTime(date) {
    const howMuchTime = document.createElement('div');
    howMuchTime.classList.add('how-much-time');
    howMuchTime.textContent = showSpentTime(date);
    document.body.append(howMuchTime);

    setTimeout(() => {
      howMuchTime.remove();
    }, 2000);
  }
  trigger() {
    this.animateBlockSpentTime(this.startTimeValue);
  }
}
