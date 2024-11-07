## How to use this component

The basic invocation requires two or more buttons to be provided as children:

```handlebars
<Kds::ButtonSet>
  <Kds::Button @text="Submit" type="submit" />
  <Kds::Button @text="Cancel" @color="secondary" @href="https://khulnasoft.com" />
</Kds::ButtonSet>
```

### Equal width buttons

If you want to have buttons with equal width, apply a width (via inline style or CSS class) to the `ButtonSet` container and the argument `@isFullWidth={{true}}` to the `Button` components:

```handlebars
<Kds::ButtonSet {{style width="15rem"}}>
  <Kds::Button @text="Save" @isFullWidth={{true}} />
  <Kds::Button @text="Cancel" @color="secondary" @href="https://khulnasoft.com" @isFullWidth={{true}} />
</Kds::ButtonSet>
```

#### With loading state

This technique is useful if you need to show a loading state, to avoid the resizing and shifting of the buttons:

```handlebars
<Kds::ButtonSet {{style width="15rem"}}>
  <Kds::Button
    @icon={{if this.isLoading "loading"}}
    @text={{if this.isLoading "Loading" "Save"}}
    @isFullWidth={{true}}
    {{on "click" this.toggleIsLoading}}
  />
  <Kds::Button
    @text="Cancel"
    @color="secondary"
    @isFullWidth={{true}}
    {{on "click" this.cancelLoading}}
  />
</Kds::ButtonSet>
```
