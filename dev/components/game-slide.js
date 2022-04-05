import {LitElement, html, css} from 'lit';

export class GameSlide extends LitElement {
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
      .grid-area-self {
        grid-area: 1/1/1/1;
      }
      .static {
        position: static;
      }
      .my-auto {
        margin-top: auto;
        margin-bottom: auto;
      }
      .mr-4 {
        margin-right: 1rem;
      }
      .flex {
        display: flex;
      }
      .table {
        display: table;
      }
      .grid {
        display: grid;
      }
      .hidden {
        display: none;
      }
      .h-56 {
        height: 14rem;
      }
      .h-9 {
        height: 2.25rem;
      }
      .h-10 {
        height: 2.5rem;
      }
      .h-72 {
        height: 18rem;
      }
      .w-72 {
        width: 18rem;
      }
      .w-full {
        width: 100%;
      }
      .w-0_1 {
        width: 1px;
      }
      .min-w-25 {
        min-width: 6.25rem;
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
      .flex-col {
        flex-direction: column;
      }
      .items-center {
        align-items: center;
      }
      .justify-center {
        justify-content: center;
      }
      .gap-4 {
        gap: 1rem;
      }
      .self-end {
        align-self: flex-end;
      }
      .overflow-hidden {
        overflow: hidden;
      }
      .rounded-xl {
        border-radius: 0.75rem;
      }
      .rounded-md {
        border-radius: 0.375rem;
      }
      .border {
        border-width: 1px;
      }
      .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgb(249 249 249 / var(--tw-bg-opacity));
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
      .from-sunset {
        --tw-gradient-from: #ff5858;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(255 88 88 / 0));
      }
      .to-orange {
        --tw-gradient-to: #ffa626;
      }
      .to-purpleBright {
        --tw-gradient-to: #ff0080;
      }
      .object-cover {
        -o-object-fit: cover;
        object-fit: cover;
      }
      .p-3 {
        padding: 0.75rem;
      }
      .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
      .pb-1 {
        padding-bottom: 0.25rem;
      }
      .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
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
      .text-white {
        --tw-text-opacity: 1;
        color: rgb(249 249 249 / var(--tw-text-opacity));
      }
      .underline {
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;
      }
      .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
          0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      }
      .outline {
        outline-style: solid;
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
        .md\\:my-2 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .md\\:hidden {
          display: none;
        }
        .md\\:h-full {
          height: 100%;
        }
        .md\\:h-11 {
          height: 2.75rem;
        }
        .md\\:w-52 {
          width: 13rem;
        }
        .md\\:min-w-0 {
          min-width: 0px;
        }
        .md\\:flex-col {
          flex-direction: column;
        }
        .md\\:items-start {
          align-items: flex-start;
        }
        .md\\:justify-center {
          justify-content: center;
        }
        .md\\:gap-0 {
          gap: 0px;
        }
        .md\\:object-cover {
          -o-object-fit: cover;
          object-fit: cover;
        }
        .md\\:px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .md\\:text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
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
    `,
  ];
  static properties = {
    game: {type: Object},
  };

  render() {
    return html`
      <div
        class="
          bg-gradient-to-bl from-sunset to-purpleBright rounded-xl overflow-hidden text-white w-72 md:w-52 h-72 flex flex-col"
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
            <div class="h-9 w-0_1 bg-white md:hidden"></div>
            <p class="text-base md:text-xl">${String(this.game.cost)}.000 EP</p>
          </div>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md pb-1 min-w-25 md:min-w-0 md:px-4 h-10 md:h-11 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-tr from-yellow to-orange"
          >
            Play
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-slide', GameSlide);
