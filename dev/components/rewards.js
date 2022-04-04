import {LitElement, html} from 'lit';

export class Rewards extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <section
        class="flex justify-between items-center rounded-md h-12 bg-black px-3 gap-1"
      >
        <h2
          class="bg-gradient-to-l from-[#a8ebe9] to-[#fae4fe] text-gradient font-bold text-xl mb-1 md:text-2xl lg:text-3xl xl:text-4xl"
        >
          $52.526
        </h2>
        <p
          class="font-medium text-white text-sm md:text-base lg:text-xl text-center"
        >
          In rewards the last 30 days!
        </p>
        <div
          class="flex items-center rounded-md gap-1 px-1 ml-[2%] min-w-[5rem] w-20 bg-lightBlue md:hidden live-dot relative"
        >
          <img src="./images/person.svg" alt="person icon" />
          <p class="font-medium text-sm mb-1">1361</p>
          <p class="font-light text-sm mb-1">Live</p>
        </div>
      </section>
    `;
  }
}

window.customElements.define('app-rewards', Rewards);
