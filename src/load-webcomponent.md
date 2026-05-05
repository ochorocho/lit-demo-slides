# Load the WebComponent

1. Load a single component...
```php
$this->pageRenderer->loadJavaScriptModule('@ochorocho/lit-demo/component/typo3-surfcamp.js');
```
in the fluid template
```html
<f:asset.module identifier="@ochorocho/lit-demo/component/typo3-surfcamp.js"></f:asset.module>
```
  
2. Load multiple components with a single entrypoint:

app.js
```js
 import '@ochorocho/lit-demo/component/counter.js';
 import '@ochorocho/lit-demo/component/typo3-surfcamp.js';
```
PHP
```php
 $this->pageRenderer->loadJavaScriptModule('@ochorocho/lit-demo/app.js');
```
