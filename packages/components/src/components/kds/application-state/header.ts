/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { KdsApplicationStateTitleTagValues } from './types.ts';

import type { KdsIconSignature } from '../icon';
import type { KdsApplicationStateTitleTags } from './types';
export interface KdsApplicationStateHeaderSignature {
  Args: {
    title?: string;
    titleTag?: KdsApplicationStateTitleTags;
    errorCode?: string;
    icon?: KdsIconSignature['Args']['name'];
  };
  Element: HTMLDivElement;
}

export default class KdsApplicationStateHeader extends Component<KdsApplicationStateHeaderSignature> {
  get titleTag(): KdsApplicationStateTitleTags {
    return this.args.titleTag ?? KdsApplicationStateTitleTagValues.Div;
  }
}
