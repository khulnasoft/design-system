/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
import { KdsCodeBlockTitleTagValues } from './types.ts';
import type { KdsCodeBlockTitleTags } from './types';
import type { KdsTextBodySignature } from '../text/body';

export interface KdsCodeBlockTitleSignature {
  Args: {
    tag?: KdsCodeBlockTitleTags;
  };
  Blocks: {
    default: [];
  };
  Element: KdsTextBodySignature['Element'];
}

export default class KdsCodeBlockTitle extends Component<KdsCodeBlockTitleSignature> {
  get componentTag(): KdsCodeBlockTitleTags {
    return this.args.tag ?? KdsCodeBlockTitleTagValues.P;
  }
}
