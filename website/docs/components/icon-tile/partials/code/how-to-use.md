## How to use this component

The default invocation requires an `@icon` argument **or** a `@logo` argument. If providing an `@icon` argument, it renders a medium neutral Icon Tile. If providing a `@logo` argument, it renders the logo in the relevant brand styles.

```handlebars
<Kds::IconTile @icon="user" />
```

```handlebars
<Kds::IconTile @logo="vault" />
```

### Colors

A different color Icon Tile can be invoked using the `@color` argument.

```handlebars
<Kds::IconTile @color="waypoint" @icon="user" />
```

### Size

A different size Icon Tile can be invoked using the `@size` argument.

```handlebars
<Kds::IconTile @logo="boundary" @size="small" />
```

```handlebars
<Kds::IconTile @logo="packer" @size="large" />
```

### Secondary icon

To add a secondary icon, use the `@iconSecondary` argument with any icon as the value.

```handlebars
<Kds::IconTile @icon="user" @iconSecondary="plus" />
```