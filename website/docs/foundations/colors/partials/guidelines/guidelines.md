## Color styles and tokens

Color-naming syntax and usage can vary depending on context and tooling. This overview will clarify what naming conventions are typically used and how they align with the KDS standards implemented in our libraries.

In Figma, reusable colors are referred to as “Styles.” They are categorized and stored in the right sidebar for fills, borders, and other properties that accept color values. Styles directly reference a HEX value but cannot reference each other (known as aliasing for Tokens). This means when we provide Figma Styles for semantic usage (like `Foreground/Primary`), the HEX value (`#3B3D45`) is directly referenced instead of the Core Palette color (`Palette/Neutral/Neutral 600`). 

In code, we refer to reusable colors as “Tokens.” They are generated from platform-agnostic files, in our case JSON, and create atomic colors regardless of what platform or framework is used. For example, Core Palette colors like `--token-color-palette-neutral-600` are directly referenced in `--token-color-foreground-primary`. 

![Pyramid diagram of token color inheritance with the levels (from bottom to top): hex code, global token, alias token, component token](/assets/foundations/color/colors-what-are-semantic-tokens.png)

## What are semantic colors?

The Semantic Palette helps ensure proper color usage across applications by embedding meaning directly into the name.

Semantic colors were designed to be used together, ensuring they meet accessibility standards and look visually pleasing. For example, foreground colors are intended to be used with surface or page colors. In many cases, it is important to use specific contextual naming conventions, such as status colors, together. Here are some examples of semantic color combinations with their respective contrast ratios:
- `Foreground/Strong` on `Surface/Primary` nets a ratio of 19.54:1
- `Foreground/Success-on Surface` on `Surface/Success` nets a ratio of 5.37:1
- `Foreground/Primary` on `Surface/Primary` nets a ratio of 10.82:1
- `Foreground/Action` on `Surface/Faint` nets a ratio of 4.86:1

![A Card component with the color contrast ratios for each of the color combinations labelled](/assets/foundations/color/colors-semantic-tokens-accessibility-examples.png)

The **element** and the **role** are referenced in the name to help make more informed color decisions.

KDS organizes semantic tokens into **element** categories:

- **Foreground** - For elements such as text, links, statuses, and icons.
- **Border** - For borders on components, containers, or dividers.
- **Surface** - For the background (or surface) of a component or container
- **Page** - For page backgrounds

Examples of **role** naming conventions include: 

- Strong
- Primary
- Faint
- Action (not to be used outside of context)
- Disabled (not to be used outside of context)

### Foreground colors

Foreground colors are used for elements such as text, links, and icons.

Some common examples of semantic foreground colors include:

- `Foreground/Strong` for headings and secondary links
- `Foreground/Primary` for body text 
- `Foreground/Faint` for less prominent text and UI elements.
- `Foreground/Action` for primary call to action such as links

![Samples of text with their color tokens labelled](/assets/foundations/color/colors-foreground-examples.png)

Use status foreground colors to help contextualize responses from user actions or to indicate status within a UI. These colors should be used sparingly and within the context of specific components like [Alerts](/components/alert#color), [Toasts](/components/toast#color), or [Badges](/components/badge#color).

![Sample positive, warning, and error status badges with their associated foreground color tokens labelled.](/assets/foundations/color/colors-status-examples.png)

### Border colors

Some common examples of border colors include:

- `Border/Strong` for secondary Button border
- `Border/Primary` for Card border or divider
- `Border/{Status color}` for Alert borders

![Sample borders applied on a button, card, and alert with the border color tokens labelled](/assets/foundations/color/colors-border-examples.png)

### Surface colors

Use surface colors for the background (or surface) of a component or container. 

Some common examples of surface colors include:

- `Surface/Strong` for the neutral Badge.
- `Surface/Primary` for component containers.
- `Surface/Faint` for the secondary Button.
- `Surface/{Status color}` for Alert background.

![Sample surface colors being applied to a badge, card, button, and alert with the surface color token labelled.](/assets/foundations/color/colors-surface-examples.png)

### Page colors

Page colors are used for page backgrounds. KDS components do not use these tokens; however, we recommend `Page/Primary` as the primary background color and `Page/Faint` as a means to create a secondary level on the page for highlighting information, if necessary.

## Accessible color combinations

We intend to be conformant with WCAG 2.2 Level AA requirements. In terms of color contrast, this means a luminosity ratio of 4.5:1 for normal sized text, and 3:1 for large text (commonly 22px). Further details are outlined on [WCAG’s understanding of Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). By default, semantic color tokens provide accessible color combinations out of the box with their associated naming conventions, while using palette colors requires manual validation, especially if you plan to mix and match. As an example, if a color has a semantic status name in it, then other associated status colors will be accessible. 

It is important to note that we [do not recommend the usage of disabled elements](/patterns/disabled-patterns), especially isolating disabled colors out of context, as they are not accessible.

### Using palette colors

The Core Palette is available if semantic colors do not meet your needs. These styles are usage-agnostic, which can introduce challenges in consistently scaling designs but also allow more freedom and flexibility in color pairing. 

When pairing colors from the Core Palette, ensure adjacent colors meet accessible contrast ratios. To validate your color combinations, use free tools like the [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/) or [Stark’s Figma plugin](https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker).
