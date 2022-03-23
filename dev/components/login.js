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
    border-color: #ffa626 !important;
  }
  &:checked::before {
    content: url('./images/check.svg');
  }
`;

/* const flickerFix = css`
  &::before {
    content: '';
    background: #eaeff7;
    position: absolute;
    width: 100%;
    height: 110vh;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`; */

const resetErrorStyle = (target, error) => {
  if (target.name && target.name != 'tos')
    if (target.style.color) target.style.color = '';
  if (target.style.borderColor) target.style.borderColor = '';
  if (target.style.display == 'block') target.style.display = '';
  if (!target.style) target.removeAtrribute('style');
  if (error.style.display == 'block') error.style.display = '';
  if (!error.style) target.removeAtrribute('style');
};

const validation = (inputElements, errorIcon, errorText, event) => {
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let i = 0;
  let error = false;
  inputElements.forEach((input) => {
    if (
      !input.value ||
      (input.name == 'email' && !emailRegEx.test(input.value)) ||
      (input.name == 'password' && !passRegEx.test(input.value)) ||
      (input.name == 'tos' && !input.checked)
    ) {
      if (input.name != 'tos') {
        input.style.color = '#F40E4C';
        input.addEventListener(
          'input',
          (e) => {
            if (e.target.style.color) e.target.style.color = '';
            if (!e.target.style) e.target.removeAtrribute('style');
          },
          [true]
        );
      } else {
        input.style.borderColor = '#f82858';
        input.onchange = (e) => {
          if (e.target.style.borderColor) e.target.style.borderColor = '';
          if (!e.target.style) e.target.removeAtrribute('style');
          if (errorIcon.style.display == 'block') errorIcon.style.display = '';
        };
        if (errorIcon.style.display != 'block')
          errorIcon.style.display = 'block';
      }
      if (errorText.style.display != 'block') errorText.style.display = 'block';
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
    }
  });
  return error;
};

export class Login extends LitElement {
  static styles = [sheet.target];

  static properties = {
    log: {type: Boolean},
    passReq: {type: Boolean},
    attemptSubmit: {type: Boolean},
    loading: {type: Boolean},
    done: {type: Boolean},
    _handleSubmit: {type: Function},
  };

  constructor() {
    super();
    this.log = true;
    this.passReq = false;
    this.loading = false;
    this.done = false;
    /* Submit Function */
    this._handleSubmit = (e) => {
      const errorText = this.shadowRoot.querySelector('#error');
      const errorIcon = this.shadowRoot.querySelector('#error-icon');
      const inputFields = this.shadowRoot.querySelectorAll('input');
      const submitElement = e.submitter;
      if (!this.done) e.preventDefault();
      if (
        submitElement.classList.contains('social-btn') &&
        !validation(
          this.shadowRoot.querySelectorAll('#tos'),
          errorIcon,
          errorText
        )
      ) {
        return true;
      }
      const validate = () => validation(inputFields, errorIcon, errorText, e);
      this.attemptSubmit = true;
      if (!submitElement.classList.contains('social-btn')) validate();
      if (!validate()) {
        this.loading = true;
        setTimeout(() => {
          this.done = true;
          this.shadowRoot.querySelector('#login-form').submit();
        }, 2000);
      }
    };
  }

  render() {
    return html`
      <div
        class="${tw`fixed w-[100vw] h-[100vh] overflow-y-scroll sm:overflow-auto py-5 sm:pb-5 sm:w-[28.5rem] sm:max-h-[43.125rem] sm:right-[50%] sm:mr-[-14.25rem] sm:top-[10vh] sm:rounded bg-lightBlue top-0 sm:pt-5 pt-20 right-0 px-7 z-[5] bg-gradient-to-tr from-[#eaeff7] to-[#d8e2f2] animate-fadeInAlt font-sofia`}"
      >
        <div class="${tw`flex flex-col text-center h-full gap-2 sm:gap-3`}">
          ${this.log || (!this.log && screen.width <= 640)
            ? html`
                <div
                  class="${tw`bg-white w-full sm:min-h-[7rem] min-h-[5rem] rounded-md h-sm:hidden`}"
                ></div>
              `
            : ``}
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
            method="GET"
            action="#"
            class="${tw`flex flex-col h-full gap-1 items-center`}"
          >
            <div class="${tw`leading-4`}">
              <p class="${tw`text-[13px]`}">
                ${!this.log
                  ? 'Har du allerede en bruger?'
                  : 'Har du ikke en bruger?'}
              </p>
              <a
                href="#"
                class="${tw`text-[#3585DF] text-[13px] font-bold`}"
                @click=${() => {
                  if (this.passReq) this.passReq = false;
                  this.log = !this.log;
                  const inputFields = this.shadowRoot.querySelectorAll('input');
                  const errorText = this.shadowRoot.querySelector('#error');
                  inputFields.forEach((elm) => resetErrorStyle(elm, errorText));
                }}
                >${!this.log ? 'Log ind her' : 'Tilmeld dig her'}
              </a>
            </div>
            <div
              class="${tw`flex justify-center gap-3 my-4 ${css`
                & {
                  margin-bottom: ${this.log ? '18' : 'initial'}px;
                }
              `}`}"
            >
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
                    <div class="${tw`relative w-4 h-4`}">
                      <input
                        class="${tw`appearance-none min-w-[1rem] min-h-[1rem] border-2 border-[#C9D4E6] rounded-[4px] relative ${checked} before:bg-orange before:w-full before:h-full before:absolute before:grid before:place-content-center before:pb-1`}"
                        type="checkbox"
                        name="tos"
                        id="tos"
                      />
                      <img
                        id="error-icon"
                        class="${tw`absolute top-[-1.2rem] w-3 left-[calc(50%-(12px/2))] hidden animate-fadeInAlt opacity-0`}"
                        src="./images/error.svg"
                        alt="Error"
                      />
                    </div>

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
                  <div class="${tw`flex gap-3 items-center w-full px-5 pb-5`}">
                    <input
                      class="${tw`appearance-none min-w-[1rem] min-h-[1rem] border-2 border-[#C9D4E6] rounded-[4px] relative ${checked} before:bg-orange before:w-full before:h-full before:absolute before:grid before:place-content-center before:pb-1`}"
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
            ${this.passReq
              ? html`<p class="${tw`mb-3`}">
                  Vi sender dig en recovery email.
                </p>`
              : ``}
            <div
              class="${tw`flex flex-col items-center gap-2 relative w-full`}"
            >
              <p
                id="error"
                class="${tw`text-red text-xs absolute top-[-1.3rem] hidden animate-fadeInAlt opacity-0`}"
              ></p>
              ${!this.log && !this.passReq
                ? html`
                    <input
                      type="text"
                      placeholder="Brugernavn..."
                      id="username"
                      name="username"
                      class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray ${css`
                        &::placeholder {
                          color: inherit;
                          opacity: 0.4;
                        }
                      `}`}"
                    />
                  `
                : ``}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email..."
                class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray ${css`
                  &::placeholder {
                    color: inherit;
                    opacity: 0.4;
                  }
                `}`}"
              />
              ${!this.passReq
                ? html`
                    <input
                      type="password"
                      placeholder="Kodeord..."
                      id="password"
                      name="password"
                      class="${tw`pb-1 px-3 h-10 w-full rounded-lg bg-lightGray ${css`
                        &::placeholder {
                          color: inherit;
                          opacity: 0.4;
                        }
                      `}`}"
                    />
                  `
                : ``}
            </div>
            <button
              type="submit"
              id="submit-button"
              class="${tw`mt-4 rounded-md cursor-pointer shadow-md w-24 h-10 flex justify-center items-center text-lg font-medium text-white hover:scale-110 transition-transform active:scale-100 ${css`
                & {
                  background: transparent
                    linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
                }
              `}`}"
            >
              ${!this.loading && this.log && !this.passReq
                ? 'Login'
                : this.log && this.passReq
                ? 'Indsend'
                : !this.log && !this.loading
                ? 'Fortsæt'
                : html`<img
                    class="${tw`animate-rotate w-2/6`}"
                    src="./images/arrows_circle.svg"
                    alt="Loading icon"
                  />`}
            </button>
          </form>
          ${this.log
            ? html`<button
                @click=${() => {
                  this.passReq = !this.passReq;
                  const inputFields = this.shadowRoot.querySelectorAll('input');
                  const errorText = this.shadowRoot.querySelector('#error');
                  inputFields.forEach((elm) => resetErrorStyle(elm, errorText));
                }}
              >
                ${!this.passReq
                  ? 'Har du glemt din adgangskode?'
                  : 'Kan du huske din adgangskode?'}
              </button>`
            : ``}
        </div>
      </div>
    `;
  }
}

window.customElements.define('log-in', Login);
