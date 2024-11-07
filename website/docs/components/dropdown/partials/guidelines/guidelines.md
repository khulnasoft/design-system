## Usage

### When to use

- To display a list of actions or links under a single button toggle.
- To allow singular or multiple selection outside of a form, such as within filtering.
- To provide the user with a way to easily switch context within the application.

### When not to use

- In forms when providing the user with options to choose from, consider [Select](/components/form/select).

## Toggle

### Types

Toggles come in two variant types: **button** and **icon**.

<Doc::Layout @spacing="24px">
  <Kds::Dropdown as |D|>
    <D.ToggleButton @text="Primary" />
    <D.Interactive>Item One</D.Interactive>
    <D.Interactive>Item Two</D.Interactive>
    <D.Interactive>Item Three</D.Interactive>
    <D.Interactive>Item Four</D.Interactive>
  </Kds::Dropdown>
  <Kds::Dropdown as |D|>
    <D.ToggleIcon @icon="user" @text="user menu" />
    <D.Interactive>Item One</D.Interactive>
    <D.Interactive>Item Two</D.Interactive>
    <D.Interactive>Item Three</D.Interactive>
    <D.Interactive>Item Four</D.Interactive>
  </Kds::Dropdown>
</Doc::Layout>

### Size

ToggleButtons come in two sizes: **small** and **medium**. This allows for placement in ButtonSets with buttons of the same size.

<Doc::Layout @spacing="24px" @direction="vertical">
  <Kds::ButtonSet>
    <Kds::Dropdown as |D|>
      <D.ToggleButton @text="Primary" @size="small"/>
      <D.Interactive>Item One</D.Interactive>
      <D.Interactive>Item Two</D.Interactive>
      <D.Interactive>Item Three</D.Interactive>
      <D.Interactive>Item Four</D.Interactive>
    </Kds::Dropdown>
    <Kds::Dropdown as |D|>
      <D.ToggleButton @text="Secondary" @color="secondary" @size="small" />
      <D.Interactive>Item One</D.Interactive>
      <D.Interactive>Item Two</D.Interactive>
      <D.Interactive>Item Three</D.Interactive>
      <D.Interactive>Item Four</D.Interactive>
    </Kds::Dropdown>
  </Kds::ButtonSet>
  <Kds::ButtonSet>
    <Kds::Dropdown as |D|>
      <D.ToggleButton @text="Primary" />
      <D.Interactive>Item One</D.Interactive>
      <D.Interactive>Item Two</D.Interactive>
      <D.Interactive>Item Three</D.Interactive>
      <D.Interactive>Item Four</D.Interactive>
    </Kds::Dropdown>
    <Kds::Dropdown as |D|>
      <D.ToggleButton @text="Secondary" @color="secondary" />
      <D.Interactive>Item One</D.Interactive>
      <D.Interactive>Item Two</D.Interactive>
      <D.Interactive>Item Three</D.Interactive>
      <D.Interactive>Item Four</D.Interactive>
    </Kds::Dropdown>
  </Kds::ButtonSet>
</Doc::Layout>

ToggleIcons come in two sizes: **small** and **medium**.

!!! Info

While we provide a small size variant, we recommend only using this for the Overflow menu within [Tables](/components/table) because the icons and images start to become unrecognizable in smaller sizes.
!!!

<Doc::Layout @spacing="24px">
  <Kds::Dropdown as |D|>
    <D.ToggleIcon @icon="more-horizontal" @size="small" @text="Overflow Options" @hasChevron={{false}} />
    <D.Interactive>Item One</D.Interactive>
    <D.Interactive>Item Two</D.Interactive>
    <D.Interactive>Item Three</D.Interactive>
    <D.Interactive>Item Four</D.Interactive>
  </Kds::Dropdown>
  <Kds::Dropdown as |D|>
    <D.ToggleIcon @icon="user" @text="user menu" />
    <D.Interactive>Item One</D.Interactive>
    <D.Interactive>Item Two</D.Interactive>
    <D.Interactive>Item Three</D.Interactive>
    <D.Interactive>Item Four</D.Interactive>
  </Kds::Dropdown>
</Doc::Layout>

### Chevron usage

Open Toggles use icon `chevron-up`, while closed Toggles use `chevron-down`.

ToggleButtons require a visible chevron to indicate interactivity and provide distinction between Dropdowns and standard Buttons.

![Example of open and closed dropdowns](/assets/components/dropdown/dropdown-button-chevrons.png =286x*)

We strongly recommend providing visible chevrons on most instances of ToggleIcons to indicate interactivity. That said, it’s common to see ToggleIcons that use the `more-horizontal` icon without chevrons. Their placement, usually in the last column of a [Table](/components/table), is typically indicative of this type of interaction.

![Example of open and closed dropdowns](/assets/components/dropdown/dropdown-icon-chevrons.png =750x*)

## List

### Placement

Lists can be positioned to the left or right of the Toggle, and above or below the Toggle to fit more appropriately within the UI. Lists do not currently have collision detection.

![Dropdown list placement examples](/assets/components/dropdown/dropdown-placement.png =963x*)

