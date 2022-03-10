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

export class SignupBonus extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <div
        class="${tw`${css`
          & {
            background-image: linear-gradient(to right, #0060e9, #80bad0);
          }
        `} px-5 py-4 text-white rounded-lg gap-1 flex flex-col mb-3`}"
      >
        <p class="${tw`font-medium text-[15px]`}">
          Register to collect your welcome bonus!
        </p>
        <div class="${tw`flex justify-between`}">
          <h4 class="${tw`text-4xl font-bold`}">20.000 EP</h4>
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
    `;
  }
}

window.customElements.define('signup-bonus', SignupBonus);
