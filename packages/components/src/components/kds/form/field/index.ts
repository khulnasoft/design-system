/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { getElementId } from '../../../../utils/kds-get-element-id.ts';
import {
  ariaDescribedBy,
  registerAriaDescriptionElement,
  unregisterAriaDescriptionElement,
} from '../../../../utils/kds-aria-described-by.ts';
import { KdsFormFieldLayoutValues } from './types.ts';
import KdsFormLabelComponent from '../label/index.ts';
import KdsFormHelperTextComponent from '../helper-text/index.ts';
import KdsFormCharacterCountComponent from '../character-count/index.ts';
import KdsFormErrorComponent from '../error/index.ts';

import type { KdsFormFieldLayouts } from './types.ts';
import type { ComponentLike, WithBoundArgs } from '@glint/template';
import type { KdsYieldSignature } from '../../yield/index.ts';
import type { AriaDescribedByComponent } from '../../../../utils/kds-aria-described-by.ts';

export const LAYOUT_TYPES = Object.values(KdsFormFieldLayoutValues);

export interface KdsFormFieldSignature {
  Args: {
    id?: string;
    extraAriaDescribedBy?: string;
    contextualClass?: string;
    isOptional?: boolean;
    isRequired?: boolean;
    layout?: KdsFormFieldLayouts;
  };
  Blocks: {
    default: [
      {
        Label?: WithBoundArgs<
          typeof KdsFormLabelComponent,
          'contextualClass' | 'controlId' | 'isRequired' | 'isOptional'
        >;
        HelperText?: WithBoundArgs<
          typeof KdsFormHelperTextComponent,
          'contextualClass' | 'controlId' | 'onInsert'
        >;
        Control?: ComponentLike<KdsYieldSignature>;
        CharacterCount?: WithBoundArgs<
          typeof KdsFormCharacterCountComponent,
          'contextualClass' | 'controlId' | 'onInsert'
        >;
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

// @ts-expect-error: decorator function return type 'ClassOf<AriaDescribedBy>' is not assignable to 'typeof KdsFormField'
@ariaDescribedBy
export default class KdsFormField extends Component<KdsFormFieldSignature> {
  /**
   * Sets the layout of the field
   *
   * @param layout
   * @type {string}
   */
  get layout(): KdsFormFieldLayouts | undefined {
    const { layout } = this.args;

    assert(
      `@layout for "Kds::Form::Field" must be one of the following: ${LAYOUT_TYPES.join(
        ', '
      )}; received: ${layout}`,
      LAYOUT_TYPES.includes(layout as KdsFormFieldLayoutValues)
    );

    return layout;
  }

  /**
   * Calculates the unique ID to assign to the form control
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
    const classes: string[] = [];

    if (this.args.layout) {
      classes.push(`kds-form-field--layout-${this.layout}`);
    }

    // add a class based on the @contextualClass argument
    // notice: this will *not* be documented for public use
    if (this.args.contextualClass) {
      classes.push(this.args.contextualClass);
    }

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
