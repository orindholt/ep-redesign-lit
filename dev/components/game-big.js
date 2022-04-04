import {LitElement, html} from 'lit';

export class GameBig extends LitElement {
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
      <link rel="stylesheet" href="/dev/output.css" />
      <div
        class="p-2 rounded-xl grid shadow-md md:flex md:flex-row-reverse md:relative h-[35vh] bg-gradient-to-tl from-[#0060e9] to-[#80bad0]"
      >
        <div
          class="w-full md:bg-cover bg-top bg-auto bg-no-repeat shadow-md rounded-md bg-[url('./images/game-desktop.svg')] grid-area-self"
        ></div>
        <div
          class="text-white flex flex-col justify-end px-4 py-5 md:bg-transparent bg-[#00000020] md:w-1/2 grid-area-self"
        >
          <div
            class="flex mb-auto justify-end items-center gap-1 md:absolute md:top-5 md:left-6 md:text-lg"
          >
            <svg
              class="mt-1 md:w-3 md:h-3"
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
            <p class="live-dot relative font-light">Live</p>
          </div>
          <div class="flex justify-between items-end pb-2">
            <p
              class="text-base md:text-lg lg:text-xl md:leading-5 lg:leading-6 font-medium leading-4 md:text-shadow-none text-shadow"
            >
              ${this.monthNames[new Date().getMonth()]}'s biggest<br />tournament
            </p>
            <p
              class="text-lg tracking-widest md:hidden md:text-shadow-none text-shadow"
            >
              01:29:51
            </p>
          </div>
          <div class="flex justify-between md:flex-col gap-2">
            <h2
              class="text-4xl md:text-3xl lg:text-4xl font-bold xl:text-5xl md:text-shadow-none text-shadow"
            >
              Win €5.000
            </h2>
            <p
              class="text-xl tracking-wide font-normal hidden md:block md:text-shadow-none text-shadow"
            >
              3 days 01:29:51
            </p>
            <a
              href="#"
              class="rounded-md shadow-md mt-auto pb-1 w-24 md:w-48 h-10 flex justify-center items-center text-lg font-medium text-white md:hover:scale-105 md:transition-transform bg-gradient-to-tr from-yellow to-orange"
            >
              <span class="md:hidden">Join</span>
              <span class="md:block hidden">Join the tournament</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-big', GameBig);
