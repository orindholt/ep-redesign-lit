import {LitElement, html} from 'lit';
import {create, cssomSheet, setup, warn} from 'twind';
import {NavBar} from './dev/components/nav-bar';
import {Footer} from './dev/components/footer';
import {Rewards} from './dev/components/rewards';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({sheet});

export class MyApp extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <div class="${tw`font-['sofia-pro'] pt-16`}">
        <nav-bar></nav-bar>
        <section class="${tw`px-8`}">
          <app-rewards></app-rewards>
        </section>
        <app-footer></app-footer>
      </div>
    `;
  }
}

window.customElements.define('my-app', MyApp);
