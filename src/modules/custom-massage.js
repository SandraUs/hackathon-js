import { Module } from "../core/module";

export class ShowCustomMessage extends Module {
    constructor(text, duration = 3000) {
        super('message', 'Кастомное сообщение');
        this.text = text;
        this.duration = duration;
    }

    trigger() {
        const message = document.createElement('div');
        message.innerText = this.text;

        Object.assign(message.style, {
            position: 'fixed',
            right: '20px',
            bottom: '50px',
            background: 'lightcyan',
            padding: '13px 20px',
            borderRadius: '20px',
            boxShadow: '0 2px 6px rgba(42, 34, 34, 0.2)',
            cursor: 'default'
        });

        const closeBtn = document.createElement('span');
        closeBtn.innerText = '×';
        Object.assign(closeBtn.style, {
            marginLeft: '18px',
            cursor: 'pointer',
            fontWeight: 'bold'
        });
        closeBtn.onclick = () => document.body.removeChild(message);

        message.appendChild(closeBtn);
        document.body.appendChild(message);

        let timer = setTimeout(() => {
            document.body.removeChild(message);
        }, this.duration);

        message.onmouseenter = () => clearTimeout(timer);
        message.onmouseleave = () => {
            timer = setTimeout(() => document.body.removeChild(message), this.duration);
        };
    }
}
