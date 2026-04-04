# Disable the shadow DOM

```js
export class NoShadowDom extends LitElement {
    // ...
    
    createRenderRoot() {
        return this;
    }

    // ...
}

customElements.define('no-shadow-dom', NoShadowDom)
```
