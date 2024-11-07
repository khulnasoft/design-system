/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type { ComponentLike } from '@glint/template';
import type { KdsYieldSignature } from '../../yield';
import type { KdsSideNavListItemSignature } from './item';
import type { KdsSideNavListBackLinkSignature } from './back-link';
import type { KdsSideNavListTitleSignature } from './title';
import type { KdsSideNavListLinkSignature } from './link';

export interface KdsSideNavListSignature {
  Blocks: {
    default: [
      {
        ExtraBefore?: ComponentLike<KdsYieldSignature>;
        Item?: ComponentLike<KdsSideNavListItemSignature>;
        BackLink?: ComponentLike<KdsSideNavListBackLinkSignature>;
        Title?: ComponentLike<KdsSideNavListTitleSignature>;
        Link?: ComponentLike<KdsSideNavListLinkSignature>;
        ExtraAfter?: ComponentLike<KdsYieldSignature>;
      },
    ];
  };
  Element: HTMLElement;
}

export default class KdsSideNavList extends Component<KdsSideNavListSignature> {
  @tracked _titleIds: string[] = [];

  get titleIds(): string {
    return this._titleIds.join(' ');
  }

  @action
  didInsertTitle(titleId: string): void {
    this._titleIds = [...this._titleIds, titleId];
  }
}
