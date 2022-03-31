import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class PointBonus extends LitElement {
  static styles = [sheet.target];

  static properties = {
    icon: {type: String},
    caption: {type: String},
    points: {type: Number},
    color: {type: String},
  };

  render() {
    return html`
      <a
        href="#"
        class="${tw`flex flex-col items-center justify-between text-center bg-black rounded-lg min-h-full py-2 md:py-3 px-2`}"
      >
        <div
          class="${tw`w-8 h-8 flex items-center md:w-10 md:h-10 mb-2 md:mb-0`}"
        >
          <img
            src="./images/${this.icon}"
            ${this.caption}
            class="${tw`md:w-full`}"
          />
        </div>
        <div class="${tw`flex flex-col`}">
          <p
            class="${tw`text-[0.813rem] font-medium leading-3 text-lightBlue md:text-lg`}"
          >
            ${this.caption}:
          </p>
          <p
            class="${tw`font-bold md:text-base ${css`
              & {
                color: ${this.color};
              }
            `}`}"
          >
            + ${String(this.points)}
          </p>
        </div>
      </a>
    `;
  }
}

window.customElements.define('point-bonus', PointBonus);
