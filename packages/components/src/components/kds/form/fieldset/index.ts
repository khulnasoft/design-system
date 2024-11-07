/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { getElementId } from '../../../../utils/kds-get-element-id.ts';
import {
  ariaDescribedBy,
  registerAriaDescriptionElement,
  unregisterAriaDescriptionElement,
} from '../../../../utils/kds-aria-described-by.ts';
import { KdsFormFieldsetLayoutValues } from './types.ts';
import KdsFormLegendComponent from '../legend/index.ts';
import KdsFormHelperTextComponent from '../helper-text/index.ts';
import KdsFormErrorComponent from '../error/index.ts';

import type { ComponentLike, WithBoundArgs } from '@glint/template';
import type { KdsFormFieldsetLayouts } from './types.ts';
import type { KdsYieldSignature } from '../../yield/index.ts';
import type { AriaDescribedByComponent } from '../../../../utils/kds-aria-described-by.ts';

export interface KdsFormFieldsetSignature {
  Args: {
    extraAriaDescribedBy?: string;
    isOptional?: boolean;
    isRequired?: boolean;
    layout?: KdsFormFieldsetLayouts;
  };
  Blocks: {
    default: [
      {
        Legend?: WithBoundArgs<
          typeof KdsFormLegendComponent,
          'contextualClass' | 'isRequired' | 'isOptional'
        >;
        HelperText?: WithBoundArgs<
          typeof KdsFormHelperTextComponent,
          'contextualClass' | 'controlId' | 'onInsert'
        >;
        Control?: ComponentLike<KdsYieldSignature>;
        Error?: WithBoundArgs<
          typeof KdsFormErrorComponent,
          'contextualClass' | 'controlId' | 'onInsert' | 'onRemove'
        >;
        id?: string;
        ariaDescribedBy?: string;
      },
    ];
  };
  Element: HTMLElement;
}

// @ts-expect-error: decorator function return type 'ClassOf<AriaDescribedByComponent>' is not assignable to 'typeof KdsFormFieldComponent'
@ariaDescribedBy
export default class KdsFormFieldset extends Component<KdsFormFieldsetSignature> {
  /**
   * Sets the layout of the group
   *
   * @param layout
   * @type {enum}
   * @default 'vertical'
   */
  get layout(): KdsFormFieldsetLayouts {
    return this.args.layout ?? KdsFormFieldsetLayoutValues.Vertical;
  }

  /**
   * Calculates the unique ID to assign to the fieldset
   */
  get id(): string {
    return getElementId(this);
  }

  /**
   * @param isRequired
   * @type {boolean}
   * @default false
   */
  get isRequired(): boolean {
    return this.args.isRequired || false;
  }

  /**
   * @param isOptional
   * @type {boolean}
   * @default false
   */
  get isOptional(): boolean {
    return this.args.isOptional || false;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    // we just need a class for the layout
    const classes = ['kds-form-group'];

    // add a class based on the @layout argument
    classes.push(`kds-form-group--layout-${this.layout}`);

    return classes.join(' ');
  }

  @action
  appendDescriptor(element: HTMLElement): void {
    registerAriaDescriptionElement(this as AriaDescribedByComponent, element);
  }

  @action removeDescriptor(element: HTMLElement): void {
    unregisterAriaDescriptionElement(this as AriaDescribedByComponent, element);
  }
}
