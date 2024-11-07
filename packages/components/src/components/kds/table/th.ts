/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { assert } from '@ember/debug';

import type { KdsTableHorizontalAlignment, KdsTableScope } from './types.ts';
import { KdsTableHorizontalAlignmentValues } from './types.ts';

export const ALIGNMENTS: string[] = Object.values(
  KdsTableHorizontalAlignmentValues
);
export const DEFAULT_ALIGN = KdsTableHorizontalAlignmentValues.Left;

export interface KdsTableThSignature {
  Args: {
    align?: KdsTableHorizontalAlignment;
    isVisuallyHidden?: boolean;
    scope?: KdsTableScope;
    tooltip?: string;
    width?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLTableCellElement;
}

export default class KdsTableTh extends Component<KdsTableThSignature> {
  /**
   * Generates a unique ID for the <span> element ("label")
   *
   * @param labelId
   */
  labelId = guidFor(this);

  /**
   * @param align
   * @type {KdsTableHorizontalAlignment}
   * @default left
   * @description Determines the text alignment of the header or cell content. Options are: "left", "center", "right". If no align is defined, "left" is used.
   */
  get align(): KdsTableHorizontalAlignment {
    const { align = DEFAULT_ALIGN } = this.args;

    assert(
      `@align for "Kds::Table::Th" must be one of the following: ${ALIGNMENTS.join(
        ', '
      )}; received: ${align}`,
      ALIGNMENTS.includes(align)
    );
    return align;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-table__th'];

    // add a class based on the @align argument
    if (this.align) {
      classes.push(`kds-table__th--align-${this.align}`);
    }

    return classes.join(' ');
  }
}
