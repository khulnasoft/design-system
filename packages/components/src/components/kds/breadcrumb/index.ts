/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export interface KdsBreadcrumbSignature {
  Args: {
    ariaLabel?: string;
    itemsCanWrap?: boolean;
    didInsert?: () => void;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLElement;
}

const NOOP = () => {};

export default class KdsBreadcrumb extends Component<KdsBreadcrumbSignature> {
  /**
   * @param onDidInsert
   * @type {function}
   * @default () => {}
   */
  get didInsert(): () => void {
    const { didInsert } = this.args;

    if (typeof didInsert === 'function') {
      return didInsert;
    } else {
      return NOOP;
    }
  }

  /**
   * @param itemsCanWrap
   * @type {boolean}
   * @default true
   */
  get itemsCanWrap(): boolean {
    return this.args.itemsCanWrap ?? true;
  }

  /**
   * @param ariaLabel
   * @type {string}
   * @default 'breadcrumbs'
   */
  get ariaLabel(): string {
    return this.args.ariaLabel ?? 'breadcrumbs';
  }

  /**
   * Get the class names to apply to the component.
   * @method Breadcrumb#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-breadcrumb'];

    // add a class based on the @itemsCanWrap argument
    if (this.itemsCanWrap) {
      classes.push('kds-breadcrumb--items-can-wrap');
    }

    return classes.join(' ');
  }
}
