import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

const liveDot = css({
  content: '""',
  '@apply':
    'absolute w-1 h-1 flex justify-center items-center bg-red rounded-full top-0 right-[-0.25rem]',
});

export class SignupBonus extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <div
        class="${tw`lg:text-black bg-gradient-to-r from-[#0060e9] to-[#80bad0] lg:from-[#fee3ff] lg:to-[#a7ebe8] shadow-md px-5 py-4 text-white rounded-lg gap-1 flex flex-col mb-3 md:h-full md:justify-center`}"
      >
        <p class="${tw`font-medium text-[15px] md:text-lg`}">
          Register to collect your welcome bonus!
        </p>
        <div class="${tw`flex justify-between`}">
          <h4 class="${tw`text-4xl font-bold md:text-5xl`}">20.000 EP</h4>
          <a
            href="#"
            class="${tw`md:hover:scale-105 md:transition-transform rounded-md shadow-md mt-auto pb-1 w-24 lg:w-32 xl:w-36 h-10 lg:h-11 xl:h-12 flex justify-center items-center text-lg lg:text-xl xl:text-2xl font-medium text-white ${css`
              & {
                background: transparent
                  linear-gradient(206deg, #ff930f 0%, #ffd45b 100%);
              }
            `}`}"
          >
            <span class="${tw`md:hidden`}">Join</span>
            <span class="${tw`md:block hidden`}">Join today</span>
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('signup-bonus', SignupBonus);
