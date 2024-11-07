/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { or } from 'ember-truth-helpers';

// KDS components
import {
  KdsBadge,
  KdsButton,
  KdsDropdown,
  KdsLinkInline,
  KdsBreadcrumb,
  KdsBreadcrumbItem,
  KdsPageHeader,
} from '@khulnasoft/design-system-components/components';

// types
import type { KdsPageHeaderSignature } from '@khulnasoft/design-system-components/components/kds/page-header/index';

export interface MockAppMainPageHeaderSignature {
  Args: {
    showActionButton?: boolean;
    showActionDropdown?: boolean;
  };
  Element: KdsPageHeaderSignature['Element'];
}

export default class MockAppMainPageHeader extends Component<MockAppMainPageHeaderSignature> {
  showActionButton;
  showActionDropdown;

  constructor(owner: unknown, args: MockAppMainPageHeaderSignature['Args']) {
    super(owner, args);
    this.showActionButton = this.args.showActionButton ?? false;
    this.showActionDropdown = this.args.showActionDropdown ?? false;
  }

  <template>
    <KdsPageHeader ...attributes as |PH|>
      <PH.Title>Page title</PH.Title>
      <PH.Breadcrumb>
        <KdsBreadcrumb>
          <KdsBreadcrumbItem @text="Organization" @icon="dashboard" />
          <KdsBreadcrumbItem @text="Project" @icon="file-text" />
          <KdsBreadcrumbItem @text="Clusters" @icon="server-cluster" />
        </KdsBreadcrumb>
      </PH.Breadcrumb>
      <PH.IconTile @icon="server-cluster" />
      <PH.Badges>
        <KdsBadge @text="Status badge" @icon="award" @color="highlight" />
      </PH.Badges>
      <PH.Subtitle>Project dashboard</PH.Subtitle>
      <PH.Description>
        An overview of all resources in the project.
        <KdsLinkInline @color="secondary" @href="#">Learn more</KdsLinkInline>.
      </PH.Description>
      {{#if (or this.showActionButton this.showActionDropdown)}}
        <PH.Actions>
          {{#if this.showActionButton}}
            <KdsButton
              @text="Create"
              @icon="plus"
              @iconPosition="leading"
              @color="primary"
            />
          {{/if}}
          {{#if this.showActionDropdown}}
            <KdsDropdown as |D|>
              <D.ToggleButton @text="Manage" @color="secondary" />
              <D.Interactive>Manage cluster externally</D.Interactive>
              <D.Interactive>Launch desktop</D.Interactive>
              <D.Interactive
                @color="critical"
                @icon="trash"
              >Delete</D.Interactive>
            </KdsDropdown>
          {{/if}}
        </PH.Actions>
      {{/if}}
    </KdsPageHeader>
  </template>
}
