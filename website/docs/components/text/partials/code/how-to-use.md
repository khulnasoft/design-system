The `Text` component is a **code-only** component used to apply specific predefined KDS typographic styles to a block of text or content.

!!! Info

The equivalent in Figma is not a component, but a set of [typographic Figma styles](https://www.figma.com/file/oQsMzMMnynfPWpMEt91OpH/KDS-Product---Foundations?type=design&node-id=1262-9192).

!!!

## How to use this component

The `Text` component is available in three different variants with a one-to-one association between the namespace (eg. `::Display`) and the [corresponding style in Figma](https://www.figma.com/file/oQsMzMMnynfPWpMEt91OpH/KDS-Product---Foundations?type=design&node-id=1262-9192&mode=design).

```handlebars
<Kds::Text::Display>Text as "Display" variant</Kds::Text::Display>
<Kds::Text::Body>Text as "Body" variant</Kds::Text::Body>
<Kds::Text::Code>Text as "Code" variant</Kds::Text::Code>
```

When no `@tag` argument is provided, the text element is rendered as a `<span>` by default.

### HTML tag

To specify which HTML tag to use to render the element, use the `@tag` argument:

```handlebars
<Kds::Text::Display @tag="h1">Page title</Kds::Text::Display>
<Kds::Text::Body @tag="p">Paragraph text</Kds::Text::Body>
<Kds::Text::Code @tag="pre">Code sample</Kds::Text::Code>
```

!!! Insight

While by default the component renders a `<span>`, we invite consumers to:
- consider which semantic HTML tag is the correct one for the context in which the text is used
- always set a `@tag` value accordingly, to make the semantic choice explicit

!!!

### Size

To specify which size to apply to the text, use the `@size` argument:


```handlebars
<Kds::Text::Display @tag="h1" @size="500">Page title with "Display-500" variant </Kds::Text::Display>
<Kds::Text::Body @tag="p" @size="300">Paragraph text with "Body-300" variant-</Kds::Text::Body>
<Kds::Text::Code @tag="pre" @size="100">Code sample with "Code-100" variant</Kds::Text::Code>
```

Different style variants support different sizes: refer to the [Component API](#component-api) section for details.

### Weight

To apply a specific font weight to the text, use the `@weight` argument:

```handlebars
<Kds::Text::Display @tag="h4" @size="300" @weight="medium">Level 4 heading with "medium" font weight</Kds::Text::Display>
<Kds::Text::Body @tag="p" @weight="semibold">Paragraph text with "semibold" font weight </Kds::Text::Body>
<Kds::Text::Code @tag="pre" @weight="bold">Code sample with "bold" font weight</Kds::Text::Code>
```

!!! Critical

**Important**

Different typographic styles support only [a limited set of font weights](/foundations/typography?tab=code#style-and-weight).
Refer to the [Component API](#component-api) section to see what the allowed combinations are for the different styles.

!!!

### Alignment

To specify a text alignment, use the `@align` argument:

```handlebars
<Kds::Text::Display @tag="h1" @align="right">Page title, right-aligned</Kds::Text::Display>
<Kds::Text::Body @tag="p" @align="center">Paragraph, center-aligned</Kds::Text::Body>
<Kds::Text::Code @tag="pre" @align="left">Code sample, left-aligned</Kds::Text::Code>
```

### Color

It is possible to apply a specific **foreground** color to the text (from a predefined list) using the `@color` argument:

```handlebars
<Kds::Text::Body @tag="p" @color="strong">Paragraph with "strong" color applied</Kds::Text::Body>
<Kds::Text::Body @tag="p" @color="action-active">Paragraph with "action-active" color applied</Kds::Text::Body>
<Kds::Text::Body @tag="p" @color="highlight-high-contrast">Paragraph with "highlight-high-contrast" color applied</Kds::Text::Body>
```

For the list of possible foreground colors supported, refer to the [Component API](#component-api) section for details.

It’s also possible to provide a CSS color as string (in this case the color will be applied as inline style). The string can be a CSS `var()` that uses one of the [predefined color tokens](/foundations/colors?tab=palette):

```handlebars
<Kds::Text::Body @tag="p" @color="var(--token-color-palette-blue-400)">This text has a "blue-400" color applied</Kds::Text::Body>
```

Or it can be one of the standard CSS color formats (hex, rgb, rgba, hsl, etc.):

```handlebars
<Kds::Text::Body @tag="p" @color="#FF0000">This text has a "#FF0000" (red) color applied</Kds::Text::Body>
```

!!! Warning

We don’t validate the CSS color string to ensure that the value used is correct.

!!!

### Structured content

Since the component is not prescriptive on the tags that can be used to render the text, it can be used to apply a typographic style not only to plain text but also to structured content:

```handlebars
<Kds::Text::Body @tag="p" @size="300">This text contains some <strong>strong</strong> and <em>em</em> tags, a <Kds::Link::Inline @href="#">link</Kds::Link::Inline>.</Kds::Text::Body>
```

We can imagine even more complex examples where we may want to apply a typographic style to an entire block of content:

```handlebars
<Kds::Text::Body @tag="div" @size="200" @color="strong">
  <p>This is some generic text in a paragraph.</p>
  <ul>
    <li>this list item contains some <strong>strong</strong> and <em>em</em> tags</li>
    <li>this list item contains a <Kds::Link::Inline @href="#">link</Kds::Link::Inline></li>
  </ul>
  <p>This is also some generic text in a paragraph.</p>
</Kds::Text::Body>
```

!!! Warning

**Notice**

While this is technically possible, it’s not necessarily desirable (or correct in every possible context).
Please be mindful of how the markup is structured, in terms of HTML semantics (for accessibility) as well as code readability (for the developers writing/reviewing/maintaining that code, now and in the future).

!!!

