# Lifecycle methods

The most used methods:

* `constructor()` - When an element is created. Set property defaults
* `connectedCallback()` - When an element is added to the document's DOM
* `firstUpdated()` - Called when the elements DOM was updated for the first time.
  A good place to do API requests.
* `render()` - Renders the HTML template. Must return a TemplateResult
* `disconnectedCallback()` - When an element is removed from the document's DOM.
  Handy to remove event listeners defined outside the element.
* `updated(changedProperties)` - Run tasks/actions on the updated DOM.
  Use `changedProperties.has('<property>')` to see if a property has actually changed

For more details see the [Lit docs](https://lit.dev/docs/components/lifecycle/)
or [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#using_the_lifecycle_callbacks)