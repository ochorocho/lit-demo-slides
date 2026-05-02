# Handle events

* Use the `@`-shorthand to listen to regular events e.g.
  ```js
  @click="${this.doSomething}"
  ```
* Listen to a custom event fired by a child element:
  * Event dispatched in a child component 
    ```js
    this.dispatchEvent(new CustomEvent(
        'my-custom-event', { bubbles: true, detail: { uid: 666 }}
    ));
    ```
  * Listen to the event 
    ```html
      <the-parent-component @my-custom-event="${this.doSomething}"></the-parent-component>
    ```