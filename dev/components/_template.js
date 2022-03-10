import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {css} from 'twind/css';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

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
