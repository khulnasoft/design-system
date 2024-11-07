/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import { SIZES, DEFAULT_SIZE, TYPES, DEFAULT_TYPE } from './item/index.ts';

import type { ComponentLike } from '@glint/template';
import { KdsAccordionItemTitleTagValues } from './types.ts';
import type { KdsAccordionItemSignature } from './item/index.ts';
import type {
  KdsAccordionForceStates,
  KdsAccordionSizes,
  KdsAccordionTypes,
  KdsAccordionItemTitleTags,
} from './types.ts';

export interface KdsAccordionSignature {
  Args: {
    size?: KdsAccordionSizes;
    type?: KdsAccordionTypes;
    forceState?: KdsAccordionForceStates;
    titleTag?: KdsAccordionItemTitleTags;
  };
  Blocks: {
    default: [
      {
        Item?: ComponentLike<KdsAccordionItemSignature>;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class KdsAccordion extends Component<KdsAccordionSignature> {
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
      `@size for "Kds::Accordion" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  get titleTag(): KdsAccordionItemTitleTags {
    return this.args.titleTag ?? KdsAccordionItemTitleTagValues.Div;
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
      `@type for "Kds::Accordion" must be one of the following: ${TYPES.join(
        ', '
      )}; received: ${type}`,
      TYPES.includes(type)
    );

    return type;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-accordion'];

    // add a class based on the @size argument
    classes.push(`kds-accordion--size-${this.size}`);

    // add a class based on the @type argument
    classes.push(`kds-accordion--type-${this.type}`);

    return classes.join(' ');
  }
}
