## How to use this component

The most basic invocation requires the `@text` argument to be passed, resulting in a medium neutral Badge.

```handlebars
<Kds::Badge @text="Default badge" />
```

### Color

The `@color` argument can be used to change the color.

```handlebars
<Kds::Badge @text="Highlight badge" @color="highlight" />
<Kds::Badge @text="Success badge" @color="success" />
<Kds::Badge @text="Warning badge" @color="warning" />
<Kds::Badge @text="Critical badge" @color="critical" />
```

### Type

Use the `@type` argument to invoke different Badge types. The options are `filled`, `inverted`, `outlined`.

```handlebars
<Kds::Badge @text="Inverted badge" @type="inverted" />
<Kds::Badge @text="Outlined badge" @type="outlined" />
```

### Size

A different size of Badge can be invoked using the `@size` argument.

```handlebars
<Kds::Badge @text="Small badge" @size="small" />
<Kds::Badge @text="Large badge" @size="large" />
```

### Icon

Use the `@icon` argument to pass in the any icon name. Icons always display in the leading (left) position.

```handlebars
<Kds::Badge @text="Terraform" @icon="terraform" />
```

#### isIconOnly

To display an icon without text set the `@isIconOnly` argument to `true`. Defining `@text` is still necessary to conform with accessibility standards but won’t be displayed visually.

```handlebars
<Kds::Badge @text="Terraform" @icon="terraform" @isIconOnly={{true}} />
```
