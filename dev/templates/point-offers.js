import {LitElement, html, css} from 'lit';

import {PointBonus} from '../components/point-bonus';

export class PointOffers extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="/dev/output.css" />
      <div class="gap-x-2 text-white my-4 grid grid-cols-3">
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
