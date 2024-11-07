/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { assert } from '@ember/debug';

import {
  KdsTableHorizontalAlignmentValues,
  KdsTableThSortOrderValues,
  KdsTableThSortOrderLabelValues,
} from './types.ts';
import type {
  KdsTableHorizontalAlignment,
  KdsTableThSortOrder,
  KdsTableThSortOrderLabels,
} from './types.ts';
import type { KdsTableThButtonSortSignature } from './th-button-sort';

export const ALIGNMENTS: string[] = Object.values(
  KdsTableHorizontalAlignmentValues
);
export const DEFAULT_ALIGN = KdsTableHorizontalAlignmentValues.Left;

export interface KdsTableThSortSignature {
  Args: {
    align?: KdsTableHorizontalAlignment;
    onClickSort?: KdsTableThButtonSortSignature['Args']['onClick'];
    sortOrder?: KdsTableThSortOrder;
    tooltip?: string;
    width?: string;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class KdsTableThSort extends Component<KdsTableThSortSignature> {
  /**
   * Generates a unique ID for the <span> element ("label")
   *
   * @param labelId
   */
  labelId = guidFor(this);

  /**
   * @param ariaSort
   * @type {KdsTableThSortOrderLabels}
   * @private
   * @default none
   * @description Sets the aria-sort attribute based on the sort order defined; acceptable values are ascending, descending, none(default) and other. Authors SHOULD only apply this property to table headers or grid headers. If the property is not provided, there is no defined sort order. For each table or grid, authors SHOULD apply aria-sort to only one header at a time.
   */
  get ariaSort(): KdsTableThSortOrderLabels {
    switch (this.args.sortOrder) {
      case KdsTableThSortOrderValues.Asc:
        return KdsTableThSortOrderLabelValues.Asc;
      case KdsTableThSortOrderValues.Desc:
        return KdsTableThSortOrderLabelValues.Desc;
      default:
        // none is the default per the spec.
        return KdsTableThSortOrderLabelValues.None;
    }
  }

  /**
   * @param align
   * @type {KdsTableHorizontalAlignment}
   * @default left
   * @description Determines the text alignment of the header or cell content. Options are: "left", "center", "right". If no align is defined, "left" is used.
   */
  get align(): KdsTableHorizontalAlignment {
    const { align = DEFAULT_ALIGN } = this.args;

    assert(
      `@align for "Kds::Table" must be one of the following: ${ALIGNMENTS.join(
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
    const classes = ['kds-table__th', 'kds-table__th--sort'];

    // add a class based on the @align argument
    if (this.align) {
      classes.push(`kds-table__th--align-${this.align}`);
    }

    return classes.join(' ');
  }
}
