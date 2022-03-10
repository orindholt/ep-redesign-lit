import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

const liveDot = css({
  content: '""',
  '@apply':
    'absolute w-1 h-1 flex justify-center items-center bg-[#f82858] rounded-full top-0 right-[-0.25rem]',
});

export class GameBig extends LitElement {
  static styles = [sheet.target];

  static properties = {
    monthNames: {type: Array},
  };

  constructor() {
    super();
    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }
  render() {
    return html`
      <div
        class="${tw`${css`
          & {
            background-image: linear-gradient(to right, #0060e9, #80bad0);
          }
        `} p-2 rounded-xl grid shadow-md`}"
      >
        <img
          src="./images/game.png"
          alt="Current Biggest Game"
          class="${tw`w-full ${css`
            & {
              grid-area: 1/1/1/1;
            }
          `}`}"
        />
        <div
          class="${tw`text-white flex flex-col justify-end px-4 py-5 ${css`
            & {
              grid-area: 1/1/1/1;
            }
          `}`}"
        >
          <div class="${tw`flex mb-auto justify-end items-center gap-1`}">
            <svg
              class="${tw`mt-1`}"
              xmlns="http://www.w3.org/2000/svg"
              width="8.217"
              height="9.136"
              viewBox="0 0 8.217 9.136"
            >
              <path
                id="Union_5"
                data-name="Union 5"
                d="M.416,8.136A.363.363,0,0,1,.1,8.01.414.414,0,0,1,.008,7.8,4.084,4.084,0,0,1,.276,5.984,3.642,3.642,0,0,1,2.205,4c.019-.008.037-.019.067-.032A2.261,2.261,0,0,1,2.041.691,2.143,2.143,0,0,1,3.614,0h0a2.12,2.12,0,0,1,1.5.624,2.261,2.261,0,0,1-.157,3.338.321.321,0,0,0,.059.032A3.623,3.623,0,0,1,7.174,6.823a6.157,6.157,0,0,1,.042.975.344.344,0,0,1-.31.332.549.549,0,0,1-.094.005Z"
                transform="translate(0.5 0.5)"
                fill="#12ee9a"
                stroke="rgba(0,0,0,0)"
                stroke-miterlimit="10"
                stroke-width="1"
              />
            </svg>

            <p>374</p>
            <p class="${tw`after::${liveDot} relative font-light`}">Live</p>
          </div>
          <div class="${tw`flex justify-between items-end pb-2`}">
            <p class="${tw`text-base font-medium leading-4`}">
              ${this.monthNames[new Date().getMonth()]}'s biggest<br />tournament
            </p>
            <p class="${tw`text-lg tracking-widest`}">01:29:51</p>
          </div>
          <div class="${tw`flex justify-between`}">
            <h2 class="${tw`text-4xl font-bold`}">Win €5.000</h2>
            <a
              href="#"
              class="${tw`rounded-md shadow-md mt-auto pb-1 w-24 h-10 flex justify-center items-center text-lg font-medium text-white ${css`
                & {
                  background: transparent
                    linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
                }
              `}`}"
            >
              Join
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-big', GameBig);
