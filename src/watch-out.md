# ⚠️ Watch out!

Some of the methods require `super` so
the default lit behavior is maintained.

```js
connectedCallback() {
  super.connectedCallback()
  // ...
}
```