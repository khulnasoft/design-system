/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import type { KdsIconSignature } from '../icon';
import type { KdsInteractiveSignature } from '../interactive/';

export interface KdsAppHeaderHomeLinkSignature {
  Args: KdsInteractiveSignature['Args'] & {
    icon: KdsIconSignature['Args']['name'];
    color?: string;
    ariaLabel: string;
  };
  Element: KdsInteractiveSignature['Element'];
}

export default class KdsAppHeaderHomeLink extends Component<KdsAppHeaderHomeLinkSignature> {
  get ariaLabel(): string {
    const { ariaLabel } = this.args;

    assert(
      '@ariaLabel for "Kds::AppHeader::HomeLink" ("Logo") must have a valid value',
      ariaLabel !== undefined
    );

    return ariaLabel;
  }
}
