/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { KdsAlertTitleTagValues } from './types.ts';
import type { KdsAlertTitleTags } from './types';
export interface KdsAlertTitleSignature {
  Args: {
    tag?: KdsAlertTitleTags;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class KdsAlertTitle extends Component<KdsAlertTitleSignature> {
  get componentTag(): KdsAlertTitleTags {
    return this.args.tag ?? KdsAlertTitleTagValues.Div;
  }
}
