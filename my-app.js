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
  static styles = [
    css`
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      ::before,
      ::after {
        --tw-content: '';
      }
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
      }
      body {
        margin: 0;
        line-height: inherit;
      }
      hr {
        height: 0;
        color: inherit;
        border-top-width: 1px;
      }
      abbr:where([title]) {
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      b,
      strong {
        font-weight: bolder;
      }
      code,
      kbd,
      samp,
      pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        font-size: 1em;
      }
      small {
        font-size: 80%;
      }
      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }
      sub {
        bottom: -0.25em;
      }
      sup {
        top: -0.5em;
      }
      table {
        text-indent: 0;
        border-color: inherit;
        border-collapse: collapse;
      }
      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: inherit;
        color: inherit;
        margin: 0;
        padding: 0;
      }
      button,
      select {
        text-transform: none;
      }
      button,
      [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button;
        background-color: transparent;
        background-image: none;
      }
      :-moz-focusring {
        outline: auto;
      }
      :-moz-ui-invalid {
        box-shadow: none;
      }
      progress {
        vertical-align: baseline;
      }
      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        height: auto;
      }
      [type='search'] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      ::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      summary {
        display: list-item;
      }
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }
      fieldset {
        margin: 0;
        padding: 0;
      }
      legend {
        padding: 0;
      }
      ol,
      ul,
      menu {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      textarea {
        resize: vertical;
      }
      input::-moz-placeholder,
      textarea::-moz-placeholder {
        opacity: 1;
        color: #9ca3af;
      }
      input:-ms-input-placeholder,
      textarea:-ms-input-placeholder {
        opacity: 1;
        color: #9ca3af;
      }
      input::placeholder,
      textarea::placeholder {
        opacity: 1;
        color: #9ca3af;
      }
      button,
      [role='button'] {
        cursor: pointer;
      }
      :disabled {
        cursor: default;
      }
      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
        vertical-align: middle;
      }
      img,
      video {
        max-width: 100%;
        height: auto;
      }
      [hidden] {
        display: none;
      }
      *,
      ::before,
      ::after {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-pan-x: ;
        --tw-pan-y: ;
        --tw-pinch-zoom: ;
        --tw-scroll-snap-strictness: proximity;
        --tw-ordinal: ;
        --tw-slashed-zero: ;
        --tw-numeric-figure: ;
        --tw-numeric-spacing: ;
        --tw-numeric-fraction: ;
        --tw-ring-inset: ;
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgb(59 130 246 / 0.5);
        --tw-ring-offset-shadow: 0 0 #0000;
        --tw-ring-shadow: 0 0 #0000;
        --tw-shadow: 0 0 #0000;
        --tw-shadow-colored: 0 0 #0000;
        --tw-blur: ;
        --tw-brightness: ;
        --tw-contrast: ;
        --tw-grayscale: ;
        --tw-hue-rotate: ;
        --tw-invert: ;
        --tw-saturate: ;
        --tw-sepia: ;
        --tw-drop-shadow: ;
        --tw-backdrop-blur: ;
        --tw-backdrop-brightness: ;
        --tw-backdrop-contrast: ;
        --tw-backdrop-grayscale: ;
        --tw-backdrop-hue-rotate: ;
        --tw-backdrop-invert: ;
        --tw-backdrop-opacity: ;
        --tw-backdrop-saturate: ;
        --tw-backdrop-sepia: ;
      }
      .static {
        position: static;
      }
      .order-2 {
        order: 2;
      }
      .my-2 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
      .mt-7 {
        margin-top: 1.75rem;
      }
      .mb-5 {
        margin-bottom: 1.25rem;
      }
      .flex {
        display: flex;
      }
      .table {
        display: table;
      }
      .hidden {
        display: none;
      }
      .border-collapse {
        border-collapse: collapse;
      }
      .resize {
        resize: both;
      }
      .flex-col {
        flex-direction: column;
      }
      .gap-2 {
        gap: 0.5rem;
      }
      .border {
        border-width: 1px;
      }
      .bg-gradient-to-bl {
        background-image: linear-gradient(
          to bottom left,
          var(--tw-gradient-stops)
        );
      }
      .bg-gradient-to-tr {
        background-image: linear-gradient(
          to top right,
          var(--tw-gradient-stops)
        );
      }
      .from-yellow {
        --tw-gradient-from: #ffd45b;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(255 212 91 / 0));
      }
      .from-purpleBright {
        --tw-gradient-from: #ff0080;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(255 0 128 / 0));
      }
      .to-orange {
        --tw-gradient-to: #ffa626;
      }
      .to-sunset {
        --tw-gradient-to: #ff5858;
      }
      .px-5_100 {
        padding-left: 5%;
        padding-right: 5%;
      }
      .font-sofia {
        font-family: sofia-pro, sans-serif;
      }
      .text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      .font-bold {
        font-weight: 700;
      }
      .leading-10 {
        line-height: 2.5rem;
      }
      .leading-8 {
        line-height: 2rem;
      }
      .underline {
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;
      }
      .outline {
        outline-style: solid;
      }
      .text-gradient {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      body {
        font-size: 0.875rem;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
      a {
        text-decoration: none;
      }
      button {
        background: none;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-weight: inherit;
      }
      button:focus,
      a:focus {
        border: none;
        outline: 2px solid #eaeff750;
      }
      button,
      a {
        color: inherit;
      }
      select,
      button,
      textarea {
        font-family: inherit;
      }
      input,
      button,
      textarea {
        border: none;
      }
      textarea:focus {
        outline: none;
      }
      ul,
      li {
        list-style: none;
      }
      input:focus {
        outline: none;
      }
      input[type='submit'] {
        cursor: pointer;
      }
      @media (min-width: 768px) {
        .md\\:grid {
          display: grid;
        }
        .md\\:grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .md\\:px-10_100 {
          padding-left: 10%;
          padding-right: 10%;
        }
        .md\\:pt-1 {
          padding-top: 0.25rem;
        }
      }
      @media (min-width: 1024px) {
        .lg\\:mt-4 {
          margin-top: 1rem;
        }
        .lg\\:mb-0 {
          margin-bottom: 0px;
        }
        .lg\\:grid {
          display: grid;
        }
        .lg\\:grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .lg\\:gap-x-16 {
          -moz-column-gap: 4rem;
          column-gap: 4rem;
        }
      }
    `,
  ];
  render() {
    return html`
      <div class="font-sofia">
        <!-- <nav-bar></nav-bar> -->
        <section class="px-5_100 md:px-10_100 md:pt-1">
          <div class="md:grid md:grid-cols-2 my-2 gap-2 flex flex-col">
            <app-rewards class="order-2"></app-rewards>
            <win-display></win-display>
          </div>
          <game-big></game-big>
          <div class="lg:grid lg:grid-cols-2 mt-7 lg:mt-4 lg:gap-x-16">
            <h3 class="text-4xl font-bold lg:mb-0 mb-5 leading-10">
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
            class="bg-gradient-to-tr from-purpleBright to-sunset text-gradient font-bold text-4xl leading-8"
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
