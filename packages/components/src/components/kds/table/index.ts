/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';
import type { ComponentLike } from '@glint/template';

import {
  KdsTableDensityValues,
  KdsTableThSortOrderValues,
  KdsTableVerticalAlignmentValues,
} from './types.ts';
import type {
  KdsTableColumn,
  KdsTableDensities,
  KdsTableHorizontalAlignment,
  KdsTableOnSelectionChangeSignature,
  KdsTableSelectableRow,
  KdsTableSortingFunction,
  KdsTableThSortOrder,
  KdsTableVerticalAlignment,
  KdsTableModel,
} from './types';
import type { KdsFormCheckboxBaseSignature } from '../form/checkbox/base';
import type { KdsTableTdSignature } from './td.ts';
import type { KdsTableThSignature } from './th.ts';
import type { KdsTableThSortSignature } from './th-sort.ts';
import type { KdsTableTrSignature } from './tr.ts';

export const DENSITIES: KdsTableDensities[] = Object.values(
  KdsTableDensityValues
);
export const DEFAULT_DENSITY = KdsTableDensityValues.Medium;

export const VALIGNMENTS: KdsTableVerticalAlignment[] = Object.values(
  KdsTableVerticalAlignmentValues
);
export const DEFAULT_VALIGN = KdsTableVerticalAlignmentValues.Top;

export interface KdsTableSignature {
  Args: {
    align?: KdsTableHorizontalAlignment;
    caption?: string;
    columns?: KdsTableColumn[];
    density?: KdsTableDensities;
    identityKey?: string;
    isFixedLayout?: boolean;
    isSelectable?: boolean;
    isStriped?: boolean;
    model?: KdsTableModel;
    onSelectionChange?: (selection: KdsTableOnSelectionChangeSignature) => void;
    onSort?: (sortBy: string, sortOrder: KdsTableThSortOrder) => void;
    selectionAriaLabelSuffix?: string;
    sortBy?: string;
    selectableColumnKey?: string;
    sortedMessageText?: string;
    sortOrder?: KdsTableThSortOrder;
    valign?: KdsTableVerticalAlignment;
  };
  Blocks: {
    head?: [
      {
        Tr?: ComponentLike<KdsTableTrSignature>;
        Th?: ComponentLike<KdsTableThSignature>;
        ThSort?: ComponentLike<KdsTableThSortSignature>;
        sortBy?: string;
        sortOrder?: KdsTableThSortOrder;
        setSortBy?: (column: string) => void;
      },
    ];
    body?: [
      {
        Td?: ComponentLike<KdsTableTdSignature>;
        Tr?: ComponentLike<KdsTableTrSignature>;
        Th?: ComponentLike<KdsTableThSignature>;
        data?: Record<string, unknown>;
        sortBy?: string;
        sortOrder?: KdsTableThSortOrder;
      },
    ];
  };
  Element: HTMLTableElement;
}

export default class KdsTable extends Component<KdsTableSignature> {
  @tracked sortBy;
  @tracked sortOrder;
  @tracked selectAllCheckbox?: KdsFormCheckboxBaseSignature['Element'] =
    undefined;
  selectableRows: KdsTableSelectableRow[] = [];
  @tracked isSelectAllCheckboxSelected?: boolean = undefined;

  constructor(owner: unknown, args: KdsTableSignature['Args']) {
    super(owner, args);
    this.sortBy = this.args.sortBy ?? undefined;
    this.sortOrder = this.args.sortOrder ?? KdsTableThSortOrderValues.Asc;
  }

  get getSortCriteria(): string | KdsTableSortingFunction<unknown> {
    // get the current column
    const currentColumn = this.args?.columns?.find(
      (column) => column.key === this.sortBy
    );
    if (
      // check if there is a custom sorting function associated with the current `sortBy` column (we assume the column has `isSortable`)
      currentColumn?.sortingFunction &&
      typeof currentColumn.sortingFunction === 'function'
    ) {
      return currentColumn.sortingFunction;
    } else {
      // otherwise fallback to the default format "sortBy:sortOrder"
      return `${this.sortBy}:${this.sortOrder}`;
    }
  }

  get identityKey(): string | undefined {
    // we have to provide a way for the consumer to pass undefined because Ember tries to interpret undefined as missing an arg and therefore falls back to the default
    if (this.args.identityKey === 'none') {
      return undefined;
    } else {
      return this.args.identityKey ?? '@identity';
    }
  }

  get sortedMessageText(): string {
    if (this.args.sortedMessageText) {
      return this.args.sortedMessageText;
    } else if (this.sortBy && this.sortOrder) {
      // we should allow the user to define a custom value here (e.g., for i18n) - tracked with KDS-965
      return `Sorted by ${this.sortBy} ${this.sortOrder}ending`;
    } else {
      return '';
    }
  }

  get isStriped(): boolean {
    return this.args.isStriped ?? false;
  }

  get isFixedLayout(): boolean {
    return this.args.isFixedLayout ?? false;
  }

