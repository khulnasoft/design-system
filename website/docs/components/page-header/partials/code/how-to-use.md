## How to use this component

A simple invocation of the component requires a contextual `<PH.Title>` which yields its content within an `<h1>`.

```handlebars
<Kds::PageHeader as |PH|>
  <PH.Title>Page title</PH.Title>
</Kds::PageHeader>
```

### Contextual components

The Page Header uses a number of contextual components that either yield their content or render a specific Helios component.

!!! Info

The layout of this component is responsive and adjusts based on the width of its bounding container. The examples captured here may not be indicative of how the component will render within a specific application or layout.

The responsive layout is achieved using [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries), which creates a new [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context). We recommend setting the appropriate `z-index` value to the Page Header (or its parent container) to make sure its content–for example a Dropdown–is not obscured by other elements on the page.

!!!

```handlebars
<Kds::PageHeader as |PH|>
  <PH.Title>Page title</PH.Title>
  <PH.Breadcrumb>
    <Kds::Breadcrumb>
      <Kds::Breadcrumb::Item @text="Organization" @icon="dashboard" />
      <Kds::Breadcrumb::Item @text="Project" @icon="file-text" />
      <Kds::Breadcrumb::Item @text="Clusters" @icon="server-cluster" />
    </Kds::Breadcrumb>
  </PH.Breadcrumb>
  <PH.IconTile @icon="server-cluster" @color="consul" />
  <PH.Badges>
    <Kds::Badge @text="Status badge" @icon="award" @color="highlight" />
  </PH.Badges>
  <PH.Subtitle>Page subtitle</PH.Subtitle>
  <PH.Description>Description of the page</PH.Description>
  <PH.Actions>
    <Kds::Button
      @text="Create"
      @icon="plus"
      @iconPosition="leading"
      @color="primary"
    />
  </PH.Actions>
</Kds::PageHeader>
```

### Custom content

Pass custom metadata to the component with a `generic` contextual component that yields its contents.

```handlebars
<Kds::PageHeader as |PH|>
  <PH.Title>Page title</PH.Title>
  <PH.IconTile @icon="folder" />
  <PH.Actions>
    <Kds::Dropdown as |D|>
      <D.ToggleButton @text="Manage" @color="secondary" />
      <D.Interactive @route="components">Item One</D.Interactive>
      <D.Interactive @route="components">Item Two</D.Interactive>
      <D.Interactive @route="components">Item Three</D.Interactive>
      <D.Separator />
      <D.Interactive @route="components" @color="critical" @icon="trash">Delete</D.Interactive>
    </Kds::Dropdown>
  </PH.Actions>
  <PH.Generic>
    <Doc::Placeholder
      @text="generic metadata"
      @height="36"
      @width="350"
      @background="#eee"
    />
  </PH.Generic>
</Kds::PageHeader>
```
