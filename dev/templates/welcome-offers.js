import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';
import {WelcomeOffer} from '../components/welcome-offer';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class WelcomeOffers extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <section
        class="${tw`px-[5%] md:px-[10%] py-6 lg:py-10 md:flex md:flex-row-reverse md:justify-between md:gap-6`}"
      >
        <div
          class="${tw`md:max-w-xs md:flex md:flex-col md:gap-6 md:justify-center`}"
        >
          <h2
            class="${tw`${css`
              & {
                background: linear-gradient(to top right, #259c63, #0fd792);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `} text-4xl font-bold mb-4 md:mb-0 leading-8`}"
          >
            Exclusive<br />Welcome Offers
          </h2>
          <p
            class="${tw`text-darkGray text-lg hidden md:block font-medium leading-5`}"
          >
            Join our free spin competitions, spin and win real money + earn
            EkstraPoints - Come back every day to get new free spins!
          </p>
          <a
            href="#"
            class="${tw`md:hover:scale-105 md:transition-transform rounded-md shadow-md hidden md:flex pb-1 h-10 w-44 justify-center items-center text-lg font-medium text-white ${css`
              & {
                background: transparent
                  linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
              }
            `}`}"
          >
            See all offers
          </a>
        </div>
        <div class="${tw`grid grid-cols-2 lg:grid-cols-3 gap-3`}">
          <welcome-offer
            .offer=${{
              img: 'offer.svg',
              alt: 'Tonybet',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'offer.svg',
              alt: 'Lucky Dreams',
              claim: 120,
              golden: true,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'offer.svg',
              alt: 'King Billy',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'offer.svg',
              alt: 'Cashimashi',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'offer.svg',
              alt: 'Casiplay',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'offer.svg',
              alt: 'Casinotown',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
        </div>
      </section>
    `;
  }
}

window.customElements.define('welcome-offers', WelcomeOffers);
