/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import anchoredPositionModifier from '../../../../../modifiers/kds-anchored-position.ts';

import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import {
  KdsFormSuperSelectHorizontalPositionValues,
  KdsFormSuperSelectHorizontalPositionToPlacementValues,
} from '../types.ts';

import type { PowerSelectSignature } from 'ember-power-select/components/power-select';
import type { Select as PowerSelect } from 'ember-power-select/components/power-select';
import type { CalculatePositionResult } from 'ember-basic-dropdown/utils/calculate-position';
import type { KdsFormSuperSelectHorizontalPositions } from '../types.ts';

export const DEFAULT_HORIZONTAL_POSITION: string =
  KdsFormSuperSelectHorizontalPositionValues.Left;
export const HORIZONTAL_POSITION_MAPPING =
  KdsFormSuperSelectHorizontalPositionToPlacementValues;

export interface KdsFormSuperSelectMultipleBaseSignature {
  Args: PowerSelectSignature['Args'] & {
    showAfterOptions?: boolean;
    afterOptionsContent?: string;
    resultCountMessage?: string;
    dropdownMaxWidth?: string;
    matchTriggerWidth?: boolean;
    isInvalid?: boolean;
  };
  Blocks: PowerSelectSignature['Blocks'];
  Element: PowerSelectSignature['Element'];
}

export default class KdsFormSuperSelectMultipleBase extends Component<KdsFormSuperSelectMultipleBaseSignature> {
  @tracked powerSelectAPI?: PowerSelect;
  @tracked showOnlySelected = false;
  @tracked showNoSelectedMessage = false;

  get horizontalPosition(): KdsFormSuperSelectHorizontalPositions {
    const { horizontalPosition = DEFAULT_HORIZONTAL_POSITION } = this.args;
    return horizontalPosition as KdsFormSuperSelectHorizontalPositions;
  }

  get selectedCount(): string {
    return this.powerSelectAPI?.selected?.length || '0';
  }

  get optionsCount(): string {
    return this.powerSelectAPI?.resultsCount.toString() || '0';
  }

  get resultCountMessage(): string {
    return (
      this.args.resultCountMessage ||
      `${this.selectedCount} selected of ${this.optionsCount} total`
    );
  }

  @action calculatePosition(
    trigger: Element,
    content: HTMLElement
  ): CalculatePositionResult {
    // use `kds-anchored-position` to calculate and set position
    // @ts-expect-error: known issue with type of invocation
    anchoredPositionModifier(content, [trigger], {
      placement: HORIZONTAL_POSITION_MAPPING[this.horizontalPosition],
      offsetOptions: 4,
      enableCollisionDetection: true,
    });
    // prevent PowerSelect from setting position
    return {
      horizontalPosition: 'auto',
      verticalPosition: 'auto',
      style: {},
    };
  }

  /**
   * This action sets the powerSelectAPI property and optionally calls a registerAPI function.
   *
   * @param {Object} powerSelectAPI - The API object for the PowerSelect component.
   *
   * If a `registerAPI` function is passed in through the component's arguments,
   * this function will be called with the `powerSelectAPI` as its argument.
   * This allows parent components or controllers to have access to the PowerSelect API.
   *
   * The `powerSelectAPI` is also stored on the component instance and used in `clearSelected`
   */
  @action
  setPowerSelectAPI(powerSelectAPI: PowerSelect): void {
    if (typeof this.args.registerAPI === 'function') {
      this.args.registerAPI(powerSelectAPI);
    }
    this.powerSelectAPI = powerSelectAPI;
  }

  @action showSelected(): void {
    this.showNoSelectedMessage = this.selectedCount === '0';
    this.showOnlySelected = true;
  }

  @action showAll(): void {
    this.showNoSelectedMessage = false;
    this.showOnlySelected = false;
  }

  @action clearSelected(): void {
    this.powerSelectAPI?.actions.select(null);
    // show all options after clearing all selection
    this.showNoSelectedMessage = false;
    this.showOnlySelected = false;
  }

  /**
   * Determine if `@afterOptionsComponent` gets displayed
   * @param showAfterOptions
   * @type {boolean}
   * @default true
   */
  get showAfterOptions(): boolean {
    return this.args.showAfterOptions ?? true;
  }

  // NOTE: The searchPlaceholder doesn't currently work for the multiple select
  /**
   * Get the search placeholder text
   * @param searchPlaceholder
   * @type {string}
   * @default 'Search'
   */
  get searchPlaceholder(): string {
    return this.args.searchPlaceholder ?? 'Search';
  }

  /**
   * Get the maxWidth to apply to the dropdown
   * @param dropdownMaxWidth
   * @type {string}
   * @default 'none'
   */
  get dropdownMaxWidthStyle(): Record<string, string> {
    const maxWidthStyle: { [key: string]: string } = {};
    if (this.args.dropdownMaxWidth) {
      maxWidthStyle['--kds-form-super-select-dropdown-max-width'] =
        this.args.dropdownMaxWidth;
    }
    return maxWidthStyle;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-form-super-select', 'kds-form-super-select-multiple'];

    // add a class based on the @matchTriggerWidth argument or whether dropdownMaxWidth is set
    if (this.args.matchTriggerWidth === false || this.args.dropdownMaxWidth) {
      classes.push('kds-form-super-select--dropdown-content-auto-width');
    }

    // add a class based on the @isInvalid argument
    if (this.args.isInvalid) {
      classes.push(`kds-form-super-select--is-invalid`);
    }

    // add a class based on the showOnlySelected
    if (this.showOnlySelected) {
      classes.push(`kds-form-super-select--show-only-selected`);
    }

    return classes.join(' ');
  }
}
