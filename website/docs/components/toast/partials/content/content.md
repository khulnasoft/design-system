## General recommendations

- Keep the title short, as this will be the most prominent element when users scan the Toast.
- Avoid ending the title with a period.
- Toast descriptions should be short but clear enough to explain what’s happening. We recommend keeping messages under 90 characters.
- For warning and critical Toasts, guide the users on how to prevent or fix the issue.

## Actions

Use small buttons to avoid competing with other actions on the page. Use more than two actions sparingly.

We recommend using the `secondary` button variant for primary actions and the `tertiary` button variant for secondary actions.

<Kds::Toast @color="neutral" @onDismiss={{this.noop}} as |T|>
  <T.Title>Recommended button usage</T.Title>
  <T.Description>Lorem ipsum dolar sit amet, consecteu adipiscig elit null dignissim felis.</T.Description>
  <T.Button @text="Button" @color="secondary" />
  <T.Button @color="tertiary" @icon="arrow-right" @iconPosition="trailing" @text="Tertiary" />
</Kds::Toast>

For content guidelines on actions, refer to [Button](/components/button) and 
[Link](/components/link/standalone) documentation.

### Usage of critical buttons

Avoid using critical Buttons in Toasts. We handle the prominence and importance via the styling of the Toast container itself. If needing to confirm that the user intended to interact with the action, consider displaying a confirmation [Modal](/components/modal). 

!!! Dont

<Kds::Toast @color="critical" @onDismiss={{this.noop}} as |T|>
  <T.Title>Critical button usage</T.Title>
  <T.Description>Lorem ipsum dolar sit amet, consecteu adipiscig elit null dignissim felis.</T.Description>
  <T.Button @text="Your action" @color="critical" />
</Kds::Toast>
!!!

### Links

When linking to internal and external resources in the Toast, default to using a `secondary` [Standalone Link](/components/link/standalone) in the `actions` area. In the Ember component, these elements are passed as [contextual components](?tab=code#actions).

<Kds::Toast @color="success" @onDismiss={{this.noop}} as |T|>
  <T.Title>Links in Toasts</T.Title>
  <T.Description>Lorem ipsum dolar sit amet, consecteu adipiscig elit null dignissim felis.</T.Description>
  <T.Button @text="Button" @color="secondary" />
  <T.LinkStandalone @color="secondary" @icon="arrow-right" @iconPosition="trailing" @text="Standalone link" @href="#" />
</Kds::Toast>

Within the Toast description, use the `secondary` [Inline Link](/components/link/inline) as the default link color. A common use case for this is when linking to multiple resources.

<Kds::Toast @color="warning" @onDismiss={{this.noop}} as |T|>
  <T.Title>Links in the description</T.Title>
  <T.Description>
    Lorem ipsum dolor sit amet, <Kds::Link::Inline @href="#" @color="secondary">consectetur</Kds::Link::Inline> adipiscing elit, sed do <Kds::Link::Inline @href="#" @color="secondary">eiusmod</Kds::Link::Inline> tempor incididunt ut <Kds::Link::Inline @href="#" @color="secondary">labore</Kds::Link::Inline> et dolore magna aliqua.
  </T.Description>
</Kds::Toast>

Wrap links to multiple related items on the same page in a list, e.g., when highlighting multiple validation errors.

<Kds::Toast @color="critical" @onDismiss={{this.noop}} as |T|>
  <T.Title>Error saving resource</T.Title>
  <T.Description>
    The follow fields must be corrected before saving the resource:
    <li class="kds-typography-body-200">
      <Kds::Link::Inline @color="secondary" @href="#">Resource name</Kds::Link::Inline>
    </li>
    <li class="kds-typography-body-200">
      <Kds::Link::Inline @color="secondary" @href="#">Unique ID (UID)</Kds::Link::Inline>
    </li>
    <li class="kds-typography-body-200">
      <Kds::Link::Inline @color="secondary" @href="#">Region</Kds::Link::Inline>
    </li>
  </T.Description>
</Kds::Toast>

## Composition

Toasts can be configured in a variety of ways. For example:

### With icon and title

<Kds::Toast @icon="info" @onDismiss={{this.noop}} as |T|>
  <T.Title>With icon and title</T.Title>
</Kds::Toast>

### With icon, title, and description

<Kds::Toast @icon="info" @onDismiss={{this.noop}} as |T|>
  <T.Title>With icon, title, and description</T.Title>
  <T.Description>Lorem ipsum dolar sit amet, consectetur adi.</T.Description>
</Kds::Toast>

### Title and description only

The title or description should contain the Toast color type, e.g., “Warning,” if no icon is present.

<Kds::Toast @color="warning" @icon={{false}} @onDismiss={{this.noop}} as |T|>
  <T.Title>Warning: the action could not be completed</T.Title>
</Kds::Toast>

### With actions

<Kds::Toast @color="success" @icon="check-circle" @onDismiss={{this.noop}} as |T|>
  <T.Title>Toast with actions</T.Title>
  <T.Description>Lorem ipsum dolar sit amet, consectetur adi.</T.Description>
  <T.Button @text="Button" @color="secondary" />
  <T.LinkStandalone @color="secondary" @icon="plus" @iconPosition="leading" @text="Link text" @href="#" />
</Kds::Toast>

### With generic content

<Kds::Toast @color="success" @icon="check-circle" @onDismiss={{this.noop}} as |T|>
  <T.Title>Toast with extra/custom content</T.Title>
  <T.Description>
    In special cases, you can pass extra content to the Toast using the
    <code>A.Generic</code>
    contextual component.
  </T.Description>
  <T.Generic>
    <Doc::Placeholder @text="some generic content" @height="50" @background="#eee" />
  </T.Generic>
</Kds::Toast>
