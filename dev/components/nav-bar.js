import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {animation} from 'twind/css';

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
    this.crtFlag = './assets/flags/denmark.svg';
    this.regions = [
      {
        imgSrc: './assets/flags/usa.svg',
        title: 'USA',
        anchor: '#',
        active: false,
      },
      {
        imgSrc: './assets/flags/denmark.svg',
        title: 'Danmark',
        active: true,
      },
      {
        imgSrc: './assets/flags/german.svg',
        title: 'Deutshland',
        active: false,
      },
      {
        imgSrc: './assets/flags/norway.svg',
        title: 'Norge',
        active: false,
      },
      {
        imgSrc: './assets/flags/finland.svg',
        title: 'Suomi',
        active: false,
      },
      {
        imgSrc: './assets/flags/sweden.svg',
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
          ><img src="./assets/header.svg" alt="header" class="${tw`w-32`}"
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
            <img src="./assets/login.svg" alt="Login Icon" />
          </button>
          <button class="${`mr-4`}">
            <img src="./assets/search.svg" alt="search icon" />
          </button>
          <button @click=${this.toggleMenu}>
            <img
              class="${tw`w-8`}"
              src="./assets/${this.menu
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
                        class="${tw`text-white text-[19px] leading-9 rounded-[3px] font-bold w-full h-10 flex justify-center`}"
                        style="background-image: linear-gradient(to right, #0060E9 0%, #3D8BDD 50%, #80BAD0 100%)"
                      >
                        Shop
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
      ${this.showLogin
        ? html`
            <div
              class="${tw`fixed w-[100vw] h-[100vh] top-0 right-0 pt-10 pb-28 px-4 z-20 ${fadeInAlt}`}"
              style="background-image: linear-gradient(to right, #a8ebe9, #fae4fe)"
            >
              <div
                class="${tw`bg(top-right no-repeat) flex flex-col justify-between h-full`}"
                style="background-image: url('./assets/login-banner.png'); background-size: 40%;"
              >
                <button
                  @click=${() => {
                    this.showLogin = false;
                  }}
                  class="${tw`flex items-center gap-4 text-[#339] font-medium absolute top-3 right-2`}"
                >
                  Close
                  <div
                    class="${tw`flex bg-[#eeeeee] p-2 rounded-full w-9 h-9 justify-center`}"
                  >
                    <img src="./assets/close.svg" alt="Close Icon" />
                  </div>
                </button>
                <div class="${tw`mt-4`}">
                  <h2 class="${tw`text-[2rem] font-bold leading-9`}">Log in</h2>
                  <p>Are you ready to Win Free Prizes?</p>
                </div>
                <form
                  action="#"
                  class="${tw`text-center flex flex-col px-10 gap-y-6`}"
                  (submit)="(false)"
                >
                  <input
                    type="text"
                    placeholder="Your email"
                    class="${tw`p-3 rounded-sm bg-[#eeeeee]`}"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    class="${tw`p-3 rounded-sm bg-[#eeeeee]`}"
                    required
                  />
                  <a
                    href="#"
                    class="${tw`rounded-md shadow-md w-full h-9 flex justify-center items-center text-lg font-medium text-white`}"
                    style="background-image: linear-gradient(to bottom left, #FFA626, #FFD45B)"
                  >
                    Log In
                  </a>
                  <div>
                    <p class="${tw`mb-4`}">Or continue with social login</p>
                    <div class="${tw`flex justify-center gap-x-3`}">
                      <a
                        href="#"
                        class="${tw`w-16 h-16 bg-[#eeeeee] flex rounded-full p-4 justify-center`}"
                        ><img src="./assets/social-icons/facebook.svg"
                      /></a>
                      <a
                        href="#"
                        class="${tw`w-16 h-16 bg-[#eeeeee] flex rounded-full p-4 justify-center`}"
                        ><img src="./assets/social-icons/google.svg"
                      /></a>
                    </div>
                  </div>
                  <div>
                    <hr class="${tw`w-1/2 border-[#999999] my-4 mx-auto`}" />
                    <p class="${tw`my-1 text-[16px]`}">
                      Don't remember your password?
                    </p>
                    <a
                      href="#"
                      class="${tw`text-[#339] hover:text-[#6c6ca7] text-[16px]`}"
                      >Not a user yet?
                      <span class="${tw`font-bold`}">Register here!</span></a
                    >
                    <hr class="${tw`w-1/2 border-[#999999] my-4 mx-auto`}" />
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
