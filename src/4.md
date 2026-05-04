# WebComponent example

The HTML Element:
```html
<typo3-surfcamp year="2026"></typo3-surfcamp>
```

The corresponding JavaScript:
```js
import {LitElement, html} from 'lit';

export class Typo3Surfcamp extends LitElement {

    static properties = {
        year: {type: Number, attribute: 'year'},
    };

    constructor() {
        super();
        this.year = 0;
    }

    render() {
        return html`<div>TYPO3 SurfCamp ${this.year}</div>`;
    }
}

customElements.define('typo3-surfcamp', Typo3Surfcamp);
```
