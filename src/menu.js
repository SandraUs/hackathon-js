import {Menu} from './core/menu'


export default class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
        this.modules = [];
    }


    // Показываем меню по правому клику
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      this.open(event.clientX, event.clientY);
    });


    // Закрываем меню по Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    });
  }
}

        this.el.innerHTML = '';

        this.modules.forEach(module => {
            this.el.insertAdjacentHTML('beforeend', module.toHTML());
        })

        this.el.style.top = y + 'px';
        this.el.style.left = x + 'px';
        this.el.classList.add('open');

        this.el.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                const type = item.dataset.type;
                const mod = this.modules.find(m => m.type === type);
                if(mod) {
                    mod.trigger();
                }
                this.close();
            })
        })
    }
    
    close() {
        this.el.classList.remove('open');
    }

    add(module) {
        this.modules.push(module);
    }
}
