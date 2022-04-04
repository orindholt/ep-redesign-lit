import {LitElement, html} from 'lit';

export class PointBonus extends LitElement {
  static properties = {
    icon: {type: String},
    caption: {type: String},
    points: {type: Number},
    color: {type: String},
  };

  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <a
        href="#"
        class="flex flex-col items-center justify-between text-center bg-black rounded-lg min-h-full py-2 md:py-3 px-2"
      >
        <div class="w-8 h-8 flex items-center md:w-10 md:h-10 mb-2 md:mb-0">
          <img src="./images/${this.icon}" ${this.caption} class="md:w-full" />
        </div>
        <div class="flex flex-col">
          <p
            class="text-[0.813rem] font-medium leading-3 text-lightBlue md:text-lg"
          >
            ${this.caption}:
          </p>
          <p class="font-bold md:text-base" style="color: ${this.color}">
            + ${String(this.points)}
          </p>
        </div>
      </a>
    `;
  }
}

window.customElements.define('point-bonus', PointBonus);
