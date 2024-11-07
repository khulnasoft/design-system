# v4/contextual-components

## Usage

To run this codemod in your project using `npx`, you would run the following:

```bash
npx @khulnasoft/design-system-codemods v4/contextual-components path/to/some/glob/**/*.kbs
```

## Local usage

To run this codemod in this repository (even before publishing it), you would run the following from the root directory of this repository:

```bash
node ./packages/codemods/bin/cli.js v4/contextual-components path/to/some/glob/**/*.kbs
```

## Input

```kbs
<Kds::Alert as |A|>
  <A.Link::Standalone />
</Kds::Alert>

<Kds::Form::Toggle::Group as |G|>
  <G.Toggle::Field as |F|>
    <F.Label>Label</F.Label>
  </G.Toggle::Field>
</Kds::Form::Toggle::Group>
```

## Output

```kbs
<Kds::Alert as |A|>
  <A.LinkStandalone />
</Kds::Alert>

<Kds::Form::Toggle::Group as |G|>
  <G.ToggleField as |F|>
    <F.Label>Label</F.Label>
  </G.ToggleField>
</Kds::Form::Toggle::Group>
```
