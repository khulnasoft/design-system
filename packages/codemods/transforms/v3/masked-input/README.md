# v3/masked-input

## Usage

To run this codemod in your project using `npx`, you would run the following:

```bash
npx @khulnasoft/design-system-codemods v3/masked-input path/to/some/glob/**/*.kbs
```

## Local usage

To run this codemod in this repository (even before publishing it), you would run the following from the root directory of this repository:

```bash
node ./packages/codemods/bin/cli.js v3/masked-input path/to/some/glob/**/*.kbs
```

## Input

```kbs
<Kds::Form::MaskedInput::Base @isMasked={{true}} />

<Kds::Form::MaskedInput::Field @isMasked={{true}} as |F|>
  <F.Label>This is the label</F.Label>
</Kds::Form::MaskedInput::Field>
```

## Output

```kbs
<Kds::Form::MaskedInput::Base @isContentMasked={{true}} />

<Kds::Form::MaskedInput::Field @isContentMasked={{true}} as |F|>
  <F.Label>This is the label</F.Label>
</Kds::Form::MaskedInput::Field>
```
