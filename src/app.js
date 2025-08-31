import "./modules/css/timer.css";
import "./modules/css/random.sound.css";
import { TimerModule } from "./modules/timer.module";

import "./styles.css";

import { BackgroundModule } from "@/modules/background.module";
import { BackgroundDefaultModule } from "@/modules/background-default.module";
import { HowMuchTimeSpentModule } from "@/modules/howmuch-time-spent.module";
import { RandomSoundModule } from "./modules/random.sound.module";

import { ContextMenu } from "./menu.js";
import { ShapeModule } from "./modules/shape.module.js";

// Сначала создаем menu
const menu = new ContextMenu("#menu");

// Затем добавляем модули
menu.add(new ShapeModule());
menu.add(new TimerModule());
menu.add(new RandomSoundModule());

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  menu.open(event.clientX, event.clientY);
});

document.addEventListener("click", () => {
  menu.close();
});
