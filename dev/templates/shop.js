import {LitElement, html, css} from 'lit';

import {ShopItem} from '../components/shop-item';
import {Splide} from '@splidejs/splide';

export class Shop extends LitElement {
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
      .relative {
        position: relative;
      }
      .z-0 {
        z-index: 0;
      }
      .my-6 {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }
      .flex {
        display: flex;
      }
      .hidden {
        display: none;
      }
      .h-10 {
        height: 2.5rem;
      }
      .w-62 {
        width: 15.625rem;
      }
      .flex-col {
        flex-direction: column;
      }
      .items-center {
        align-items: center;
      }
      .justify-center {
        justify-content: center;
      }
      .gap-6 {
        gap: 1.5rem;
      }
      .overflow-hidden {
        overflow: hidden;
      }
      .rounded-md {
        border-radius: 0.375rem;
      }
      .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(249 249 249 / var(--tw-bg-opacity));
      }
      .bg-gradient-to-tr {
        background-image: linear-gradient(
          to top right,
          var(--tw-gradient-stops)
        );
      }
      .bg-gradient-to-bl {
        background-image: linear-gradient(
          to bottom left,
          var(--tw-gradient-stops)
        );
      }
      .from-blueDark {
        --tw-gradient-from: #0b119b;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(11 17 155 / 0));
      }
      .from-orange {
        --tw-gradient-from: #ffa626;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(255 166 38 / 0));
      }
      .to-blue {
        --tw-gradient-to: #3585df;
      }
      .to-yellow {
        --tw-gradient-to: #ffd45b;
      }
      .px-5_100 {
        padding-left: 5%;
        padding-right: 5%;
      }
      .py-6 {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
      .pb-1 {
        padding-bottom: 0.25rem;
      }
      .text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      .text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      .font-bold {
        font-weight: 700;
      }
      .font-medium {
        font-weight: 500;
      }
      .leading-5 {
        line-height: 1.25rem;
      }
      .text-darkGray {
        --tw-text-opacity: 1;
        color: rgb(153 153 153 / var(--tw-text-opacity));
      }
      .text-white {
        --tw-text-opacity: 1;
        color: rgb(249 249 249 / var(--tw-text-opacity));
      }
      .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
          0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
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
        .md\\:my-0 {
          margin-top: 0px;
          margin-bottom: 0px;
        }
        .md\\:mx-0 {
          margin-left: 0px;
          margin-right: 0px;
        }
        .md\\:block {
          display: block;
        }
        .md\\:flex {
          display: flex;
        }
        .md\\:grid {
          display: grid;
        }
        .md\\:hidden {
          display: none;
        }
        .md\\:max-w-xs {
          max-width: 20rem;
        }
        .md\\:flex-col {
          flex-direction: column;
        }
        .md\\:justify-center {
          justify-content: center;
        }
        .md\\:gap-12 {
          gap: 3rem;
        }
        .md\\:gap-6 {
          gap: 1.5rem;
        }
        .md\\:py-10 {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }
        .md\\:px-10_100 {
          padding-left: 10%;
          padding-right: 10%;
        }
        .md\\:transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .md\\:hover\\:scale-105:hover {
          --tw-scale-x: 1.05;
          --tw-scale-y: 1.05;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y))
            rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
            skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
            scaleY(var(--tw-scale-y));
        }
      }
      @media (min-width: 1024px) {
        .lg\\:py-12 {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
      }
    `,
    css`
      @media screen and (min-width: 768px) {
        .grid-auto-100 {
          grid-template-columns: auto 100%;
        }
      }
    `,
  ];

  firstUpdated() {
    const slider = this.shadowRoot.querySelector('#shopSlider');
    new Splide(slider, {
      type: 'slide',
      arrows: false,
      gap: 15,
      direction: 'ltr',
      focus: 'left',
      pagination: false,
    }).mount();
  }

  render() {
    return html`
      <section
        class="md:grid flex flex-col gap-6 md:gap-12 md:py-10 px-5_100 md:px-10_100 py-6 lg:py-12 bg-white overflow-hidden grid-auto-100"
      >
        <div class="md:max-w-xs md:flex md:flex-col md:gap-6 md:justify-center">
          <h2
            class="font-bold text-4xl bg-gradient-to-tr from-blueDark to-blue text-gradient"
          >
            Shop with<br />
            EkstraPoints
          </h2>
          <p
            class="text-darkGray text-lg hidden md:block font-medium leading-5"
          >
            Join our free spin competitions, spin and win real money + earn
            EkstraPoints - Come back every day to get new free spins!
          </p>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md my-6 md:my-0 mx-auto md:mx-0 pb-1  w-62 h-10 hidden md:flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
          >
            Go to EkstraPoints shop
          </a>
        </div>
        <div class="splide relative flex items-center" id="shopSlider">
          <div class="splide__track overflow-hidden relative z-0">
            <ul class="splide__list flex">
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-1.svg',
                    title: "Winner's Magic",
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-2.svg',
                    title: 'Millionpot',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-3.svg',
                    title: 'Lucky Thrillz',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-4.svg',
                    title: 'Jackie Jackpot',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-5.svg',
                    title: 'Trada Casino',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
              <li class="splide__slide">
                <shop-item
                  .item="${{
                    img: 'shop-6.svg',
                    title: 'Trada Casino',
                    cost: '30.000',
                    bonus: 5,
                  }}"
                ></shop-item>
              </li>
            </ul>
          </div>
        </div>
        <a
          href="#"
          class="md:hover:scale-105 md:transition-transform rounded-md shadow-md md:hidden my-6 mx-auto pb-1 w-62 h-10 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
        >
          Go to EkstraPoints shop
        </a>
      </section>
    `;
  }
}

window.customElements.define('point-shop', Shop);
