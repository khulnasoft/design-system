## How to use this component

The Reveal component renders a button that triggers the display of additional content. The additional content can consist of either plain text or HTML and can include interactive elements such as links.

```handlebars
<Kds::Reveal @text="Toggle me">
  Additional content
</Kds::Reveal>
```

### textWhenOpen

You can display different text on the toggle button when the `Reveal` is open.

```handlebars
<Kds::Reveal @text="Open me" @textWhenOpen="Close me">
  Additional content
</Kds::Reveal>
```

### isOpen

Set `isOpen` to `true` to display the content on page load instead of initially hiding it.

```handlebars
<Kds::Reveal @text="Toggle me" @isOpen={{true}}>
  Additional content
</Kds::Reveal>
```