# Reactive properties

Changing a reactive property triggers a re-render.

```js
static properties = {
  label:  { type: String },
  count:  { type: Number, reflect: true },
  active: { type: Boolean },
  items:  { type: Array, attribute: false },
  _open:  { state: true },
};
```

* `type` — converts the HTML attribute string to a value
  (`String`, `Number`, `Boolean`, `Array`, `Object`)
* `reflect: true` — writes property changes back to the attribute
* `attribute: false` — property only, never read from HTML
* `state: true` — internal state, not part of the public API

⚠️ Initialize defaults in the **constructor**, not as class fields.