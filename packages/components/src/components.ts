/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

// This file is use to expose public components/subcomponents and their types to the consumers of this package.

// -----------------------------------------------------------
// ### COMPONENTS
// -----------------------------------------------------------

// Accordion
export { default as KdsAccordion } from './components/kds/accordion/index.ts';
export { default as KdsAccordionItem } from './components/kds/accordion/item/index.ts';
export * from './components/kds/accordion/types.ts';

// Alert
export { default as KdsAlert } from './components/kds/alert/index.ts';
export { default as KdsAlertDescription } from './components/kds/alert/description.ts';
export { default as KdsAlertTitle } from './components/kds/alert/title.ts';
export * from './components/kds/alert/types.ts';

// AppFooter
export { default as KdsAppFooter } from './components/kds/app-footer/index.ts';
export { default as KdsAppFooterCopyright } from './components/kds/app-footer/copyright.ts';
export { default as KdsAppFooterItem } from './components/kds/app-footer/item.ts';
export { default as KdsAppFooterLegalLinks } from './components/kds/app-footer/legal-links.ts';
export { default as KdsAppFooterLink } from './components/kds/app-footer/link.ts';
export { default as KdsAppFooterStatusLink } from './components/kds/app-footer/status-link.ts';
export * from './components/kds/app-footer/types.ts';

// AppHeader
export { default as KdsAppHeader } from './components/kds/app-header/index.ts';
export { default as KdsAppHeaderHomeLink } from './components/kds/app-header/home-link.ts';
export { default as KdsAppHeaderMenuButton } from './components/kds/app-header/menu-button.ts';

// ApplicationState
export { default as KdsApplicationState } from './components/kds/application-state/index.ts';
export { default as KdsApplicationStateBody } from './components/kds/application-state/body.ts';
export { default as KdsApplicationStateFooter } from './components/kds/application-state/footer.ts';
export { default as KdsApplicationStateHeader } from './components/kds/application-state/header.ts';
export { default as KdsApplicationStateMedia } from './components/kds/application-state/media.ts';
export * from './components/kds/application-state/types.ts';

// Badge
export { default as KdsBadge } from './components/kds/badge/index.ts';
export * from './components/kds/badge/types.ts';

// BadgeCount
export { default as KdsBadgeCount } from './components/kds/badge-count/index.ts';
export * from './components/kds/badge-count/types.ts';

// Breadcrumb
export { default as KdsBreadcrumb } from './components/kds/breadcrumb/index.ts';
export { default as KdsBreadcrumbItem } from './components/kds/breadcrumb/item.ts';
export { default as KdsBreadcrumbTruncation } from './components/kds/breadcrumb/truncation.ts';

// Button
export { default as KdsButton } from './components/kds/button/index.ts';

// ButtonSet
export { default as KdsButtonSet } from './components/kds/button-set/index.ts';

// Card
export { default as KdsCardContainer } from './components/kds/card/container.ts';
export * from './components/kds/card/types.ts';

// CodeBlock
export { default as KdsCodeBlock } from './components/kds/code-block/index.ts';
export { default as KdsCodeBlockCopyButton } from './components/kds/code-block/copy-button.ts';
export { default as KdsCodeBlockDescription } from './components/kds/code-block/description.ts';
export { default as KdsCodeBlockTitle } from './components/kds/code-block/title.ts';
export * from './components/kds/code-block/types.ts';

// CopyButton
export { default as KdsCopyButton } from './components/kds/copy/button/index.ts';
export * from './components/kds/copy/button/types.ts';

// CopySnippet
export { default as KdsCopySnippet } from './components/kds/copy/snippet/index.ts';
export * from './components/kds/copy/snippet/types.ts';

