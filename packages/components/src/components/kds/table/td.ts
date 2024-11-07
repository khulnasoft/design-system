/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import type { KdsTableHorizontalAlignment } from './types.ts';
import { KdsTableHorizontalAlignmentValues } from './types.ts';

export const ALIGNMENTS: string[] = Object.values(
  KdsTableHorizontalAlignmentValues
);
export const DEFAULT_ALIGN = KdsTableHorizontalAlignmentValues.Left;

export interface KdsTableTdSignature {
  Args: {
    align?: KdsTableHorizontalAlignment;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLTableCellElement;
}
export default class KdsTableTd extends Component<KdsTableTdSignature> {
  /**
   * @param align
   * @type {string}
   * @default left
   * @description Determines the text alignment of the header or cell content. Options are: "left", "center", "right". If no align is defined, "left" is used.
   */
  get align(): KdsTableHorizontalAlignment {
    const { align = DEFAULT_ALIGN } = this.args;

    assert(
      `@align for "Kds::Table::Td" must be one of the following: ${ALIGNMENTS.join(
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
    const classes = [
      'kds-table__td',
      'kds-typography-body-200',
      'kds-font-weight-regular',
    ];

    // add a class based on the @align argument
    if (this.align) {
      classes.push(`kds-table__td--align-${this.align}`);
    }

    return classes.join(' ');
  }
}
