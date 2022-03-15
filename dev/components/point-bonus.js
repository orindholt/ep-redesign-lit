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
        class="${tw`flex flex-col items-center text-center bg-black rounded-lg h-[115px] py-3 px-2`}"
      >
        <div class="${tw`w-8 h-10 mb-1`}">
          <img src="./images/${this.icon}" ${this.caption} />
        </div>
        <p class="${tw`text-[0.813rem] font-medium leading-3`}">
          ${this.caption}:
        </p>
        <p
          class="${tw`font-bold mt-auto ${css`
            & {
              color: ${this.color};
            }
          `}`}"
        >
          + ${String(this.points)}
        </p>
      </a>
    `;
  }
}

window.customElements.define('point-bonus', PointBonus);
