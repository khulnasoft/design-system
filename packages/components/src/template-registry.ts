/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

//components
import type KdsAccordionComponent from './components/kds/accordion';
import type KdsAccordionItemComponent from './components/kds/accordion/item';
import type KdsAccordionItemButtonComponent from './components/kds/accordion/item/button';
import type KdsAlertComponent from './components/kds/alert';
import type KdsAlertDescriptionComponent from './components/kds/alert/description';
import type KdsAlertTitleComponent from './components/kds/alert/title';
import type KdsAppHeaderComponent from './components/kds/app-header';
import type KdsAppHeaderHomeLinkComponent from './components/kds/app-header/home-link';
import type KdsAppHeaderMenuButtonComponent from './components/kds/app-header/menu-button';
import type KdsAppFooterComponent from './components/kds/app-footer';
import type KdsAppFooterCopyrightComponent from './components/kds/app-footer/copyright';
import type KdsAppFooterItemComponent from './components/kds/app-footer/item';
import type KdsAppFooterLegalLinksComponent from './components/kds/app-footer/legal-links';
import type KdsAppFooterLinkComponent from './components/kds/app-footer/link';
import type KdsAppFooterStatusLinkComponent from './components/kds/app-footer/status-link';
import type KdsBadgeComponent from './components/kds/badge';
import type KdsBadgeCountComponent from './components/kds/badge-count';
import type KdsBreadcrumbComponent from './components/kds/breadcrumb/index.ts';
import type KdsBreadcrumbItemComponent from './components/kds/breadcrumb/item';
import type KdsBreadcrumbTruncationComponent from './components/kds/breadcrumb/truncation.ts';
import type KdsButtonComponent from './components/kds/button';
import type KdsButtonSetComponent from './components/kds/button-set';
import type KdsAppFrameComponent from './components/kds/app-frame';
import type KdsAppFrameFooterComponent from './components/kds/app-frame/parts/footer';
import type KdsAppFrameHeaderComponent from './components/kds/app-frame/parts/header';
import type KdsAppFrameMainComponent from './components/kds/app-frame/parts/main';
import type KdsAppFrameModalsComponent from './components/kds/app-frame/parts/modals';
import type KdsAppFrameSidebarComponent from './components/kds/app-frame/parts/sidebar';

import type KdsAppSideNavComponent from './components/kds/app-side-nav';
import type KdsAppSideNavToggleButtonComponent from './components/kds/app-side-nav/toggle-button';
import type KdsAppSideNavPortalComponent from './components/kds/app-side-nav/portal';
import type KdsAppSideNavPortalTargetComponent from './components/kds/app-side-nav/portal/target';
import type KdsAppSideNavListComponent from './components/kds/app-side-nav/list';
import type KdsAppSideNavListBackLinkComponent from './components/kds/app-side-nav/list/back-link';
import type KdsAppSideNavListItemComponent from './components/kds/app-side-nav/list/item';
import type KdsAppSideNavListLinkComponent from './components/kds/app-side-nav/list/link';
import type KdsAppSideNavListTitleComponent from './components/kds/app-side-nav/list/title';

