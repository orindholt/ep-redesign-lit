---
layout: page.11ty.cjs
title: <my-app> ⌲ Home
---

# &lt;my-app>

`<my-app>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<my-app>` is just an HTML element. You can it anywhere you can use HTML!

```html
<my-app></my-app>
```

  </div>
  <div>

<my-app></my-app>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<my-app>` can be configured with attributed in plain HTML.

```html
<my-app name="HTML"></my-app>
```

  </div>
  <div>

<my-app name="HTML"></my-app>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<my-app>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;my-app&gt;</h2>
    <my-app .name=${name}></my-app>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;my-app&gt;</h2>
<my-app name="lit-html"></my-app>

  </div>
</section>
