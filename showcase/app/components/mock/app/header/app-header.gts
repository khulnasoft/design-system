/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

// KDS components
import {
  KdsAppHeader,
  KdsAppHeaderHomeLink,
  KdsDropdown,
  KdsButton,
} from '@khulnasoft/design-system-components/components';

// types
import type { KdsAppHeaderSignature } from '@khulnasoft/design-system-components/components/kds/app-header/index';

export interface MockAppHeaderAppHeaderSignature {
  Args: {
    showOrgPicker?: boolean;
    orgPickerLabel?: string;
    showRegionPicker?: boolean;
    showSearch?: boolean;
  };
  Element: KdsAppHeaderSignature['Element'];
}

export default class MockAppHeaderAppHeader extends Component<MockAppHeaderAppHeaderSignature> {
  showOrgPicker;
  orgPickerLabel;
  showRegionPicker;
  showSearch;

  constructor(owner: unknown, args: MockAppHeaderAppHeaderSignature['Args']) {
    super(owner, args);
    this.showOrgPicker = this.args.showOrgPicker ?? true;
    this.orgPickerLabel = this.args.orgPickerLabel ?? 'organization-name';
    this.showRegionPicker = this.args.showRegionPicker ?? true;
    this.showSearch = this.args.showSearch ?? true;
  }

  <template>
    <KdsAppHeader>
      <:logo>
        <KdsAppHeaderHomeLink
          @icon="khulnasoft"
          @ariaLabel="KhulnaSoft home menu"
          @href="#"
        />
      </:logo>
      <:globalActions>
        {{#if this.showOrgPicker}}
          <KdsDropdown @enableCollisionDetection={{true}} as |dd|>
            <dd.ToggleButton @text={{this.orgPickerLabel}} @icon="org" />
            <dd.Checkmark>
              my-organization
            </dd.Checkmark>
          </KdsDropdown>
        {{/if}}
      </:globalActions>
      <:utilityActions>
        {{#if this.showRegionPicker}}
          <KdsDropdown @enableCollisionDetection={{true}} as |dd|>
            <dd.ToggleButton @text="Europe" @icon="globe" />
            <dd.Checkmark @selected={{true}}>Europe</dd.Checkmark>
            <dd.Checkmark>Americas</dd.Checkmark>
          </KdsDropdown>
        {{/if}}

        {{#if this.showSearch}}
          <KdsButton @icon="search" @isIconOnly={{true}} @text="Search" />
        {{/if}}
        <KdsDropdown @enableCollisionDetection={{true}} as |dd|>
          <dd.ToggleIcon @icon="help" @text="help menu" />
          <dd.Title @text="Help & Support" />
          <dd.Interactive @href="#">Documentation</dd.Interactive>
          <dd.Interactive @href="#">Tutorials</dd.Interactive>
          <dd.Interactive @href="#">Terraform Provider</dd.Interactive>
          <dd.Interactive @href="#">Changelog</dd.Interactive>
          <dd.Separator />
          <dd.Interactive @href="#">Create support ticket</dd.Interactive>
          <dd.Interactive @href="#">Give feedback</dd.Interactive>
        </KdsDropdown>
        <KdsDropdown @enableCollisionDetection={{true}} as |dd|>
          <dd.ToggleIcon @icon="user" @text="user menu" />
          <dd.Title @text="Signed In" />
          <dd.Description @text="email@domain.com" />
          <dd.Interactive @href="#" @text="Account Settings" />
        </KdsDropdown>
      </:utilityActions>
    </KdsAppHeader>
  </template>
}
