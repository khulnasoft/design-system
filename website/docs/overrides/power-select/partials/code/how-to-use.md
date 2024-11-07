!!! Warning

The PowerSelect style overrides are deprecated and will be removed in a future major release. We recommend migrating PowerSelect instances to [SuperSelect](/components/form/super-select).

!!!

[PowerSelect](https://ember-power-select.com) is a popular Ember add-on aiming to overcome some limitations of the `<select>` tag. We only provide style overrides for this add-on to keep it in line with other form components.

These style overrides assume the PowerSelect component is set up in your project using the **default theme**.

To use this component in your application, follow [the getting started guide on the add-on website](https://ember-power-select.com), then add the PowerSelect overrides.

## Import the overrides

If you’re already using [`design-system-components`](https://github.com/khulnasoft/design-system/blob/main/packages/components/README.md), import the overrides:

```scss
@use "@khulnasoft/design-system-components";
@use "@khulnasoft/design-system-power-select-overrides";
```

If you’re not using [`design-system-components`](https://github.com/khulnasoft/design-system/blob/main/packages/components/README.md) but need to use these custom PowerSelect styles, add [`design-system-tokens`](https://github.com/khulnasoft/design-system/blob/main/packages/tokens/README.md) to your project.

```scss
// for product applications
@use "~@khulnasoft/design-system-tokens/dist/products/css/tokens.css";
// for khulnasoft developer platform
@use "~@khulnasoft/design-system-tokens/dist/devdot/css/tokens.css";
```

## How to use these overrides

These overrides rely on specificity, so to apply them, wrap each PowerSelect instance in an element with the `kds-power-select` class applied to it.

Invocation of the component with overrides would look like this:

```handlebars
<div class="kds-power-select">
  <PowerSelect
    @options={{this.OPTIONS}}
    @selected={{this.SELECTED}}
    @onChange={{this.noop}}
    @renderInPlace={{true}}
    @ariaLabel="Server location"
    as |option|
  >
    {{option}}
  </PowerSelect>
</div>
```

### Search enabled

When used with the `@searchEnabled` argument, the input is automatically styled to resemble the [`Form::TextInput`](/components/form/text-input) component.

```handlebars
<div class="kds-power-select">
  <PowerSelect
    @options={{this.OPTIONS}}
    @selected={{this.SELECTED}}
    @onChange={{this.noop}}
    @renderInPlace={{true}}
    @searchEnabled={{true}}
    @ariaLabel="Server location"
    as |option|
  >
    {{option}}
  </PowerSelect>
</div>
```

### `@afterOptionsComponent` block

Use the `kds-power-select__after-options` class on the outermost element of the “after-options” component to consistently style `@afterOptionsComponent`.

```handlebars
<div class="kds-power-select">
  <PowerSelect
    @options={{this.OPTIONS}}
    @selected={{this.SELECTED}}
    @afterOptionsComponent={{"power-select/after-options"}}
    @onChange={{this.noop}}
    @renderInPlace={{true}}
    @ariaLabel="Server location"
    as |option|
  >
    {{option}}
  </PowerSelect>
</div>
```

`power-select/after-options.kbs` would look like this:

```handlebars{data-execute=false}
<div class="kds-power-select__after-options">
  5 results
</div>
```

### Multiple selection

The selected items are automatically styled to resemble the [Tag](/components/tag) component when multiple options are allowed.

```handlebars
<div class="kds-power-select">
  <PowerSelectMultiple
    @options={{this.OPTIONS}}
    @selected={{this.SELECTEDMULTIPLE}}
    @onChange={{this.noop}}
    @renderInPlace={{true}}
    @ariaLabel="Server location"
    as |option|
  >
    {{option}}
  </PowerSelectMultiple>
</div>
```
