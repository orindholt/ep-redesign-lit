import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class Template extends LitElement {
  static styles = [sheet.target];
  static properties = {};
  constructor() {
    super();
  }
  render() {
    return html``;
  }
}

window.customElements.define('template', Template);
