## How to use this component

The Breadcrumb is an application-level UI element, so it’s likely to be implemented once per application.

### Basic use

!!! Info

A few parameters were omitted for clarity.
!!!

```handlebars
<Kds::Breadcrumb>
  <Kds::Breadcrumb::Item @text="My org" @icon="org" />
  <Kds::Breadcrumb::Item @text="Consul" @icon="consul" />
  <Kds::Breadcrumb::Item @text="my-consul-cluster" />
  <Kds::Breadcrumb::Item @text="Overview" @current={{true}} />
</Kds::Breadcrumb>
```

### With routing parameters

Add the correct `@route/@models/@model/@query` parameter to each Breadcrumb Item.

```handlebars
<Kds::Breadcrumb>
  <Kds::Breadcrumb::Item @text="My org" @icon="org" @route="components" />
  <Kds::Breadcrumb::Item @text="Consul" @icon="consul" @route="components" />
  <Kds::Breadcrumb::Item
    @text="my-consul-cluster"
    @route="components"
    @model={{@cluster.id}}
  />
  <Kds::Breadcrumb::Item @text="Overview" @current={{true}} />
</Kds::Breadcrumb>
```

### No wrapping

By default, the Breadcrumb allows items to wrap on multiple lines if the container is too small. Pass `false` to the `@itemsCanWrap` parameter to avoid wrapping.

```handlebars
<Kds::Breadcrumb @itemsCanWrap={{false}}>
  <Kds::Breadcrumb::Item @text="My org" @icon="org" />
  <Kds::Breadcrumb::Item @text="Consul" @icon="consul" />
  <Kds::Breadcrumb::Item @text="my-consul-cluster" />
  <Kds::Breadcrumb::Item @text="Overview" @current={{true}} />
</Kds::Breadcrumb>
```

### Truncation

#### With dropdown 

It’s possible to hide part of the Breadcrumb tree under a "truncated" item that shows the elements on "toggle".

```handlebars
<Kds::Breadcrumb>
  <Kds::Breadcrumb::Item @text="My org" @icon="org" @route="components" />
  <Kds::Breadcrumb::Truncation>
    <Kds::Breadcrumb::Item @text="Consul" @icon="consul" @route="components" />
    <Kds::Breadcrumb::Item @text="my-consul-cluster" @route="components" />
    <Kds::Breadcrumb::Item @text="Cluster details" @route="components" />
  </Kds::Breadcrumb::Truncation>
  <Kds::Breadcrumb::Item @text="Cluster sub-details" @current={{true}} />
</Kds::Breadcrumb>
```
#### Width-based truncation

By setting `@itemsCanWrap` to `false`, it is possible to constrain the text to one-line and truncate it if it does not fit the available space. 

!!! Warning

The text will automatically truncate and be replaced with an ellipsis to fit within the container. Please be aware there are [serious accessibility concerns](/components/copy/snippet?tab=accessibility) with using this feature.

!!!

```handlebars
<Kds::Breadcrumb @itemsCanWrap={{false}}>
  <Kds::Breadcrumb::Item @text="Level one with a very long string" @icon="org" />
  <Kds::Breadcrumb::Item @text="Level two with a very long string" @icon="folder" />
  <Kds::Breadcrumb::Item @text="Level three with a very long string" />
  <Kds::Breadcrumb::Item @text="Level four with a very long string" />
  <Kds::Breadcrumb::Item @text="Level five with a very long string" />
  <Kds::Breadcrumb::Item @text="Current with a very long string" @current={{true}} />
</Kds::Breadcrumb>
```
