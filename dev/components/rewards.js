import {LitElement, html, css} from 'lit';

export class Rewards extends LitElement {
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
      .live-dot::after {
        position: absolute;
        top: 0.25rem;
        right: -0.25rem;
        display: flex;
        height: 0.25rem;
        width: 0.25rem;
        align-items: center;
        justify-content: center;
        border-radius: 9999px;
        --tw-bg-opacity: 1;
        background-color: rgb(248 40 88 / var(--tw-bg-opacity));
        --tw-content: '';
        content: var(--tw-content);
      }
      @media (min-width: 768px) {
        .live-dot::after {
          top: 0px;
        }
        .live-dot::after {
          right: -0.5rem;
        }
        .live-dot::after {
          height: 0.5rem;
        }
        .live-dot::after {
          width: 0.5rem;
        }
      }
      .relative {
        position: relative;
      }
      .mb-1 {
        margin-bottom: 0.25rem;
      }
      .flex {
        display: flex;
      }
      .h-12 {
        height: 3rem;
      }
      .w-20 {
        width: 5rem;
      }
      .min-w-20 {
        min-width: 5rem;
      }
      .transform {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .items-center {
        align-items: center;
      }
      .justify-between {
        justify-content: space-between;
      }
      .gap-1 {
        gap: 0.25rem;
      }
      .rounded-md {
        border-radius: 0.375rem;
      }
      .bg-black {
        --tw-bg-opacity: 1;
        background-color: rgb(26 36 51 / var(--tw-bg-opacity));
      }
      .bg-lightBlue {
        --tw-bg-opacity: 1;
        background-color: rgb(234 239 247 / var(--tw-bg-opacity));
      }
      .bg-gradient-to-l {
        background-image: linear-gradient(to left, var(--tw-gradient-stops));
      }
      .from-\[\#a8ebe9\] {
        --tw-gradient-from: #a8ebe9;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(168 235 233 / 0));
      }
      .from-cyan {
        --tw-gradient-from: #a8ebe9;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(168 235 233 / 0));
      }
      .to-\[\#fae4fe\] {
        --tw-gradient-to: #fae4fe;
      }
      .to-purple {
        --tw-gradient-to: #fae4fe;
      }
      .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
      .px-1 {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
      }
      .text-center {
        text-align: center;
      }
      .text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .font-bold {
        font-weight: 700;
      }
      .font-medium {
        font-weight: 500;
      }
      .font-light {
        font-weight: 300;
      }
      .text-white {
        --tw-text-opacity: 1;
        color: rgb(249 249 249 / var(--tw-text-opacity));
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
        .md\\:hidden {
          display: none;
        }
        .md\\:text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }
        .md\\:text-base {
          font-size: 1rem;
          line-height: 1.5rem;
        }
      }
      @media (min-width: 1024px) {
        .lg\\:text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        .lg\\:text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
      }
      @media (min-width: 1280px) {
        .xl\\:text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
      }
    `,
  ];
  render() {
    return html`
      <section
        class="flex justify-between items-center rounded-md h-12 bg-black px-3 gap-1"
      >
        <h2
          class="bg-gradient-to-l from-cyan to-purple text-gradient font-bold text-xl mb-1 md:text-2xl lg:text-3xl xl:text-4xl"
        >
          $52.526
        </h2>
        <p
          class="font-medium text-white text-sm md:text-base lg:text-xl text-center"
        >
          In rewards the last 30 days!
        </p>
        <div
          class="flex items-center rounded-md gap-1 px-1 min-w-20 w-20 bg-lightBlue md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8.251"
            height="9.174"
            viewBox="0 0 8.251 9.174"
          >
            <path
              id="Union_1"
              data-name="Union 1"
              d="M.418,8.174A.365.365,0,0,1,.1,8.048a.416.416,0,0,1-.089-.21A4.1,4.1,0,0,1,.278,6.013a3.659,3.659,0,0,1,1.938-2c.019-.008.037-.019.067-.032A2.272,2.272,0,0,1,2.051.694,2.154,2.154,0,0,1,3.631,0h0a2.13,2.13,0,0,1,1.51.627,2.272,2.272,0,0,1-.158,3.354.322.322,0,0,0,.059.032A3.64,3.64,0,0,1,7.208,6.855a6.186,6.186,0,0,1,.043.98.346.346,0,0,1-.312.334.552.552,0,0,1-.094.005Z"
              transform="translate(0.5 0.5)"
              fill="#1a2433"
              stroke="rgba(0,0,0,0)"
              stroke-miterlimit="10"
              stroke-width="1"
            />
          </svg>
          <p class="font-medium text-sm mb-1">1361</p>
          <p class="font-light text-sm mb-1 live-dot relative">Live</p>
        </div>
      </section>
    `;
  }
}

window.customElements.define('app-rewards', Rewards);
