# ember-link-to-wrapper

An anchor wrapped in a list item. That's all. Useful for working with bootstrap which wants the `active` class on the `<li>`.

Because [ember-cli-active-link-wrapper](https://github.com/alexspeller/ember-cli-active-link-wrapper) has some issues on ember 2.10+.

## Installation

```
ember install ember-link-to-wrapper
```

## Usage

Use `{{link-to-wrapper}}` as a drop-in replacement for `{{link-to}}`:

```hbs
{{#link-to-wrapper "my-route"}}
  Visit my route!
{{/link-to-wrapper}}
```

The template will produce this html:
```html
<li class="active ember-view">
  <a href="/my-route" class="active ember-view">
    Visit my route!
  </a>
</li>
```

Pass model arguments and query params as usual:
```hbs
{{#link-to-wrapper "posts" postId (query-params expanded=true)}}
  View post {{postId}}
{{/link-to-wrapper}}
```

The inline form is also supported:
```hbs
{{link-to-wrapper "My Route" "my-route"}}
```

## Development

* `git clone <repository-url>` this repository
* `cd ember-link-to-wrapper`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
