# Translate labels

Load labels from
`EXT:lit_demo/Resources/Private/Language/locallang_components.xlf`

```js
import {LitElement, html} from 'lit';
import componentLabels from '~labels/lit_demo.components'

export class TranslateExample extends LitElement {
    render() {
        return html`<h1>${componentLabels.get('label-key')}</h1>`;
    }
}

customElements.define('translate-example', TranslateExample)
```
