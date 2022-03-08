import {LitElement, html} from 'lit';
import {create, cssomSheet, setup} from 'twind';

setup({
  theme: {
    extend: {
      colors: {
        purple: '#fae4fe',
      },
    },
  },
});

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

export class MyApp extends LitElement {
  static styles = [sheet.target];

  static get properties() {
    return {
      name: {type: String},
    };
  }

  constructor() {
    super();
    this.name = 'World';
  }

  render() {
    return html` <h1 class="${tw`text(3xl purple)`}">${this.name}!</h1> `;
  }
}

window.customElements.define('my-app', MyApp);
