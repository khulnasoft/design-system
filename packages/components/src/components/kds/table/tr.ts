/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { KdsTableScopeValues } from './types.ts';
import type { KdsTableScope, KdsTableThSortOrder } from './types.ts';
import type { KdsFormCheckboxBaseSignature } from '../form/checkbox/base';
import type { KdsTableSignature } from './index.ts';
import type { KdsTableThSelectableSignature } from './th-selectable.ts';

export interface BaseKdsTableTrSignature {
  Args: {
    selectableColumnKey?: KdsTableSignature['Args']['selectableColumnKey'];
    isSelectable?: boolean;
    isSelected?: false;
    selectionAriaLabelSuffix?: string;
    selectionKey?: string;
    selectionScope?: KdsTableScope;
    sortBySelectedOrder?: KdsTableThSortOrder;
    didInsert?: (
      checkbox: KdsFormCheckboxBaseSignature['Element'],
      selectionKey?: string
    ) => void;
    onSelectionChange?: (
      checkbox?: KdsFormCheckboxBaseSignature['Element'],
      selectionKey?: string
    ) => void;
    willDestroy?: () => void;
    onClickSortBySelected?: KdsTableThSelectableSignature['Args']['onClickSortBySelected'];
  };
  Blocks: {
    default: [];
  };
  Element: HTMLTableRowElement;
}

// Extended interface for selectable rows
export interface SelectableKdsTableTrArgs extends BaseKdsTableTrSignature {
  Args: BaseKdsTableTrSignature['Args'] & {
    isSelectable: true;
    selectionScope?: KdsTableScopeValues.Row;
    selectionKey: string; // Now required for selectable rows
  };
}

// Union type to combine both possible states
export type KdsTableTrSignature =
  | BaseKdsTableTrSignature
  | SelectableKdsTableTrArgs;
export default class KdsTableTr extends Component<KdsTableTrSignature> {
  get selectionKey(): string | undefined {
    if (this.args.isSelectable && this.args.selectionScope === 'row') {
      assert(
        `@selectionKey must be defined on Table::Tr or B.Tr when @isSelectable is true`,
        this.args.selectionKey
      );
      return this.args.selectionKey;
    }
    return undefined;
  }
}
