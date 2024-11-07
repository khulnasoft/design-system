## How to use this component

When no `@href` or `@route` argument is provided, a plain text Tag will render.

```handlebars
<Kds::Tag @text="My text tag" @onDismiss={{this.yourOnDismissFunction}} />
```

### Link color

There are two available colors for a link: `primary` and `secondary`. The default is `primary`.

```handlebars
<Kds::Tag @color="primary" @text="My link tag" @route="show" @model="components/tag" @onDismiss={{this.yourOnDismissFunction}} />
```

```handlebars
<Kds::Tag @color="secondary" @text="My link tag" @route="show" @model="components/tag" @onDismiss={{this.yourOnDismissFunction}} />
```

### Dismiss

In most cases, the Tag should be dismissable. If you don’t provide a callback function to the `onDismiss` argument the dismiss button will not be rendered.

```handlebars
<Kds::Tag @color="primary" @text="My link tag" @route="show" @model="components/tag" />
```