### Size

#### Width

By default, Lists have a minimum width of 200px and a maximum width of 400px. This means if there’s a long string in a ListItem, the List will automatically expand up to 400px to accommodate the content before it wraps.

<div class="kds-dropdown__content">
  <ul class="kds-dropdown__list">
    <Kds::Dropdown::ListItem::Title @text="Signed in as" />
    <Kds::Dropdown::ListItem::Description @text="name@email.com" />
    <Kds::Dropdown::ListItem::Separator />
    <Kds::Dropdown::ListItem::Interactive>User settings</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Interactive>Admin</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Interactive>Sign out</Kds::Dropdown::ListItem::Interactive>
  </ul>
</div>

If you do not want the width of the List to expand automatically to accommodate the widest ListItem, you can indicate a specific width between 200px–400px.

<div class="kds-dropdown__content" style="width: 320px">
  <ul class="kds-dropdown__list">
    <Kds::Dropdown::ListItem::Title @text="Consul version v1.10.6" />
    <Kds::Dropdown::ListItem::Interactive @icon="sync">Update Consul version</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Interactive @icon="edit">Edit cluster</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Separator />
    <Kds::Dropdown::ListItem::Title @text="Import to Terraform" />
    <Kds::Dropdown::ListItem::Description @text="Copy and run this command in Terraform to import and manage this resource via our Terraform Provider" />
    <Kds::Dropdown::ListItem::Generic>
      <Kds::Link::Standalone @color="primary" @text="Docs: Import usage" @icon="docs-link" @iconPosition="trailing" @href="#" />
    </Kds::Dropdown::ListItem::Generic>
    <Kds::Dropdown::ListItem::CopyItem @text="terraform import hcp_connect" />
    <Kds::Dropdown::ListItem::Separator />
    <Kds::Dropdown::ListItem::Interactive @color="critical" @icon="trash">Delete cluster</Kds::Dropdown::ListItem::Interactive>
  </ul>
</div>

#### Height

The height of the ListContainer is automatically determined based on the contents, but the height can also be set manually. We recommend setting the height manually if you know the list will be long. In code, the `@height` property actually acts as a `max-height`.

<div class="kds-dropdown__content" style="height: 275px">
  <ul class="kds-dropdown__list">
    <Kds::Dropdown::ListItem::Checkbox @value="Planned">Planned</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Policy override">Policy override</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Policy checked">Policy checked</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Cost estimated">Cost estimated</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Errored">Errored</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Fetched">Fetched</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Planning">Planning</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Planned">Planned</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Policy override">Policy override</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Policy checked">Policy checked</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Cost estimated">Cost estimated</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Errored">Errored</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Fetched">Fetched</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Planning">Planning</Kds::Dropdown::ListItem::Checkbox>
  </ul>
</div>


### Header

A Header provides a fixed space at the top of the List. Typically, Headers house a search feature that allows the user to search/filter through the available options in the list. This is great for really long lists when filtering on complex datasets.

<div class="kds-dropdown__content">
  <Kds::Dropdown::Header @hasDivider={{true}}>
    <Kds::Form::TextInput::Base @type="search" placeholder="Search" />
  </Kds::Dropdown::Header>
  <ul class="kds-dropdown__list">
    <Kds::Dropdown::ListItem::Checkbox @value="Planned">Planned</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Policy override">Policy override</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Policy checked">Policy checked</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Cost estimated">Cost estimated</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Errored">Errored</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Fetched">Fetched</Kds::Dropdown::ListItem::Checkbox>
  </ul>
</div>

### Footer

A Footer provides a fixed space at the bottom of the List. Typically, Footers house actions related to the ListItems, e.g., when found in a filtering pattern an "Apply" Button can be used to submit the selections.

<div class="kds-dropdown__content">
  <ul class="kds-dropdown__list">
    <Kds::Dropdown::ListItem::Checkbox @value="Planned">Planned</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Policy override">Policy override</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Policy checked">Policy checked</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Cost estimated">Cost estimated</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Errored">Errored</Kds::Dropdown::ListItem::Checkbox>
    <Kds::Dropdown::ListItem::Checkbox @value="Fetched">Fetched</Kds::Dropdown::ListItem::Checkbox>
  </ul>
  <Kds::Dropdown::Footer @hasDivider={{true}}>
    <Kds::ButtonSet>
      <Kds::Button @text="Apply" type="submit" @size="small" @isFullWidth={{true}} />
      <Kds::Button @text="Cancel" @color="secondary" @size="small" @isFullWidth={{true}} />
    </Kds::ButtonSet>
  </Kds::Dropdown::Footer>
</div>

## ListItem

### Types

For maximum flexibility, we offer a variety of ListItems options.

#### Interactive ListItems

Use Interactive ListItems for actions (buttons) or links.

- Use `Interactive - Critical` for destructive actions.
- Use `Interactive - Action` for everything else.

![Interactive ListItem types](/assets/components/dropdown/dropdown-listitem-types-interactive.png =449x*)

#### Selection ListItems

