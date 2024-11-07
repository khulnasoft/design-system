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
import type { KdsModalSizes, KdsModalColors } from './types.ts';

import KdsDialogPrimitiveHeaderComponent from '../dialog-primitive/header.ts';
import KdsDialogPrimitiveBodyComponent from '../dialog-primitive/body.ts';
import KdsDialogPrimitiveFooterComponent from '../dialog-primitive/footer.ts';
import { KdsModalSizeValues, KdsModalColorValues } from './types.ts';

const waiter = buildWaiter('@khulnasoft/design-system-components:modal');

export const DEFAULT_SIZE = KdsModalSizeValues.Medium;
export const DEFAULT_COLOR = KdsModalColorValues.Neutral;

export const SIZES: string[] = Object.values(KdsModalSizeValues);
export const COLORS: string[] = Object.values(KdsModalColorValues);

export interface KdsModalSignature {
  Args: {
    isDismissDisabled?: boolean;
    size?: KdsModalSizes;
    color?: KdsModalColors;
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

export default class KdsModal extends Component<KdsModalSignature> {
  @tracked isOpen = false;
  element!: HTMLDialogElement;
  body!: HTMLElement;
  bodyInitialOverflowValue = '';

  get isDismissDisabled(): boolean {
    return this.args.isDismissDisabled ?? false;
  }

  get size(): KdsModalSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::Modal" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  get color(): KdsModalColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::Modal" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  get id(): string {
    return getElementId(this);
  }

  get classNames(): string {
    const classes = ['kds-modal'];

    // add a class based on the @size argument
    classes.push(`kds-modal--size-${this.size}`);

    // add a class based on the @color argument
    classes.push(`kds-modal--color-${this.color}`);

    return classes.join(' ');
  }

  @action registerOnCloseCallback(event: Event): void {
    if (
      !this.isDismissDisabled &&
      this.args.onClose &&
      typeof this.args.onClose === 'function'
    ) {
      this.args.onClose(event);
    }

    // If the dismissal of the modal is disabled, we keep the modal open/visible otherwise we mark it as closed
    if (this.isDismissDisabled) {
      // If, in a chain of events, the element is not attached to the DOM, the `showModal` would fail
      // so we add this safeguard condition that checks for the `<dialog>` to have a parent
      if (this.element.parentElement) {
        // As there is no way to `preventDefault` on `close` events, we call the `showModal` function
        // preserving the state of the modal dialog
        this.element.showModal();
      }
    } else {
      this.isOpen = false;
    }
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

    // If the modal dialog is not already open
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
    // Make modal dialog visible using the native `showModal` method
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

    // Make modal dialog invisible using the native `close` method
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
