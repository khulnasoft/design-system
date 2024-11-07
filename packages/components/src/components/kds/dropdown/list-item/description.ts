/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import type { KdsTextBodySignature } from '../../text/body';

export interface KdsDropdownListItemDescriptionSignature {
  Args: {
    text: string;
  };
  Element: KdsTextBodySignature['Element'];
}

export default class KdsDropdownListItemDescription extends Component<KdsDropdownListItemDescriptionSignature> {
  /**
   * @param text
   * @type {string}
   * @description The text of the item. If no text value is defined an error will be thrown
   */
  get text(): string {
    const { text } = this.args;

    assert(
      '@text for "Kds::Dropdown::ListItem::Description" must have a valid value',
      text !== undefined
    );

    return text;
  }
}
