# ember-link-to-wrapper

[![npm version](https://badge.fury.io/js/ember-link-to-wrapper.svg)](https://www.npmjs.com/package/ember-link-to-wrapper)
[![build status](https://travis-ci.org/dwickern/ember-link-to-wrapper.svg?branch=master)](https://travis-ci.org/dwickern/ember-link-to-wrapper)

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

The template will produce roughly this html:

```html
<li>
  <a href="/my-route">
    Visit my route!
  </a>
</li>
```

When the route is active, an `active` class is applied to _both_ elements:

```html
<li class="active">
  <a href="/my-route" class="active">
    Visit my route!
  </a>
</li>
```

### Query parameters

Pass model arguments and query params as usual:

```hbs
{{#link-to-wrapper "posts" postId (query-params expanded=true)}}
  View post {{postId}}
{{/link-to-wrapper}}
```

### Inline form

The [inline form](https://guides.emberjs.com/v2.15.0/templates/links/#toc_using-link-to-as-an-inline-component) is also supported:

```hbs
{{link-to-wrapper "My Route" "my-route"}}
```

### Custom attributes

Use `linkComponent` to customize the inner anchor element:

```hbs
{{#link-to-wrapper "my-route" class="outer" linkComponent=(component 'link-to' class="inner")}}
  Visit my route!
{{/link-to-wrapper}}
```

Produces roughly this html:

```html
<li class="outer">
  <a href="/my-route" class="inner">
    Visit my route!
  </a>
</li>
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