import type KdsApplicationStateComponent from './components/kds/application-state';
import type KdsApplicationStateBodyComponent from './components/kds/application-state/body';
import type KdsApplicationStateFooterComponent from './components/kds/application-state/footer';
import type KdsApplicationStateHeaderComponent from './components/kds/application-state/header';
import type KdsApplicationStateMediaComponent from './components/kds/application-state/media';
import type KdsCardContainerComponent from './components/kds/card/container.ts';
import type KdsCodeBlockComponent from './components/kds/code-block';
import type KdsCodeBlockCopyButtonComponent from './components/kds/code-block/copy-button';
import type KdsCodeBlockDescriptionComponent from './components/kds/code-block/description';
import type KdsCodeBlockTitleComponent from './components/kds/code-block/title';
import type KdsCopyButtonComponent from './components/kds/copy/button/index';
import type KdsCopySnippetComponent from './components/kds/copy/snippet';
import type KdsDisclosurePrimitiveComponent from './components/kds/disclosure-primitive';
import type KdsDialogPrimitiveBodyComponent from './components/kds/dialog-primitive/body';
import type KdsDialogPrimitiveDescriptionComponent from './components/kds/dialog-primitive/description';
import type KdsDialogPrimitiveFooterComponent from './components/kds/dialog-primitive/footer';
import type KdsDialogPrimitiveHeaderComponent from './components/kds/dialog-primitive/header';
import type KdsDialogPrimitiveOverlayComponent from './components/kds/dialog-primitive/overlay';
import type KdsDialogPrimitiveWrapperComponent from './components/kds/dialog-primitive/wrapper';
import type KdsDismissButtonComponent from './components/kds/dismiss-button';
import type KdsDropdownComponent from './components/kds/dropdown';
import type KdsDropdownFooterComponent from './components/kds/dropdown/footer';
import type KdsDropdownHeaderComponent from './components/kds/dropdown/header';
import type KdsDropdownListItemCheckboxComponent from './components/kds/dropdown/list-item/checkbox';
import type KdsDropdownListItemCheckmarkComponent from './components/kds/dropdown/list-item/checkmark';
import type KdsDropdownListItemCopyItemComponent from './components/kds/dropdown/list-item/copy-item';
import type KdsDropdownListItemDescriptionComponent from './components/kds/dropdown/list-item/description';
import type KdsDropdownListItemGenericComponent from './components/kds/dropdown/list-item/generic';
import type KdsDropdownListItemInteractiveComponent from './components/kds/dropdown/list-item/interactive';
import type KdsDropdownListItemRadioComponent from './components/kds/dropdown/list-item/radio';
import type KdsDropdownListItemSeparatorComponent from './components/kds/dropdown/list-item/separator';
import type KdsDropdownListItemTitleComponent from './components/kds/dropdown/list-item/title';
import type KdsDropdownToggleButtonComponent from './components/kds/dropdown/toggle/button';
import type KdsDropdownToggleChevronComponent from './components/kds/dropdown/toggle/chevron';
import type KdsDropdownToggleIconComponent from './components/kds/dropdown/toggle/icon';
import type KdsFlyoutBodyComponent from './components/kds/flyout/body';
import type KdsFlyoutDescriptionComponent from './components/kds/flyout/description';
import type KdsFlyoutFooterComponent from './components/kds/flyout/footer';
import type KdsFlyoutHeaderComponent from './components/kds/flyout/header';
import type KdsFlyoutComponent from './components/kds/flyout';
import type KdsFormCharacterCountComponent from './components/kds/form/character-count';
import type KdsFormCheckboxBaseComponent from './components/kds/form/checkbox/base';
import type KdsFormCheckboxFieldComponent from './components/kds/form/checkbox/field';
import type KdsFormCheckboxGroupComponent from './components/kds/form/checkbox/group';
import type KdsFormErrorComponent from './components/kds/form/error';
import type KdsFormErrorMessageComponent from './components/kds/form/error/message';
import type KdsFormFieldComponent from './components/kds/form/field';
import type KdsFormFieldsetComponent from './components/kds/form/fieldset';
import type KdsFormFileInputBaseComponent from './components/kds/form/file-input/base';
import type KdsFormFileInputFieldComponent from './components/kds/form/file-input/field';
import type KdsFormHelperTextComponent from './components/kds/form/helper-text';
import type KdsFormIndicatorComponent from './components/kds/form/indicator';
import type KdsFormLabelComponent from './components/kds/form/label';
import type KdsFormLegendComponent from './components/kds/form/legend';
import type KdsFormMaskedInputBaseComponent from './components/kds/form/masked-input/base';
import type KdsFormMaskedInputFieldComponent from './components/kds/form/masked-input/field';
import type KdsFormRadioBaseComponent from './components/kds/form/radio/base';
import type KdsFormRadioFieldComponent from './components/kds/form/radio/field';
import type KdsFormRadioGroupComponent from './components/kds/form/radio/group';
import type KdsFormRadioCardComponent from './components/kds/form/radio-card';
import type KdsFormRadioCardDescriptionComponent from './components/kds/form/radio-card/description';
import type KdsFormRadioCardGroupComponent from './components/kds/form/radio-card/group';
import type KdsFormRadioCardLabelComponent from './components/kds/form/radio-card/label';
import type KdsFormSelectBaseComponent from './components/kds/form/select/base';
import type KdsFormSelectFieldComponent from './components/kds/form/select/field';
import type KdsFormSuperSelectAfterOptionsComponent from './components/kds/form/super-select/after-options';
import type KdsFormSuperSelectOptionGroupComponent from './components/kds/form/super-select/option-group';
import type KdsFormSuperSelectPlaceholderComponent from './components/kds/form/super-select/placeholder';
import type KdsFormSuperSelectSingleBaseComponent from './components/kds/form/super-select/single/base';
import type KdsFormSuperSelectSingleFieldComponent from './components/kds/form/super-select/single/field';
import type KdsFormSuperSelectMultipleBaseComponent from './components/kds/form/super-select/multiple/base';
import type KdsFormSuperSelectMultipleFieldComponent from './components/kds/form/super-select/multiple/field';
import type KdsFormTextInputBaseComponent from './components/kds/form/text-input/base';
import type KdsFormTextInputFieldComponent from './components/kds/form/text-input/field';
import type KdsFormTextareaBaseComponent from './components/kds/form/textarea/base';
import type KdsFormTextareaFieldComponent from './components/kds/form/textarea/field';
import type KdsFormToggleBaseComponent from './components/kds/form/toggle/base';
import type KdsFormToggleFieldComponent from './components/kds/form/toggle/field';
import type KdsFormToggleGroupComponent from './components/kds/form/toggle/group';
import type KdsFormVisibilityToggleComponent from './components/kds/form/visibility-toggle';
import type KdsIconComponent from './components/kds/icon';
import type KdsIconTileComponent from './components/kds/icon-tile';
import type KdsInteractiveComponent from './components/kds/interactive';
import type KdsLinkInlineComponent from './components/kds/link/inline';
import type KdsLinkStandaloneComponent from './components/kds/link/standalone';
import type KdsMenuPrimitiveComponent from './components/kds/menu-primitive';
import type KdsModalBodyComponent from './components/kds/modal/body';
import type KdsModalFooterComponent from './components/kds/modal/footer';
import type KdsModalHeaderComponent from './components/kds/modal/header';
import type KdsModalComponent from './components/kds/modal/';
import type KdsPageHeaderComponent from './components/kds/page-header';
import type KdsPageHeaderActionsComponent from './components/kds/page-header/actions';
import type KdsPageHeaderBadgesComponent from './components/kds/page-header/badges';
import type KdsPageHeaderDescriptionComponent from './components/kds/page-header/description';
import type KdsPageHeaderSubtitleComponent from './components/kds/page-header/subtitle';
import type KdsPageHeaderTitleComponent from './components/kds/page-header/title';
import type KdsPaginationCompactComponent from './components/kds/pagination/compact/index';
import type KdsPaginationControlInfoComponent from './components/kds/pagination/info/index';
import type KdsPaginationControlArrowComponent from './components/kds/pagination/nav/arrow';
import type KdsPaginationControlEllipsisComponent from './components/kds/pagination/nav/ellipsis';
import type KdsPaginationControlNumberComponent from './components/kds/pagination/nav/number';
import type KdsPaginationNumberedComponent from './components/kds/pagination/numbered/index';
import type KdsPaginationSizeSelectorComponent from './components/kds/pagination/size-selector/index';
import type KdsPopoverPrimitiveComponent from './components/kds/popover-primitive';
import type KdsRevealComponent from './components/kds/reveal';
import type KdsRevealToggleButtonComponent from './components/kds/reveal/toggle/button';
import type KdsRichTooltipComponent from './components/kds/rich-tooltip/index.ts';
import type KdsRichTooltipBubbleComponent from './components/kds/rich-tooltip/bubble.ts';
import type KdsRichTooltipToggleComponent from './components/kds/rich-tooltip/toggle.ts';
import type KdsSegmentedGroupComponent from './components/kds/segmented-group';
import type KdsSeparatorComponent from './components/kds/separator';
import type KdsSideNavComponent from './components/kds/side-nav';
import type KdsSideNavBaseComponent from './components/kds/side-nav/base';
import type KdsSideNavToggleButtonComponent from './components/kds/side-nav/toggle-button';
import type KdsSideNavPortalComponent from './components/kds/side-nav/portal';
import type KdsSideNavPortalTargetComponent from './components/kds/side-nav/portal/target';
import type KdsSideNavHeaderComponent from './components/kds/side-nav/header';
import type KdsSideNavHeaderHomeLinkComponent from './components/kds/side-nav/header/home-link';
import type KdsSideNavHeaderIconButtonComponent from './components/kds/side-nav/header/icon-button';
import type KdsSideNavListComponent from './components/kds/side-nav/list';
import type KdsSideNavListBackLinkComponent from './components/kds/side-nav/list/back-link';
import type KdsSideNavListItemComponent from './components/kds/side-nav/list/item';
import type KdsSideNavListLinkComponent from './components/kds/side-nav/list/link';
import type KdsSideNavListTitleComponent from './components/kds/side-nav/list/title';
import type KdsStepperStepIndicatorComponent from './components/kds/stepper/step/indicator';
import type KdsStepperTaskIndicatorComponent from './components/kds/stepper/task/indicator';
import type KdsTableComponent from './components/kds/table';
import type KdsTableTdComponent from './components/kds/table/td';
import type KdsTableThButtonSortComponent from './components/kds/table/th-button-sort';
import type KdsTableThComponent from './components/kds/table/th';
import type KdsTableThButtonTooltipComponent from './components/kds/table/th-button-tooltip';
import type KdsTableThSortComponent from './components/kds/table/th-sort';
import type KdsTableThSelectableComponent from './components/kds/table/th-selectable';
import type KdsTableTrComponent from './components/kds/table/tr';
import type KdsTabsComponent from './components/kds/tabs';
import type KdsTabsPanelComponent from './components/kds/tabs/panel';
import type KdsTabsTabComponent from './components/kds/tabs/tab';
import type KdsTextComponent from './components/kds/text';
import type KdsTextBodyComponent from './components/kds/text/body';
import type KdsTextDisplayComponent from './components/kds/text/display';
import type KdsTagComponent from './components/kds/tag';
import type KdsTooltipButtonComponent from './components/kds/tooltip-button';
import type KdsToastComponent from './components/kds/toast';
import type KdsTextCodeComponent from './components/kds/text/code';
import type KdsYieldComponent from './components/kds/yield';

