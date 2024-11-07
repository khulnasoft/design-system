/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import type { KdsIconSignature } from '../../icon';
import type { KdsInteractiveSignature } from '../../interactive/';

export interface KdsSideNavHeaderHomeLinkSignature {
  Args: KdsInteractiveSignature['Args'] & {
    icon: KdsIconSignature['Args']['name'];
    color?: string;
    ariaLabel: string;
  };
  Element: KdsInteractiveSignature['Element'];
}

export default class KdsSideNavHeaderHomeLink extends Component<KdsSideNavHeaderHomeLinkSignature> {
  /**
   * @param ariaLabel
   * @type {string}
   * @description The value of `aria-label`
   */
  get ariaLabel(): string {
    const { ariaLabel } = this.args;

    assert(
      '@ariaLabel for "Kds::SideNav::Header::HomeLink" ("Logo") must have a valid value',
      ariaLabel !== undefined
    );

    return ariaLabel;
  }
}
