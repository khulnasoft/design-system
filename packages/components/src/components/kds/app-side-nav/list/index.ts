/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type { ComponentLike } from '@glint/template';
import type { KdsYieldSignature } from '../../yield';
import type { KdsAppSideNavListItemSignature } from './item';
import type { KdsAppSideNavListBackLinkSignature } from './back-link';
import type { KdsAppSideNavListTitleSignature } from './title';
import type { KdsAppSideNavListLinkSignature } from './link';

export interface KdsAppSideNavListSignature {
  Blocks: {
    default: [
      {
        ExtraBefore?: ComponentLike<KdsYieldSignature>;
        Item?: ComponentLike<KdsAppSideNavListItemSignature>;
        BackLink?: ComponentLike<KdsAppSideNavListBackLinkSignature>;
        Title?: ComponentLike<KdsAppSideNavListTitleSignature>;
        Link?: ComponentLike<KdsAppSideNavListLinkSignature>;
        ExtraAfter?: ComponentLike<KdsYieldSignature>;
      },
    ];
  };
  Element: HTMLElement;
}

export default class KdsAppSideNavList extends Component<KdsAppSideNavListSignature> {
  @tracked _titleIds: string[] = [];

  get titleIds(): string {
    return this._titleIds.join(' ');
  }

  @action
  didInsertTitle(titleId: string): void {
    this._titleIds = [...this._titleIds, titleId];
  }
}
