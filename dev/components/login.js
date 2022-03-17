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
  &:checked {
    border-color: #ffa626;
  }
  &:checked::before {
    content: url('./images/check.svg');
  }
`;

export class Login extends LitElement {
  static styles = [sheet.target];

  static properties = {
    log: {type: Boolean},
    _handleSubmit: {type: Function},
  };

  constructor() {
    super();
    this.log = false;
    /* Submit Function */
    this._handleSubmit = (e) => {
      const errorText = this.shadowRoot.querySelector('#error');
      const inputFields = this.shadowRoot.querySelectorAll('input');
      const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      let i = 0;
      let error = false;
      inputFields.forEach((input) => {
        if (
          !input.value ||
          (input.name == 'email' && !emailRegEx.test(input.value)) ||
          (input.name == 'password' && !passRegEx.test(input.value)) ||
          (input.name == 'tos' && !input.checked)
        ) {
          input.style.outline = '1px solid #f82858';
          if (!i)
            errorText.textContent =
              input.name == 'tos'
                ? 'Please agree to the terms of service'
                : input.name == 'password' && input.value.length < 8
                ? 'Password needs to include atleast 8 characters.'
                : input.name == 'password' && !/\d/.test(input.value)
                ? 'Password needs to include atleast one number'
                : `Please enter a vaild ${input.name}`;
          i++;
          error = true;
        } else if (input.value || input.checked) {
          input.style.outline = '';
          if (!input.style.length) input.removeAttribute('style');
        }
      });
      e.preventDefault();
      console.log(window.location);
      if (error) return false;
      /* TEMP SOLUTION FOR REDIRECT DEMO */
      window.location.replace(
        `${window.location.href.replace(
          window.location.search,
          '?logged=true'
        )}`
      );
      setTimeout(() => {
        window.location.reload();
      }, 100);
    };
  }

  render() {
    return html`
      <div
        class="${tw`fixed w-[100vw] overflow-y-scroll py-5 sm:pb-5 h-full sm:w-[28.5rem] sm:h-[43.125rem] sm:right-[50%] sm:mr-[-14.25rem] sm:top-[10vh] sm:rounded bg-lightBlue top-0 sm:pt-5 pt-20 right-0 px-7 z-[5] bg-gradient-to-tr from-[#eaeff7] to-[#d8e2f2] animate-fadeInAlt font-sofia`}"
      >
        <div class="${tw`flex flex-col text-center h-full gap-4`}">
          <div
            class="${tw`bg-white w-full sm:min-h-[7rem] min-h-[5rem] rounded-md`}"
          ></div>
          <section>
            <h2 class="${tw`text-[2.188rem] text-[#3988DE] font-bold`}">
              ${this.log ? 'Log ind' : 'Tilmeld dig'}
            </h2>
            <p class="${tw`font-medium text-[17px]`}">
              ${!this.log
                ? 'Og få 1000 EP med det samme!'
                : 'Og optjen point med det samme!'}
            </p>
            <hr class="${tw`mt-3 border-[#C9D4E6]`}" />
          </section>
          <form
            @submit="${(e) => this._handleSubmit(e)}"
            id="login-form"
            method="POST"
            action="#"
            class="${tw`flex flex-col h-full gap-1 items-center`}"
          >
            <p class="${tw`text-blue`}">Login med sociale medier</p>
            <div class="${tw`flex justify-center gap-3 my-2`}">
              <button
                type="submit"
                href="#"
                class="social-btn ${tw`w-12 h-12 bg-lightGray flex rounded-lg p-3 justify-center`}"
              >
                <img src="./images/social-icons/google.svg" />
              </button>
              <button
                type="submit"
                href="#"
                class="social-btn ${tw`w-12 h-12 bg-lightGray flex rounded-lg p-3 justify-center`}"
              >
                <img
                  src="./images/social-icons/facebook.svg"
                  class="${tw`w-1/2`}"
                />
              </button>
              <button
                type="submit"
                href="#"
                class="social-btn ${tw`w-12 h-12 bg-lightGray flex rounded-lg p-3 justify-center`}"
              >
                <img src="./images/social-icons/apple.svg" />
              </button>
            </div>
            ${!this.log
              ? html`<div class="${tw`flex gap-3 items-center w-full px-5`}">
                    <input
                      class="${tw`appearance-none min-w-[1rem] min-h-[1rem] border-2 border-[#C9D4E6] rounded-[4px] relative ${checked} before:bg-orange before:w-full before:h-full before:absolute before:grid before:place-content-center before:pb-1`}"
                      type="checkbox"
                      name="tos"
                      id="tos"
                    />
                    <label
                      for="tos"
                      class="${tw`text-[8px] text-blue text-left`}"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus bibendum a nisl id auctor. Maecenas tristique,
                      odio non bibendum sagittis, mauris diam aliquam neque,
                      quis imperdiet dui ante at lacus. Aenean molestie sodales
                      turpis.
                    </label>
                  </div>
                  <div class="${tw`flex gap-3 items-center w-full px-5 pb-4`}">
                    <input
                      class="${tw`appearance-none min-w-[1rem] min-h-[1rem] border-2 border-[#C9D4E6] rounded-[4px] relative checked:${checked} before:bg-orange before:w-full before:h-full before:absolute before:grid before:place-content-center before:pb-1`}"
                      type="checkbox"
                      name="newsletter"
                      id="newsletter"
                    />
                    <label
                      for="newsletter"
                      class="${tw`text-[8px] text-blue text-left`}"
                    >
                      Jeg vil gerne have de bedste nye og eksklusive casino
                      tilbud Færdigør tilmelding
                    </label>
                  </div>`
              : ``}
            <div
              class="${tw`flex flex-col items-center gap-2 relative w-full`}"
            >
              <input
                type="text"
                placeholder="Brugernavn..."
                id="username"
                name="username"
                class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray placeholder-[#D1D4D9]`}"
              />
              ${!this.log
                ? html`<input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email..."
                    class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray placeholder-[#D1D4D9]`}"
                  />`
                : ``}
              <input
                type="password"
                placeholder="Kodeord..."
                id="password"
                name="password"
                class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray placeholder-[#D1D4D9]`}"
              />
              <p
                id="error"
                class="${tw`text-red text-[8px] absolute bottom-[-1rem]`}"
              ></p>
            </div>
            <input
              type="submit"
              value=${this.log ? 'Login' : 'Fortsæt'}
              class="${tw`mt-4 rounded-md cursor-pointer shadow-md w-24 h-10 flex justify-center items-center text-lg font-medium text-white ${css`
                & {
                  background: transparent
                    linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
                }
              `}`}"
            />
            <div class="${tw`leading-4 mt-auto`}">
              <p class="${tw`text-[13px]`}">
                ${!this.log
                  ? 'Har du allerede en bruger?'
                  : 'Har du ikke en bruger?'}
              </p>
              <a
                href="#"
                class="${tw`text-[#3585DF] text-[13px] font-bold`}"
                @click=${() => (this.log = !this.log)}
                >${!this.log ? 'Log ind her' : 'Tilmeld dig her'}
              </a>
            </div>
          </form>
        </div>
      </div>
    `;
  }
}

window.customElements.define('log-in', Login);
