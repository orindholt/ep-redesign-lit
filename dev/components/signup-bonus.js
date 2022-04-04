import {LitElement, html} from 'lit';

export class SignupBonus extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <div
        class="lg:text-black bg-gradient-to-r from-[#0060e9] to-[#80bad0] lg:from-[#fee3ff] lg:to-[#a7ebe8] shadow-md px-5 py-4 text-white rounded-lg gap-1 flex flex-col mb-3 md:h-full md:justify-center"
      >
        <p class="font-medium text-[15px] md:text-lg">
          Register to collect your welcome bonus!
        </p>
        <div class="flex justify-between">
          <h4 class="text-4xl font-bold xl:text-5xl">20.000 EP</h4>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md mt-auto pb-1 w-24 lg:w-32 xl:w-36 h-10 lg:h-11 xl:h-12 flex justify-center items-center text-lg lg:text-xl xl:text-2xl font-medium text-white bg-gradient-to-bl from-orange to-yellow"
          >
            <span class="md:hidden">Join</span>
            <span class="md:block hidden">Join today</span>
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('signup-bonus', SignupBonus);
