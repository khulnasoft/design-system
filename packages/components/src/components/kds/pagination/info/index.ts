/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import type { KdsPaginationNumberedSignature } from '../numbered/index';
import type { KdsTextBodySignature } from '../../text/body';
export interface KdsPaginationInfoSignature {
  Args: {
    itemsRangeStart: number;
    itemsRangeEnd: number;
    showTotalItems?: KdsPaginationNumberedSignature['Args']['showTotalItems'];
    totalItems: KdsPaginationNumberedSignature['Args']['totalItems'];
  };
  Element: KdsTextBodySignature['Element'];
}

export default class KdsPaginationInfo extends Component<KdsPaginationInfoSignature> {
  get showTotalItems(): boolean {
    return this.args.showTotalItems ?? true;
  }
}
