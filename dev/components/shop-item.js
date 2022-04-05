import {LitElement, html, css} from 'lit';

export class ShopItem extends LitElement {
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
      .mb-2 {
        margin-bottom: 0.5rem;
      }
      .flex {
        display: flex;
      }
      .grid {
        display: grid;
      }
      .h-64 {
        height: 16rem;
      }
      .h-full {
        height: 100%;
      }
      .h-14 {
        height: 3.5rem;
      }
      .w-48 {
        width: 12rem;
      }
      .w-full {
        width: 100%;
      }
      .min-w-17 {
        min-width: 4.375rem;
      }
      .flex-1 {
        flex: 1 1 0%;
      }
      .flex-3 {
        flex: 3 3 0%;
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
      .gap-\[2\%\] {
        gap: 2%;
      }
      .gap-1 {
        gap: 0.25rem;
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
      .from-\[\#0060e9\] {
        --tw-gradient-from: #0060e9;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(0 96 233 / 0));
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
      .to-\[\#80bad0\] {
        --tw-gradient-to: #80bad0;
      }
      .to-yellow {
        --tw-gradient-to: #ffd45b;
      }
      .to-teal {
        --tw-gradient-to: #80bad0;
      }
      .object-cover {
        -o-object-fit: cover;
        object-fit: cover;
      }
      .py-2 {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
      }
      .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
      .pb-1 {
        padding-bottom: 0.25rem;
      }
      .text-center {
        text-align: center;
      }
      .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      .text-\[1rem\] {
        font-size: 1rem;
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
      .shadow-md {
        --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
          0 2px 4px -2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
          var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      }
      .text-shadow {
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
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
        .lg\\:flex-2 {
          flex: 2 2 0%;
        }
      }
    `,
  ];
  static properties = {
    item: {type: Object},
  };

  render() {
    return html`
      <div
        class="bg-gradient-to-tr from-blueBright to-teal rounded-xl flex flex-col overflow-hidden w-48 h-64"
      >
        <div class="grid">
          <img
            src="./images/shop/${this.item.img}"
            alt="${this.item.title}"
            class="w-full h-full flex-1 object-cover grid-area-self"
          />
          <p
            class="text-white text-base font-medium text-center self-end mb-2 grid-area-self text-shadow"
          >
            ${String(this.item.bonus)}€ Bonus Package for ${this.item.title}
          </p>
        </div>
        <div
          class="py-2 px-3 flex h-full w-full gap-1 justify-between items-center flex-3 lg:flex-2"
        >
          <div>
            <h3 class="text-white text-base font-bold">
              ${String(this.item.cost)} EP
            </h3>
          </div>
          <a
            href="#"
            class="md:hover:scale-105 md:transition-transform rounded-md shadow-md pb-1 min-w-17 h-14 flex justify-center items-center text-lg font-medium text-white bg-gradient-to-bl from-orange to-yellow"
          >
            Buy
          </a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('shop-item', ShopItem);
