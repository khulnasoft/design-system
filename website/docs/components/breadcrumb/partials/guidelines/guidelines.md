## Usage

### When to use

- To display the hierarchy and location of the current page.
- While not required for every page, a breadcrumb is highly encouraged for the majority of pages with the exception of high-level overviews and dedicated workflows.

### When not to use

- As links outside of the page header.
- Within a body of text, consider [Inline Link](/components/link/inline).
- As a standalone link or within a [Button Set](/components/button-set), consider [Standalone Link](/components/link/standalone).

## Item types

### Text only

<div>
	<Kds::Breadcrumb>
  	<Kds::Breadcrumb::Item @text="Level 1" />
  	<Kds::Breadcrumb::Item @text="Level 2" />
  	<Kds::Breadcrumb::Item @text="Level 3" />
  </Kds::Breadcrumb>
</div>

### Current page

The last item in a the breadcrumb should always be the current page, and it should not be interactive.

<div>
	<Kds::Breadcrumb aria-label="breadcrumb with current page">
  	<Kds::Breadcrumb::Item @text="Level 1" />
  	<Kds::Breadcrumb::Item @text="Level 2" />
  	<Kds::Breadcrumb::Item @text="Level 3" />
    <Kds::Breadcrumb::Item @text="Current" @current={{true}} />
  </Kds::Breadcrumb>
</div>

### With icon

<div>
	<Kds::Breadcrumb aria-label="breadcrumb with icon">
  	<Kds::Breadcrumb::Item @text="Level 1" @icon="org" />
  	<Kds::Breadcrumb::Item @text="Level 2" @icon="folder" />
  	<Kds::Breadcrumb::Item @text="Level 3" @icon="user" />
  </Kds::Breadcrumb>
</div>

### Truncation

<div>
	<Kds::Breadcrumb aria-label="breadcrumb with truncation">
		<Kds::Breadcrumb::Item @text="Level 1" />
		<Kds::Breadcrumb::Truncation>
			<Kds::Breadcrumb::Item @text="Level 2" />
		</Kds::Breadcrumb::Truncation>
    <Kds::Breadcrumb::Item @text="Level 3" />
	</Kds::Breadcrumb>
</div>

#### Toggle and menu

The truncated menu will include all of the hidden Breadcrumb Items. Clicking on the toggle or using `enter` or `spacebar` will open the truncated menu.

![Example of the spacing of used in a truncated menu](/assets/components/breadcrumb/breadcrumb-truncated-dropdown.png =366x*)

## Icons

### Number of icons
We recommend only adding icons to the **first three items** to avoid unnecessary visual noise. 

!!! Do
<Kds::Breadcrumb aria-label="breadcrumb recommendations">
  <Kds::Breadcrumb::Item @text="Level one" @icon="org" />
  <Kds::Breadcrumb::Item @text="Level two" @icon="folder" />
  <Kds::Breadcrumb::Item @text="Level three" @icon="org" />
  <Kds::Breadcrumb::Item @text="Level four" />
  <Kds::Breadcrumb::Item @text="Current" @current={{true}} />
</Kds::Breadcrumb>
!!!

!!! Dont
<Kds::Breadcrumb aria-label="breadcrumb example to avoid">
  <Kds::Breadcrumb::Item @text="Level one" @icon="org" />
  <Kds::Breadcrumb::Item @text="Level two" @icon="folder" />
  <Kds::Breadcrumb::Item @text="Level three" @icon="server-cluster" />
  <Kds::Breadcrumb::Item @text="Level four" @icon="user" />
  <Kds::Breadcrumb::Item @text="Current" @icon="pencil-tool" @current={{true}} />
</Kds::Breadcrumb>
!!!

### Icon placement
Icons shouldn’t be placed randomly within the list. If the preceding item doesn’t include an icon, the next item shouldn’t include an icon either.

!!! Do
<Kds::Breadcrumb aria-label="breadcrumb icon placement">
  <Kds::Breadcrumb::Item @text="Level one" @icon="org" />
  <Kds::Breadcrumb::Item @text="Level two" @icon="folder" />
  <Kds::Breadcrumb::Item @text="Level three" @icon="org" />
  <Kds::Breadcrumb::Item @text="Level four" />
  <Kds::Breadcrumb::Item @text="Current" @current={{true}} />
</Kds::Breadcrumb>
!!!

!!! Dont
<Kds::Breadcrumb aria-label="breadcrumb icon placement to avoid">
  <Kds::Breadcrumb::Item @text="Level one" @icon="org" />
  <Kds::Breadcrumb::Item @text="Level two" @icon="folder" />
  <Kds::Breadcrumb::Item @text="Level three" />
  <Kds::Breadcrumb::Item @text="Level four" @icon="org" />
  <Kds::Breadcrumb::Item @text="Current" @current={{true}} />
</Kds::Breadcrumb>
!!!

## Truncation methods

We offer various options for truncation due to depth or lack of space.

### With dropdown

#### Truncate middle

“Truncate middle” houses any number of Breadcrumb Items under a menu in the middle of the Breadcrumb. The number of items displayed before and after truncation depends on the use case and space available within the application.  We recommend this method if needing to truncate the Breadcrumb.

<Kds::Breadcrumb aria-label="breadcrumb truncation middle example">
  <Kds::Breadcrumb::Item @text="Level one" />
  <Kds::Breadcrumb::Item @text="Level two" />
  <Kds::Breadcrumb::Truncation>
    <Kds::Breadcrumb::Item @text="Level three" />
  </Kds::Breadcrumb::Truncation>
  <Kds::Breadcrumb::Item @text="Level four" />
  <Kds::Breadcrumb::Item @text="Current" @current={{true}} />
</Kds::Breadcrumb>

#### Truncate squeeze

“Truncate squeeze” reduces the persistent Breadcrumb Items to the first and last/current items and hides the other items under a menu. We recommend only using this method when space is limited, such as on mobile viewports.

<Kds::Breadcrumb aria-label="breadcrumb truncation squeeze example">
  <Kds::Breadcrumb::Item @text="Level one" />
  <Kds::Breadcrumb::Truncation>
    <Kds::Breadcrumb::Item @text="Level two"/>
  </Kds::Breadcrumb::Truncation>
  <Kds::Breadcrumb::Item @text="Current" @current={{true}} />
</Kds::Breadcrumb>

### Width-based

Each text-based item can truncate using a pixel-based max-width. We recommend this option for items with long text strings. Please be aware there are [serious accessibility concerns](/components/copy/snippet?tab=accessibility) with using this feature.

<Kds::Breadcrumb @itemsCanWrap={{false}} aria-label="breadcrumb width based">
  <Kds::Breadcrumb::Item @text="Level one" />
  <Kds::Breadcrumb::Item @text="Level two" />
  <Kds::Breadcrumb::Item @text="Level three truncation" @maxWidth="120px" />
  <Kds::Breadcrumb::Item @text="Level four" />
  <Kds::Breadcrumb::Item @text="Current" @current={{true}} />
</Kds::Breadcrumb>