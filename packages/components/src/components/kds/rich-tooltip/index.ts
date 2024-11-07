/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { getElementId } from '../../../utils/kds-get-element-id.ts';
import type { WithBoundArgs } from '@glint/template';
import type { KdsPopoverPrimitiveSignature } from '../popover-primitive';
import KdsRichTooltipToggle from './toggle.ts';
import KdsRichTooltipBubble from './bubble.ts';

export interface KdsRichTooltipSignature {
  Args: Omit<KdsPopoverPrimitiveSignature['Args'], 'enableSoftEvents'>;
  Blocks: {
    default: [
      {
        Toggle?: WithBoundArgs<
          typeof KdsRichTooltipToggle,
          'popoverId' | 'setupPrimitiveToggle' | 'isOpen'
        >;
        Bubble?: WithBoundArgs<
          typeof KdsRichTooltipBubble,
          'arrowId' | 'popoverId' | 'setupPrimitivePopover' | 'isOpen'
        >;
        isOpen?: boolean;
        close?: () => void;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class KdsRichTooltip extends Component<KdsRichTooltipSignature> {
  elementId: string = getElementId(this);
  arrowId: string = `arrow-${this.elementId}`;
  popoverId: string = `popover-${this.elementId}`;

  get enableSoftEvents(): boolean {
    return this.args.enableClickEvents !== true;
  }

  get enableClickEvents(): boolean {
    return this.args.enableClickEvents ?? false;
  }
}
