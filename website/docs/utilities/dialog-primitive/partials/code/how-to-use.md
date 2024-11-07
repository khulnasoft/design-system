The DialogPrimitive Wrapper is built on the HTML `<dialog>` element, and therefore supports the same [JavaScript API](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

## How to use this component

The `DialogPrimitive` serves as the foundation for dialog derived components like the [Modal](/components/modal) and [Flyout](/components/flyout). Unlike other KDS primitives, we recommended using `DialogPrimitive` components directly when you need to create a dialog with a custom layout. This is particularly useful for constructing non-modal dialogs that integrate into a page layout, rather than floating above it.

### Basic dialog using DialogPrimitive components

```handlebars
<Kds::DialogPrimitive::Wrapper>
  <:header>
    <Kds::DialogPrimitive::Header
      @icon="info"
      @tagline="Tagline"
    >
      Title
    </Kds::DialogPrimitive::Header>
    <Kds::DialogPrimitive::Description>Description</Kds::DialogPrimitive::Description>
  </:header>
  <:body>
    <Kds::DialogPrimitive::Body>
      <p class="kds-typography-body-300 kds-foreground-primary">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Libero culpa expedita assumenda at nisi minus unde fuga iure suscipit aut qui, odit
        natus eum voluptates ut molestiae! Perferendis, impedit qui? Lorem ipsum dolor sit amet?</p>
    </Kds::DialogPrimitive::Body>
  </:body>
  <:footer>
    <Kds::DialogPrimitive::Footer>
      <Kds::ButtonSet>
        <Kds::Button type="submit" @text="Primary" />
        <Kds::Button type="button" @text="Secondary" @color="secondary" />
      </Kds::ButtonSet>
    </Kds::DialogPrimitive::Footer>
  </:footer>
</Kds::DialogPrimitive::Wrapper>
```

### Header titleTag

The `@titleTag` argument changes the HTML element that wraps the `DialogPrimitive::Header` tagline and "title" content. When organizing the content on a webpage, the heading levels should reflect the structure of the page. For example, if the `DialogPrimitive` is used as a Split Window, the value should be `"h2"`. 

```handlebars
<div class="doc-dialog-primitive-grid-layout">
  <div class="doc-dialog-primitive-flex-layout">
    <Kds::Text::Display @tag="h1" @size="500">Page title</Kds::Text::Display>
    <Doc::Placeholder @text="Main content" @height="100%" @width="100%" @background="#eee" />
  </div>
  <Kds::DialogPrimitive::Wrapper class="doc-dialog-primitive-with-border">
    <:header>
      <Kds::DialogPrimitive::Header
        @icon="info"
        @tagline="Tagline"
        @titleTag="h2"
      >
        Split Window
      </Kds::DialogPrimitive::Header>
    </:header>
    <:body>
      <Kds::DialogPrimitive::Body>
       <Doc::Placeholder @text="Split Window content" @height="10rem" @width="100%" @background="#eee" />
      </Kds::DialogPrimitive::Body>
    </:body>
    <:footer>
      <Kds::DialogPrimitive::Footer>
        <Kds::ButtonSet>
          <Kds::Button type="submit" @text="Primary" />
          <Kds::Button type="button" @text="Secondary" @color="secondary" />
        </Kds::ButtonSet>
      </Kds::DialogPrimitive::Footer>
    </:footer>
  </Kds::DialogPrimitive::Wrapper>
</div>
```

!!! Insight

The default `@titleTag` is `"div"` because the correct value is dependent on the individual page. We strongly encourage consumers to update the `@titleTag` to meet WCAG Success Criterion [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) as the visual experience should match what is presented to the user with assistive technology.

!!!