// helpers
import type KdsLinkToModelsHelper from './helpers/kds-link-to-models.ts';
import type KdsLinkToQueryHelper from './helpers/kds-link-to-query.ts';

// modifiers
import type KdsAnchoredPositionModifier from './modifiers/kds-anchored-position.ts';
import type KdsClipboardModifier from './modifiers/kds-clipboard.ts';
import type KdsRegisterEventModifier from './modifiers/kds-register-event.ts';
import type KdsTooltipModifier from './modifiers/kds-tooltip.ts';

export default interface KdsComponentsRegistry {
  // ----- COMPONENTS ---------------------------------------------------

  // Accordion
  'Kds::Accordion': typeof KdsAccordionComponent;
  'kds/accordion': typeof KdsAccordionComponent;

  'Kds::Accordion::Item': typeof KdsAccordionItemComponent;
  'kds/accordion/item': typeof KdsAccordionItemComponent;

  'Kds::Accordion::Item::Button': typeof KdsAccordionItemButtonComponent;
  'kds/accordion/item/button': typeof KdsAccordionItemButtonComponent;

  // Alert
  'Kds::Alert': typeof KdsAlertComponent;
  'kds/alert': typeof KdsAlertComponent;

  'Kds::Alert::Description': typeof KdsAlertDescriptionComponent;
  'kds/alert/description': typeof KdsAlertDescriptionComponent;

  'Kds::Alert::Title': typeof KdsAlertTitleComponent;
  'kds/alert/title': typeof KdsAlertTitleComponent;

  // AppHeader
  'Kds::AppHeader': typeof KdsAppHeaderComponent;
  'kds/app-header': typeof KdsAppHeaderComponent;

  'Kds::AppHeader::HomeLink': typeof KdsAppHeaderHomeLinkComponent;
  'kds/app-header/home-link': typeof KdsAppHeaderHomeLinkComponent;

  'Kds::AppHeader::MenuButton': typeof KdsAppHeaderMenuButtonComponent;
  'kds/app-header/menu-button': typeof KdsAppHeaderMenuButtonComponent;

  // AppFooter
  'Kds::AppFooter': typeof KdsAppFooterComponent;
  'kds/app-footer': typeof KdsAppFooterComponent;

  'Kds::AppFooter::Copyright': typeof KdsAppFooterCopyrightComponent;
  'kds/app-footer/copyright': typeof KdsAppFooterCopyrightComponent;

  'Kds::AppFooter::Item': typeof KdsAppFooterItemComponent;
  'kds/app-footer/item': typeof KdsAppFooterItemComponent;

  'Kds::AppFooter::LegalLinks': typeof KdsAppFooterLegalLinksComponent;
  'kds/app-footer/legal-links': typeof KdsAppFooterLegalLinksComponent;

  'Kds::AppFooter::Link': typeof KdsAppFooterLinkComponent;
  'kds/app-footer/link': typeof KdsAppFooterLinkComponent;

  'Kds::AppFooter::StatusLink': typeof KdsAppFooterStatusLinkComponent;
  'kds/app-footer/status-link': typeof KdsAppFooterStatusLinkComponent;

  // AppFrame
  'Kds::AppFrame': typeof KdsAppFrameComponent;
  'kds/app-frame': typeof KdsAppFrameComponent;

  'Kds::AppFrame::Footer': typeof KdsAppFrameFooterComponent;
  'kds/app-frame/parts/footer': typeof KdsAppFrameFooterComponent;

  'Kds::AppFrame::Header': typeof KdsAppFrameHeaderComponent;
  'kds/app-frame/parts/header': typeof KdsAppFrameHeaderComponent;

  'Kds::AppFrame::Main': typeof KdsAppFrameMainComponent;
  'kds/app-frame/parts/main': typeof KdsAppFrameMainComponent;

  'Kds::AppFrame::Modals': typeof KdsAppFrameModalsComponent;
  'kds/app-frame/parts/modals': typeof KdsAppFrameModalsComponent;

  'Kds::AppFrame::Sidebar': typeof KdsAppFrameSidebarComponent;
  'kds/app-frame/parts/sidebar': typeof KdsAppFrameSidebarComponent;

  // AppSideNav
  'Kds::AppSideNav': typeof KdsAppSideNavComponent;
  'kds/app-side-nav': typeof KdsAppSideNavComponent;
  KdsAppSideNav: typeof KdsAppSideNavComponent;

