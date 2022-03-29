import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';
import {ShopItem} from '../components/shop-item';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class Shop extends LitElement {
  static styles = [sheet.target];
  static properties = {};
  constructor() {
    super();
  }
  render() {
    return html`
      <section
        class="${tw`flex flex-col md:flex-row md:justify-between md:gap-6 px-[5%] md:px-[10%] py-6 bg-white`}"
      >
        <div
          class="${tw`md:max-w-xs md:flex md:flex-col md:gap-6 md:justify-center`}"
        >
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
          <p
            class="${tw`text-darkGray text-lg hidden md:block font-medium leading-5`}"
          >
            Join our free spin competitions, spin and win real money + earn
            EkstraPoints - Come back every day to get new free spins!
          </p>
          <a
            href="#"
            class="${tw`md:hover:scale-105 md:transition-transform rounded-md shadow-md my-6 md:my-0 mx-auto md:mx-0 pb-1 w-[15.625rem] h-10 hidden md:flex justify-center items-center text-lg font-medium text-white ${css`
              & {
                background: linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
              }
            `}`}"
          >
            Go to EkstraPoints shop
          </a>
        </div>
        <ul
          class="${tw`flex flex-col gap-3 my-5 lg:grid lg:grid-cols-2 lg:max-w-2xl`}"
        >
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
              title: 'Lucky Thrillz',
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
          class="${tw`md:hover:scale-105 md:transition-transform rounded-md shadow-md md:hidden my-6 mx-auto pb-1 w-[15.625rem] h-10 flex justify-center items-center text-lg font-medium text-white ${css`
            & {
              background: linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
            }
          `}`}"
        >
          Go to EkstraPoints shop
        </a>
      </section>
    `;
  }
}

window.customElements.define('point-shop', Shop);