// Dropdown
export { default as KdsDropdown } from './components/kds/dropdown/index.ts';
export { default as KdsDropdownFooter } from './components/kds/dropdown/footer.ts';
export { default as KdsDropdownHeader } from './components/kds/dropdown/header.ts';
export { default as KdsDropdownListItemCheckbox } from './components/kds/dropdown/list-item/checkbox.ts';
export { default as KdsDropdownListItemCheckmark } from './components/kds/dropdown/list-item/checkmark.ts';
export { default as KdsDropdownListItemCopyItem } from './components/kds/dropdown/list-item/copy-item.ts';
export { default as KdsDropdownListItemDescription } from './components/kds/dropdown/list-item/description.ts';
export { default as KdsDropdownListItemGeneric } from './components/kds/dropdown/list-item/generic.ts';
export { default as KdsDropdownListItemInteractive } from './components/kds/dropdown/list-item/interactive.ts';
export { default as KdsDropdownListItemRadio } from './components/kds/dropdown/list-item/radio.ts';
export { default as KdsDropdownListItemSeparator } from './components/kds/dropdown/list-item/separator.ts';
export { default as KdsDropdownListItemTitle } from './components/kds/dropdown/list-item/title.ts';
export { default as KdsDropdownToggleButton } from './components/kds/dropdown/toggle/button.ts';
export { default as KdsDropdownToggleIcon } from './components/kds/dropdown/toggle/icon.ts';
export * from './components/kds/dropdown/list-item/types.ts';
export * from './components/kds/dropdown/toggle/types.ts';
export * from './components/kds/dropdown/types.ts';

// Flyout
export { default as KdsFlyout } from './components/kds/flyout/index.ts';
export * from './components/kds/flyout/types.ts';

// Form > Base elements
export { default as KdsFormCharacterCount } from './components/kds/form/character-count/index.ts';
export { default as KdsFormError } from './components/kds/form/error/index.ts';
export { default as KdsFormErrorMessage } from './components/kds/form/error/message.ts';
export { default as KdsFormField } from './components/kds/form/field/index.ts';
export { default as KdsFormFieldset } from './components/kds/form/fieldset/index.ts';
export { default as KdsFormHelperText } from './components/kds/form/helper-text/index.ts';
export { default as KdsFormIndicator } from './components/kds/form/indicator/index.ts';
export { default as KdsFormLabel } from './components/kds/form/label/index.ts';
export { default as KdsFormLegend } from './components/kds/form/legend/index.ts';
export { default as KdsFormVisibilityToggle } from './components/kds/form/visibility-toggle/index.ts';
export * from './components/kds/form/field/types.ts';
export * from './components/kds/form/fieldset/types.ts';

// Form > Checkbox
export { default as KdsFormCheckboxBase } from './components/kds/form/checkbox/base.ts';
export { default as KdsFormCheckboxField } from './components/kds/form/checkbox/field.ts';
export { default as KdsFormCheckboxGroup } from './components/kds/form/checkbox/group.ts';

// Form > FileInput
export { default as KdsFormFileInputBase } from './components/kds/form/file-input/base.ts';
export { default as KdsFormFileInputField } from './components/kds/form/file-input/field.ts';

// Form > MaskedInput
export { default as KdsFormMaskedInputBase } from './components/kds/form/masked-input/base.ts';
export { default as KdsFormMaskedInputField } from './components/kds/form/masked-input/field.ts';

// Form > Radio
export { default as KdsFormRadioBase } from './components/kds/form/radio/base.ts';
export { default as KdsFormRadioField } from './components/kds/form/radio/field.ts';
export { default as KdsFormRadioGroup } from './components/kds/form/radio/group.ts';

// Form > RadioCard
export { default as KdsFormRadioCard } from './components/kds/form/radio-card/index.ts';
export { default as KdsFormRadioCardGroup } from './components/kds/form/radio-card/group.ts';
export { default as KdsFormRadioCardDescription } from './components/kds/form/radio-card/description.ts';
export { default as KdsFormRadioCardLabel } from './components/kds/form/radio-card/label.ts';
export * from './components/kds/form/radio-card/types.ts';

// Form > Select
export { default as KdsFormSelectBase } from './components/kds/form/select/base.ts';
export { default as KdsFormSelectField } from './components/kds/form/select/field.ts';

// Form > SuperSelect
export { default as KdsFormSuperSelectSingleBase } from './components/kds/form/super-select/single/base.ts';
export { default as KdsFormSuperSelectSingleField } from './components/kds/form/super-select/single/field.ts';
export { default as KdsFormSuperSelectMultipleBase } from './components/kds/form/super-select/multiple/base.ts';
export { default as KdsFormSuperSelectMultipleField } from './components/kds/form/super-select/multiple/field.ts';
export { default as KdsFormSuperSelectAfterOptions } from './components/kds/form/super-select/after-options.ts';
export { default as KdsFormSuperSelectOptionGroup } from './components/kds/form/super-select/option-group.ts';
export { default as KdsFormSuperSelectPlaceholder } from './components/kds/form/super-select/placeholder.ts';
export * from './components/kds/form/super-select/types.ts';