  'Kds::AppSideNav::ToggleButton': typeof KdsAppSideNavToggleButtonComponent;
  'kds/app-side-nav/toggle-button': typeof KdsAppSideNavToggleButtonComponent;
  KdsAppSideNavToggleButton: typeof KdsAppSideNavToggleButtonComponent;

  'Kds::AppSideNav::Portal': typeof KdsAppSideNavPortalComponent;
  'kds/app-side-nav/portal': typeof KdsAppSideNavPortalComponent;
  KdsAppSideNavPortal: typeof KdsAppSideNavPortalComponent;

  'Kds::AppSideNav::Portal::Target': typeof KdsAppSideNavPortalTargetComponent;
  'kds/app-side-nav/portal/target': typeof KdsAppSideNavPortalTargetComponent;
  KdsAppSideNavPortalTarget: typeof KdsAppSideNavPortalTargetComponent;

  'Kds::AppSideNav::List': typeof KdsAppSideNavListComponent;
  'kds/app-side-nav/list': typeof KdsAppSideNavListComponent;
  KdsAppSideNavList: typeof KdsAppSideNavListComponent;

  'Kds::AppSideNav::List::BackLink': typeof KdsAppSideNavListBackLinkComponent;
  'kds/app-side-nav/list/back-link': typeof KdsAppSideNavListBackLinkComponent;
  KdsAppSideNavListBackLink: typeof KdsAppSideNavListBackLinkComponent;

  'Kds::AppSideNav::List::Item': typeof KdsAppSideNavListItemComponent;
  'kds/app-side-nav/list/item': typeof KdsAppSideNavListItemComponent;
  KdsAppSideNavListItem: typeof KdsAppSideNavListItemComponent;

  'Kds::AppSideNav::List::Link': typeof KdsAppSideNavListLinkComponent;
  'kds/app-side-nav/list/link': typeof KdsAppSideNavListLinkComponent;
  KdsAppSideNavListLink: typeof KdsAppSideNavListLinkComponent;

  'Kds::AppSideNav::List::Title': typeof KdsAppSideNavListTitleComponent;
  'kds/app-side-nav/list/title': typeof KdsAppSideNavListTitleComponent;
  KdsAppSideNavListTitle: typeof KdsAppSideNavListTitleComponent;

  // ApplicationState
  'Kds::ApplicationState': typeof KdsApplicationStateComponent;
  'kds/application-state': typeof KdsApplicationStateComponent;

  'Kds::ApplicationState::Header': typeof KdsApplicationStateHeaderComponent;
  'kds/application-state/header': typeof KdsApplicationStateHeaderComponent;

  'Kds::ApplicationState::Body': typeof KdsApplicationStateBodyComponent;
  'kds/application-state/body': typeof KdsApplicationStateBodyComponent;

  'Kds::ApplicationState::Footer': typeof KdsApplicationStateFooterComponent;
  'kds/application-state/footer': typeof KdsApplicationStateFooterComponent;

  'Kds::ApplicationState::Media': typeof KdsApplicationStateMediaComponent;
  'kds/application-state/media': typeof KdsApplicationStateMediaComponent;

  // Badge
  'Kds::Badge': typeof KdsBadgeComponent;
  'kds/badge': typeof KdsBadgeComponent;

  // BadgeCount
  'Kds::BadgeCount': typeof KdsBadgeCountComponent;
  'kds/badge-count': typeof KdsBadgeCountComponent;

  // Breadcrumb
  'Kds::Breadcrumb': typeof KdsBreadcrumbComponent;
  'kds/breadcrumb': typeof KdsBreadcrumbComponent;

  'Kds::Breadcrumb::Item': typeof KdsBreadcrumbItemComponent;
  'kds/breadcrumb/item': typeof KdsBreadcrumbItemComponent;

  'Kds::Breadcrumb::Truncation': typeof KdsBreadcrumbTruncationComponent;
  'kds/breadcrumb/truncation': typeof KdsBreadcrumbTruncationComponent;

  // Button
  'Kds::Button': typeof KdsButtonComponent;
  'kds/button': typeof KdsButtonComponent;

  // ButtonSet
  'Kds::ButtonSet': typeof KdsButtonSetComponent;
  'kds/button-set': typeof KdsButtonSetComponent;

  // Card
  'Kds::Card': typeof KdsCardContainerComponent;
  'kds/card': typeof KdsCardContainerComponent;

  // Code Block
  'Kds::CodeBlock': typeof KdsCodeBlockComponent;
  'kds/code-block': typeof KdsCodeBlockComponent;

  'Kds::CodeBlock::CopyButton': typeof KdsCodeBlockCopyButtonComponent;
  'kds/code-block/copy-button': typeof KdsCodeBlockCopyButtonComponent;

  'Kds::CodeBlock::Description': typeof KdsCodeBlockDescriptionComponent;
  'kds/code-block/description': typeof KdsCodeBlockDescriptionComponent;

  'Kds::CodeBlock::Title': typeof KdsCodeBlockTitleComponent;
  'kds/code-block/title': typeof KdsCodeBlockTitleComponent;

  // Copy Button
  'Kds::Copy::Button': typeof KdsCopyButtonComponent;
  'kds/copy/button': typeof KdsCopyButtonComponent;

  // Copy Snippet
  'Kds::Copy::Snippet': typeof KdsCopySnippetComponent;
  'kds/copy/snippet': typeof KdsCopySnippetComponent;

  // DIALOG

  // DialogPrimitiveBody
  'Kds::DialogPrimitive::Body': typeof KdsDialogPrimitiveBodyComponent;
  'kds/dialog-primitive/body': typeof KdsDialogPrimitiveBodyComponent;

  // DialogPrimitiveDescription
  'Kds::DialogPrimitive::Description': typeof KdsDialogPrimitiveDescriptionComponent;
  'kds/dialog-primitive/description': typeof KdsDialogPrimitiveDescriptionComponent;

  // DialogPrimitiveFooter
  'Kds::DialogPrimitive::Footer': typeof KdsDialogPrimitiveFooterComponent;
  'kds/dialog-primitive/footer': typeof KdsDialogPrimitiveFooterComponent;

  // DialogPrimitiveHeader
  'Kds::DialogPrimitive::Header': typeof KdsDialogPrimitiveHeaderComponent;
  'kds/dialog-primitive/header': typeof KdsDialogPrimitiveHeaderComponent;

