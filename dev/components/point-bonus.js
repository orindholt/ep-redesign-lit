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
        class="${tw`flex flex-col items-center text-center bg-black rounded-lg h-[115px] py-3 px-2 md:py-2 md:px-3 md:flex-row md:h-auto md:max-h-26 md:gap-2`}"
      >
        <div
          class="${tw`w-8 min-h-[2.5rem] mb-1 md:mb-0 md:flex md:items-center md:w-10 md:min-h-0`}"
        >
          <img
            src="./images/${this.icon}"
            ${this.caption}
            class="${tw`md:w-full`}"
          />
        </div>
        <div class="${tw`h-full flex flex-col justify-between md:items-start`}">
          <p
            class="${tw`text-[0.813rem] font-medium leading-3 text-lightBlue md:text-base`}"
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
