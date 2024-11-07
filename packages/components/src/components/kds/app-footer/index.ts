/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

import type { ComponentLike } from '@glint/template';
import type { KdsYieldSignature } from '../yield';
import type { KdsAppFooterItemSignature } from './item.ts';
import type { KdsAppFooterLegalLinksSignature } from './legal-links';
import type { KdsAppFooterLinkSignature } from './link';
import type { KdsAppFooterStatusLinkSignature } from './status-link';
import type { KdsAppFooterThemeTypes } from './types.ts';

export interface KdsAppFooterSignature {
  Args: {
    ariaLabel?: string;
    copyrightYear?: string;
    theme?: KdsAppFooterThemeTypes;
  };
  Blocks: {
    default: [
      {
        ExtraBefore?: ComponentLike<KdsYieldSignature>;
        StatusLink?: ComponentLike<KdsAppFooterStatusLinkSignature>;
        LegalLinks?: ComponentLike<KdsAppFooterLegalLinksSignature>;
        Link?: ComponentLike<KdsAppFooterLinkSignature>;
        Item?: ComponentLike<KdsAppFooterItemSignature>;
        ExtraAfter?: ComponentLike<KdsYieldSignature>;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class KdsAppFooter extends Component<KdsAppFooterSignature> {
  /**
   * @param ariaLabel
   * @type {string}
   * @default 'Footer items'
   */
  get ariaLabel(): string {
    return this.args.ariaLabel ?? 'Footer items';
  }

  /**
   * @param theme
   * @type {KdsAppFooterThemeTypes}
   * @description The component theme
   * @default 'light'
   */
  get theme(): KdsAppFooterThemeTypes {
    return this.args.theme ?? 'light';
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-app-footer'];

    // add a class based on the @theme argument
    classes.push(`kds-app-footer--theme-${this.theme}`);

    return classes.join(' ');
  }
}
