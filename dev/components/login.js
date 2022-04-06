import {LitElement, html, css} from 'lit';

const resetErrorStyle = (target, error) => {
  if (target.name && target.name != 'tos')
    if (target.style.color) target.style.color = '';
  if (target.style.borderColor) target.style.borderColor = '';
  if (target.style.display == 'block') target.style.display = '';
  if (!target.style) target.removeAtrribute('style');
  if (error.style.display == 'block') error.style.display = '';
  if (!error.style) target.removeAtrribute('style');
};

const setErrorStyle = (input, errorIcon, errorText, i) => {
  if (input.name != 'tos') {
    input.style.color = '#f82858';
    input.style.borderColor = '#f82858';
    input.oninput = (e) => {
      if (e.target.style.color) e.target.style.color = '';
      if (e.target.style.borderColor) e.target.style.borderColor = '';
      if (!e.target.style) e.target.removeAtrribute('style');
    };
  } else {
    input.style.borderColor = '#f82858';
    input.onchange = (e) => {
      if (e.target.style.borderColor) e.target.style.borderColor = '';
      if (!e.target.style) e.target.removeAtrribute('style');
      if (errorIcon.style.display == 'block') errorIcon.style.display = '';
    };
    if (errorIcon.style.display != 'block') errorIcon.style.display = 'block';
  }
  if (errorText.style.display != 'block') errorText.style.display = 'block';
  if (!i) {
    errorText.textContent =
      input.name == 'tos'
        ? '* Please agree to the terms of service'
        : input.name == 'password' && input.value.length < 8
        ? '* Password needs to include atleast 8 characters.'
        : input.name == 'password' && !/\d/.test(input.value)
        ? '* Password needs to include atleast one number'
        : `* Please enter a vaild ${input.name}`;
  }
};

const validation = (inputElements, errorIcon, errorText, test = false) => {
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let i = 0;
  let error = false;
  if (inputElements) {
    inputElements.forEach((input) => {
      if (
        !input.value ||
        (input.name == 'email' && !emailRegEx.test(input.value)) ||
        (input.name == 'password' && !passRegEx.test(input.value)) ||
        (input.name == 'tos' && !input.checked)
      ) {
        if (!test) setErrorStyle(input, errorIcon, errorText, i);
        i++;
        error = true;
      }
    });
  }
  console.log(error);
  return error;
};

