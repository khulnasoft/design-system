# v3/dropdown

## Usage

To run this codemod in your project using `npx`, you would run the following:

```bash
npx @khulnasoft/design-system-codemods v3/dropdown path/to/some/glob/**/*.kbs
```

## Local usage

To run this codemod in this repository (even before publishing it), you would run the following from the root directory of this repository:

```bash
node ./packages/codemods/bin/cli.js v3/dropdown path/to/some/glob/**/*.kbs
```

## Input

```kbs
<Kds::Dropdown @listPosition="left" as |dd|>
  <dd.ToggleButton @text="Menu left" />
</Kds::Dropdown>
```

## Output

```kbs
<Kds::Dropdown @listPosition="bottom-left" as |dd|>
  <dd.ToggleButton @text="Menu left" />
</Kds::Dropdown>
```
