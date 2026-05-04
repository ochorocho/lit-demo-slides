# ⚠️ Watch out! II

A few more traps for developers:

* **Mutating arrays or objects won't trigger a re-render.**
  Replace the reference instead of mutating it:
  ```js
  this.items.push(item);              // no update
  this.items = [...this.items, item]; // updates
  ```
* **Don't do heavy work in `render()`** — it runs on every
  update. Compute derived values in `willUpdate()` instead.
* **Await `this.updateComplete`** to wait for the DOM to
  reflect the latest state. Useful in tests and after
  programmatic property changes.