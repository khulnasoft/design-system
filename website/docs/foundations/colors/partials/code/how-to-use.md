## How to use these styles

We offer two ways to apply color to a UI element: **CSS helper classes** or **design tokens**.

We currently only provide CSS helpers for the “semantic” colors, so if you need to use the “palette” or “product/brand” colors, use the design tokens as CSS variables instead.

### CSS helper classes

1. Ensure you’ve imported the relevant CSS file.

```scss
// for product applications
@use "~@khulnasoft/design-system-tokens/dist/products/css/helpers/colors.css";

// for khulnasoft developer platform
@use "~@khulnasoft/design-system-tokens/dist/devdot/css/helpers/colors.css";

```

2. Use one of the predefined CSS helper classes.

```handlebars
<div class="kds-foreground-primary kds-surface-faint kds-border-strong">...</div>
```

!!! Info

**A note about border width**

When a “border-color” CSS helper is used on an element a `1px solid` border is applied to it. If needing a different border `width/style`, it’s ok to override it.
!!!


### Design tokens

Use the color [design tokens](../foundations/tokens) directly in your CSS definitions.

```css
.your-selector {
  color: var(--token-color-foreground-primary);
  background: var(--token-color-surface-faint);
  border: (--token-color-border-strong);
  & :hover {
    color: var(--token-color-foreground-high-contrast);
    background: var(--token-color-foreground-action-active);
  }
}
```