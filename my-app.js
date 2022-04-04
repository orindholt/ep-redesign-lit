import {LitElement, html, css} from 'lit';

import {Rewards} from './dev/components/rewards';
import {WinDisplay} from './dev/components/win-display';
import {GameBig} from './dev/components/game-big';
import {SignupBonus} from './dev/components/signup-bonus';
import {PointOffers} from './dev/templates/point-offers';
import {GameSlider} from './dev/templates/game-slider';
import {WelcomeOffers} from './dev/templates/welcome-offers';
import {Shop} from './dev/templates/shop';

export class MyApp extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <div class="font-sofia">
        <!-- <nav-bar></nav-bar> -->
        <section class="px-[5%] md:px-[10%] md:pt-[1%]">
          <div class="md:grid md:grid-cols-2 my-2 gap-2 flex flex-col">
            <app-rewards class="order-2"></app-rewards>
            <win-display></win-display>
          </div>
          <game-big></game-big>
          <div class="lg:grid lg:grid-cols-2 mt-7 lg:mt-4 lg:gap-x-16">
            <h3 class="text-[39px] font-bold lg:mb-0 mb-5 leading-[2.75rem]">
              Sign up.
              <span
                class="bg-gradient-to-bl from-yellow to-orange text-gradient"
                >Play free.</span
              ><br />Biggest reward Site in the world
            </h3>
            <signup-bonus></signup-bonus>
          </div>
          <point-offers></point-offers>
        </section>
        <game-slider>
          <h2
            class="bg-gradient-to-tr from-[#ff0180] to-[#ff5858] text-gradient font-bold text-4xl leading-8"
          >
            Current<br />Tournaments
          </h2>
        </game-slider>
        <welcome-offers></welcome-offers>
        <point-shop></point-shop>
      </div>
    `;
  }
}

window.customElements.define('my-app', MyApp);
