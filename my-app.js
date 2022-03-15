import {LitElement, html} from 'lit';
import {create, cssomSheet, setup} from 'twind';
import {theme} from './dev/twind.config';
import {css} from 'twind/css';
import {Rewards} from './dev/components/rewards';
import {WinDisplay} from './dev/components/win-display';
import {GameBig} from './dev/components/game-big';
import {SignupBonus} from './dev/components/signup-bonus';
import {PointOffers} from './dev/templates/point-offers';
import {GameSlider} from './dev/templates/game-slider';
import {WelcomeOffers} from './dev/templates/welcome-offers';
import {Shop} from './dev/templates/shop';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

/* setup({
  preflight: {
    '@import': `url('https://cdn.jsdelivr.net/npm/@splidejs/splide@3.6.12/dist/css/splide.min.css')`,
  },
}); */

/* const globalStyles = css({
  ':global': {
    button: {
      background: '#000',
    },
  },
}); */

export class MyApp extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <div class="${tw`font-sofia bg-lightBlue`}">
        <!-- <nav-bar></nav-bar> -->
        <section class="${tw`px-[5%]`}">
          <app-rewards></app-rewards>
          <win-display></win-display>
          <game-big></game-big>
          <h3 class="${tw`text-[39px] font-bold mt-7 mb-5 leading-[2.75rem]`}">
            Sign up.
            <span
              class="${tw`${css`
                & {
                  background-image: linear-gradient(
                    to bottom right,
                    #ff9515 0%,
                    #ff502e 50%,
                    #ff4e2f 100%
                  );
                  background-clip: text;
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                }
              `}`}"
              >Play free.</span
            ><br />Biggest reward Site in the world
          </h3>
          <signup-bonus></signup-bonus>
          <point-offers></point-offers>
        </section>
        <game-slider>
          <h2
            class="${tw`${css`
              & {
                background-image: linear-gradient(
                  to top right,
                  #ff0180,
                  #ff5858
                );
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            `} font-bold text-4xl leading-8`}"
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
