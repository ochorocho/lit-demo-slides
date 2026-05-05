# Slots

Insertion points for content placed inside your component:

```js
render() {
  return html`
    <header><slot name="title">Untitled</slot></header>
    <section><slot></slot></section>
  `;
}
```

```html
<my-card>
  <h2 slot="title">Hello</h2>
  <p>Goes into the default slot.</p>
</my-card>
```

* Default slot: children with no `slot` attribute
* Named slot: child's `slot="x"` matches `<slot name="x">`
* Content between `<slot>` tags is shown as fallback
* Style slotted children via `::slotted(selector)`

⚠️ Slots require the shadow DOM to be enabled.