  get density(): KdsTableDensities {
    const { density = DEFAULT_DENSITY } = this.args;

    assert(
      `@density for "Kds::Table" must be one of the following: ${DENSITIES.join(
        ', '
      )}; received: ${density}`,
      DENSITIES.includes(density)
    );

    return density;
  }

  get valign(): KdsTableVerticalAlignment {
    const { valign = DEFAULT_VALIGN } = this.args;

    assert(
      `@valign for "Kds::Table" must be one of the following: ${VALIGNMENTS.join(
        ', '
      )}; received: ${valign}`,
      VALIGNMENTS.includes(valign)
    );

    return valign;
  }

  get classNames(): string {
    const classes = ['kds-table'];

    // add a class based on the @isStriped argument
    if (this.isStriped) {
      classes.push('kds-table--striped');
    }

    // add a class based on the @isFixedLayout argument
    if (this.isFixedLayout) {
      classes.push('kds-table--layout-fixed');
    }

    // add a class based on the @density argument
    if (this.density) {
      classes.push(`kds-table--density-${this.density}`);
    }

    // add a class based on the @valign argument
    if (this.valign) {
      classes.push(`kds-table--valign-${this.valign}`);
    }

    return classes.join(' ');
  }

  @action
  setSortBy(column: string): void {
    if (this.sortBy === column) {
      // check to see if the column is already sorted and invert the sort order if so
      this.sortOrder =
        this.sortOrder === KdsTableThSortOrderValues.Asc
          ? KdsTableThSortOrderValues.Desc
          : KdsTableThSortOrderValues.Asc;
    } else {
      // otherwise, set the sort order to ascending
      this.sortBy = column;
      this.sortOrder = KdsTableThSortOrderValues.Asc;
    }

    const { onSort } = this.args;

    if (typeof onSort === 'function') {
      onSort(this.sortBy, this.sortOrder);
    }
  }

  onSelectionChangeCallback(
    checkbox?: KdsFormCheckboxBaseSignature['Element'],
    selectionKey?: string
  ): void {
    const { onSelectionChange } = this.args;
    if (typeof onSelectionChange === 'function') {
      onSelectionChange({
        selectionKey: selectionKey,
        selectionCheckboxElement: checkbox,
        selectedRowsKeys: this.selectableRows.reduce<string[]>((acc, row) => {
          if (row.checkbox.checked) {
            acc.push(row.selectionKey);
          }
          return acc;
        }, []),
        selectableRowsStates: this.selectableRows.reduce(
          (
            acc: { selectionKey: string; isSelected: boolean | undefined }[],
            row
          ) => {
            acc.push({
              selectionKey: row.selectionKey,
              isSelected: row.checkbox.checked,
            });
            return acc;
          },
          []
        ),
      });
    }
  }

  @action
  onSelectionAllChange(): void {
    this.selectableRows.forEach((row) => {
      row.checkbox.checked = this.selectAllCheckbox?.checked ?? false;
      row.checkbox.dispatchEvent(new Event('toggle', { bubbles: false }));
    });
    this.isSelectAllCheckboxSelected = this.selectAllCheckbox?.checked ?? false;
    this.onSelectionChangeCallback(this.selectAllCheckbox, 'all');
  }

  @action
  onSelectionRowChange(
    checkbox?: KdsFormCheckboxBaseSignature['Element'],
    selectionKey?: string
  ): void {
    this.setSelectAllState();
    this.onSelectionChangeCallback(checkbox, selectionKey);
  }

  @action
  didInsertSelectAllCheckbox(
    checkbox: KdsFormCheckboxBaseSignature['Element']
  ): void {
    this.selectAllCheckbox = checkbox;
  }

  @action
  willDestroySelectAllCheckbox(): void {
    this.selectAllCheckbox = undefined;
  }

  @action
  didInsertRowCheckbox(
    checkbox: KdsFormCheckboxBaseSignature['Element'],
    selectionKey?: string
  ): void {
    if (selectionKey) {
      this.selectableRows.push({ selectionKey, checkbox });
    }
    this.setSelectAllState();
  }

  @action
  willDestroyRowCheckbox(selectionKey?: string): void {
    this.selectableRows = this.selectableRows.filter(
      (row) => row.selectionKey !== selectionKey
    );
    this.setSelectAllState();
  }

  @action
  setSelectAllState(): void {
    if (this.selectAllCheckbox) {
      const selectableRowsCount = this.selectableRows.length;
      const selectedRowsCount = this.selectableRows.filter(
        (row) => row.checkbox.checked
      ).length;

      this.selectAllCheckbox.checked =
        selectedRowsCount === selectableRowsCount;
      this.selectAllCheckbox.indeterminate =
        selectedRowsCount > 0 && selectedRowsCount < selectableRowsCount;
      this.isSelectAllCheckboxSelected = this.selectAllCheckbox.checked;
      this.selectAllCheckbox.dispatchEvent(
        new Event('toggle', { bubbles: false })
      );
    }
  }
}