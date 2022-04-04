import {LitElement, html, css} from 'lit';

export class WelcomeOffer extends LitElement {
  static styles = [
    css`
      .price {
        grid-area: 1/1/2/2;
      }
      @media screen and (min-width: 1024px) {
        .offer {
          grid-area: 2/1/3/3;
        }
      }
      @media screen and (min-width: 768px) {
        .claim-btn {
          grid-area: 1/2/2/3;
        }
      }
    `,
  ];
  static properties = {
    offer: {type: Object},
  };

  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <div
        class="rounded-xl p-0.5 xl:w-56"
        style="background: linear-gradient(to top right, ${this.offer.golden
          ? '#FFA626, #FFD45B'
          : '#259C63, #0FD792'})"
      >
        <img
          class="w-full rounded-[10px]"
          src="images/welcome-offers/${this.offer.img}"
          alt="${this.offer.alt}"
        />
        <div class="p-2 lg:grid lg:gap-y-2">
          <h4
            style="color: ${this.offer.golden ? '#000' : '#FFBC3F'}; "
            class="font-bold text-3xl price"
          >
            €${this.offer.claim}
          </h4>
          <p class="text-white text-xs mb-1 lg:text-center offer">
            100% up to €${this.offer.claim} + ${this.offer.claim} Free Spins
          </p>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md mt-auto pb-1 w-full h-10 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow claim-btn"
          >
            Claim
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('welcome-offer', WelcomeOffer);
