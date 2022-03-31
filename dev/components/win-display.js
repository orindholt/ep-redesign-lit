import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class WinDisplay extends LitElement {
  static styles = [sheet.target];

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
      <article class="${tw`w-full h-12 rounded-md overflow-hidden`}">
        <div
          class="${tw`w-full h-full relative ${css({
            'transform-style': 'preserve-3d',
            transition: '2s',
          })}`}"
          id="card"
        >
          <div
            class="${tw`flex justify-center gap-[2%] items-center text-white p-2 pr-[5%] absolute w-full h-full bg-black ${css(
              {
                '-webkit-backface-visibility': ' hidden',
                'backface-visibility': 'hidden',
              }
            )}`}"
          >
            <img
              src="./images/${this.imgSrc}"
              alt="${this.username}"
              class="${tw`w-auto mr-auto`}"
            />
            <h3 class="${tw`font-bold text-base lg:text-lg xl:text-xl`}">
              ${this.username}
            </h3>
            <p class="${tw`mr-auto flex gap-2 lg:text-lg xl:text-xl`}">
              Just won
              <span class="${tw`text-orange font-bold`}"
                >${this.winAmount} EP
              </span>
              <a href="#" class="${tw`underline lg:text-lg xl:text-xl`}"
                >here!</a
              >
            </p>
          </div>
          <div
            class="${tw`absolute w-full h-full flex justify-center gap-[2%] items-center bg-black text-white p-2 pr-[5%] ${css(
              {
                '-webkit-backface-visibility': ' hidden',
                'backface-visibility': 'hidden',
                transform: 'rotateX(180deg)',
              }
            )}`}"
          >
            <img
              src="./images/${this.imgSrc}"
              alt="${this.username}"
              class="${tw`w-auto mr-auto`}"
            />
            <h3 class="${tw`font-bold text-base md:text-lg lg:text-xl`}">
              ${this.username}
            </h3>
            <p class="${tw`mr-auto flex gap-2 md:text-lg lg:text-xl`}">
              Just won
              <span class="${tw`text-orange font-bold md:text-lg lg:text-xl`}"
                >${this.winAmount} EP
              </span>
              <a href="#" class="${tw`underline`}">here!</a>
            </p>
          </div>
        </div>
      </article>
    `;
  }
}

window.customElements.define('win-display', WinDisplay);
