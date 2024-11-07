/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';
import type { ComponentLike } from '@glint/template';
import type { KdsIconTileSignature } from '../icon-tile';
import type { KdsYieldSignature } from '../yield';
import type { KdsPageHeaderActionsSignature } from './actions';
import type { KdsPageHeaderBadgesSignature } from './badges';
import type { KdsPageHeaderDescriptionSignature } from './description';
import type { KdsPageHeaderTitleSignature } from './title';
import type { KdsPageHeaderSubtitleSignature } from './subtitle';

export interface KdsPageHeaderSignature {
  Blocks: {
    default: [
      {
        Actions?: ComponentLike<KdsPageHeaderActionsSignature>;
        Badges?: ComponentLike<KdsPageHeaderBadgesSignature>;
        Breadcrumb?: ComponentLike<KdsYieldSignature>;
        Description?: ComponentLike<KdsPageHeaderDescriptionSignature>;
        Generic?: ComponentLike<KdsYieldSignature>;
        IconTile?: ComponentLike<KdsIconTileSignature>;
        Subtitle?: ComponentLike<KdsPageHeaderSubtitleSignature>;
        Title?: ComponentLike<KdsPageHeaderTitleSignature>;
      },
    ];
  };
  Element: HTMLElement;
}

const KdsPageHeader = TemplateOnlyComponent<KdsPageHeaderSignature>();

export default KdsPageHeader;
