import {LitElement, html} from 'lit';
import {create, cssomSheet} from 'twind';
import {theme} from '../twind.config';
import {css} from 'twind/css';
import {PointBonus} from '../components/point-bonus';

const sheet = cssomSheet({target: new CSSStyleSheet()});
const {tw} = create({
  sheet,
  theme: theme,
});

export class PointOffers extends LitElement {
  static styles = [sheet.target];

  render() {
    return html`
      <div class="${tw`flex gap-2 text-white my-4 justify-between`}">
        <point-bonus
          .icon=${'slot-machine.svg'}
          .caption=${'Premium Casinos'}
          .points=${300}
          .color=${'#16C07F'}
        ></point-bonus>
        <point-bonus
          .icon=${'crown.svg'}
          .caption=${'Live tournaments'}
          .points=${15}
          .color=${'#FF296D'}
        ></point-bonus>
        <point-bonus
          .icon=${'coin.svg'}
          .caption=${'Exclusive products'}
          .points=${20}
          .color=${'#4E97D9'}
        ></point-bonus>
      </div>
    `;
  }
}

window.customElements.define('point-offers', PointOffers);
