import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

const checked = css`
  & {
    border-color: #ffa626;
  }
  &::before {
    content: url('./images/check.svg');
  }
`;

export class Login extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <div
        class="${tw`fixed w-[100vw] py-5 sm:pb-5 pb-20 h-full sm:w-[28.5rem] sm:h-[43.125rem] sm:right-[50%] sm:mr-[-14.25rem] sm:top-[10vh] sm:rounded bg-lightBlue top-16 right-0 px-7 z-[5] bg-gradient-to-tr from-[#eaeff7] to-[#d8e2f2] animate-fadeInAlt font-sofia`}"
      >
        <div class="${tw`flex flex-col text-center h-full justify-between`}">
          <div class="${tw`bg-white w-full h-32 rounded-md`}"></div>
          <section>
            <h2 class="${tw`text-[2.188rem] text-[#3988DE] font-bold`}">
              Tilmeld dig
            </h2>
            <p class="${tw`font-medium text-[17px]`}">
              Og få 1000 EP med det samme!
            </p>
            <hr class="${tw`my-3 border-[#C9D4E6]`}" />
            <p class="${tw`text-blue`}">Login med sociale medier</p>
            <div class="${tw`flex justify-center gap-3 mb-4 mt-1`}">
              <a
                href="#"
                class="${tw`w-12 h-12 bg-lightGray flex rounded-lg p-3 justify-center`}"
                ><img src="./images/social-icons/google.svg"
              /></a>
              <a
                href="#"
                class="${tw`w-12 h-12 bg-lightGray flex rounded-lg p-3 justify-center`}"
                ><img src="./images/social-icons/facebook.svg"
              /></a>
              <a
                href="#"
                class="${tw`w-12 h-12 bg-lightGray flex rounded-lg p-3 justify-center`}"
                ><img src="./images/social-icons/apple.svg"
              /></a>
            </div>
          </section>
          <form
            action="#"
            class="${tw`text-center flex flex-col gap-3`}"
            (submit)="(false)"
          >
            <div class="${tw`flex gap-3 items-center px-5 text-left`}">
              <input
                class="${tw`appearance-none min-w-[1rem] min-h-[1rem] border-2 border-[#C9D4E6] rounded-[4px] relative checked:${checked} before:bg-orange before:w-full before:h-full before:absolute before:grid before:place-content-center before:pb-1`}"
                type="checkbox"
                name="terms"
                id="terms"
                required
              />
              <label for="terms" class="${tw`text-[8px] text-blue`}">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                bibendum a nisl id auctor. Maecenas tristique, odio non bibendum
                sagittis, mauris diam aliquam neque, quis imperdiet dui ante at
                lacus. Aenean molestie sodales turpis.
              </label>
            </div>
            <div class="${tw`flex gap-3 items-center px-5 text-left`}">
              <input
                class="${tw`appearance-none min-w-[1rem] min-h-[1rem] border-2 border-[#C9D4E6] rounded-[4px] relative checked:${checked} before:bg-orange before:w-full before:h-full before:absolute before:grid before:place-content-center before:pb-1`}"
                type="checkbox"
                name="apply"
                id="apply"
                required
              />
              <label for="apply" class="${tw`text-[8px] text-blue`}">
                Jeg vil gerne have de bedste nye og eksklusive casino tilbud
                Færdigør tilmelding
              </label>
            </div>
            <input
              type="text"
              placeholder="Brugernavn..."
              class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray placeholder-[#D1D4D9]`}"
              required
            />
            <input
              type="email"
              placeholder="Email..."
              class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray placeholder-[#D1D4D9]`}"
              required
            />
            <input
              type="password"
              placeholder="Kodeord..."
              class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray placeholder-[#D1D4D9]`}"
              required
            />
            <input
              type="submit"
              value="Fortsæt"
              class="${tw`mx-auto rounded-md cursor-pointer shadow-md w-24 h-10 flex justify-center items-center text-lg font-medium text-white ${css`
                & {
                  background: transparent
                    linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
                }
              `}`}"
            />
            <div class="${tw`leading-4`}">
              <p class="${tw`text-[13px]`}">Har du allerede en bruger?</p>
              <a href="#" class="${tw`text-[#3585DF] text-[13px] font-bold`}"
                >Log ind her
              </a>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

window.customElements.define('log-in', Login);
