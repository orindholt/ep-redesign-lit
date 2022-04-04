import {LitElement, html, css} from 'lit';

import {ShopItem} from '../components/shop-item';
import {Splide} from '@splidejs/splide';

export class Shop extends LitElement {
  static styles = [
    css`
      @media screen and (min-width: 768px) {
        .grid-auto-100 {
          grid-template-columns: auto 100%;
        }
      }
    `,
  ];

  firstUpdated() {
    const slider = this.shadowRoot.querySelector('#shopSlider');
    new Splide(slider, {
      type: 'slide',
      arrows: false,
      gap: 15,
      direction: 'ltr',
      focus: 'left',
      pagination: false,
    }).mount();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <section
        class="md:grid flex flex-col gap-6 md:gap-12 md:py-10 px-[5%] md:px-[10%] py-6 lg:py-12 bg-white overflow-hidden grid-auto-100"
      >
        <div class="md:max-w-xs md:flex md:flex-col md:gap-6 md:justify-center">
          <h2
            class="font-bold text-4xl bg-gradient-to-tr from-[#0b119b] to-[#172dd6] text-gradient"
          >
            Shop with<br />
            EkstraPoints
          </h2>
          <p
            class="text-darkGray text-lg hidden md:block font-medium leading-5"
          >
            Join our free spin competitions, spin and win real money + earn
            EkstraPoints - Come back every day to get new free spins!
          </p>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md my-6 md:my-0 mx-auto md:mx-0 pb-1 w-[15.625rem] h-10 hidden md:flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
          >
            Go to EkstraPoints shop
          </a>
        </div>
        <div class="splide relative flex items-center" id="shopSlider">
          <div class="splide__track overflow-hidden relative z-0">
            <ul class="splide__list flex">
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-1.svg',
                    title: "Winner's Magic",
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-2.svg',
                    title: 'Millionpot',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-3.svg',
                    title: 'Lucky Thrillz',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-4.svg',
                    title: 'Jackie Jackpot',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-5.svg',
                    title: 'Trada Casino',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-6.svg',
                    title: 'Trada Casino',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
            </ul>
          </div>
        </div>
        <a
          href="#"
          class="md:hover:scale-105 md:transition-transform rounded-md shadow-md md:hidden my-6 mx-auto pb-1 w-[15.625rem] h-10 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
        >
          Go to EkstraPoints shop
        </a>
      </section>
    `;
  }
}

window.customElements.define('point-shop', Shop);