  // DialogPrimitiveOverlay
  'Kds::DialogPrimitive::Overlay': typeof KdsDialogPrimitiveOverlayComponent;
  'kds/dialog-primitive/overlay': typeof KdsDialogPrimitiveOverlayComponent;

  // DialogPrimitiveWrapper
  'Kds::DialogPrimitive::Wrapper': typeof KdsDialogPrimitiveWrapperComponent;
  'kds/dialog-primitive/wrapper': typeof KdsDialogPrimitiveWrapperComponent;

  // DisclosurePrimitive
  'Kds::DisclosurePrimitive': typeof KdsDisclosurePrimitiveComponent;
  'kds/disclosure-primitive': typeof KdsDisclosurePrimitiveComponent;

  // DismissButton
  'Kds::DismissButton': typeof KdsDismissButtonComponent;
  'kds/dismiss-button': typeof KdsDismissButtonComponent;

  // Dropdown
  'Kds::Dropdown': typeof KdsDropdownComponent;
  'kds/dropdown': typeof KdsDropdownComponent;

  // Dropdown Footer
  'Kds::Dropdown::Footer': typeof KdsDropdownFooterComponent;
  'kds/dropdown/footer': typeof KdsDropdownFooterComponent;

  // Dropdown Header
  'Kds::Dropdown::Header': typeof KdsDropdownHeaderComponent;
  'kds/dropdown/header': typeof KdsDropdownHeaderComponent;

  // Dropdown ListItem Checkbox
  'Kds::Dropdown::ListItem::Checkbox': typeof KdsDropdownListItemCheckboxComponent;
  'kds/dropdown/list-item/checkbox': typeof KdsDropdownListItemCheckboxComponent;

  // Dropdown ListItem Checkmark
  'Kds::Dropdown::ListItem::Checkmark': typeof KdsDropdownListItemCheckmarkComponent;
  'kds/dropdown/list-item/checkmark': typeof KdsDropdownListItemCheckmarkComponent;

  // Dropdown ListItem CopyItem
  'Kds::Dropdown::ListItem::CopyItem': typeof KdsDropdownListItemCopyItemComponent;
  'kds/dropdown/list-item/copy-item': typeof KdsDropdownListItemCopyItemComponent;

  // Dropdown ListItem Description
  'Kds::Dropdown::ListItem::Description': typeof KdsDropdownListItemDescriptionComponent;
  'kds/dropdown/list-item/description': typeof KdsDropdownListItemDescriptionComponent;

  // Dropdown ListItem Generic
  'Kds::Dropdown::ListItem::Generic': typeof KdsDropdownListItemGenericComponent;
  'kds/dropdown/list-item/generic': typeof KdsDropdownListItemGenericComponent;

  // Dropdown ListItem Interactive
  'Kds::Dropdown::ListItem::Interactive': typeof KdsDropdownListItemInteractiveComponent;
  'kds/dropdown/list-item/interactive': typeof KdsDropdownListItemInteractiveComponent;

  // Dropdown ListItem Radio
  'Kds::Dropdown::ListItem::Radio': typeof KdsDropdownListItemRadioComponent;
  'kds/dropdown/list-item/radio': typeof KdsDropdownListItemRadioComponent;

  // Dropdown ListItem Separator
  'Kds::Dropdown::ListItem::Separator': typeof KdsDropdownListItemSeparatorComponent;
  'kds/dropdown/list-item/separator': typeof KdsDropdownListItemSeparatorComponent;

  // Dropdown ListItem Title
  'Kds::Dropdown::ListItem::Title': typeof KdsDropdownListItemTitleComponent;
  'kds/dropdown/list-item/title': typeof KdsDropdownListItemTitleComponent;

  // Dropdown Toggle Button
  'Kds::Dropdown::Toggle::Button': typeof KdsDropdownToggleButtonComponent;
  'kds/dropdown/toggle/button': typeof KdsDropdownToggleButtonComponent;

  // Dropdown Toggle Chevron
  'Kds::Dropdown::Toggle::Chevron': typeof KdsDropdownToggleChevronComponent;
  'kds/dropdown/toggle/chevron': typeof KdsDropdownToggleChevronComponent;

  // Dropdown Toggle Icon
  'Kds::Dropdown::Toggle::Icon': typeof KdsDropdownToggleIconComponent;
  'kds/dropdown/toggle/icon': typeof KdsDropdownToggleIconComponent;

  // Flyout
  'Kds::Flyout': typeof KdsFlyoutComponent;
  'kds/flyout': typeof KdsFlyoutComponent;

  'Kds::Flyout::Body': typeof KdsFlyoutBodyComponent;
  'kds/flyout/body': typeof KdsFlyoutBodyComponent;

  'Kds::Flyout::Description': typeof KdsFlyoutDescriptionComponent;
  'kds/flyout/description': typeof KdsFlyoutDescriptionComponent;

  'Kds::Flyout::Footer': typeof KdsFlyoutFooterComponent;
  'kds/flyout/footer': typeof KdsFlyoutFooterComponent;

  'Kds::Flyout::Header': typeof KdsFlyoutHeaderComponent;
  'kds/flyout/header': typeof KdsFlyoutHeaderComponent;

  // FORM

  // Form CharacterCount
  'Kds::Form::CharacterCount': typeof KdsFormCharacterCountComponent;
  'kds/form/character-count': typeof KdsFormCharacterCountComponent;

  // Form Checkbox
  'Kds::Form::Checkbox::Base': typeof KdsFormCheckboxBaseComponent;
  'kds/form/checkbox/base': typeof KdsFormCheckboxBaseComponent;

  'Kds::Form::Checkbox::Field': typeof KdsFormCheckboxFieldComponent;
  'kds/form/checkbox/field': typeof KdsFormCheckboxFieldComponent;

  'Kds::Form::Checkbox::Group': typeof KdsFormCheckboxGroupComponent;
  'kds/form/checkbox/group': typeof KdsFormCheckboxGroupComponent;

  // Form Error
  'Kds::Form::Error': typeof KdsFormErrorComponent;
  'kds/form/error': typeof KdsFormErrorComponent;

  // Form Error Message
  'Kds::Form::Error::Message': typeof KdsFormErrorMessageComponent;
  'kds/form/error/message': typeof KdsFormErrorMessageComponent;

