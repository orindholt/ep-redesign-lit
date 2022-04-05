import {LitElement, html, css} from 'lit';

export class WinDisplay extends LitElement {
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
      .absolute {
        position: absolute;
      }
      .relative {
        position: relative;
      }
      .mr-auto {
        margin-right: auto;
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
      .h-12 {
        height: 3rem;
      }
      .h-full {
        height: 100%;
      }
      .w-full {
        width: 100%;
      }
      .w-auto {
        width: auto;
      }
      .border-collapse {
        border-collapse: collapse;
      }
      .transform {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .resize {
        resize: both;
      }
      .items-center {
        align-items: center;
      }
      .justify-center {
        justify-content: center;
      }
      .gap-2_100 {
        gap: 2%;
      }
      .gap-2 {
        gap: 0.5rem;
      }
      .overflow-hidden {
        overflow: hidden;
      }
      .rounded-md {
        border-radius: 0.375rem;
      }
      .border {
        border-width: 1px;
      }
      .bg-black {
        --tw-bg-opacity: 1;
        background-color: rgb(26 36 51 / var(--tw-bg-opacity));
      }
      .p-2 {
        padding: 0.5rem;
      }
      .pr-5_100 {
        padding-right: 5%;
      }
      .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      .font-bold {
        font-weight: 700;
      }
      .text-white {
        --tw-text-opacity: 1;
        color: rgb(249 249 249 / var(--tw-text-opacity));
      }
      .text-orange {
        --tw-text-opacity: 1;
        color: rgb(255 166 38 / var(--tw-text-opacity));
      }
      .underline {
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;
      }
      .outline {
        outline-style: solid;
      }
      .transition-transform {
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      .duration-2000 {
        transition-duration: 2000ms;
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
        .md:\\text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
      }
      @media (min-width: 1024px) {
        .lg:\\text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .lg:\\text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
      }
      @media (min-width: 1280px) {
        .xl:\\text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
      }
    `,
  ];

  static properties = {
    wins: {type: Array},
    index: {type: Number},
    imgSrc: {type: String},
    username: {type: String},
    winAmount: {type: Number},
    timerSec: {type: Number},
  };

  constructor() {
    super();
    this.wins = [
      {
        imgSrc: 'user-icon.svg',
        username: 'Daniel44',
        winAmount: 1800,
      },
      {
        imgSrc: 'user-icon.svg',
        username: 'Mark1234',
        winAmount: 2000,
      },
      {
        imgSrc: 'user-icon.svg',
        username: 'Nick201',
        winAmount: 6200,
      },
      {
        imgSrc: 'user-icon.svg',
        username: 'Bot002',
        winAmount: 9400,
      },
    ];
    this.timerSec = 6;
    this.index = 0;
    this.username = this.wins[0].username;
    this.winAmount = this.wins[0].winAmount;
    this.imgSrc = this.wins[0].imgSrc;
  }
  firstUpdated() {
    const card = this.shadowRoot.querySelector('#card');
    setInterval(() => {
      if (this.index < this.wins.length - 1) {
        this.index++;
      } else this.index = 0;
      if (card.style.transform != 'rotateX(180deg)') {
        card.style.transform = 'rotateX(180deg)';
      } else {
        card.style.transform = 'rotateX(0)';
      }
      this.wins.forEach((win) => {
        if (this.wins.indexOf(win) === this.index) {
          setTimeout(() => {
            this.imgSrc = win.imgSrc;
            this.username = win.username;
            this.winAmount = win.winAmount;
          }, 500);
        }
      });
    }, `${this.timerSec}000`);
  }

  render() {
    return html`
      <article class="w-full h-12 rounded-md overflow-hidden">
        <div
          class="w-full h-full relative transition-transform duration-2000"
          style="transform-style: preserve-3d"
          id="card"
        >
          <div
            class="flex justify-center gap-2_100 items-center text-white p-2 pr-5_100 absolute w-full h-full bg-black"
            style="-webkit-backface-visibility: hidden; backface-visibility: hidden"
          >
            <img
              src="./images/${this.imgSrc}"
              alt="${this.username}"
              class="w-auto mr-auto"
            />
            <h3 class="font-bold text-base md:text-lg lg:text-xl">
              ${this.username}
            </h3>
            <p class="mr-auto flex gap-2 md:text-lg lg:text-xl">
              Just won
              <span class="text-orange font-bold">${this.winAmount} EP </span>
              <a href="#" class="underline lg:text-lg xl:text-xl">here!</a>
            </p>
          </div>
          <div
            class="absolute w-full h-full flex justify-center gap-2_100 items-center bg-black text-white p-2 pr-5_100"
            style="-webkit-backface-visibility: hidden; backface-visibility: hidden; transform: rotateX(180deg);"
          >
            <img
              src="./images/${this.imgSrc}"
              alt="${this.username}"
              class="w-auto mr-auto"
            />
            <h3 class="font-bold text-base md:text-lg lg:text-xl">
              ${this.username}
            </h3>
            <p class="mr-auto flex gap-2 md:text-lg lg:text-xl">
              Just won
              <span class="text-orange font-bold md:text-lg lg:text-xl"
                >${this.winAmount} EP
              </span>
              <a href="#" class="underline">here!</a>
            </p>
          </div>
        </div>
      </article>
    `;
  }
}

window.customElements.define('win-display', WinDisplay);
