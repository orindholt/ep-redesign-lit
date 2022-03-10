import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

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
          rounded-xl text-white w-[18.125rem] h-[18.125rem] flex flex-col`}"
      >
        <div class="${tw`grid`}">
          <img
            src="./images/${this.game.img}"
            class="${tw`${css`
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
        <div class="${tw`flex items-center justify-between px-3 my-auto`}">
          <h3 class="${tw`text-xl font-bold`}">€${String(this.game.cost)}</h3>
          <div class="${tw`h-9 w-[1px] bg-white`}"></div>
          <p class="${tw`text-base`}">${String(this.game.cost)}.000 EP</p>
          <a
            href="#"
            class="${tw`rounded-md shadow-md mt-auto pb-1 w-[6.25rem] h-10 flex justify-center items-center text-lg font-medium text-white ${css`
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
