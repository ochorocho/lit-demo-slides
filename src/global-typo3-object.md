# The TYPO3.* Object

Methods you might want to use in your
web components to trigger certain actions.

```
// Open a modal
top.TYPO3.Modal.confirm('Title', 'Confirm something...')

// Show a notification
top.TYPO3.Notification.error('Error', 'Error occurred while processing this request.');

// Access ajax routes
top.TYPO3.settings.ajaxUrls

// Open a module by identifier
const params = new URLSearchParams({ task: 666});
top.TYPO3.ModuleMenu.App.showModule('recycler', params.toString());

// Reload the page tree
top.document.dispatchEvent(new CustomEvent('typo3:pagetree:refresh')); 
```