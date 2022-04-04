import {LitElement, html, css} from 'lit';

export class Template extends LitElement {
  static properties = {};
  constructor() {
    super();
  }
  render() {
    return html` <link rel="stylesheet" href="/dev/output.css" />`;
  }
}

window.customElements.define('template', Template);
