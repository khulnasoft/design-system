/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import type { KdsIconSignature } from '../icon';
import type { KdsDialogPrimitiveHeaderTitleTags } from './types';
import { KdsDialogPrimitiveHeaderTitleTagValues } from './types.ts';

export interface KdsDialogPrimitiveHeaderSignature {
  Args: {
    contextualClassPrefix?: string;
    id?: string;
    icon?: KdsIconSignature['Args']['name'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDismiss?: (event: MouseEvent, ...args: any[]) => void;
    titleTag?: KdsDialogPrimitiveHeaderTitleTags;
    tagline?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

const NOOP = (): void => {};

export default class KdsDialogPrimitiveHeader extends Component<KdsDialogPrimitiveHeaderSignature> {
  get titleTag(): KdsDialogPrimitiveHeaderTitleTags {
    return this.args.titleTag ?? KdsDialogPrimitiveHeaderTitleTagValues.Div;
  }

  /**
   * @param onDismiss
   * @type {function}
   * @default () => {}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get onDismiss(): (event: MouseEvent, ...args: any[]) => void {
    const { onDismiss } = this.args;

    // notice: this is a guard used in case the button is used as standalone element (eg. in the showcase)
    // in reality it's always used inside the main components as a yielded component, so the onDismiss handler is always defined
    if (typeof onDismiss === 'function') {
      return onDismiss;
    } else {
      return NOOP;
    }
  }
}
