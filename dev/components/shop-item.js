import {LitElement, html, css} from 'lit';

export class ShopItem extends LitElement {
  static styles = [
    css`
      .drop-shadow {
        filter: drop-shadow(0 0 0.75rem black);
      }
    `,
  ];
  static properties = {
    item: {type: Object},
  };

  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <div
        class="bg-gradient-to-tr from-[#0060e9] to-[#80bad0] rounded-xl flex flex-col overflow-hidden w-48 h-64"
      >
        <div class="grid">
          <img
            src="./images/shop/${this.item.img}"
            alt="${this.item.title}"
            class="w-full h-full flex-1 object-cover grid-area-self"
          />
          <p
            class="text-white text-base font-medium text-center self-end mb-2 grid-area-self text-shadow"
          >
            ${String(this.item.bonus)}€ Bonus Package for ${this.item.title}
          </p>
        </div>
        <div
          class="py-2 px-3 flex h-full w-full gap-[2%] justify-between items-center flex-3 lg:flex-2"
        >
          <div>
            <h3 class="text-white text-[1rem] font-bold">
              ${String(this.item.cost)} EP
            </h3>
          </div>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md pb-1 min-w-[70px] h-14 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
          >
            Buy
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('shop-item', ShopItem);