  // Form Field
  'Kds::Form::Field': typeof KdsFormFieldComponent;
  'kds/form/field': typeof KdsFormFieldComponent;

  // Form Fieldset
  'Kds::Form::Fieldset': typeof KdsFormFieldsetComponent;
  'kds/form/fieldset': typeof KdsFormFieldsetComponent;

  // Form FileInput
  'Kds::Form::FileInput::Base': typeof KdsFormFileInputBaseComponent;
  'kds/form/file-input/base': typeof KdsFormFileInputBaseComponent;

  'Kds::Form::FileInput::Field': typeof KdsFormFileInputFieldComponent;
  'kds/form/file-input/field': typeof KdsFormFileInputFieldComponent;

  // Form HelperText
  'Kds::Form::HelperText': typeof KdsFormHelperTextComponent;
  'kds/form/helper-text': typeof KdsFormHelperTextComponent;

  // Form Indicator
  'Kds::Form::Indicator': typeof KdsFormIndicatorComponent;
  'kds/form/indicator': typeof KdsFormIndicatorComponent;

  // Form Label
  'Kds::Form::Label': typeof KdsFormLabelComponent;
  'kds/form/label': typeof KdsFormLabelComponent;

  // Form Legend
  'Kds::Form::Legend': typeof KdsFormLegendComponent;
  'kds/form/legend': typeof KdsFormLegendComponent;

  // Form MaskedInput
  'Kds::Form::MaskedInput::Base': typeof KdsFormMaskedInputBaseComponent;
  'kds/form/masked-input/base': typeof KdsFormMaskedInputBaseComponent;

  'Kds::Form::MaskedInput::Field': typeof KdsFormMaskedInputFieldComponent;
  'kds/form/masked-input/field': typeof KdsFormMaskedInputFieldComponent;

  // Form Radio
  'Kds::Form::Radio::Base': typeof KdsFormRadioBaseComponent;
  'kds/form/radio/base': typeof KdsFormRadioBaseComponent;

  'Kds::Form::Radio::Field': typeof KdsFormRadioFieldComponent;
  'kds/form/radio/field': typeof KdsFormRadioFieldComponent;

  'Kds::Form::Radio::Group': typeof KdsFormRadioGroupComponent;
  'kds/form/radio/group': typeof KdsFormRadioGroupComponent;

  // Form RadioCard
  'Kds::Form::RadioCard': typeof KdsFormRadioCardComponent;
  'kds/form/radio-card': typeof KdsFormRadioCardComponent;

  'Kds::Form::RadioCard::Description': typeof KdsFormRadioCardDescriptionComponent;
  'kds/form/radio-card/description': typeof KdsFormRadioCardDescriptionComponent;

  'Kds::Form::RadioCard::Group': typeof KdsFormRadioCardGroupComponent;
  'kds/form/radio-card/group': typeof KdsFormRadioCardGroupComponent;

  'Kds::Form::RadioCard::Label': typeof KdsFormRadioCardLabelComponent;
  'kds/form/radio-card/label': typeof KdsFormRadioCardLabelComponent;

  // Form Select
  'Kds::Form::Select::Base': typeof KdsFormSelectBaseComponent;
  'kds/form/select/base': typeof KdsFormSelectBaseComponent;

  'Kds::Form::Select::Field': typeof KdsFormSelectFieldComponent;
  'kds/form/select/field': typeof KdsFormSelectFieldComponent;

  // Form Super Select
  'Kds::Form::SuperSelect::AfterOptions': typeof KdsFormSuperSelectAfterOptionsComponent;
  'kds/form/super-select/after-options': typeof KdsFormSuperSelectAfterOptionsComponent;

  'Kds::Form::SuperSelect::OptionGroup': typeof KdsFormSuperSelectOptionGroupComponent;
  'kds/form/super-select/option-group': typeof KdsFormSuperSelectOptionGroupComponent;

  'Kds::Form::SuperSelect::Placeholder': typeof KdsFormSuperSelectPlaceholderComponent;
  'kds/form/super-select/placeholder': typeof KdsFormSuperSelectPlaceholderComponent;

  'Kds::Form::SuperSelect::Single::Base': typeof KdsFormSuperSelectSingleBaseComponent;
  'kds/form/super-select/single/base': typeof KdsFormSuperSelectSingleBaseComponent;

  'Kds::Form::SuperSelect::Single::Field': typeof KdsFormSuperSelectSingleFieldComponent;
  'kds/form/super-select/single/field': typeof KdsFormSuperSelectSingleFieldComponent;

  'Kds::Form::SuperSelect::Multiple::Base': typeof KdsFormSuperSelectMultipleBaseComponent;
  'kds/form/super-select/multiple/base': typeof KdsFormSuperSelectMultipleBaseComponent;

  'Kds::Form::SuperSelect::Multiple::Field': typeof KdsFormSuperSelectMultipleFieldComponent;
  'kds/form/super-select/multiple/field': typeof KdsFormSuperSelectMultipleFieldComponent;

  // Form TextInput
  'Kds::Form::TextInput::Base': typeof KdsFormTextInputBaseComponent;
  'kds/form/text-input/base': typeof KdsFormTextInputBaseComponent;

  'Kds::Form::TextInput::Field': typeof KdsFormTextInputFieldComponent;
  'kds/form/text-input/field': typeof KdsFormTextInputFieldComponent;

  // Form Textarea
  'Kds::Form::Textarea::Base': typeof KdsFormTextareaBaseComponent;
  'kds/form/textarea/base': typeof KdsFormTextareaBaseComponent;

  'Kds::Form::Textarea::Field': typeof KdsFormTextareaFieldComponent;
  'kds/form/textarea/field': typeof KdsFormTextareaFieldComponent;

  // Form Toggle
  'Kds::Form::Toggle::Base': typeof KdsFormToggleBaseComponent;
  'kds/form/toggle/base': typeof KdsFormToggleBaseComponent;

  'Kds::Form::Toggle::Field': typeof KdsFormToggleFieldComponent;
  'kds/form/toggle/field': typeof KdsFormToggleFieldComponent;

  'Kds::Form::Toggle::Group': typeof KdsFormToggleGroupComponent;
  'kds/form/toggle/group': typeof KdsFormToggleGroupComponent;

