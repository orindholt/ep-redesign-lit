import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

export class ShopItem extends LitElement {
  static styles = [sheet.target];
  static properties = {
    item: {type: Object},
  };

  render() {
    return html`
      <li
        class="${tw`${css`
          & {
            background-image: linear-gradient(to top right, #0060e9, #80bad0);
          }
        `} rounded-xl flex overflow-hidden`}"
      >
        <div class="${tw`overflow-hidden`}">
          <img
            src="./images/shop/${this.item.img}"
            alt="${this.item.title}"
            class="${tw`w-full h-full flex-1 ${css`
              & {
                object-fit: cover;
              }
            `}`}"
          />
        </div>
        <div
          class="${tw`py-2 px-3 flex h-full w-full gap-[2%] justify-between items-center flex-[2]`}"
        >
          <div>
            <p
              class="${tw`text-white text-[0.813rem] font-normal`}"
              [ngStyle]="background ? { color: 'black' } : {}"
            >
              ${String(this.item.bonus)}€ Bonus Package for ${this.item.title}
            </p>
            <h3 class="${tw`text-[#FFA626] text-[1rem] font-bold`}">
              ${String(this.item.cost)} EP
            </h3>
          </div>
          <a
            href="#"
            class="${tw`rounded-md shadow-md pb-1 min-w-[70px] h-14 flex justify-center items-center text-lg font-medium text-white ${css`
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
      </li>
    `;
  }
}

window.customElements.define('shop-item', ShopItem);
