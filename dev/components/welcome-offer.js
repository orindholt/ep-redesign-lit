import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class WelcomeOffer extends LitElement {
  static styles = [sheet.target];
  static properties = {
    offer: {type: Object},
  };

  render() {
    return html`
      <div
        class="${tw`rounded-xl p-0.5 xl:w-56 ${css`
          & {
            background: linear-gradient(
              to top right,
              ${this.offer.golden ? '#FFA626, #FFD45B' : '#259C63, #0FD792'}
            );
          }
        `}`}"
      >
        <img
          class="${tw`w-full rounded-[10px]`}"
          src="images/welcome-offers/${this.offer.img}"
          alt="${this.offer.alt}"
        />
        <div class="${tw`p-2 lg:grid lg:gap-y-2`}">
          <h4
            class="${tw`text-[${
              this.offer.golden ? '#000' : '#FFBC3F'
            }] font-bold text-3xl ${css`
              & {
                grid-area: 1/1/2/2;
              }
            `}`}"
          >
            €${this.offer.claim}
          </h4>
          <p
            class="${tw`text-white text-xs mb-1 lg:text-center lg:${css`
              & {
                grid-area: 2/1/3/3;
              }
            `}`}"
          >
            100% up to €${this.offer.claim} + ${this.offer.claim} Free Spins
          </p>
          <a
            href="#"
            class="${tw`md:hover:scale-105 md:transition-transform rounded-md shadow-md mt-auto pb-1 w-full h-10 flex justify-center items-center text-lg font-medium text-white ${css`
              & {
                background: linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
                @media screen and (min-width: 768px) {
                  grid-area: 1/2/2/3;
                }
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