// Form > Textarea
export { default as KdsFormTextareaBase } from './components/kds/form/textarea/base.ts';
export { default as KdsFormTextareaField } from './components/kds/form/textarea/field.ts';

// Form > TextInput
export { default as KdsFormTextInputBase } from './components/kds/form/text-input/base.ts';
export { default as KdsFormTextInputField } from './components/kds/form/text-input/field.ts';
export * from './components/kds/form/text-input/types.ts';

// Form > Toggle
export { default as KdsFormToggleBase } from './components/kds/form/toggle/base.ts';
export { default as KdsFormToggleField } from './components/kds/form/toggle/field.ts';
export { default as KdsFormToggleGroup } from './components/kds/form/toggle/group.ts';

// Icon
export { default as KdsIcon } from './components/kds/icon/index.ts';
export * from './components/kds/icon/types.ts';

// IconTile
export { default as KdsIconTile } from './components/kds/icon-tile/index.ts';
export * from './components/kds/icon-tile/types.ts';

// Link
export { default as KdsLinkInline } from './components/kds/link/inline.ts';
export { default as KdsLinkStandalone } from './components/kds/link/standalone.ts';
export * from './components/kds/link/types.ts';

// Modal
export { default as KdsModal } from './components/kds/modal/index.ts';
export * from './components/kds/modal/types.ts';

// PageHeader
export { default as KdsPageHeader } from './components/kds/page-header/index.ts';
export { default as KdsPageHeaderActions } from './components/kds/page-header/actions.ts';
export { default as KdsPageHeaderBadges } from './components/kds/page-header/badges.ts';
export { default as KdsPageHeaderDescription } from './components/kds/page-header/description.ts';
export { default as KdsPageHeaderSubtitle } from './components/kds/page-header/subtitle.ts';
export { default as KdsPageHeaderTitle } from './components/kds/page-header/title.ts';

// Pagination
export { default as KdsPaginationCompact } from './components/kds/pagination/compact/index.ts';
export { default as KdsPaginationInfo } from './components/kds/pagination/info/index.ts';
export { default as KdsPaginationNavArrow } from './components/kds/pagination/nav/arrow.ts';
export { default as KdsPaginationNavEllipsis } from './components/kds/pagination/nav/ellipsis.ts';
export { default as KdsPaginationNavNumber } from './components/kds/pagination/nav/number.ts';
export { default as KdsPaginationNumbered } from './components/kds/pagination/numbered/index.ts';
export { default as KdsPaginationSizeSelector } from './components/kds/pagination/size-selector/index.ts';
export * from './components/kds/pagination/types.ts';

// Reveal
export { default as KdsReveal } from './components/kds/reveal/index.ts';
export { default as KdsRevealToggleButton } from './components/kds/reveal/toggle/button.ts';

// RichTooltip
export { default as KdsRichTooltip } from './components/kds/rich-tooltip/index.ts';
export { default as KdsRichTooltipBubble } from './components/kds/rich-tooltip/bubble.ts';
export { default as KdsRichTooltipToggle } from './components/kds/rich-tooltip/toggle.ts';
export * from './components/kds/rich-tooltip/types.ts';

// SegmentedGroup
export { default as KdsSegmentedGroup } from './components/kds/segmented-group/index.ts';

// Separator
export { default as KdsSeparator } from './components/kds/separator/index.ts';
export * from './components/kds/separator/types.ts';

// SideNav
export { default as KdsSideNav } from './components/kds/side-nav/index.ts';
export { default as KdsSideNavBase } from './components/kds/side-nav/base.ts';
export { default as KdsSideNavHeader } from './components/kds/side-nav/header/index.ts';
export { default as KdsSideNavHeaderHomeLink } from './components/kds/side-nav/header/home-link.ts';
export { default as KdsSideNavHeaderIconButton } from './components/kds/side-nav/header/icon-button.ts';
export { default as KdsSideNavList } from './components/kds/side-nav/list/index.ts';
export { default as KdsSideNavListBackLink } from './components/kds/side-nav/list/back-link.ts';
export { default as KdsSideNavListItem } from './components/kds/side-nav/list/item.ts';
export { default as KdsSideNavListLink } from './components/kds/side-nav/list/link.ts';
export { default as KdsSideNavListTitle } from './components/kds/side-nav/list/title.ts';
export { default as KdsSideNavPortal } from './components/kds/side-nav/portal/index.ts';
export { default as KdsSideNavPortalTarget } from './components/kds/side-nav/portal/target.ts';
export { default as KdsSideNavToggleButton } from './components/kds/side-nav/toggle-button.ts';

