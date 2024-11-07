/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import type { KdsFormCheckboxBaseSignature } from '../form/checkbox/base';

export enum KdsTableDensityValues {
  Default = 'default',
  Medium = 'medium',
  Short = 'short',
  Tall = 'tall',
}
export type KdsTableDensities = `${KdsTableDensityValues}`;

export enum KdsTableHorizontalAlignmentValues {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}
export type KdsTableHorizontalAlignment =
  `${KdsTableHorizontalAlignmentValues}`;

export enum KdsTableScopeValues {
  Col = 'col',
  Row = 'row',
}
export type KdsTableScope = `${KdsTableScopeValues}`;

export enum KdsTableThSortOrderIconValues {
  ArrowDown = 'arrow-down',
  ArrowUp = 'arrow-up',
  SwapVertical = 'swap-vertical',
}
export type KdsTableThSortOrderIcons = `${KdsTableThSortOrderIconValues}`;

export enum KdsTableThSortOrderLabelValues {
  Asc = 'ascending',
  Desc = 'descending',
  None = 'none',
}
export type KdsTableThSortOrderLabels = `${KdsTableThSortOrderLabelValues}`;

export enum KdsTableThSortOrderValues {
  Asc = 'asc',
  Desc = 'desc',
}
export type KdsTableThSortOrder = `${KdsTableThSortOrderValues}`;

export enum KdsTableVerticalAlignmentValues {
  Baseline = 'baseline',
  Middle = 'middle',
  Top = 'top',
}
export type KdsTableVerticalAlignment = `${KdsTableVerticalAlignmentValues}`;

export type KdsTableSelectableRow = {
  checkbox: KdsFormCheckboxBaseSignature['Element'];
  selectionKey: string;
};

interface BaseKdsTableColumn {
  align?: KdsTableHorizontalAlignment;
  isVisuallyHidden?: boolean;
  label: string;
  sortingFunction?: KdsTableSortingFunction<unknown>;
  tooltip?: string;
  width?: string;
}

interface SortableKdsTableColumn extends BaseKdsTableColumn {
  isSortable: true;
  key: string;
}

interface NonSortableKdsTableColumn extends BaseKdsTableColumn {
  isSortable?: false;
  key?: string;
}

export type KdsTableColumn = SortableKdsTableColumn | NonSortableKdsTableColumn;

export type KdsTableSortingFunction<T> = (a: T, b: T) => number;

export interface KdsTableOnSelectionChangeSignature {
  selectionKey?: string;
  selectionCheckboxElement?: KdsFormCheckboxBaseSignature['Element'];
  selectedRowsKeys: string[];
  selectableRowsStates: {
    selectionKey: string;
    isSelected?: boolean;
  }[];
}

export type KdsTableModel = Array<Record<string, unknown>>;
