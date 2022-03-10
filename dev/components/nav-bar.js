import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {animation, css} from 'twind/css';

const slideIn = animation('1s ease-in-out forwards', {
  '0%': {
    'max-height': '0vh',
  },
  '100%': {
    'max-height': '70vh',
  },
});

const slideInAlt = animation('.75s ease-in-out forwards', {
  '0%': {
    'max-height': '0px',
    opacity: 0,
  },
  '100%': {
    'max-height': '300px',
    opacity: 1,
  },
});

const fadeIn = animation('.5s .5s ease-in-ot forwards', {
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const fadeInAlt = animation('.5s ease-in-ot forwards', {
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

export class NavBar extends LitElement {
  static styles = [sheet.target];

  static properties = {
    menu: {type: Boolean},
    location: {type: String},
    detector: {type: Boolean},
    detectorInteracted: {type: Boolean},
    menuList: {type: Array},
    regionSelector: {type: Boolean},
    regions: {type: Array},
    showLogin: {type: Boolean},
    crtFlag: {type: String},
  };

  constructor() {
    super();
    this.menu = false;
    this.location = 'Kastrup, Danmark';
    this.detector = false;
    this.regionSelector = false;
    this.detectorInteracted = false;
    this.showLogin = false;
    this.crtFlag = './images/flags/denmark.svg';
    this.regions = [
      {
        imgSrc: './images/flags/usa.svg',
        title: 'USA',
        anchor: '#',
        active: false,
      },
      {
        imgSrc: './images/flags/denmark.svg',
        title: 'Danmark',
        active: true,
      },
      {
        imgSrc: './images/flags/german.svg',
        title: 'Deutshland',
        active: false,
      },
      {
        imgSrc: './images/flags/norway.svg',
        title: 'Norge',
        active: false,
      },
      {
        imgSrc: './images/flags/finland.svg',
        title: 'Suomi',
        active: false,
      },
      {
        imgSrc: './images/flags/sweden.svg',
        title: 'Sverige',
        active: false,
      },
    ];
    this.menuList = [
      {text: 'Hvordan virker det?', anchor: '#'},
      {
        text: 'Casinos',
        anchor: '#',
        dropdown: {
          shown: false,
          list: [
            {text: 'Tilbud', anchor: '#'},
            {text: 'Casino anmeldelser', anchor: '#'},
            {text: 'Hotte Online Casioner', anchor: '#'},
            {text: 'Nye Online Casioner', anchor: '#'},
          ],
        },
      },
      {
        text: 'Spil',
        anchor: '#',
        dropdown: {
          shown: false,
          list: [
            {text: 'Gratis konkurrencer', anchor: '#'},
            {text: 'Vindere', anchor: '#'},
            {text: 'Spilanmeldelser', anchor: '#'},
          ],
        },
      },
    ];
  }

  toggleRegion(crtRegion) {
    this.regions.forEach((region) => {
      region.active = false;
    });
    crtRegion.active = true;
    this.crtFlag = crtRegion.imgSrc;
  }

  toggleMenu() {
    this.menu = !this.menu;
    if (this.showLogin) this.showLogin = false;
    if (this.menu) {
      this.regionSelector = false;
      if (this.detector) this.detector = false;
      this.menuList.forEach((item) => {
        if (item.dropdown) item.dropdown.shown = false;
      });
    }
  }

  render() {
    return html`
      <nav
        class="${tw`flex justify-between px-4 h-16 bg-[#eaeff7] items-center shadow-md z-20 fixed w-full top-0`}"
      >
        <a href="#"
          ><img src="./images/header.svg" alt="header" class="${tw`w-32`}"
        /></a>
        <div class="flex">
          <button
            @click=${() => {
              this.showLogin = true;
              this.requestUpdate();
              console.log(this.showLogin);
            }}
            class="${tw`p-2 w-10 h-10 rounded bg-black mr-4`}"
          >
            <img src="./images/login.svg" alt="Login Icon" />
          </button>
          <button class="${`mr-4`}">
            <img src="./images/search.svg" alt="search icon" />
          </button>
          <button @click=${this.toggleMenu}>
            <img
              class="${tw`w-8`}"
              src="./images/${this.menu
                ? 'burger-exit.svg'
                : 'burger-menu.svg'}"
              alt="menu icon"
            />
          </button>
          <!-- Burger Menu Button -->
          ${this.menu
            ? html`
                <!-- Navigation Menu -->
                <nav
                  class="${tw`fixed top-16 right-0 h-[70vh] bg-[#eaeff7] w-[100vw] z-10 flex shadow-md ${slideIn}`}"
                >
                  <div class="${tw`w-full relative ${fadeIn} opacity-0`}">
                    <div class="${tw`flex py-8 px-12 gap-5`}">
                      <button
                        class="${tw`text-white text-[19px] leading-9 rounded-[3px] font-bold w-full h-10 flex justify-center items-center gap-3
                        ${css`
                          & {
                            background: linear-gradient(
                              to right,
                              #0060e9 0%,
                              #3d8bdd 50%,
                              #80bad0 100%
                            );
                          }
                        `}
                        `}"
                      >
                        <p class="${tw`mb-1`}">Shop</p>
                        <img src="./images/cart.svg" alt="cart" />
                      </button>
                      <button
                        class="${tw`w-12`}"
                        @click=${() => {
                          if (!this.detectorInteracted) {
                            this.detector = !this.detector;
                          } else this.regionSelector = !this.regionSelector;
                        }}
                      >
                        <img src=${this.crtFlag} alt="Region Selector" />
                      </button>
                    </div>
                    <!-- location pop-up -->
                    ${this.detector
                      ? html`<div
                          class="${tw`${fadeInAlt} opacity-0 border-t-4 border-[#FFBC3F] shadow-lg transition-all rounded-b-lg absolute w-2/3 right-12 top-20 px-4 py-5 bg-white`}"
                        >
                          <p class="${`font-bold text-blue-800`}">
                            We detected that you visit us from ${this.location}
                          </p>
                          <button
                            class="${tw`underline text-[#999999]`}"
                            @click=${() => {
                              this.regionSelector = true;
                              this.detectorInteracted = true;
                              this.detector = false;
                            }}
                          >
                            Is this not accurate?
                          </button>
                        </div>`
                      : ``}
                    ${this.regionSelector
                      ? html`
                          <ul
                            class="${tw`flex flex-col gap-2 shadow-xl bg-[#eaeff7] absolute top-20 right-[2.65rem] rounded-lg p-[5px] ${slideInAlt} overflow-hidden`}"
                          >
                            ${this.regions.map((region) => {
                              return region.imgSrc != this.crtFlag
                                ? html`
                                    <li>
                                      <button
                                        class="${tw`flex gap-2 w-10`}"
                                        @click=${() => {
                                          this.toggleRegion(region);
                                          this.regionSelector = false;
                                          this.requestUpdate();
                                        }}
                                      >
                                        <img
                                          src="${region.imgSrc}"
                                          alt="${region.title} Flag"
                                        />
                                      </button>
                                    </li>
                                  `
                                : ``;
                            })}
                          </ul>
                        `
                      : ``}
                    <!-- menu list -->
                    <ul class="${tw`font-bold`}">
                      ${this.menuList.map((item) => {
                        return html`
                          <li
                            @click=${() => {
                              if (item.dropdown) {
                                item.dropdown.shown = !item.dropdown.shown;
                                this.menuList.forEach((menuItem) => {
                                  if (menuItem.dropdown && menuItem != item)
                                    menuItem.dropdown.shown = false;
                                });
                                this.requestUpdate();
                              }
                            }}
                            class="${tw`pl-[20%] pb-4 flex items-start gap-2`}"
                          >
                            <!-- Dropdown Triangle -->
                            <div>
                              <a
                                class="${tw`flex items-center gap-3 text-[19px] mt-4 mb-2`}"
                                href="${item.anchor}"
                                style="color: ${item.dropdown &&
                                item.dropdown.shown
                                  ? '#2B7EE1'
                                  : 'inherit'}"
                                >${item.text}
                                ${item.dropdown &&
                                html`<svg
                                  style="transform: rotate(${item.dropdown.shown
                                    ? '0'
                                    : '180deg'});"
                                  class="${tw`mt-1 inline-block`}"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="7"
                                  height="6"
                                  viewBox="0 0 7 6"
                                >
                                  <path
                                    id="Polygon_4"
                                    data-name="Polygon 4"
                                    d="M2.636,1.481a1,1,0,0,1,1.728,0L6.123,4.5A1,1,0,0,1,5.259,6H1.741A1,1,0,0,1,.877,4.5Z"
                                    transform="translate(7 6) rotate(180)"
                                    fill="${item.dropdown && item.dropdown.shown
                                      ? '#2B7EE1'
                                      : 'inherit'}"
                                  />
                                </svg>`}</a
                              >
                              ${item.dropdown && item.dropdown.shown
                                ? html`<ul
                                    class="${tw`flex flex-col gap-3 ${slideInAlt} overflow-hidden`}"
                                  >
                                    ${item.dropdown.list.map((dropItem) => {
                                      return html`
                                        <li
                                          class="${tw`font-normal text-[#959CA7] text-[17px]`}"
                                        >
                                          <a href=${dropItem.anchor}>
                                            ${dropItem.text}
                                          </a>
                                        </li>
                                      `;
                                    })}
                                  </ul>`
                                : ``}
                            </div>
                          </li>
                          <hr class="${tw`bg-[#DEE1E6]`}" />
                        `;
                      })}
                    </ul>
                  </div>
                </nav>
              `
            : ``}
        </div>
      </nav>
      <!--Login Overlay-->
      ${this.showLogin
        ? html`
            <div
              class="${tw`fixed w-[100vw] h-full bg-[#eaeff7] top-16 right-0 pb-20 px-4 z-20 ${fadeInAlt} ${css`
                & {
                  background: transparent
                    linear-gradient(151deg, #eaeff7 0%, #d8e2f2 100%);
                }
              `}`}"
            >
              <div class="${tw`flex flex-col text-center h-full`}">
                <button
                  @click=${() => {
                    this.showLogin = false;
                  }}
                  class="${tw`flex items-center absolute top-3 right-2 bg-[#f1f5fa] p-3 rounded-full w-9 h-9 shadow-sm`}"
                >
                  <img src="./images/burger-exit.svg" alt="Close Icon" />
                </button>
                <img src="./images/money.png" alt="Jackpot" />
                <h2 class="${tw`text-[2.188rem] text-[#3988DE] font-bold`}">
                  Tilmeld dig
                </h2>
                <p class="${tw`font-medium text-[17px]`}">
                  Og få 1000 EP med det samme!
                </p>
                <div class="${tw`flex justify-center gap-3 mb-4 mt-6`}">
                  <a
                    href="#"
                    class="${tw`w-10 h-10 bg-[#f1f5fa] flex rounded-lg p-2 justify-center`}"
                    ><img src="./images/social-icons/google.svg"
                  /></a>
                  <a
                    href="#"
                    class="${tw`w-10 h-10 bg-[#f1f5fa] flex rounded-lg p-2 justify-center`}"
                    ><img src="./images/social-icons/facebook.svg"
                  /></a>
                  <a
                    href="#"
                    class="${tw`w-10 h-10 bg-[#f1f5fa] flex rounded-lg p-2 justify-center`}"
                    ><img src="./images/social-icons/apple.svg"
                  /></a>
                </div>
                <form
                  action="#"
                  class="${tw`text-center flex flex-col px-10 gap-3`}"
                  (submit)="(false)"
                >
                  <input
                    type="text"
                    placeholder="Brugernavn..."
                    class="${tw`pb-1 px-4 h-10 w-full rounded-lg bg-[#f1f5fa] placeholder-[#D1D4D9]`}"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email..."
                    class="${tw`pb-1 px-4 h-10 w-full rounded-lg bg-[#f1f5fa] placeholder-[#D1D4D9]`}"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Kodeord..."
                    class="${tw`pb-1 px-4 h-10 w-full rounded-lg bg-[#f1f5fa] placeholder-[#D1D4D9]`}"
                    required
                  />
                  <input
                    type="submit"
                    value="Fortsæt"
                    class="${tw`mx-auto rounded-md shadow-md w-24 h-10 flex justify-center items-center text-lg font-medium text-white ${css`
                      & {
                        background: transparent
                          linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
                      }
                    `}`}"
                  />
                  <div class="${tw`leading-4`}">
                    <p class="${tw`text-[13px]`}">Har du allerede en bruger?</p>
                    <a
                      href="#"
                      class="${tw`text-[#3585DF] text-[13px] font-bold`}"
                      >Log ind her
                    </a>
                  </div>
                </form>
              </div>
            </div>
          `
        : ``}
    `;
  }
}

window.customElements.define('nav-bar', NavBar);
