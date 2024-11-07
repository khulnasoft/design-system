# v3/side-nav

## Usage

To run this codemod in your project using `npx`, you would run the following:

```bash
npx @khulnasoft/design-system-codemods v3/side-nav path/to/some/glob/**/*.kbs
```

## Local usage

To run this codemod in this repository (even before publishing it), you would run the following from the root directory of this repository:

```bash
node ./packages/codemods/bin/cli.js v3/dropdown path/to/some/glob/**/*.kbs
```

## Input

```kbs
<Kds::SideNav::List as |XXX|>
  <XXX.extraBefore>...</XXX.extraBefore>
  <XXX.Item>...</XXX.Item>
  <XXX.extraAfter>...</XXX.extraAfter>
</Kds::SideNav::List>

<Kds::SideNav::Portal as |YYY|>
  <YYY.extraBefore>...</YYY.extraBefore>
  <YYY.Item>...</YYY.Item>
  <YYY.extraAfter>...</YYY.extraAfter>
</Kds::SideNav::Portal>
```

## Output

```kbs
<Kds::SideNav::List as |XXX|>
  <XXX.ExtraBefore>...</XXX.ExtraBefore>
  <XXX.Item>...</XXX.Item>
  <XXX.ExtraAfter>...</XXX.ExtraAfter>
</Kds::SideNav::List>

<Kds::SideNav::Portal as |YYY|>
  <YYY.ExtraBefore>...</YYY.ExtraBefore>
  <YYY.Item>...</YYY.Item>
  <YYY.ExtraAfter>...</YYY.ExtraAfter>
</Kds::SideNav::Portal>
```
