/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { tracked } from '@glimmer/tracking';
import {
  KdsTableThSortOrderValues,
  KdsTableThSortOrderLabelValues,
} from './types.ts';
import type { KdsFormCheckboxBaseSignature } from '../form/checkbox/base';
import type {
  KdsTableScope,
  KdsTableThSortOrder,
  KdsTableThSortOrderLabels,
} from './types';
import type { KdsTableThSignature } from './th';

export interface KdsTableThSelectableSignature {
  Args: {
    didInsert?: (
      checkbox: KdsFormCheckboxBaseSignature['Element'],
      selectionKey?: string
    ) => void;
    isSelected?: boolean;
    onClickSortBySelected?: () => void;
    onSelectionChange?: (
      target: KdsFormCheckboxBaseSignature['Element'],
      selectionKey: string | undefined
    ) => void;
    selectionAriaLabelSuffix?: string;
    selectionKey?: string;
    selectionScope?: KdsTableScope;
    sortBySelectedOrder?: KdsTableThSortOrder;
    willDestroy?: (selectionKey?: string) => void;
  };
  Element: KdsTableThSignature['Element'];
}

export default class KdsTableThSelectable extends Component<KdsTableThSelectableSignature> {
  @tracked isSelected: boolean;
  guid = guidFor(this);

  checkboxId = `checkbox-${this.guid}`;
  labelId = `label-${this.guid}`;

  constructor(owner: unknown, args: KdsTableThSelectableSignature['Args']) {
    super(owner, args);
    this.isSelected = this.args.isSelected ?? false;
  }

  get isSortable(): boolean {
    return this.args.onClickSortBySelected !== undefined;
  }

  get ariaLabel(): string {
    const { selectionAriaLabelSuffix } = this.args;
    const prefix = this.isSelected ? 'Deselect' : 'Select';
    if (selectionAriaLabelSuffix) {
      return `${prefix} ${selectionAriaLabelSuffix}`;
    } else {
      return prefix;
    }
  }

  get ariaSort(): KdsTableThSortOrderLabels | undefined {
    switch (this.args.sortBySelectedOrder) {
      case KdsTableThSortOrderValues.Asc:
        return KdsTableThSortOrderLabelValues.Asc;
      case KdsTableThSortOrderValues.Desc:
        return KdsTableThSortOrderLabelValues.Desc;
      default:
        // none is the default per the spec.
        return KdsTableThSortOrderLabelValues.None;
    }
  }

  @action
  didInsert(checkbox: KdsFormCheckboxBaseSignature['Element']): void {
    const { didInsert } = this.args;
    if (typeof didInsert === 'function') {
      didInsert(checkbox, this.args.selectionKey);
      // we need to use a custom event listener here because changing the `checked` value via JS
      // (and this happens with the "select all") doesn't trigger the `change` event
      // and consequently the `aria-label` won't be automatically updated (and so we have to force it)
      checkbox.addEventListener(
        'toggle',
        this.updateAriaLabel.bind(this),
        true
      );
    }
  }

  @action
  willDestroyNode(checkbox: KdsFormCheckboxBaseSignature['Element']): void {
    super.willDestroy();
    const { willDestroy } = this.args;
    if (typeof willDestroy === 'function') {
      willDestroy(this.args.selectionKey);
      if (checkbox) {
        checkbox.removeEventListener(
          'toggle',
          this.updateAriaLabel.bind(this),
          true
        );
      }
    }
  }

  @action
  onSelectionChange(event: Event): void {
    // Assert event.target as KdsFormCheckboxBaseSignature['Element'] to access the 'checked' property
    const target = event.target as KdsFormCheckboxBaseSignature['Element'];
    this.isSelected = target.checked;
    const { onSelectionChange } = this.args;
    if (typeof onSelectionChange === 'function') {
      onSelectionChange(target, this.args.selectionKey);
    }
  }

  updateAriaLabel(event: Event): void {
    // Assert event.target as HTMLInputElement to access the 'checked' property
    const target = event.target as KdsFormCheckboxBaseSignature['Element'];
    this.isSelected = target.checked;
  }
}
