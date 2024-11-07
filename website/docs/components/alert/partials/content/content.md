## General recommendations

- Keep the title short, as this will be the most prominent element when users scan the Alert.
- Avoid ending the title with a period.
- Alert descriptions should be short but clear enough to explain what’s happening. We recommend keeping messages under 90 characters.
- For warning and critical alerts, guide the users on how to prevent or fix the issue.

## Actions

Use small buttons to avoid competing with other actions on the page. Use more than two actions sparingly.

We recommend using the `secondary` button variant for primary actions and the `tertiary` button variant for secondary actions.

<Kds::Alert @type="inline" as |A|>
  <A.Title>Recommended button usage</A.Title>
  <A.Description>Lorem ipsum dolar sit amet.</A.Description>
  <A.Button @text="Your action" @color="secondary" @onClick={{this.noop}} />
  <A.Button @color="tertiary" @icon="arrow-right" @iconPosition="trailing" @text="Tertiary" />
</Kds::Alert>

For content guidelines on actions, refer to [Button](/components/button) and 
[Link](/components/link/standalone) documentation.

### Usage of critical buttons

Avoid using critical buttons in alerts. We handle the prominence and importance via the styling of the alert container itself. If you need to confirm that the user intended to interact with the action, consider displaying a confirmation modal.

!!! Dont
<Kds::Alert @type="inline" @color="critical" as |A|>
  <A.Title>Critical button usage</A.Title>
  <A.Description>Lorem ipsum dolar sit amet.</A.Description>
  <A.Button @text="Your action" @color="critical" @onClick={{this.noop}} />
</Kds::Alert>
!!!

### Links

#### Within page and inline Alerts

When linking to internal and external resources in the Alert, default to using a `secondary` [Standalone Link](/components/link/standalone) in the `actions` area. In the Ember component, these elements are passed as [contextual components](?tab=code#actions).

<Kds::Alert @type="inline" @color="highlight" as |A|>
  <A.Title>Links in alerts</A.Title>
  <A.Description>Lorem ipsum dolar sit amet.</A.Description>
  <A.LinkStandalone @icon="arrow-right" @iconPosition="trailing" @color="secondary" @text="Standalone link" @href="#" />
</Kds::Alert>

Within the Alert description, use the `secondary` [Inline Link](/components/link/inline) as the default link color. A common use case for this is when linking to multiple resources.

<Kds::Alert @type="inline" @color="warning" as |A|>
  <A.Title>Links in the description</A.Title>
  <A.Description>
    Lorem ipsum dolor sit amet, <Kds::Link::Inline @href="#" @color="secondary">consectetur</Kds::Link::Inline> adipiscing elit, sed do <Kds::Link::Inline @href="#" @color="secondary">eiusmod</Kds::Link::Inline> tempor incididunt ut <Kds::Link::Inline @href="#" @color="secondary">labore</Kds::Link::Inline> et dolore magna aliqua.
  </A.Description>
</Kds::Alert>

Wrap links to multiple related items on the same page in a list, e.g., when highlighting multiple form validation errors.

<Kds::Alert @type="inline" @color="critical" as |A|>
  <A.Title>Error submitting the form</A.Title>
  <A.Description>
    The follow fields must be corrected before submitting the form:
    <li class="kds-typography-body-200">
      <Kds::Link::Inline @color="secondary" @href="#">Email address</Kds::Link::Inline>
    </li>
    <li class="kds-typography-body-200">
      <Kds::Link::Inline @color="secondary" @href="#">First name</Kds::Link::Inline>
    </li>
    <li class="kds-typography-body-200">
      <Kds::Link::Inline @color="secondary" @href="#">Billing address</Kds::Link::Inline>
    </li>
  </A.Description>
</Kds::Alert>

#### Within compact Alerts

As `compact` Alerts don’t support a title or actions, use `secondary` [Inline Links](/components/link/inline) in the description of the component. This matches the intended hierarchy of the component relative to other Alert types and supports linking to multiple resources.

<Kds::Alert @type="compact" @color="success" as |A|>
  <A.Description>
    You’ve successfully configured your account. Next, <Kds::Link::Inline @href="#" @color="secondary">create a cluster</Kds::Link::Inline>, <Kds::Link::Inline @href="#" @color="secondary">invite your teammates</Kds::Link::Inline>, or create a <Kds::Link::Inline @href="#" @color="secondary">KhulnaSoft Virtual Network (HVN)</Kds::Link::Inline>.
  </A.Description>
</Kds::Alert>

If there is only one link within the `compact` alert, it’s acceptable to use the `primary` color, but this will result in increased prominence and elevated hierarchy.

<Kds::Alert @type="compact" @color="success" as |A|>
  <A.Description>
    You’ve successfully configured your account. Next, <Kds::Link::Inline @href="#" @color="primary">create your first cluster</Kds::Link::Inline>.
  </A.Description>
</Kds::Alert>

!!! Dont

Don’t mix and match different link colors in the same `compact` Alert.

<Kds::Alert @type="compact" @color="success" as |A|>
  <A.Description>
    You’ve successfully configured your account. Next, <Kds::Link::Inline @href="#" @color="primary">create a cluster</Kds::Link::Inline>, <Kds::Link::Inline @href="#" @color="secondary">invite your teammates</Kds::Link::Inline>, or create a <Kds::Link::Inline @href="#" @color="secondary">KhulnaSoft Virtual Network (HVN)</Kds::Link::Inline>.
  </A.Description>
</Kds::Alert>
!!!

!!! Dont

Don’t use a [Standalone Link](/components/link/standalone) in the description of a `compact` Alert. The description area is intended for inline content, while the Standalone Link is a block-level element.

![Standalone Link inside of compact Alert](/assets/components/alert/standalone-link-inside-compact-alert.png)
!!!

## Composition

Page and inline alerts can be configured in a variety of ways. For example: 

### With icon and title

<Kds::Alert @type="inline" as |A|>
  <A.Title>With icon and title</A.Title>
</Kds::Alert>

### With icon, title, and description

<Kds::Alert @type="inline" as |A|>
  <A.Title>With icon, title, and description</A.Title>
  <A.Description>Lorem ipsum dolar sit amet.</A.Description>
</Kds::Alert>

### Title and description only

The title or description should contain the alert type, e.g., “Warning,” if no icon is present.

<Kds::Alert @type="inline" @color="warning" @icon={{false}} as |A|>
  <A.Title>Warning: the action could not be completed</A.Title>
</Kds::Alert>

### With actions

<Kds::Alert @type="inline" @color="success" as |A|>
  <A.Title>Alert with actions</A.Title>
  <A.Description>Lorem ipsum dolar sit amet.</A.Description>
  <A.Button @text="Your action" @color="secondary" @onClick={{this.noop}} />
  <A.LinkStandalone @color="secondary" @icon="arrow-right" @iconPosition="trailing" @text="Learn more" @href="#" />
</Kds::Alert>

### With generic content

<Kds::Alert @type="inline" @color="success" as |A|>
  <A.Title>An alert with extra/custom content</A.Title>
  <A.Description>In special cases, you can pass extra content to the alert using the
    <code>A.Generic</code>
    contextual component.</A.Description>
  <A.Generic>
    <Doc::Placeholder @text="some generic content" @height="50" @background="#eee" />
  </A.Generic>
</Kds::Alert>