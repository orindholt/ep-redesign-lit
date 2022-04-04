import {LitElement, html, css} from 'lit';

import {GameSlide} from '../components/game-slide';
import {Splide} from '@splidejs/splide';

export class GameSlider extends LitElement {
  static styles = [
    css`
      @media screen and (min-width: 768px) {
        .grid-auto-100 {
          grid-template-columns: auto 100%;
        }
      }
    `,
  ];

  static properties = {};

  firstUpdated() {
    const slider = this.shadowRoot.querySelector('#slider');
    new Splide(slider, {
      type: 'slide',
      arrows: false,
      gap: 15,
      direction: 'ltr',
      focus: 'left',
      pagination: false,
      autoWidth: true,
    }).mount();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <div
        class="flex flex-col pl-[5%] md:px-[10%] py-6 lg:py-12 bg-white overflow-hidden"
      >
        <section class="md:grid grid-auto-100">
          <div
            class="pb-5 pr-8 flex flex-col gap-5 md:pt-1 justify-center max-w-sm"
          >
            <slot></slot>
            <p
              class="text-darkGray text-lg hidden md:block font-medium leading-5"
            >
              Join our free spin competitions, spin and win real money + earn
              EkstraPoints - Come back every day to get new free spins!
            </p>
            <div class="mx-auto md:mx-0 pt-3 pb-3 pr-8 hidden md:block">
              <a
                href="#"
                class="md:hover:scale-105 md:transition-transform rounded-md shadow-md pb-1 w-[15.625rem] h-10 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
              >
                Go to all our tournaments
              </a>
            </div>
          </div>
          <div class="splide relative" id="slider">
            <div class="splide__track overflow-hidden relative z-0">
              <ul class="splide__list flex">
                <li class="splide__slide">
                  <game-slide
                    .game=${{
                      img: 'game-slide.svg',
                      alt: 'Samurai Game',
                      days: 2,
                      time: '01:29:51',
                      cost: 25,
                    }}
                  ></game-slide>
                </li>
                <li class="splide__slide">
                  <game-slide
                    .game=${{
                      img: 'game-slide.svg',
                      alt: 'Bank Job Game',
                      days: 1,
                      time: '15:04:21',
                      cost: 100,
                    }}
                  ></game-slide>
                </li>
                <li class="splide__slide">
                  <game-slide
                    .game=${{
                      img: 'game-slide.svg',
                      alt: 'Bank Job Game',
                      days: 1,
                      time: '15:04:21',
                      cost: 100,
                    }}
                  ></game-slide>
                </li>
                <li class="splide__slide">
                  <game-slide
                    .game=${{
                      img: 'game-slide.svg',
                      alt: 'Bank Job Game',
                      days: 1,
                      time: '15:04:21',
                      cost: 100,
                    }}
                  ></game-slide>
                </li>
                <li class="splide__slide">
                  <game-slide
                    .game=${{
                      img: 'game-slide.svg',
                      alt: 'Bank Job Game',
                      days: 1,
                      time: '15:04:21',
                      cost: 100,
                    }}
                  ></game-slide>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="mx-auto pt-6 pb-3 pr-8 md:hidden">
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md mt-auto pb-1 w-[15.625rem] h-10 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
          >
            Go to all our tournaments
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-slider', GameSlider);
