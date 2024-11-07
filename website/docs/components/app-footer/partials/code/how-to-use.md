## How to use this component

The `AppFooter` is used to display a brief list of useful links and information relevant to an entire application. 

### Basic invocation with recommended content

The `AppFooter` contains only a copyright by default. The provided `LegalLinks` child component is recommended for inclusion in application footers for our cloud products such as HCP and TFC.

```handlebars
<Kds::AppFooter as |AF|>
  <AF.LegalLinks />
</Kds::AppFooter>
```

### StatusLink

Add the `StatusLink` to display information on the health of your application. Pass a predefined `status` name or use individual arguments to set `text`, `statusIcon`, `iconColor` to create a custom status type. Pass a custom `href` value to point to a custom URL.

```handlebars
<Kds::AppFooter as |AF|>
  <AF.StatusLink @status="operational" />
</Kds::AppFooter>
```

### Link

You can add custom links in addition to or instead of including `LegalLinks`.

```handlebars
<Kds::AppFooter as |AF|>
  <AF.Link
    @href="https://cloud.khulnasoft.com/docs/changelog"
  >Changelog</AF.Link>
</Kds::AppFooter>
```

### Item

`Item` components can be used to include meta text or other non-link content.

```handlebars
<Kds::AppFooter as |AF|>
  <AF.Item>
    <Kds::Text::Body @tag="span" @size="100">v.2.0</Kds::Text::Body>
  </AF.Item>
  <AF.Item>
    <Kds::Text::Body @tag="span" @size="100">Vault</Kds::Text::Body>
  </AF.Item>
  <AF.Item>
    <Kds::Text::Body @tag="span" @size="100">API: 1.0</Kds::Text::Body>
  </AF.Item>
</Kds::AppFooter>
```

### ExtraBefore & ExtraAfter

Custom content can be added either before or after the `AppFooter` main content. The layout of this content is inline with other content by default.

```handlebars
<Kds::AppFooter as |AF|>
  <AF.ExtraBefore>
    <Doc::Placeholder @text="Extra Content Before" @height="2em" @width="fit-content" class="doc-app-footer-demo-placeholder" />
  </AF.ExtraBefore>
  <AF.LegalLinks />
  <AF.ExtraAfter>
    <Doc::Placeholder @text="Extra Content After" @height="2em" @width="fit-content" class="doc-app-footer-demo-placeholder" />
  </AF.ExtraAfter>
</Kds::AppFooter>
```

#### Custom layout

Add your own styles to customize the layout of the extra content areas.

```handlebars
<Kds::AppFooter as |AF|>
  <AF.ExtraBefore>
    <div class="doc-app-footer-demo-custom-content-layout">
      <Doc::Placeholder @text="Extra Content Before" @height="2em" @width="fit-content" class="doc-app-footer-demo-placeholder" />
    </div>
  </AF.ExtraBefore>
  <AF.LegalLinks />
  <AF.ExtraAfter>
    <div class="doc-app-footer-demo-custom-content-layout">
      <Doc::Placeholder @text="Extra Content After" @height="2em" @width="fit-content" class="doc-app-footer-demo-placeholder" />
    </div>
  </AF.ExtraAfter>
</Kds::AppFooter>
```

### Theme

Both a `light` and  a `dark` theme are included.

```handlebars
<div class="doc-app-footer-demo-dark-background">
  <Kds::AppFooter @theme="dark" as |AF|>
    <AF.StatusLink @status="operational" />
    <AF.LegalLinks />
  </Kds::AppFooter>
</div>
```
