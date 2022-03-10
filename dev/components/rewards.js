import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {css} from 'twind/css';

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
    'absolute w-1 h-1 flex justify-center items-center bg-[#f82858] rounded-full top-1 right-1',
});

export class Rewards extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <section
        class="${tw`flex justify-between items-center rounded-md h-12 bg-[#1A2433] px-3 my-2 gap-1`}"
      >
        <h2 class="${tw`${cyanGradient} font-bold text-xl mb-1`}">$52.526</h2>
        <p class="${tw`font-medium text-white text-sm text-center`}">
          In rewards the last 30 days!
        </p>
        <div
          class="${tw`flex items-center rounded-md gap-1 px-1 ml-[2%] min-w-[5rem] w-20 bg-[#EAEFF7] after::${liveDot} relative`}"
        >
          <img src="./images/person.svg" alt="person icon" />
          <p class="${tw`font-medium text-sm mb-1`}">1361</p>
          <p class="${tw`font-light text-sm mb-1`}">Live</p>
        </div>
      </section>
    `;
  }
}

window.customElements.define('app-rewards', Rewards);
