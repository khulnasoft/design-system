/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import type { SafeString } from '@ember/template/-private/handlebars';
import { assert } from '@ember/debug';

import type { KdsInteractiveSignature } from '../interactive/';
import { KdsAppFooterStatusLinkStatusValues } from './types.ts';
import type { KdsAppFooterStatusTypes } from './types.ts';
import type { KdsAppFooterLinkSignature } from './link.ts';
import type { KdsIconSignature } from '../icon';

export const STATUSES = KdsAppFooterStatusLinkStatusValues;

export interface KdsAppFooterStatusLinkSignature {
  Args: KdsInteractiveSignature['Args'] & {
    itemStyle?: SafeString;
    status?: KdsAppFooterStatusTypes;
    statusIcon?: KdsIconSignature['Args']['name'];
    statusIconColor?: string;
    text?: string;
  };
  Element: KdsAppFooterLinkSignature['Element'];
}

export default class KdsAppFooterStatusLink extends Component<KdsAppFooterStatusLinkSignature> {
  constructor(owner: unknown, args: KdsInteractiveSignature['Args']) {
    super(owner, args);

    assert(
      'Either @status or @text for "Kds::AppFooter::StatusLink" must have a valid value',
      this.args.text !== undefined || this.args.status
    );
  }

  /**
   * @param status
   * @type {KdsAppFooterStatusTypes}
   * @description The name of the status which the StatusLink is being set to
   */
  get status(): KdsAppFooterStatusTypes | undefined {
    let status;
    if (this.args.status) {
      status = this.args.status.toLowerCase();
      assert(
        `@status for "Kds::AppFooter" must be one of the following: ${Object.keys(
          STATUSES
        ).join(', ')} received: ${this.args.status}`,

        status in STATUSES
      );
      return status as KdsAppFooterStatusTypes;
    }
    return status;
  }

  get statusIcon(): KdsIconSignature['Args']['name'] | undefined {
    return (
      this.args.statusIcon ??
      (this.status !== undefined ? STATUSES[this.status]?.iconName : undefined)
    );
  }

  /**
   * Get the inline style to apply to the item.
   * @method StatusLink#itemStyle
   * @return {string} The "style" attribute to apply to the item.
   */
  get itemStyle(): SafeString | undefined {
    if (this.args.statusIconColor) {
      return htmlSafe(
        `--kds-app-footer-status-icon-color: ${this.args.statusIconColor}`
      );
    } else {
      return undefined;
    }
  }

  /**
   * @param text
   * @type {string}
   * @description The text content of the StatusLink
   */
  get text(): string | undefined {
    if (!this.args.text && this.status) {
      return STATUSES[this.status]?.text;
    }
    return this.args.text;
  }

  /**
   * @param href
   * @type {string}
   * @description The href value of the StatusLink
   */
  get href(): string {
    return this.args.href ?? 'https://status.khulnasoft.com';
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-app-footer__status-link'];

    // add a class based on status if no statusIconColor is explicitly specified
    if (this.status && !this.args.statusIconColor) {
      classes.push(`kds-app-footer__status-link--${this.status}`);
    }

    return classes.join(' ');
  }
}
