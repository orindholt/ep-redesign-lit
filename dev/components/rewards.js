import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

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
    'absolute w-1 h-1 flex justify-center items-center bg-red rounded-full top-1 right-1',
});

export class Rewards extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <section
        class="${tw`flex justify-between items-center rounded-md h-12 bg-black px-3 gap-1`}"
      >
        <h2
          class="${tw`${cyanGradient} font-bold text-xl mb-1 md:text-2xl lg:text-3xl xl:text-4xl`}"
        >
          $52.526
        </h2>
        <p
          class="${tw`font-medium text-white text-sm md:text-base lg:text-xl text-center`}"
        >
          In rewards the last 30 days!
        </p>
        <div
          class="${tw`flex items-center rounded-md gap-1 px-1 ml-[2%] min-w-[5rem] w-20 bg-lightBlue md:hidden after::${liveDot} relative`}"
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
