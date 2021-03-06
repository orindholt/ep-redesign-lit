import {LitElement, html, css} from 'lit';

export class GameBig extends LitElement {
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
      .grid-area-self {
        grid-area: 1/1/1/1;
      }
      .static {
        position: static;
      }
      .fixed {
        position: fixed;
      }
      .absolute {
        position: absolute;
      }
      .relative {
        position: relative;
      }
      .top-0 {
        top: 0px;
      }
      .left-0 {
        left: 0px;
      }
      .right-0 {
        right: 0px;
      }
      .bottom-0 {
        bottom: 0px;
      }
      .-top-5 {
        top: -1.25rem;
      }
      .z-30 {
        z-index: 30;
      }
      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }
      .my-2 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
      }
      .my-auto {
        margin-top: auto;
        margin-bottom: auto;
      }
      .mt-4 {
        margin-top: 1rem;
      }
      .mb-auto {
        margin-bottom: auto;
      }
      .mt-1 {
        margin-top: 0.25rem;
      }
      .mt-auto {
        margin-top: auto;
      }
      .block {
        display: block;
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
      .h-full {
        height: 100%;
      }
      .h-6 {
        height: 1.5rem;
      }
      .h-12 {
        height: 3rem;
      }
      .h-4 {
        height: 1rem;
      }
      .h-screen-35 {
        height: 35vh;
      }
      .h-10 {
        height: 2.5rem;
      }
      .max-h-80 {
        max-height: 20rem;
      }
      .min-h-4 {
        min-height: 1rem;
      }
      .w-full {
        width: 100%;
      }
      .w-6 {
        width: 1.5rem;
      }
      .w-4 {
        width: 1rem;
      }
      .w-3 {
        width: 0.75rem;
      }
      .w-24 {
        width: 6rem;
      }
      .min-w-4 {
        min-width: 1rem;
      }
      .border-collapse {
        border-collapse: collapse;
      }
      .-translate-x-3 {
        --tw-translate-x: -0.75rem;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      .transform {
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      @-webkit-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      .animate-fadeInAlt {
        -webkit-animation: fadeIn 0.5s ease-in-out forwards;
        animation: fadeIn 0.5s ease-in-out forwards;
      }
      @-webkit-keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .animate-rotate {
        -webkit-animation: rotate 1s linear infinite;
        animation: rotate 1s linear infinite;
      }
      .cursor-pointer {
        cursor: pointer;
      }
      .resize {
        resize: both;
      }
      .appearance-none {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      .flex-col {
        flex-direction: column;
      }
      .items-end {
        align-items: flex-end;
      }
      .items-center {
        align-items: center;
      }
      .justify-end {
        justify-content: flex-end;
      }
      .justify-center {
        justify-content: center;
      }
      .justify-between {
        justify-content: space-between;
      }
      .gap-2 {
        gap: 0.5rem;
      }
      .gap-1 {
        gap: 0.25rem;
      }
      .gap-3 {
        gap: 0.75rem;
      }
      .self-start {
        align-self: flex-start;
      }
      .overflow-hidden {
        overflow: hidden;
      }
      .overflow-y-scroll {
        overflow-y: scroll;
      }
      .rounded-xl {
        border-radius: 0.75rem;
      }
      .rounded-lg {
        border-radius: 0.5rem;
      }
      .rounded-md {
        border-radius: 0.375rem;
      }
      .border-2 {
        border-width: 2px;
      }
      .border {
        border-width: 1px;
      }
      .border-transparent {
        border-color: transparent;
      }
      .border-darkBlue {
        --tw-border-opacity: 1;
        border-color: rgb(84 101 131 / var(--tw-border-opacity));
      }
      .bg-lightBlue {
        --tw-bg-opacity: 1;
        background-color: rgb(234 239 247 / var(--tw-bg-opacity));
      }
      .bg-lightGray {
        --tw-bg-opacity: 1;
        background-color: rgb(241 245 250 / var(--tw-bg-opacity));
      }
      .bg-white-80 {
        background-color: #ffffff80;
      }
      .bg-black-20 {
        background-color: #00000020;
      }
      .bg-gradient-to-bl {
        background-image: linear-gradient(
          to bottom left,
          var(--tw-gradient-stops)
        );
      }
      .bg-gradient-to-tl {
        background-image: linear-gradient(
          to top left,
          var(--tw-gradient-stops)
        );
      }
      .bg-gradient-to-tr {
        background-image: linear-gradient(
          to top right,
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
      .from-yellow {
        --tw-gradient-from: #ffd45b;
        --tw-gradient-stops: var(--tw-gradient-from),
          var(--tw-gradient-to, rgb(255 212 91 / 0));
      }
      .to-yellow {
        --tw-gradient-to: #ffd45b;
      }
      .to-teal {
        --tw-gradient-to: #80bad0;
      }
      .to-orange {
        --tw-gradient-to: #ffa626;
      }
      .bg-auto {
        background-size: auto;
      }
      .bg-top {
        background-position: top;
      }
      .bg-no-repeat {
        background-repeat: no-repeat;
      }
      .object-cover {
        -o-object-fit: cover;
        object-fit: cover;
      }
      .p-4 {
        padding: 1rem;
      }
      .p-1 {
        padding: 0.25rem;
      }
      .p-3 {
        padding: 0.75rem;
      }
      .p-2 {
        padding: 0.5rem;
      }
      .py-6 {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
      .py-5 {
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
      }
      .px-7 {
        padding-left: 1.75rem;
        padding-right: 1.75rem;
      }
      .px-3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
      .px-5 {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }
      .px-4 {
        padding-left: 1rem;
        padding-right: 1rem;
      }
      .pt-5 {
        padding-top: 1.25rem;
      }
      .pr-5 {
        padding-right: 1.25rem;
      }
      .pb-1 {
        padding-bottom: 0.25rem;
      }
      .pb-2 {
        padding-bottom: 0.5rem;
      }
      .text-left {
        text-align: left;
      }
      .text-center {
        text-align: center;
      }
      .font-sofia {
        font-family: sofia-pro, sans-serif;
      }
      .text-xs {
        font-size: 0.75rem;
        line-height: 1rem;
      }
      .text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem;
      }
      .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }
      .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
      }
      .text-4xl {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
      .text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      .font-bold {
        font-weight: 700;
      }
      .font-semibold {
        font-weight: 600;
      }
      .font-medium {
        font-weight: 500;
      }
      .font-light {
        font-weight: 300;
      }
      .font-normal {
        font-weight: 400;
      }
      .leading-snug {
        line-height: 1.375;
      }
      .leading-4 {
        line-height: 1rem;
      }
      .tracking-widest {
        letter-spacing: 0.1em;
      }
      .tracking-wide {
        letter-spacing: 0.025em;
      }
      .text-black {
        --tw-text-opacity: 1;
        color: rgb(26 36 51 / var(--tw-text-opacity));
      }
      .text-darkGray {
        --tw-text-opacity: 1;
        color: rgb(153 153 153 / var(--tw-text-opacity));
      }
      .text-red {
        --tw-text-opacity: 1;
        color: rgb(248 40 88 / var(--tw-text-opacity));
      }
      .text-darkBlue {
        --tw-text-opacity: 1;
        color: rgb(84 101 131 / var(--tw-text-opacity));
      }
      .text-blue {
        --tw-text-opacity: 1;
        color: rgb(53 133 223 / var(--tw-text-opacity));
      }
      .text-white {
        --tw-text-opacity: 1;
        color: rgb(249 249 249 / var(--tw-text-opacity));
      }
      .underline {
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;
      }
      .opacity-0 {
        opacity: 0;
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
      .blur {
        --tw-blur: blur(8px);
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
      .filter {
        filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast)
          var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert)
          var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
      }
      .backdrop-blur-3xl {
        --tw-backdrop-blur: blur(64px);
        -webkit-backdrop-filter: var(--tw-backdrop-blur)
          var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
          var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
          var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
          var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
          var(--tw-backdrop-sepia);
      }
      .backdrop-filter {
        -webkit-backdrop-filter: var(--tw-backdrop-blur)
          var(--tw-backdrop-brightness) var(--tw-backdrop-contrast)
          var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
          var(--tw-backdrop-invert) var(--tw-backdrop-opacity)
          var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
        backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
          var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
          var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert)
          var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
          var(--tw-backdrop-sepia);
      }
      .transition-colors {
        transition-property: color, background-color, border-color, fill, stroke,
          -webkit-text-decoration-color;
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke;
        transition-property: color, background-color, border-color,
          text-decoration-color, fill, stroke, -webkit-text-decoration-color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      .transition-transform {
        transition-property: transform;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }
      .ease-in-out {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
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
        .md\\:relative {
          position: relative;
        }
        .md\\:top-5 {
          top: 1.25rem;
        }
        .md\\:left-6 {
          left: 1.5rem;
        }
        .md\\:block {
          display: block;
        }
        .md\\:flex {
          display: flex;
        }
        .md\\:hidden {
          display: none;
        }
        .md\\:h-3 {
          height: 0.75rem;
        }
        .md\\:w-1_2 {
          width: 50%;
        }
        .md\\:w-3 {
          width: 0.75rem;
        }
        .md\\:w-48 {
          width: 12rem;
        }
        .md\\:flex-row-reverse {
          flex-direction: row-reverse;
        }
        .md\\:flex-col {
          flex-direction: column;
        }
        .md\\:justify-start {
          justify-content: flex-start;
        }
        .md\\:bg-transparent {
          background-color: transparent;
        }
        .md\\:pb-2 {
          padding-bottom: 0.5rem;
        }
        .md\\:text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }
        .md\\:text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }
        .md\\:leading-5 {
          line-height: 1.25rem;
        }
        .md\\:transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }
        .md\\:text-shadow-none {
          text-shadow: none;
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
        .lg\\:mt-auto {
          margin-top: auto;
        }
        .lg\\:text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .lg\\:text-4xl {
          font-size: 2.25rem;
          line-height: 2.5rem;
        }
        .lg\\:leading-6 {
          line-height: 1.5rem;
        }
      }
      @media (min-width: 1280px) {
        .xl\\:text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        .xl\\:text-5xl {
          font-size: 3rem;
          line-height: 1;
        }
      }
    `,
  ];

  static properties = {
    monthNames: {type: Array},
  };

  constructor() {
    super();
    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  }
  render() {
    return html`
      <div
        class="p-2 rounded-xl grid shadow-md md:flex md:flex-row-reverse md:relative bg-gradient-to-tl from-blueBright to-teal"
      >
        <div class="w-full shadow-md rounded-md grid-area-self overflow-hidden">
          <img
            src="./images/game-desktop.svg"
            alt="Game Featured"
            class="h-full w-full object-cover max-h-80"
          />
        </div>

        <div
          class="text-white flex flex-col justify-end px-4 py-5 md:w-1_2 md:bg-transparent my-auto bg-black-20 grid-area-self h-full"
        >
          <div
            class="flex mb-auto justify-end items-center gap-1 md:justify-start md:top-5 md:left-6 md:text-lg xl:text-xl md:pb-2"
          >
            <svg
              class="mt-1 md:w-3 md:h-3"
              xmlns="http://www.w3.org/2000/svg"
              width="8.217"
              height="9.136"
              viewBox="0 0 8.217 9.136"
            >
              <path
                id="Union_5"
                data-name="Union 5"
                d="M.416,8.136A.363.363,0,0,1,.1,8.01.414.414,0,0,1,.008,7.8,4.084,4.084,0,0,1,.276,5.984,3.642,3.642,0,0,1,2.205,4c.019-.008.037-.019.067-.032A2.261,2.261,0,0,1,2.041.691,2.143,2.143,0,0,1,3.614,0h0a2.12,2.12,0,0,1,1.5.624,2.261,2.261,0,0,1-.157,3.338.321.321,0,0,0,.059.032A3.623,3.623,0,0,1,7.174,6.823a6.157,6.157,0,0,1,.042.975.344.344,0,0,1-.31.332.549.549,0,0,1-.094.005Z"
                transform="translate(0.5 0.5)"
                fill="#12ee9a"
                stroke="rgba(0,0,0,0)"
                stroke-miterlimit="10"
                stroke-width="1"
              />
            </svg>

            <p>374</p>
            <p class="live-dot relative font-light">Live</p>
          </div>
          <div class="flex justify-between items-end pb-2">
            <p
              class="text-base md:text-lg lg:text-xl md:leading-5 lg:leading-6 font-medium leading-4 md:text-shadow-none text-shadow"
            >
              ${this.monthNames[new Date().getMonth()]}'s biggest<br />tournament
            </p>
            <p
              class="text-lg tracking-widest md:hidden md:text-shadow-none text-shadow"
            >
              01:29:51
            </p>
          </div>
          <div class="flex justify-between md:flex-col gap-2">
            <h2
              class="text-4xl md:text-3xl lg:text-4xl font-bold xl:text-5xl md:text-shadow-none text-shadow"
            >
              Win ???5.000
            </h2>
            <p
              class="text-xl tracking-wide font-normal hidden md:block md:text-shadow-none text-shadow"
            >
              3 days 01:29:51
            </p>
            <a
              href="#"
              class="rounded-md shadow-md mt-auto pb-1 w-24 md:w-48 h-10 flex justify-center items-center text-lg font-medium text-white md:hover:scale-105 md:transition-transform bg-gradient-to-tr from-yellow to-orange lg:mt-auto"
            >
              <span class="md:hidden">Join</span>
              <span class="md:block hidden">Join the tournament</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('game-big', GameBig);
