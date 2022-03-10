import {LitElement, html} from 'lit';
import {create, cssomSheet, setup} from 'twind';
import {css} from 'twind/css';
import {NavBar} from './dev/components/nav-bar';
import {Footer} from './dev/components/footer';
import {Rewards} from './dev/components/rewards';
import {WinDisplay} from './dev/components/win-display';
import {GameBig} from './dev/components/game-big';
import {SignupBonus} from './dev/components/signup-bonus';
import {PointBonus} from './dev/components/point-bonus';
import {GameSlider} from './dev/components/game-slider';
import {WelcomeOffer} from './dev/components/welcome-offer';
import {ShopItem} from './dev/components/shop-item';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

setup({
  preflight: {
    '@import': `url('https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/css/splide.min.css')`,
  },
});

export class MyApp extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <div class="${tw`font-['sofia-pro'] pt-16 bg-[#EAEFF7]`}">
        <nav-bar></nav-bar>
        <section class="${tw`px-8`}">
          <app-rewards></app-rewards>
          <win-display></win-display>
          <game-big></game-big>
          <h3 class="${tw`text-[39px] font-bold mt-7 mb-5 leading-[2.75rem]`}">
            Sign up.
            <span
              class="${tw`${css`
                & {
                  background-image: linear-gradient(
                    to bottom right,
                    #ff9515 0%,
                    #ff502e 50%,
                    #ff4e2f 100%
                  );
                  background-clip: text;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              `}`}"
              >Play free.</span
            ><br />Biggest reward Site in the world
          </h3>
          <signup-bonus></signup-bonus>
          <div class="${tw`flex gap-2 text-white my-4 justify-between`}">
            <point-bonus
              .icon=${'slot-machine.svg'}
              .caption=${'Premium Casinos'}
              .points=${300}
              .color=${'#16C07F'}
            ></point-bonus>
            <point-bonus
              .icon=${'crown.svg'}
              .caption=${'Live tournaments'}
              .points=${15}
              .color=${'#FF296D'}
            ></point-bonus>
            <point-bonus
              .icon=${'coin.svg'}
              .caption=${'Exclusive products'}
              .points=${20}
              .color=${'#4E97D9'}
            ></point-bonus>
          </div>
        </section>
        <game-slider>
          <h2
            class="${tw`${css`
              & {
                background-image: linear-gradient(
                  to top right,
                  #ff0180,
                  #ff5858
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `} font-bold text-4xl mb-5 leading-8`}"
          >
            Current<br />Tournaments
          </h2>
        </game-slider>
        <section class="${tw`px-8 py-6`}">
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
        <section class="${tw`flex flex-col px-8 py-6 bg-white`}">
          <h2
            class="${tw`font-bold text-4xl ${css`
              & {
                background: linear-gradient(to top right, #0b119b, #172dd6);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `}`}"
          >
            Shop with<br />
            EkstraPoints
          </h2>
          <ul class="${tw`flex flex-col gap-y-3 my-5`}">
            <shop-item
              .item="${{
                img: 'winnermagic.png',
                title: "Winner's Magic",
                cost: '30.000',
                bonus: 5,
              }}"
            ></shop-item>
            <shop-item
              .item="${{
                img: 'millionpot.png',
                title: 'Millionpot',
                cost: '30.000',
                bonus: 5,
              }}"
            ></shop-item>
            <shop-item
              .item="${{
                img: 'luckythrillz.png',
                title: 'Lucky Thrillc',
                cost: '30.000',
                bonus: 5,
              }}"
            ></shop-item>
            <shop-item
              .item="${{
                img: 'jackiejackpot.png',
                title: 'Jackie Jackpot',
                cost: '30.000',
                bonus: 5,
              }}"
            ></shop-item>
            <shop-item
              .item="${{
                img: 'tradacasino.png',
                title: 'Trada Casino',
                cost: '30.000',
                bonus: 5,
              }}"
            ></shop-item>
          </ul>
          <a
            href="#"
            class="${tw`rounded-md shadow-md my-6 mx-auto pb-1 w-[15.625rem] h-10 flex justify-center items-center text-lg font-medium text-white ${css`
              & {
                background: linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
              }
            `}`}"
          >
            Go to EkstraPoints shop
          </a>
        </section>

        <app-footer></app-footer>
      </div>
    `;
  }
}

window.customElements.define('my-app', MyApp);
