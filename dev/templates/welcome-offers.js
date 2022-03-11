import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {css} from 'twind/css';
import {WelcomeOffer} from '../components/welcome-offer';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

export class WelcomeOffers extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <section class="${tw`px-[5%] py-6`}">
        <h2
          class="${tw`${css`
            & {
              background: linear-gradient(to top right, #259c63, #0fd792);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          `} text-4xl font-bold mb-4 leading-8`}"
        >
          Exclusive<br />Welcome Offers
        </h2>
        <div class="${tw`grid grid-cols-2 gap-3`}">
          <welcome-offer
            .offer=${{
              img: 'tonybet.png',
              alt: 'Tonybet',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'luckydreams.png',
              alt: 'Lucky Dreams',
              claim: 120,
              golden: true,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'kingbilly.png',
              alt: 'King Billy',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'cashimashi.png',
              alt: 'Cashimashi',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'casiplay.png',
              alt: 'Casiplay',
              claim: 120,
              golden: false,
            }}
          ></welcome-offer>
          <welcome-offer
            .offer=${{
              img: 'casinotown.png',
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
