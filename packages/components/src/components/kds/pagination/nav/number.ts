/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

import type { KdsInteractiveSignature } from '../../interactive';

interface KdsPaginationNavNumberArgs {
  page: number;
  onClick: (page: number) => void;
  isSelected: boolean;
}

export interface KdsPaginationNavNumberSignature {
  Args: KdsPaginationNavNumberArgs & KdsInteractiveSignature['Args'];
  Element: KdsInteractiveSignature['Element'];
}

export default class KdsPaginationControlNumber extends Component<KdsPaginationNavNumberSignature> {
  get page(): number {
    const { page } = this.args;

    assert(
      '@page for "Pagination::Nav::Number" must have a valid value',
      page !== undefined
    );

    return page;
  }

  get classNames(): string {
    const classes = [
      'kds-pagination-nav__control',
      'kds-pagination-nav__number',
    ];

    if (this.args.isSelected) {
      classes.push(`kds-pagination-nav__number--is-selected`);
    }

    return classes.join(' ');
  }

  @action
  onClick(): void {
    const { onClick } = this.args;

    if (typeof onClick === 'function') {
      onClick(this.args.page);
    }
  }
}
