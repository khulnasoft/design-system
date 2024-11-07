/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import type { KdsTextBodySignature } from '../../text/body';

export interface KdsDropdownListItemTitleSignature {
  Args: {
    text: string;
  };
  Element: KdsTextBodySignature['Element'];
}

export default class KdsDropdownListItemTitle extends Component<KdsDropdownListItemTitleSignature> {
  /**
   * @param text
   * @type {string}
   * @description The text of the item. If no text value is defined an error will be thrown
   */
  get text(): string {
    const { text } = this.args;

    assert(
      '@text for "Kds::Dropdown::ListItem::Title" must have a valid value',
      text !== undefined
    );

    return text;
  }
}
