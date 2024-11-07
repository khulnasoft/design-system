## How to use tokens

### Use tokens in styles

Use the design tokens in your style declarations as CSS custom properties.

```css
.your-selector {
  color: var(--token-color-foreground-highlight);
  background: var(--token-color-background-highlight);
  border: 1px solid var(--token-color-border-highlight);
  font-family: var(--token-typography-body-base-font-family);
  font-size: var(--token-typography-body-base-font-size);
  line-height: var(--token-typography-body-base-line-height);
}
```

### Use tokens in components

1. Ensure you’ve imported the relevant CSS file.

```scss
// for product applications
@use "~@khulnasoft/design-system-tokens/dist/products/css/tokens.css";
// for khulnasoft developer platform
@use "~@khulnasoft/design-system-tokens/dist/devdot/css/tokens.css";
```

2. If a component accepts a color parameter you can use a design token too.

```handlebars
<Kds::Icon @name="alert-circle" @color="var(--token-color-foreground-success)" />
```

For more details on how the design tokens pipeline is implemented, and how the design tokens are generated and distributed, see the repository [@khulnasoft/design-system-tokens](https://github.com/khulnasoft/design-system/tree/main/packages/tokens).
