/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import {
  KdsPaginationDirectionValues,
  KdsPaginationDirectionAriaLabelValues,
  KdsPaginationDirectionLabelValues,
} from '../types.ts';

import type { KdsIconSignature } from '../../icon/index.ts';
import type { KdsInteractiveSignature } from '../../interactive';
import type {
  KdsPaginationDirections,
  KdsPaginationDirectionAriaLabels,
  KdsPaginationDirectionLabels,
} from '../types';

interface KdsPaginationControlArrowContent {
  label: KdsPaginationDirectionLabels;
  icon: KdsIconSignature['Args']['name'];
  ariaLabel: KdsPaginationDirectionAriaLabels;
}

interface KdsPaginationControlArrowArgs {
  direction: KdsPaginationDirections;
  disabled?: boolean;
  showLabel?: boolean;
  onClick?: (direction: KdsPaginationDirections) => void;
}

export interface KdsPaginationControlArrowSignature {
  Args: KdsPaginationControlArrowArgs & KdsInteractiveSignature['Args'];
  Element: KdsInteractiveSignature['Element'];
}

export const DIRECTIONS: KdsPaginationDirections[] = [
  KdsPaginationDirectionValues.Prev,
  KdsPaginationDirectionValues.Next,
];

export default class KdsPaginationControlArrow extends Component<KdsPaginationControlArrowSignature> {
  get content(): KdsPaginationControlArrowContent {
    const { direction } = this.args;

    assert(
      `@direction for "Pagination::Nav::Arrow" must be one of the following: ${DIRECTIONS.join(
        ', '
      )}; received: ${direction}`,
      DIRECTIONS.includes(direction)
    );

    const kdsPaginationNavArrowContentDirectionMap: Record<
      KdsPaginationDirections,
      KdsPaginationControlArrowContent
    > = {
      [KdsPaginationDirectionValues.Prev]: {
        label: KdsPaginationDirectionLabelValues.Prev,
        icon: 'chevron-left',
        ariaLabel: KdsPaginationDirectionAriaLabelValues.Prev,
      },
      [KdsPaginationDirectionValues.Next]: {
        label: KdsPaginationDirectionLabelValues.Next,
        icon: 'chevron-right',
        ariaLabel: KdsPaginationDirectionAriaLabelValues.Next,
      },
    };

    return kdsPaginationNavArrowContentDirectionMap[direction];
  }

  get showLabel(): boolean {
    const { showLabel = true } = this.args;

    return showLabel;
  }

  get classNames(): string {
    const classes = [
      'kds-pagination-nav__control',
      'kds-pagination-nav__arrow',
      `kds-pagination-nav__arrow--direction-${this.args.direction}`,
    ];

    return classes.join(' ');
  }

  @action
  onClick(): void {
    const { onClick } = this.args;

    if (typeof onClick === 'function') {
      onClick(this.args.direction);
    }
  }
}