Selection ListItems allow the user to select one or more options within a Dropdown.

- Use `Checkmark` for switching context, e.g., organization switchers, project switchers, etc. Use for single selection only, as it doesn't provide enough indication that multi-selection is possible. For multi-selection, use `Checkbox`.
- Use `Checkbox` for multi-selection within a form or larger filter pattern.
- Use `Radio` for single selection within a form or larger filter pattern.

![Selection ListItem types](/assets/components/dropdown/dropdown-listitem-types-selection.png =396x*)

!!! Do

Use `Checkmark` for context switching.

![Example of proper checkmark list items](/assets/components/dropdown/dropdown-interactive-contextswitcher-do.png =280x*)
!!!

!!! Dont

Don't use `Checkmark` instead of `Radio` in larger filter patterns.

![Example of incorrect checkmark list items](/assets/components/dropdown/dropdown-interactive-filter-dont.png =768x*)
!!!

#### Non-interactive

Non-interactive ListItems help provide structure and context to a Dropdown. Types include: `Description`, `Loading`, `Separator`, and `Title`.

![Non-interactive ListItem types](/assets/components/dropdown/dropdown-listitem-types-noninteractive.png =449x*)

!!! Do

Users may not understand why something is taking additional time to load. If possible, determine what should be displayed prior to the user opening the dropdown (e.g., on page load). If that is not possible, provide an informative loading message.

![Example of loading list item](/assets/components/dropdown/dropdown-loading-do.png =248x*)
!!!

#### Generic

The Generic ListItem allows you to add generic content in place of a ListItem. It includes predefined left and right padding to ensure proper alignment with other ListItems in the List.

!!! Warning

Be careful not to misuse or overuse the Generic ListItem. Relying on this escape hatch too often could result in an overly complex Dropdown.
!!!

![Generic ListItem type](/assets/components/dropdown/dropdown-listitem-types-generic.png =449x*)

### Icon usage

Icons in ListItems are optional. Generally, we recommend letting the text speak for itself, but icons can add value in the following situations:

- When they reinforce the content, e.g., `edit` for an edit or rename action.
- When using Interactive ListItems, a `trailingIcon` can indicate that a link is external.
- When using Critical ListItems; read more about [how color blind users see critical actions](/components/dropdown?tab=accessibility) in our UIs.
- To avoid inconsistent icon use within the same List. Instead use icons in all ListItems. Doing so keeps the text aligned so the eye can scan the list of options more easily.

!!! Do

Use icons consistently and when they reinforce the content.

<div class="kds-dropdown__content">
  <ul class="kds-dropdown__list">
    <Kds::Dropdown::ListItem::Interactive @color="action" @icon="edit">Rename cluster</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Interactive @color="action" @icon="reload">Restore cluster</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Interactive @color="action" @icon="github" @trailingIcon="external-link">Reference cluster</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Separator />
    <Kds::Dropdown::ListItem::Interactive @color="critical" @icon="trash">Delete cluster</Kds::Dropdown::ListItem::Interactive>
  </ul>
</div>
!!!

!!! Dont

Avoid inconsistent icon use.

<div class="kds-dropdown__content">
  <ul class="kds-dropdown__list">
    <Kds::Dropdown::ListItem::Interactive @color="action">Rename cluster</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Interactive @color="action" @icon="reload">Restore cluster</Kds::Dropdown::ListItem::Interactive>
    <Kds::Dropdown::ListItem::Separator />
    <Kds::Dropdown::ListItem::Interactive @color="critical" @icon="trash">Delete cluster</Kds::Dropdown::ListItem::Interactive>
  </ul>
</div>
!!!

### Badge usage

[Badges](/components/badge) in Interactive ListItems are optional. We recommend using only the `small` Badge option to align more closely with the text line height. Badges should be used sparingly and only when their use adds contextual value. Examples of appropriate use of Badge inside an Interactive ListItem include:

- When an item is in beta or behind a feature flag, i.e., a new item that users should be able to locate easily.
- When an item has vital information that users should be able to see at a glance, i.e., a unique status.
- When an item should be distinguished from others in the list, e.g., an item view is Public vs Private.

![Dropdown use case examples](/assets/components/dropdown/dropdown-interactive-badge-example.png)

!!! Info

The Figma component will not fully reflect the Badge wrapping behavior expected in the Ember component due to current known limitations in Figma’s auto layout settings.
!!!

Refer to the [Badge guidelines](/components/badge) to help inform choices around color and icon use. 

### Content

While there are no character limits for ListItems, we recommend keeping them short and concise so the List is easy to scan.

## Critical action patterns

We recommend adding a second confirmation layer after the user clicks “Delete” (e.g., showing a confirmation Modal that requires the user to take another action before proceeding). This safeguards against accidental clicks by requiring users to confirm the destructive action.

!!! Do

![example of how to use a second confirmation layer](/assets/components/dropdown/dropdown-example-do.png =780x*)
!!!

!!! Dont

![example of how not to use a second confirmation layer](/assets/components/dropdown/dropdown-example-dont.png =507x*)
!!!