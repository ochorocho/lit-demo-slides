# Fetching data

For one-shot fetches (no update) use firstUpdated()
and fetch(). For update capabilities go with @lit/task

```js
// Constructor
this._nonce = 0;
this._jokeTask = new Task(this, {
    task: async ([nonce], { signal }) => {
        const url = `${API}/random`;
        const res = await fetch(url, { signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    },
    args: () => [this._nonce],
});

// Render
return html`
  ${this._jokeTask.render({
    pending: () => html`<p>Loading joke…</p>`,
    error: (e) => html`<p class="error">Failed: ${e.message}</p>`,
    complete: (joke) => html`
      <div>${joke.value}</div>
  `,
  })}
`;
```
