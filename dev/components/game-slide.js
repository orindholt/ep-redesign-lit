import {LitElement, html} from 'lit';

export class GameSlide extends LitElement {
  static properties = {
    game: {type: Object},
  };

  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <div
        class="
          bg-gradient-to-bl from-[#FF5858] to-[#FF0080] rounded-xl overflow-hidden text-white w-72 md:w-52 h-[18.125rem] flex flex-col"
      >
        <div class="grid md:h-full overflow-hidden h-56">
          <img
            src="./images/${this.game.img}"
            class="md:h-full md:object-cover w-full object-cover grid-area-self"
          />
          <p class="text-sm self-end p-3 grid-area-self">
            <span class="mr-4">${this.game.days} days</span>${this.game.time}
          </p>
        </div>
        <div class="flex px-3 my-auto md:my-2 items-center">
          <div
            class="flex items-center w-full gap-4 md:flex-col md:items-start md:justify-center md:gap-0"
          >
            <h3 class="text-xl font-bold">€${String(this.game.cost)}</h3>
            <div class="h-9 w-[1px] bg-white md:hidden"></div>
            <p class="text-base md:text-xl">${String(this.game.cost)}.000 EP</p>
          </div>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md pb-1 min-w-[6.25rem] md:min-w-0 md:px-4 h-10 md:h-11 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-tr from-yellow to-orange"
          >
            Play
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-slide', GameSlide);
