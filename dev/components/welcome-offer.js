import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

export class WelcomeOffer extends LitElement {
  static styles = [sheet.target];
  static properties = {
    offer: {type: Object},
  };

  render() {
    return html`
      <div
        class="${tw`rounded-xl p-[2px] ${css`
          & {
            background: linear-gradient(
              to top right,
              ${this.offer.golden ? '#FFA626, #FFD45B' : '#259C63, #0FD792'}
            );
          }
        `}`}"
      >
        <img
          class="${tw`w-full`}"
          src="images/welcome-offers/${this.offer.img}"
          alt="${this.offer.alt}"
        />
        <div class="${tw`p-2`}">
          <h4
            class="${tw`text-[${
              this.offer.golden ? '#000' : '#FFBC3F'
            }] font-bold text-3xl`}"
          >
            €${this.offer.claim}
          </h4>
          <p class="${tw`text-white text-[10px] mb-1`}">
            100% up to €${this.offer.claim} + ${this.offer.claim} Free Spins
          </p>
          <a
            href="#"
            class="${tw`rounded-md shadow-md mt-auto pb-1 w-full h-10 flex justify-center items-center text-lg font-medium text-white ${css`
              & {
                background: linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
              }
            `}`}"
          >
            Claim
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('welcome-offer', WelcomeOffer);