  // Form VisibilityToggle
  'Kds::Form::VisibilityToggle': typeof KdsFormVisibilityToggleComponent;
  'kds/form/visibility-toggle': typeof KdsFormVisibilityToggleComponent;

  // Icon
  'Kds::Icon': typeof KdsIconComponent;
  'kds/icon': typeof KdsIconComponent;

  // IconTile
  'Kds::IconTile': typeof KdsIconTileComponent;
  'kds/icon-tile': typeof KdsIconTileComponent;

  // Interactive
  'Kds::Interactive': typeof KdsInteractiveComponent;
  'kds/interactive': typeof KdsInteractiveComponent;

  // Link Inline
  'Kds::Link::Inline': typeof KdsLinkInlineComponent;
  'kds/link/inline': typeof KdsLinkInlineComponent;

  // Link Standalone
  'Kds::Link::Standalone': typeof KdsLinkStandaloneComponent;
  'kds/link/standalone': typeof KdsLinkStandaloneComponent;

  // MenuPrimitive
  'Kds::MenuPrimitive': typeof KdsMenuPrimitiveComponent;
  'kds/menu-primitive': typeof KdsMenuPrimitiveComponent;

  // Modal
  'Kds::Modal': typeof KdsModalComponent;
  'kds/modal': typeof KdsModalComponent;

  'Kds::ModalBoty': typeof KdsModalBodyComponent;
  'kds/modal/body': typeof KdsModalBodyComponent;

  'Kds::ModalFooter': typeof KdsModalFooterComponent;
  'kds/modal/footer': typeof KdsModalFooterComponent;

  'Kds::ModalHeader': typeof KdsModalHeaderComponent;
  'kds/modal/header': typeof KdsModalHeaderComponent;

  // PageHeader
  'Kds::PageHeader': typeof KdsPageHeaderComponent;
  'kds/page-header': typeof KdsPageHeaderComponent;

  'Kds::PageHeader::Actions': typeof KdsPageHeaderActionsComponent;
  'kds/page-header/actions': typeof KdsPageHeaderActionsComponent;

  'Kds::PageHeader::Badges': typeof KdsPageHeaderBadgesComponent;
  'kds/page-header/badges': typeof KdsPageHeaderBadgesComponent;

  'Kds::PageHeader::Description': typeof KdsPageHeaderDescriptionComponent;
  'kds/page-header/description': typeof KdsPageHeaderDescriptionComponent;

  'Kds::PageHeader::Subtitle': typeof KdsPageHeaderSubtitleComponent;
  'kds/page-header/subtitle': typeof KdsPageHeaderSubtitleComponent;

  'Kds::PageHeader::Title': typeof KdsPageHeaderTitleComponent;
  'kds/page-header/title': typeof KdsPageHeaderTitleComponent;

  // Pagination
  'Kds::Pagination::Compact': typeof KdsPaginationCompactComponent;
  'kds/pagination/compact': typeof KdsPaginationCompactComponent;

  'Kds::Pagination::Info': typeof KdsPaginationControlInfoComponent;
  'kds/pagination/info': typeof KdsPaginationControlInfoComponent;

  'Kds::Pagination::Nav::Arrow': typeof KdsPaginationControlArrowComponent;
  'kds/pagination/nav/arrow': typeof KdsPaginationControlArrowComponent;

  'Kds::Pagination::Nav::Ellipsis': typeof KdsPaginationControlEllipsisComponent;
  'kds/pagination/nav/ellipsis': typeof KdsPaginationControlEllipsisComponent;

  'Kds::Pagination::Nav::Number': typeof KdsPaginationControlNumberComponent;
  'kds/pagination/nav/number': typeof KdsPaginationControlNumberComponent;

  'Kds::Pagination::Numbered': typeof KdsPaginationNumberedComponent;
  'kds/pagination/numbered': typeof KdsPaginationNumberedComponent;

  'Kds::Pagination::SizeSelector': typeof KdsPaginationSizeSelectorComponent;
  'kds/pagination/size-selector': typeof KdsPaginationSizeSelectorComponent;

  // PopoverPrimitive
  'Kds::PopoverPrimitive': typeof KdsPopoverPrimitiveComponent;
  'kds/popover-primitive': typeof KdsPopoverPrimitiveComponent;

  // Reveal
  'Kds::Reveal': typeof KdsRevealComponent;
  'kds/reveal': typeof KdsRevealComponent;

  'Kds::Reveal::Toggle::Button': typeof KdsRevealToggleButtonComponent;
  'kds/reveal/toggle/button': typeof KdsRevealToggleButtonComponent;

  // RichTooltip
  'Kds::RichTooltip': typeof KdsRichTooltipComponent;
  'kds/rich-tooltip': typeof KdsRichTooltipComponent;
  KdsRichTooltip: typeof KdsRichTooltipComponent;

  'Kds::RichTooltip::Bubble': typeof KdsRichTooltipBubbleComponent;
  'kds/rich-tooltip/bubble': typeof KdsRichTooltipBubbleComponent;
  KdsRichTooltipBubble: typeof KdsRichTooltipBubbleComponent;

  'Kds::RichTooltip::Toggle': typeof KdsRichTooltipToggleComponent;
  'kds/rich-tooltip/toggle': typeof KdsRichTooltipToggleComponent;
  KdsRichTooltipToggle: typeof KdsRichTooltipToggleComponent;

  // Segmented Group
  'Kds::SegmentedGroup': typeof KdsSegmentedGroupComponent;
  'kds/segmented-group': typeof KdsSegmentedGroupComponent;

  // Separator
  'Kds::Separator': typeof KdsSeparatorComponent;
  'kds/separator': typeof KdsSeparatorComponent;

  // SideNav
  'Kds::SideNav': typeof KdsSideNavComponent;
  'kds/side-nav': typeof KdsSideNavComponent;
  KdsSideNav: typeof KdsSideNavComponent;

  'Kds::SideNav::Base': typeof KdsSideNavBaseComponent;
  'kds/side-nav/base': typeof KdsSideNavBaseComponent;
  KdsSideNavBase: typeof KdsSideNavBaseComponent;

  'Kds::SideNav::ToggleButton': typeof KdsSideNavToggleButtonComponent;
  'kds/side-nav/toggle-button': typeof KdsSideNavToggleButtonComponent;
  KdsSideNavToggleButton: typeof KdsSideNavToggleButtonComponent;

