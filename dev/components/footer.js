import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

export class Footer extends LitElement {
  static styles = [sheet.target];

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <footer
        class="${tw`bg-white`}"
        style="box-shadow: -1px -1px 11px 1px rgb(0 0 0 / 22%)"
      >
        <div class="${tw`flex justify-center items-center gap-2 pb-5 pt-10`}">
          <div class="${tw`w-full bg-[#eeeeee] h-[2px]`}"></div>
          <a class="${tw`w-24 `}" href="#">
            <img src="./assets/facebook.png" alt="Facebook Icon" />
          </a>
          <a class="${tw`w-24 mx-2`}" href="#">
            <img src="./assets/twitch.png" alt="Twitch Icon" />
          </a>
          <a class="${tw`w-24 `}" href="#">
            <img src="./assets/youtube.png" alt="Youtube Icon" />
          </a>
          <div class="${tw`w-full bg-[#eeeeee] h-[2px]`}"></div>
        </div>
        <div
          class="${tw`bg-[#273789] py-10 px-[10%] flex flex-col items-center`}"
        >
          <img
            src="./assets/logo-big.png"
            alt="Logo"
            class="${tw`mb-10 w-3/4`}"
          />
          <p class="${tw`text-white text-xs text-center`}">
            18+ | Spil ansvarligt | StopSpillet: 70 22 28 25 | ROFUS.nu Husk at
            pengespil kan være vanedannende, så spil ansvarligt. Hos EkstraPoint
            gør vi derfor en indsats for at opretholde og følge retningslinjer
            udstukket af den danske Spillemyndighed. Man skal være fyldt 18 både
            for at spille på EkstraPoint, og på alle casinosider der er
            repræsenteret herpå. Casino- og spilanmeldelser på vores side er som
            udgangspunkt kommercielt indhold. Regler og vilkår gælder. Spil
            ansvarligt. Selvudelukkelse via ROFUS. Kontakt Spillemyndighedens
            hjælpelinje på StopSpillet.dk
            <a href="https://www.spillemyndigheden.dk/"
              >https://www.spillemyndigheden.dk/</a
            >
          </p>
          <div
            class="${tw`flex flex-wrap justify-center items-center gap-y-2 mt-6`}"
          >
            <div>
              <img
                class=${tw`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/gambleaware.png"
              />
            </div>
            <div>
              <img
                class=${tw`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/mga.png"
              />
            </div>
            <div>
              <img
                class=${tw`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/agerestrict.png"
              />
            </div>
            <div>
              <img
                class=${tw`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/gpwa.gif"
              />
            </div>
            <div>
              <img
                class=${tw`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/egr.webp"
              />
            </div>
            <div>
              <img
                class=${tw`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/lottofy.webp"
              />
            </div>
            <div>
              <img
                class=${tw`max-w-[10.938rem] max-h-14 px-2`}
                src="./assets/footer/smartsoft.webp"
              />
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

window.customElements.define('app-footer', Footer);
