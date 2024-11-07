/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { guidFor } from '@ember/object/internals';

import {
  KdsAccordionSizeValues,
  KdsAccordionTypeValues,
  KdsAccordionItemTitleTagValues,
} from '../types.ts';
import type {
  KdsAccordionForceStates,
  KdsAccordionSizes,
  KdsAccordionTypes,
  KdsAccordionItemTitleTags,
} from '../types.ts';

export const SIZES: string[] = Object.values(KdsAccordionSizeValues);
export const DEFAULT_SIZE = KdsAccordionSizeValues.Medium;

export const TYPES: string[] = Object.values(KdsAccordionTypeValues);
export const DEFAULT_TYPE = KdsAccordionTypeValues.Card;

const TEXT_SIZE_MAP = {
  small: 100,
  medium: 200,
  large: 300,
};

export interface KdsAccordionItemSignature {
  Args: {
    ariaLabel?: string;
    containsInteractive?: boolean;
    forceState?: KdsAccordionForceStates;
    isOpen?: boolean;
    isStatic?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClickToggle?: (event: MouseEvent, ...args: any[]) => void;
    size?: KdsAccordionSizes;
    titleTag?: KdsAccordionItemTitleTags;
    type?: KdsAccordionTypes;
  };
  Blocks: {
    toggle?: [];
    content: [
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        close: (...args: any[]) => void;
      },
    ];
  };
  Element: HTMLElement;
}

export default class KdsAccordionItem extends Component<KdsAccordionItemSignature> {
  /**
   * Generates a unique ID for the Content
   *
   * @param contentId
   */
  contentId = 'content-' + guidFor(this);
  titleId = 'title-' + guidFor(this);

  get ariaLabelledBy(): string | undefined {
    if (!this.args.ariaLabel) {
      return this.titleId;
    }
    return undefined;
  }

  /**
   * @param containsInteractive
   * @type {boolean}
   * @default false
   */
  get containsInteractive(): boolean {
    return this.args.containsInteractive ?? false;
  }

  /**
   * @param toggleTextSize
   * @type {KdsTextSizes}
   * @default 'medium'
   */
  get toggleTextSize(): number {
    const size = this.args.size ?? DEFAULT_SIZE;
    return TEXT_SIZE_MAP[size];
  }

  /**
   * Sets the size for the component
   *
   * @param size
   * @type {KdsAccordionSizes}
   * @default 'medium'
   */
  get size(): KdsAccordionSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::Accordion::Item" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  /**
   * Sets the type of the component
   *
   * @param type
   * @type {KdsAccordionTypes}
   * @default 'card'
   */
  get type(): KdsAccordionTypes {
    const { type = DEFAULT_TYPE } = this.args;

    assert(
      `@type for "Kds::Accordion::Item" must be one of the following: ${TYPES.join(
        ', '
      )}; received: ${type}`,
      TYPES.includes(type)
    );

    return type;
  }

  get titleTag(): KdsAccordionItemTitleTags {
    return this.args.titleTag ?? KdsAccordionItemTitleTagValues.Div;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-accordion-item'];

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('kds-accordion-item--is-open');
    }

    // add a class based on the @isStatic argument
    if (this.args.isStatic) {
      classes.push('kds-accordion-item--is-static');
    }

    // add a class based on the @size argument
    classes.push(`kds-accordion-item--size-${this.size}`);

    // add a class based on the @type argument
    classes.push(`kds-accordion-item--type-${this.type}`);

    if (this.containsInteractive) {
      // Entire accordion item including the chevron is interactive:
      classes.push('kds-accordion-item--contains-interactive');
    } else {
      // Only chevron is interactive:
      classes.push('kds-accordion-item--does-not-contain-interactive');
    }

    return classes.join(' ');
  }
}