// Stepper
export { default as KdsStepperStepIndicator } from './components/kds/stepper/step/indicator.ts';
export { default as KdsStepperTaskIndicator } from './components/kds/stepper/task/indicator.ts';
export * from './components/kds/stepper/types.ts';

// Table
export { default as KdsTable } from './components/kds/table/index.ts';
export { default as KdsTableTd } from './components/kds/table/td.ts';
export { default as KdsTableTh } from './components/kds/table/th.ts';
export { default as KdsTableThButtonSort } from './components/kds/table/th-button-sort.ts';
export { default as KdsTableThButtonTooltip } from './components/kds/table/th-button-tooltip.ts';
export { default as KdsTableThSelectable } from './components/kds/table/th-selectable.ts';
export { default as KdsTableThSort } from './components/kds/table/th-sort.ts';
export { default as KdsTableTr } from './components/kds/table/tr.ts';
export * from './components/kds/table/types.ts';

// Tabs
export { default as KdsTabs } from './components/kds/tabs/index.ts';
export { default as KdsTabsPanel } from './components/kds/tabs/panel.ts';
export { default as KdsTabsTab } from './components/kds/tabs/tab.ts';
export * from './components/kds/tabs/types.ts';

// Tag
export { default as KdsTag } from './components/kds/tag/index.ts';
export * from './components/kds/tag/types.ts';

// Text
export { default as KdsText } from './components/kds/text/index.ts';
export { default as KdsTextBody } from './components/kds/text/body.ts';
export { default as KdsTextCode } from './components/kds/text/code.ts';
export { default as KdsTextDisplay } from './components/kds/text/display.ts';
export * from './components/kds/text/types.ts';

// Toast
export { default as KdsToast } from './components/kds/toast/index.ts';

// TooltipButton
export { default as KdsTooltipButton } from './components/kds/tooltip-button/index.ts';
export * from './components/kds/tooltip-button/types.ts';

// -----------------------------------------------------------
// ### LAYOUTS
// -----------------------------------------------------------

// AppFrame
export { default as KdsAppFrame } from './components/kds/app-frame/index.ts';
export { default as KdsAppFrameFooter } from './components/kds/app-frame/parts/footer.ts';
export { default as KdsAppFrameHeader } from './components/kds/app-frame/parts/header.ts';
export { default as KdsAppFrameMain } from './components/kds/app-frame/parts/main.ts';
export { default as KdsAppFrameModals } from './components/kds/app-frame/parts/modals.ts';
export { default as KdsAppFrameSidebar } from './components/kds/app-frame/parts/sidebar.ts';

// -----------------------------------------------------------
// ### UTILITIES
// -----------------------------------------------------------

// DialogPrimitive
export { default as KdsDialogPrimitiveBody } from './components/kds/dialog-primitive/body.ts';
export { default as KdsDialogPrimitiveDescription } from './components/kds/dialog-primitive/description.ts';
export { default as KdsDialogPrimitiveFooter } from './components/kds/dialog-primitive/footer.ts';
export { default as KdsDialogPrimitiveHeader } from './components/kds/dialog-primitive/header.ts';
export { default as KdsDialogPrimitiveOverlay } from './components/kds/dialog-primitive/overlay.ts';
export { default as KdsDialogPrimitiveWrapper } from './components/kds/dialog-primitive/wrapper.ts';
export * from './components/kds/dialog-primitive/types.ts';

// DisclosurePrimitive
export { default as KdsDisclosurePrimitive } from './components/kds/disclosure-primitive/index.ts';

// DismissButton
export { default as KdsDismissButton } from './components/kds/dismiss-button/index.ts';

// Interactive
export { default as KdsInteractive } from './components/kds/interactive/index.ts';

// MenuPrimitive
export { default as KdsMenuPrimitive } from './components/kds/menu-primitive/index.ts';

// PopoverPrimitive
export { default as KdsPopoverPrimitive } from './components/kds/popover-primitive/index.ts';
