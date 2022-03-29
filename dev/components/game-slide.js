import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class GameSlide extends LitElement {
  static styles = [sheet.target];

  static properties = {
    game: {type: Object},
  };

  render() {
    return html`
      <div
        class="${tw`${css`
          & {
            background-image: linear-gradient(
              to bottom left,
              #FF5858 50%,
              #FF0080 100%
            );`} 
          rounded-xl overflow-hidden text-white w-72 md:w-52 h-[18.125rem] flex flex-col`}"
      >
        <div class="${tw`grid md:h-full`}">
          <img
            src="./images/${this.game.img}"
            class="${tw`md:h-full md:object-cover ${css`
              & {
                grid-area: 1/1/1/1;
              }
            `}`}"
          />
          <p
            class="${tw`text-sm self-end p-3 ${css`
              & {
                grid-area: 1/1/1/1;
              }
            `}`}"
          >
            <span class="${tw`mr-4`}">${this.game.days} days</span>${this.game
              .time}
          </p>
        </div>
        <div class="${tw`flex px-3 my-auto md:my-2 items-center`}">
          <div
            class="${tw`flex items-center w-full gap-4 md:flex-col md:items-start md:justify-center md:gap-0`}"
          >
            <h3 class="${tw`text-xl font-bold`}">€${String(this.game.cost)}</h3>
            <div class="${tw`h-9 w-[1px] bg-white md:hidden`}"></div>
            <p class="${tw`text-base md:text-xl`}">
              ${String(this.game.cost)}.000 EP
            </p>
          </div>
          <a
            href="#"
            class="${tw`md:hover:scale-105 md:transition-transform rounded-md shadow-md pb-1 min-w-[6.25rem] md:min-w-0 md:px-4 h-10 md:h-11 flex justify-center items-center text-lg font-medium text-white ${css`
              & {
                background: transparent
                  linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
              }
            `}`}"
          >
            Play
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-slide', GameSlide);
