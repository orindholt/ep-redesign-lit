import {LitElement, html} from 'lit';

export class WinDisplay extends LitElement {
  static properties = {
    wins: {type: Array},
    index: {type: Number},
    imgSrc: {type: String},
    username: {type: String},
    winAmount: {type: Number},
    timerSec: {type: Number},
  };

  constructor() {
    super();
    this.wins = [
      {
        imgSrc: 'user-icon.svg',
        username: 'Daniel44',
        winAmount: 1800,
      },
      {
        imgSrc: 'user-icon.svg',
        username: 'Mark1234',
        winAmount: 2000,
      },
      {
        imgSrc: 'user-icon.svg',
        username: 'Nick201',
        winAmount: 6200,
      },
      {
        imgSrc: 'user-icon.svg',
        username: 'Bot002',
        winAmount: 9400,
      },
    ];
    this.timerSec = 6;
    this.index = 0;
    this.username = this.wins[0].username;
    this.winAmount = this.wins[0].winAmount;
    this.imgSrc = this.wins[0].imgSrc;
  }
  firstUpdated() {
    const card = this.shadowRoot.querySelector('#card');
    setInterval(() => {
      if (this.index < this.wins.length - 1) {
        this.index++;
      } else this.index = 0;
      if (card.style.transform != 'rotateX(180deg)') {
        card.style.transform = 'rotateX(180deg)';
      } else {
        card.style.transform = 'rotateX(0)';
      }
      this.wins.forEach((win) => {
        if (this.wins.indexOf(win) === this.index) {
          setTimeout(() => {
            this.imgSrc = win.imgSrc;
            this.username = win.username;
            this.winAmount = win.winAmount;
          }, 500);
        }
      });
    }, `${this.timerSec}000`);
  }

  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <article class="w-full h-12 rounded-md overflow-hidden">
        <div
          class="w-full h-full relative transition-transform duration-[2s]"
          style="transform-style: preserve-3d"
          id="card"
        >
          <div
            class="flex justify-center gap-[2%] items-center text-white p-2 pr-[5%] absolute w-full h-full bg-black"
            style="-webkit-backface-visibility: hidden; backface-visibility: hidden"
          >
            <img
              src="./images/${this.imgSrc}"
              alt="${this.username}"
              class="w-auto mr-auto"
            />
            <h3 class="font-bold text-base md:text-lg lg:text-xl">
              ${this.username}
            </h3>
            <p class="mr-auto flex gap-2 md:text-lg lg:text-xl">
              Just won
              <span class="text-orange font-bold">${this.winAmount} EP </span>
              <a href="#" class="underline lg:text-lg xl:text-xl">here!</a>
            </p>
          </div>
          <div
            class="absolute w-full h-full flex justify-center gap-[2%] items-center bg-black text-white p-2 pr-[5%]"
            style="-webkit-backface-visibility: hidden; backface-visibility: hidden; transform: rotateX(180deg);"
          >
            <img
              src="./images/${this.imgSrc}"
              alt="${this.username}"
              class="w-auto mr-auto"
            />
            <h3 class="font-bold text-base md:text-lg lg:text-xl">
              ${this.username}
            </h3>
            <p class="mr-auto flex gap-2 md:text-lg lg:text-xl">
              Just won
              <span class="text-orange font-bold md:text-lg lg:text-xl"
                >${this.winAmount} EP
              </span>
              <a href="#" class="underline">here!</a>
            </p>
          </div>
        </div>
      </article>
    `;
  }
}

window.customElements.define('win-display', WinDisplay);