export class Login extends LitElement {
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
      .my-3 {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
      }
      .mt-4 {
        margin-top: 1rem;
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
      .hidden {
        display: none;
      }
      .h-screen {
        height: 100vh;
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
      .h-1_2 {
        height: 50%;
      }
      .h-4_5 {
        height: 80%;
      }
      .max-h-login {
        max-height: 43.125rem;
      }
      .min-h-4 {
        min-height: 1rem;
      }
      .w-screen {
        width: 100vw;
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
      .min-w-4 {
        min-width: 1rem;
      }
      .max-w-md {
        max-width: 28rem;
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
      .items-center {
        align-items: center;
      }
      .justify-center {
        justify-content: center;
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
      .bg-black-40 {
        background-color: #00000040;
      }
      .bg-white-80 {
        background-color: #ffffff80;
      }
      .bg-lightBlue {
        --tw-bg-opacity: 1;
        background-color: rgb(234 239 247 / var(--tw-bg-opacity));
      }
      .bg-lightGray {
        --tw-bg-opacity: 1;
        background-color: rgb(241 245 250 / var(--tw-bg-opacity));
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
      .to-yellow {
        --tw-gradient-to: #ffd45b;
      }
      .p-4 {
        padding: 1rem;
      }
      .p-3 {
        padding: 0.75rem;
      }
      .p-1 {
        padding: 0.25rem;
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
      .text-left {
        text-align: left;
      }
      .text-center {
        text-align: center;
      }
      .font-sofia {
        font-family: sofia-pro, sans-serif;
      }
      .text-5xl {
        font-size: 3rem;
        line-height: 1;
      }
      .text-medium {
        font-size: 17px;
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
      .font-bold {
        font-weight: 700;
      }
      .font-semibold {
        font-weight: 600;
      }
      .font-medium {
        font-weight: 500;
      }
      .leading-snug {
        line-height: 1.375;
      }
      .leading-4 {
        line-height: 1rem;
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
      .placeholder\\:text-inherit::-moz-placeholder {
        color: inherit;
      }
      .placeholder\\:text-inherit:-ms-input-placeholder {
        color: inherit;
      }
      .placeholder\\:text-inherit::placeholder {
        color: inherit;
      }
      .before\\:absolute::before {
        content: var(--tw-content);
        position: absolute;
      }
      .before\\:h-full::before {
        content: var(--tw-content);
        height: 100%;
      }
      .before\\:w-full::before {
        content: var(--tw-content);
        width: 100%;
      }
      .before\\:overflow-hidden::before {
        content: var(--tw-content);
        overflow: hidden;
      }
      .before\\:rounded::before {
        content: var(--tw-content);
        border-radius: 0.25rem;
      }
      .before\\:border-2::before {
        content: var(--tw-content);
        border-width: 2px;
      }
      .before\\:border-inherit::before {
        content: var(--tw-content);
        border-color: inherit;
      }
      .active\\:scale-100:active {
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
          skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
          scaleY(var(--tw-scale-y));
      }
      @media (min-width: 640px) {
        .sm\\:gap-3 {
          gap: 0.75rem;
        }
        .sm\\:overflow-auto {
          overflow: auto;
        }
      }
      @media (min-width: 768px) {
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
    css`
      .tos-checkbox:checked {
        border-color: #ffa626 !important;
      }
      .tos-checkbox:checked::before {
        width: 100%;
        height: 100%;
        position: absolute;
        display: grid;
        place-content: center;
        padding-bottom: 4px;
        background-color: #ffa626;
        border-color: #ffa626;
        content: url('./images/check.svg');
      }
      .lighten-backdrop::before {
        background: #ffffff80;
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
      }
      @-moz-document url-prefix() {
        .lighten-backdrop {
          background: #eaeff7;
        }
        .lighten-backdrop::before {
          display: none;
        }
      }
    `,
  ];

  static properties = {
    showLogin: {type: Boolean},
    magicLink: {type: Boolean},
    log: {type: Boolean},
    passReq: {type: Boolean},
    attemptSubmit: {type: Boolean},
    loading: {type: Boolean},
    done: {type: Boolean},
    _toggleLogin: {type: Function},
  };

  constructor() {
    super();
    this.log = true;
    this.passReq = false;
    this.loading = false;
    this.done = false;
    this.magicLink = true;
    this.showLogin = false;
  }

  toggleLogin() {
    if (this.showLogin) {
      this.showLogin = false;
      this.toggleScroll(false);
    } else {
      this.showLogin = true;
      this.toggleScroll(true);
    }
  }

  _handleSubmit = (e) => {
    const errorText = this.shadowRoot.querySelector('#error');
    const errorIcon = this.shadowRoot.querySelector('#error-icon');
    const inputFields = this.shadowRoot.querySelectorAll('input');
    const submitElement = e.submitter;
    if (!this.done) e.preventDefault();
    const validate = () => validation(inputFields, errorIcon, errorText);
    this.attemptSubmit = true;
    if (!submitElement.classList.contains('social-btn')) {
      validate();
    } else if (
      !validation(
        this.shadowRoot.querySelectorAll('#tos'),
        errorIcon,
        errorText
      )
    ) {
      this.loading = true;
      console.log(this.loading);
      setTimeout(() => {
        this.done = true;
        this.shadowRoot.querySelector('#login-form').submit();
      }, 2000);
    }
  };

  toggleLogin() {
    if (this.showLogin) {
      this.showLogin = false;
      this.toggleScroll(false);
    } else {
      this.showLogin = true;
      this.toggleScroll(true);
    }
  }
  toggleScroll(bool) {
    const body = document.querySelector('body');
    if (
      bool != undefined &&
      typeof bool == 'boolean' &&
      window.screen.width < 640
    ) {
      if (!bool && !this.menu && !this.showLogin) {
        body.style.overflow = '';
        if (!body.style.length) body.removeAttribute('style');
      } else if (bool) {
        body.style.overflow = 'hidden';
      }
    } else if (
      bool != undefined &&
      typeof bool == 'boolean' &&
      window.screen.width >= 640 &&
      body.style.overflow == 'hidden'
    ) {
      body.style.overflow = '';
      if (!body.style.length) body.removeAttribute('style');
    }
  }

  render() {
    return html`
      <slot @click=${this.toggleLogin}></slot>
      <div ?hidden="${!this.showLogin}">
        <div
          class="w-screen h-screen bg-black-40 fixed top-0 left-0 right-0 bottom-0 z-30 flex justify-center items-center p-4 py-6"
        >
          <div
            class="overflow-y-scroll sm:overflow-auto py-5 max-w-md max-h-login w-full h-full rounded-xl text-black pt-5 px-7 font-sofia animate-fadeInAlt lighten-backdrop backdrop-filter backdrop-blur-3xl"
          >
            <div
              class="flex flex-col text-center h-full gap-2 sm:gap-3 relative"
            >
              <button @click=${this.toggleLogin}>
                <img
                  class="absolute w-4 h-4 right-0 top-0"
                  src="./images/burger-exit.svg"
                  alt="Exit Button"
                />
              </button>
              <section>
                <h2 class="text-5xl text-left font-bold leading-snug">
                  ${this.log ? 'Sign in' : 'Sign up'}
                </h2>
                <p class="font-semibold text-left text-medium">
                  ${!this.log
                    ? 'Earn 1000 ekstrapoints by signing up'
                    : 'Sign in for your daily bonus!'}
                </p>
              </section>
              <form
                @submit="${(e) => this._handleSubmit(e)}"
                id="login-form"
                method="POST"
                action="/"
                class="flex flex-col h-full gap-1 items-center"
              >
                <div class="flex flex-col gap-2 mt-4 w-full">
                  <button
                    type="submit"
                    class="social-btn w-full flex rounded-lg p-3 justify-center items-center bg-white-80"
                  >
                    <div
                      class="w-6 h-6 bg-lightBlue p-1 rounded-md flex justify-center items-center"
                    >
                      <img
                        src="./images/social-icons/facebook.svg"
                        class="h-full"
                      />
                    </div>
                    <p class="mx-auto pr-5 pb-1">Continue with Facebook</p>
                  </button>
                  <button
                    type="submit"
                    class="social-btn w-full flex rounded-lg p-3 justify-center items-center bg-white-80"
                  >
                    <div
                      class="w-6 h-6 bg-lightBlue p-1 rounded-md flex justify-center items-center"
                    >
                      <img
                        src="./images/social-icons/google.svg"
                        class="h-full"
                      />
                    </div>
                    <p class="mx-auto pr-5 pb-1">Continue with Google</p>
                  </button>
                  <button
                    type="submit"
                    class="social-btn w-full flex rounded-lg p-3 justify-center items-center bg-white-80"
                  >
                    <div
                      class="w-6 h-6 bg-lightBlue p-1 rounded-md flex justify-center items-center"
                    >
                      <img
                        src="./images/social-icons/apple.svg"
                        class="h-full"
                      />
                    </div>
                    <p class="mx-auto pr-5 pb-1">Continue with Apple</p>
                  </button>
                </div>
                <p class="text-black my-3 font-medium">Or</p>
                <div class="flex flex-col items-center gap-2 relative w-full">
                  <p
                    id="error"
                    class="text-red text-xs absolute -top-5 hidden animate-fadeInAlt opacity-0 self-start"
                  ></p>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email..."
                    class="pb-1 px-3 h-12 w-full rounded-lg bg-lightGray border-2 border-transparent transition-colors placeholder:text-inherit"
                  />
                  ${!this.passReq && !this.magicLink
                    ? html`
                        <input
                          type="password"
                          placeholder="Password..."
                          id="password"
                          name="password"
                          class="pb-1 px-3 h-12 w-full rounded-lg bg-lightGray border-2 border-transparent transition-colors placeholder:text-inherit"
                        />
                      `
                    : ``}
                  ${!this.log
                    ? html`
                        <div
                          class="flex gap-3 items-center justify-center w-full px-5"
                        >
                          <div class="relative w-4 h-4">
                            <input
                              class="tos-checkbox cursor-pointer appearance-none min-w-4 min-h-4 border-darkBlue before:rounded relative before:border-2 before:absolute before:w-full before:h-full before:overflow-hidden before:border-inherit"
                              type="checkbox"
                              name="tos"
                              id="tos"
                            />
                            <img
                              id="error-icon"
                              class="absolute -top-5 w-3 hidden animate-fadeInAlt opacity-0"
                              style="left: calc(50%-(12px/2))"
                              src="./images/error.svg"
                              alt="Error"
                            />
                          </div>
                          <label
                            for="tos"
                            class="text-xs text-darkBlue text-left"
                          >
                            By selecting to login via Social I agree to the<br />
                            <a href="#" class="text-blue font-bold"
                              >Terms & Conditions and Privacy Policy</a
                            >
                          </label>
                        </div>
                      `
                    : ``}
                </div>
                <button
                  type="submit"
                  id="submit-button"
                  class="mt-4 rounded-md cursor-pointer shadow-md px-4 pb-1 h-12 w-full flex justify-center items-center text-lg font-medium text-white md:hover:scale-105 transition-transform active:scale-100 bg-gradient-to-bl from-orange to-yellow"
                >
                  ${this.magicLink && !this.passReq && !this.loading
                    ? html`<img
                        class="-translate-x-3 h-1_2"
                        src="./images/wand.svg"
                      />`
                    : ``}
                  ${!this.loading
                    ? `${
                        this.log && !this.passReq && !this.magicLink
                          ? 'Sign in'
                          : this.log && this.passReq
                          ? 'Send Recovery Mail'
                          : this.magicLink
                          ? 'Send link to email'
                          : 'Continue'
                      }`
                    : html`<svg
                        class="animate-rotate h-4_5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 500"
                        fill="#fff"
                        xml:space="preserve"
                      >
                        <path
                          d="M428.41 311.99c-26.1 68.57-74.77 111.6-147.25 123.88-68.41 11.59-126.51-10.57-173.51-61.6-2.7-2.93-5.12-6.13-7.56-9.27-2.37-3.04-4.6-6.18-7.27-9.79-1.82 6.82-3.41 13.18-5.22 19.47-1.62 5.65-5.54 9.15-11.21 10.38-5.54 1.2-10.45-.43-14.19-4.7-1.59-1.81-2.58-4.14-3.85-6.23v-6.74c3.24-12.13 6.5-24.26 9.72-36.39 1.54-5.78 2.96-11.58 4.53-17.35 2.37-8.69 9.96-13.33 18.67-11.13 18.23 4.61 36.43 9.34 54.6 14.15 8.52 2.26 13.21 10.22 11.12 18.41-2.01 7.92-9.84 12.47-18.35 10.6-3.04-.66-6.04-1.52-9.05-2.29-3-.77-5.99-1.55-9.99-2.58 1.18 1.77 1.82 2.85 2.57 3.84 25.2 33.24 58.29 54.19 99.28 61.51 78.19 13.95 151.28-28.66 178.53-103.32 2.79-7.62 8.38-11.86 15.22-11.5 6.92.35 12.76 5.02 13.96 11.9.48 2.8.26 6.1-.75 8.75zm12.83-179.69c-4.57 18.24-9.25 36.46-14.14 54.61-2.17 8.05-9.94 12.41-18.18 10.35-18.37-4.6-36.69-9.37-54.98-14.24-8.32-2.22-12.95-10.24-10.91-18.22 2.02-7.96 9.81-12.63 18.26-10.74 5.34 1.2 10.62 2.71 15.93 4.05.79.2 1.62.27 3.03.49-7.53-10.9-15.91-20.24-25.53-28.43-33.89-28.89-73.28-42.99-117.51-38.6-66.45 6.6-112.25 42.01-136.86 104.31-3.4 8.62-8.66 13.03-16.01 12.46-10.16-.78-16.4-10.42-12.99-20.32 5.17-15.04 12.08-29.26 20.99-42.43 31.23-46.16 74.36-74.91 129.46-82.35 75.7-10.21 136.88 16.69 182.8 77.9.6.79 1.16 1.62 1.77 2.41.13.17.39.25.89.56 1.71-6.46 3.23-12.86 5.13-19.15 2.54-8.39 11.27-12.67 19.36-9.74 6.93 2.51 11.28 9.91 9.49 17.08z"
                        />
                      </svg>`}
                </button>
                ${!this.passReq
                  ? html`
                      <button
                        class="flex gap-1 items-center text-sm"
                        @click=${() => {
                          this.magicLink = !this.magicLink;
                          console.log(this.magicLink);
                        }}
                        type="button"
                      >
                        ${!this.magicLink
                          ? html`<img src="./images/wand-black.svg" />`
                          : ``}
                        ${!this.magicLink && this.log
                          ? html`Sign in
                              <span class="font-semibold underline"
                                >without a password</span
                              >`
                          : !this.magicLink && !this.log
                          ? html`Sign up
                              <span class="font-semibold underline"
                                >without a password</span
                              >`
                          : this.magicLink && this.log
                          ? html`Sign in
                              <span class="font-semibold underline"
                                >with your password</span
                              >`
                          : html`Sign up
                              <span class="font-semibold underline"
                                >with your password</span
                              >`}
                      </button>
                    `
                  : ``}
              </form>
              <div class="leading-4 flex gap-1 mx-auto">
                <p class="text-base">
                  ${!this.log ? 'Already member?' : 'Not a member?'}
                </p>
                <button
                  type="button"
                  class="text-base font-bold underline"
                  @click=${() => {
                    if (this.passReq) this.passReq = false;
                    if (this.magicLink) this.magicLink = true;
                    this.log = !this.log;
                    const inputFields =
                      this.shadowRoot.querySelectorAll('input');
                    const errorText = this.shadowRoot.querySelector('#error');
                    inputFields.forEach((elm) =>
                      resetErrorStyle(elm, errorText)
                    );
                  }}
                >
                  ${!this.log ? 'Sign in here' : 'Sign up here'}
                </button>
              </div>
              ${this.log
                ? html`<button
                    class="text-lg font-semibold"
                    @click=${() => {
                      this.passReq = !this.passReq;
                      const inputFields =
                        this.shadowRoot.querySelectorAll('input');
                      const errorText = this.shadowRoot.querySelector('#error');
                      inputFields.forEach((elm) =>
                        resetErrorStyle(elm, errorText)
                      );
                    }}
                  >
                    ${!this.passReq
                      ? 'Forgot your password?'
                      : 'Remember your password?'}
                  </button>`
                : ``}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define('log-in', Login);
