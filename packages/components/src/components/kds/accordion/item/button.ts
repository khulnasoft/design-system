/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';

import type { KdsAccordionSizes } from '../types.ts';

export interface KdsAccordionItemButtonSignature {
  Args: {
    ariaLabel?: string;
    ariaLabelledBy?: string;
    contentId?: string;
    isOpen?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClickToggle?: (event: MouseEvent, ...args: any[]) => void;
    parentContainsInteractive?: boolean;
    size?: KdsAccordionSizes;
    id?: string;
  };
  Element: HTMLButtonElement;
}

export default class KdsAccordionItemButton extends Component<KdsAccordionItemButtonSignature> {
  @action
  onClick(event: MouseEvent): void {
    if (this.args.onClickToggle) {
      this.args.onClickToggle(event);
    }
  }

  /**
   * Get the class names to apply to the component.
   * @method ItemButton#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-accordion-item__button'];

    // add a class based on the @isOpen argument
    if (this.args.isOpen) {
      classes.push('kds-accordion-item__button--is-open');
    }

    // add a class based on the @size argument
    if (this.args.size) {
      classes.push(`kds-accordion-item__button--size-${this.args.size}`);
    }

    if (this.args.parentContainsInteractive === false) {
      classes.push(
        'kds-accordion-item__button--parent-does-not-contain-interactive'
      );
    } else {
      classes.push('kds-accordion-item__button--parent-contains-interactive');
    }
    return classes.join(' ');
  }
}
