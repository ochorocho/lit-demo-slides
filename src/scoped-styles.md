# Scoped styles

Apply component specific styles

```js
import {LitElement, html, css} from 'lit';

export class MyElement extends LitElement {
    // Define component specific CSS
    static styles = css`
        :host {
            color: red;
        }
    `

    render() {
        return html`<p>I am red!</p>`;
    }
}

customElements.define('my-element', MyElement);
```

⚠️ Scoped style require the shadow DOM to be enabled.