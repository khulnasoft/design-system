/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { getElementId } from '../../../utils/kds-get-element-id.ts';
import { buildWaiter } from '@ember/test-waiters';
import type { WithBoundArgs } from '@glint/template';

import type { KdsFlyoutSizes } from './types.ts';

import { KdsFlyoutSizesValues } from './types.ts';
import KdsDialogPrimitiveBodyComponent from '../dialog-primitive/body.ts';
import KdsDialogPrimitiveDescriptionComponent from '../dialog-primitive/description.ts';
import KdsDialogPrimitiveFooterComponent from '../dialog-primitive/footer.ts';
import KdsDialogPrimitiveHeaderComponent from '../dialog-primitive/header.ts';

const waiter = buildWaiter('@khulnasoft/design-system-components:flyout');

export const DEFAULT_SIZE = KdsFlyoutSizesValues.Medium;
export const DEFAULT_HAS_OVERLAY = true;
export const SIZES: string[] = Object.values(KdsFlyoutSizesValues);

export interface KdsFlyoutSignature {
  Args: {
    size?: KdsFlyoutSizes;
    returnFocusTo?: string;
    onOpen?: () => void;
    onClose?: (event: Event) => void;
  };
  Blocks: {
    default: [
      {
        Header?: WithBoundArgs<
          typeof KdsDialogPrimitiveHeaderComponent,
          'id' | 'onDismiss' | 'contextualClassPrefix'
        >;
        Description?: WithBoundArgs<
          typeof KdsDialogPrimitiveDescriptionComponent,
          'contextualClass'
        >;
        Body?: WithBoundArgs<
          typeof KdsDialogPrimitiveBodyComponent,
          'contextualClass'
        >;
        Footer?: WithBoundArgs<
          typeof KdsDialogPrimitiveFooterComponent,
          'onDismiss' | 'contextualClass'
        >;
      },
    ];
  };
  Element: HTMLDialogElement;
}

export default class KdsFlyout extends Component<KdsFlyoutSignature> {
  @tracked isOpen = false;
  element!: HTMLDialogElement;
  body!: HTMLElement;
  bodyInitialOverflowValue = '';

  /**
   * Sets the size of the flyout
   * Accepted values: medium, large
   *
   * @param size
   * @type {string}
   * @default 'medium'
   */
  get size(): KdsFlyoutSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::Flyout" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  /**
   * Calculates the unique ID to assign to the title
   */
  get id(): string {
    return getElementId(this);
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-flyout'];

    // add a class based on the @size argument
    classes.push(`kds-flyout--size-${this.size}`);

    return classes.join(' ');
  }

  @action registerOnCloseCallback(event: Event) {
    if (this.args.onClose && typeof this.args.onClose === 'function') {
      this.args.onClose(event);
    }

    this.isOpen = false;
  }

  @action
  didInsert(element: HTMLDialogElement): void {
    // Store references of `<dialog>` and `<body>` elements
    this.element = element;
    this.body = document.body;

    if (this.body) {
      // Store the initial `overflow` value of `<body>` so we can reset to it
      this.bodyInitialOverflowValue =
        this.body.style.getPropertyValue('overflow');
    }

    // Register "onClose" callback function to be called when a native 'close' event is dispatched
    this.element.addEventListener('close', this.registerOnCloseCallback, true);

    // If the flyout dialog is not already open
    if (!this.element.open) {
      this.open();
    }
  }

  @action
  willDestroyNode(): void {
    if (this.element) {
      this.element.removeEventListener(
        'close',
        this.registerOnCloseCallback,
        true
      );
    }
  }

  @action
  open(): void {
    // Make flyout dialog visible using the native `showModal` method
    this.element.showModal();
    this.isOpen = true;

    // Prevent page from scrolling when the dialog is open
    if (this.body) this.body.style.setProperty('overflow', 'hidden');

    // Call "onOpen" callback function
    if (this.args.onOpen && typeof this.args.onOpen === 'function') {
      this.args.onOpen();
    }
  }

  @action
  async onDismiss(): Promise<void> {
    // allow ember test helpers to be aware of when the `close` event fires
    // when using `click` or other helpers from '@ember/test-helpers'
    // Notice: this code will get stripped out in production builds (DEBUG evaluates to `true` in dev/test builds, but `false` in prod builds)
    if (this.element.open) {
      const token = waiter.beginAsync();
      const listener = () => {
        waiter.endAsync(token);
        this.element.removeEventListener('close', listener);
      };
      this.element.addEventListener('close', listener);
    }

    // Make flyout dialog invisible using the native `close` method
    this.element.close();

    // Reset page `overflow` property
    if (this.body) {
      this.body.style.removeProperty('overflow');
      if (this.bodyInitialOverflowValue === '') {
        if (this.body.style.length === 0) {
          this.body.removeAttribute('style');
        }
      } else {
        this.body.style.setProperty('overflow', this.bodyInitialOverflowValue);
      }
    }

    // Return focus to a specific element (if provided)
    if (this.args.returnFocusTo) {
      const initiator = document.getElementById(this.args.returnFocusTo);
      if (initiator) {
        initiator.focus();
      }
    }
  }
}
