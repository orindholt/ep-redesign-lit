import {LitElement, html, css} from 'lit';

export class SignupBonus extends LitElement {
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
      .mb-3 {
        margin-bottom: 0.75rem;
      }
      .mt-auto {
        margin-top: auto;
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
      .h-10 {
        height: 2.5rem;
      }
      .w-24 {
        width: 6rem;
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
      .justify-between {
        justify-content: space-between;
      }
      .gap-1 {
        gap: 0.25rem;
      }
      .rounded-lg {
        border-radius: 0.5rem;
      }
      .rounded-md {
        border-radius: 0.375rem;
      }
      .border {
        border-width: 1px;
      }
      .bg-gradient-to-r {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
      }
      .bg-gradient-to-bl {
        background-image: linear-gradient(
          to bottom left,
          var(--tw-gradient-stops)
        );
      }
      .from-orange {
        --tw-gradient-from: #ffa626;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(255 166 38 / 0));
      }
      .from-blueBright {
        --tw-gradient-from: #0060e9;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(0 96 233 / 0));
      }
      .to-teal {
        --tw-gradient-to: #80bad0;
      }
      .to-yellow {
        --tw-gradient-to: #ffd45b;
      }
      .px-5 {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }
      .py-4 {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .pb-1 {
        padding-bottom: 0.25rem;
      }
      .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      .text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      .text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      .font-medium {
        font-weight: 500;
      }
      .font-bold {
        font-weight: 700;
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
        .md\\:block {
          display: block;
        }
        .md\\:hidden {
          display: none;
        }
        .md\\:h-full {
          height: 100%;
        }
        .md\\:justify-center {
          justify-content: center;
        }
        .md\\:text-lg {
          font-size: 1.125rem;
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
      @media (min-width: 1024px) {
        .lg\\:h-11 {
          height: 2.75rem;
        }
        .lg\\:w-32 {
          width: 8rem;
        }
        .lg\\:from-purple {
          --tw-gradient-from: #fae4fe;
          --tw-gradient-stops: var(--tw-gradient-from),
            var(--tw-gradient-to, rgb(250 228 254 / 0));
        }
        .lg\\:to-cyan {
          --tw-gradient-to: #a8ebe9;
        }
        .lg\\:text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .lg\\:text-black {
          --tw-text-opacity: 1;
          color: rgb(26 36 51 / var(--tw-text-opacity));
        }
      }
      @media (min-width: 1280px) {
        .xl\\:h-12 {
          height: 3rem;
        }
        .xl\\:w-36 {
          width: 9rem;
        }
        .xl\\:text-5xl {
          font-size: 3rem;
          line-height: 1;
        }
        .xl\\:text-2xl {
          font-size: 1.5rem;
          line-height: 2rem;
        }
      }
    `,
  ];
  render() {
    return html`
      <div
        class="lg:text-black bg-gradient-to-r from-blueBright to-teal lg:from-purple lg:to-cyan shadow-md px-5 py-4 text-white rounded-lg gap-1 flex flex-col mb-3 md:h-full md:justify-center"
      >
        <p class="font-medium text-base md:text-lg">
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
