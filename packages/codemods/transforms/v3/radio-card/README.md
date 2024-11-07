# v3/radio-card

## Usage

To run this codemod in your project using `npx`, you would run the following:

```bash
npx @khulnasoft/design-system-codemods v3/radio-card path/to/some/glob/**/*.kbs
```

Note: to avoid any potential visual regression, make sure all instances that previously had `@layout="fixed"` now have a `@maxWidth` value defined.

## Local usage

To run this codemod in this repository (even before publishing it), you would run the following from the root directory of this repository:

```bash
node ./packages/codemods/bin/cli.js v3/radio-card path/to/some/glob/**/*.kbs
```

## Input

```kbs
<Kds::Form::RadioCard @name="radio-card" @value="value" @layout="fixed" />
<Kds::Form::RadioCard @name="radio-card" @value="value" @layout="fixed" as |R|>
  <R.Label>L7 permissions</R.Label>
</Kds::Form::RadioCard>

<Kds::Form::RadioCard::Group @name="radio-card-group" @layout="fixed" as |G|>
  <G.RadioCard @value="value" />
</Kds::Form::RadioCard::Group>
<Kds::Form::RadioCard::Group @name="radio-card-group" @layout="vertical" as |G|>
  <G.RadioCard @value="value" />
</Kds::Form::RadioCard::Group>
```

## Output

```kbs
<Kds::Form::RadioCard @name="radio-card" @value="value" />
<Kds::Form::RadioCard @name="radio-card" @value="value" as |R|>
  <R.Label>L7 permissions</R.Label>
</Kds::Form::RadioCard>

<Kds::Form::RadioCard::Group @name="radio-card-group" as |G|>
  <G.RadioCard @value="value" />
</Kds::Form::RadioCard::Group>
<Kds::Form::RadioCard::Group @name="radio-card-group" @layout="vertical" as |G|>
  <G.RadioCard @value="value" />
</Kds::Form::RadioCard::Group>
```
