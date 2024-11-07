/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import {
  KdsTableThSortOrderIconValues,
  KdsTableThSortOrderLabelValues,
  KdsTableThSortOrderValues,
} from './types.ts';
import type {
  KdsTableThSortOrder,
  KdsTableThSortOrderIcons,
  KdsTableThSortOrderLabels,
} from './types.ts';
export interface KdsTableThButtonSortSignature {
  Args: {
    labelId?: string;
    onClick?: () => void;
    sortOrder?: KdsTableThSortOrder;
  };
  Element: HTMLButtonElement;
}

const NOOP = () => {};

export default class KdsTableThButtonSort extends Component<KdsTableThButtonSortSignature> {
  // Generates a unique ID for the (hidden) "label prefix/suffix" <span> elements
  prefixLabelId = 'prefix-' + guidFor(this);
  suffixLabelId = 'suffix-' + guidFor(this);

  get icon(): KdsTableThSortOrderIcons {
    switch (this.args.sortOrder) {
      case KdsTableThSortOrderValues.Asc:
        return KdsTableThSortOrderIconValues.ArrowUp;
      case KdsTableThSortOrderValues.Desc:
        return KdsTableThSortOrderIconValues.ArrowDown;
      default:
        return KdsTableThSortOrderIconValues.SwapVertical;
    }
  }

  // Determines the label (suffix) to use in the `aria-labelledby` attribute of the button,
  // used to indicate what will happen if the user clicks on the button
  get sortOrderLabel(): KdsTableThSortOrderLabels {
    return this.args.sortOrder === KdsTableThSortOrderValues.Asc
      ? KdsTableThSortOrderLabelValues.Desc
      : KdsTableThSortOrderLabelValues.Asc;
  }

  get onClick(): () => void {
    const { onClick } = this.args;

    if (typeof onClick === 'function') {
      return onClick;
    } else {
      return NOOP;
    }
  }

  get classNames(): string {
    const classes = ['kds-table__th-button', 'kds-table__th-button--sort'];

    // add a class based on the @sortOrder argument
    if (
      this.args.sortOrder === KdsTableThSortOrderValues.Asc ||
      this.args.sortOrder === KdsTableThSortOrderValues.Desc
    ) {
      classes.push(`kds-table__th-button--is-sorted`);
    }

    return classes.join(' ');
  }
}
