import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class ShopItem extends LitElement {
  static styles = [sheet.target];
  static properties = {
    item: {type: Object},
  };

  render() {
    return html`
      <div
        class="${tw`${css`
          & {
            background-image: linear-gradient(to top right, #0060e9, #80bad0);
          }
        `} rounded-xl flex flex-col overflow-hidden w-48 h-64`}"
      >
        <div class="${tw`grid`}">
          <img
            src="./images/shop/${this.item.img}"
            alt="${this.item.title}"
            class="${tw`w-full h-full flex-1 ${css`
              & {
                grid-area: 1/1/1/1;
                object-fit: cover;
              }
            `}`}"
          />
          <p
            class="${tw`text-white text-base font-medium text-center self-end mb-2 ${css`
              & {
                filter: drop-shadow(0 0 0.75rem black);
                grid-area: 1/1/1/1;
              }
            `}`}"
          >
            ${String(this.item.bonus)}€ Bonus Package for ${this.item.title}
          </p>
        </div>
        <div
          class="${tw`py-2 px-3 flex h-full w-full gap-[2%] justify-between items-center flex-3 lg:flex-2`}"
        >
          <div>
            <h3 class="${tw`text-white text-[1rem] font-bold`}">
              ${String(this.item.cost)} EP
            </h3>
          </div>
          <a
            href="#"
            class="${tw`md:hover:scale-105 md:transition-transform rounded-md shadow-md pb-1 min-w-[70px] h-14 flex justify-center items-center text-lg font-medium text-white ${css`
              & {
                background: linear-gradient(
                  to bottom left,
                  #ff930f 0%,
                  #ffd45b 100%
                );
              }
            `}`}"
          >
            Buy
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('shop-item', ShopItem);
