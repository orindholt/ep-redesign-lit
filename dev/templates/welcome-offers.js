import {LitElement, html, css} from 'lit';

import {WelcomeOffer} from '../components/welcome-offer';

export class WelcomeOffers extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <section
        class="px-[5%] md:px-[10%] py-6 lg:py-10 md:flex md:flex-row-reverse md:justify-between md:gap-6"
      >
        <div class="md:max-w-xs md:flex md:flex-col md:gap-6 md:justify-center">
          <h2
            class="bg-gradient-to-tr from-[#259c63] to-[#0fd792] text-gradient text-4xl font-bold mb-4 md:mb-0 leading-8"
          >
            Exclusive<br />Welcome Offers
          </h2>
          <p
            class="text-darkGray text-lg hidden md:block font-medium leading-5"
          >
            Join our free spin competitions, spin and win real money + earn
            EkstraPoints - Come back every day to get new free spins!
          </p>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md hidden md:flex pb-1 h-10 w-44 justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
          >
            See all offers
          </a>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
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
