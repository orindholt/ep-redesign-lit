import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {css, apply} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

const cyanGradient = css({
  '&': {
    'background-image': 'linear-gradient(to left, #a8ebe9, #fae4fe)',
    'background-clip': 'text',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
});
const liveDot = css({
  content: '""',
  '@apply':
    'absolute w-1 h-1 flex justify-center items-center bg-[#f82858] rounded-full top-1 right-[-2px]',
});

export class Rewards extends LitElement {
  static styles = [sheet.target];

  static properties = {};

  constructor() {
    super();
  }

  render() {
    return html`
      <section
        class="${tw`flex justify-between items-center rounded-md h-12 bg-[#1A2433] px-3 my-2`}"
      >
        <h2 class="${tw`${cyanGradient} font-bold text-lg`}">$52.526</h2>
        <p class="${tw`font-medium text-white text-sm`}">
          In rewards the last 30 days!
        </p>
        <a
          href="#"
          class="${tw`flex items-center rounded gap-1 px-1 h-6 bg-white`}"
        >
          <img src="./assets/person.svg" alt="person icon" />
          <p class="${tw`font-medium text-sm`}">1361</p>
          <p class="${tw`font-light text-sm relative after::${liveDot}`}">
            Live
          </p>
        </a>
      </section>
    `;
  }
}

window.customElements.define('app-rewards', Rewards);