  'Kds::SideNav::Portal': typeof KdsSideNavPortalComponent;
  'kds/side-nav/portal': typeof KdsSideNavPortalComponent;
  KdsSideNavPortal: typeof KdsSideNavPortalComponent;

  'Kds::SideNav::Portal::Target': typeof KdsSideNavPortalTargetComponent;
  'kds/side-nav/portal/target': typeof KdsSideNavPortalTargetComponent;
  KdsSideNavPortalTarget: typeof KdsSideNavPortalTargetComponent;

  'Kds::SideNav::Header': typeof KdsSideNavHeaderComponent;
  'kds/side-nav/header': typeof KdsSideNavHeaderComponent;
  KdsSideNavHeader: typeof KdsSideNavHeaderComponent;

  'Kds::SideNav::Header::HomeLink': typeof KdsSideNavHeaderHomeLinkComponent;
  'kds/side-nav/header/home-link': typeof KdsSideNavHeaderHomeLinkComponent;
  KdsSideNavHeaderHomeLink: typeof KdsSideNavHeaderHomeLinkComponent;

  'Kds::SideNav::Header::IconButton': typeof KdsSideNavHeaderIconButtonComponent;
  'kds/side-nav/header/icon-button': typeof KdsSideNavHeaderIconButtonComponent;
  KdsSideNavHeaderIconButton: typeof KdsSideNavHeaderIconButtonComponent;

  'Kds::SideNav::List': typeof KdsSideNavListComponent;
  'kds/side-nav/list': typeof KdsSideNavListComponent;
  KdsSideNavList: typeof KdsSideNavListComponent;

  'Kds::SideNav::List::BackLink': typeof KdsSideNavListBackLinkComponent;
  'kds/side-nav/list/back-link': typeof KdsSideNavListBackLinkComponent;
  KdsSideNavListBackLink: typeof KdsSideNavListBackLinkComponent;

  'Kds::SideNav::List::Item': typeof KdsSideNavListItemComponent;
  'kds/side-nav/list/item': typeof KdsSideNavListItemComponent;
  KdsSideNavListItem: typeof KdsSideNavListItemComponent;

  'Kds::SideNav::List::Link': typeof KdsSideNavListLinkComponent;
  'kds/side-nav/list/link': typeof KdsSideNavListLinkComponent;
  KdsSideNavListLink: typeof KdsSideNavListLinkComponent;

  'Kds::SideNav::List::Title': typeof KdsSideNavListTitleComponent;
  'kds/side-nav/list/title': typeof KdsSideNavListTitleComponent;
  KdsSideNavListTitle: typeof KdsSideNavListTitleComponent;

  // Stepper
  'Kds::Stepper::Step::Indicator': typeof KdsStepperStepIndicatorComponent;
  'kds/stepper/step/indicator': typeof KdsStepperStepIndicatorComponent;

  'Kds::Stepper::Task::Indicator': typeof KdsStepperTaskIndicatorComponent;
  'kds/stepper/task/indicator': typeof KdsStepperTaskIndicatorComponent;

  // Table
  'Kds::Table': typeof KdsTableComponent;
  'kds/table': typeof KdsTableComponent;
  'Kds::Table::Td': typeof KdsTableTdComponent;
  'kds/table/td': typeof KdsTableTdComponent;
  'Kds::Table::Th': typeof KdsTableThComponent;
  'kds/table/th': typeof KdsTableThComponent;
  'Kds::Table::Tr': typeof KdsTableTrComponent;
  'kds/table/tr': typeof KdsTableTrComponent;
  'Kds::Table::ThButtonSort': typeof KdsTableThButtonSortComponent;
  'kds/table/th-button-sort': typeof KdsTableThButtonSortComponent;
  'Kds::Table::ThButtonTooltip': typeof KdsTableThButtonTooltipComponent;
  'kds/table/th-button-tooltip': typeof KdsTableThButtonTooltipComponent;
  'Kds::Table::ThSort': typeof KdsTableThSortComponent;
  'kds/table/th-sort': typeof KdsTableThSortComponent;
  'Kds::Table::ThSelectable': typeof KdsTableThSelectableComponent;
  'kds/table/th-selectable': typeof KdsTableThSelectableComponent;

  // Tabs
  'Kds::Tabs': typeof KdsTabsComponent;
  'kds/tabs': typeof KdsTabsComponent;

  'Kds::Tabs::Panel': typeof KdsTabsPanelComponent;
  'kds/tabs/panel': typeof KdsTabsPanelComponent;

  'Kds::Tabs::Tab': typeof KdsTabsTabComponent;
  'kds/tabs/tab': typeof KdsTabsTabComponent;

  // Text
  'Kds::Text': typeof KdsTextComponent;
  'kds/text': typeof KdsTextComponent;
  'Kds::Text::Body': typeof KdsTextBodyComponent;
  'kds/text/body': typeof KdsTextBodyComponent;
  'Kds::Text::Display': typeof KdsTextDisplayComponent;
  'kds/text/display': typeof KdsTextDisplayComponent;
  'Kds::Text::Code': typeof KdsTextCodeComponent;
  'kds/text/code': typeof KdsTextCodeComponent;

  // Tag
  'Kds::Tag': typeof KdsTagComponent;
  'kds/tag': typeof KdsTagComponent;

  // TooltipButton
  'Kds::TooltipButton': typeof KdsTooltipButtonComponent;
  'kds/tooltip-button': typeof KdsTooltipButtonComponent;

  // Toast
  'Kds::Toast': typeof KdsToastComponent;
  'kds/toast': typeof KdsToastComponent;

  // Yield
  'Kds::Yield': typeof KdsYieldComponent;
  'kds/yield': typeof KdsYieldComponent;

  // ----- HELPERS ------------------------------------------------------

  // kds-link-to-models
  'kds-link-to-models': typeof KdsLinkToModelsHelper;

  // kds-link-to-query
  'kds-link-to-query': typeof KdsLinkToQueryHelper;

  // ----- MODIFIERS ----------------------------------------------------

  // kds-anchored-position
  'kds-anchored-position': typeof KdsAnchoredPositionModifier;

  // kds-clipboard
  'kds-clipboard': typeof KdsClipboardModifier;

  // kds-register-event
  'kds-register-event': typeof KdsRegisterEventModifier;

  // kds-tooltip
  'kds-tooltip': typeof KdsTooltipModifier;
}
