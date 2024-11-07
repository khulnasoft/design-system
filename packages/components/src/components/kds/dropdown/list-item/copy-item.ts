/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import type { KdsCopySnippetSignature } from '../../copy/snippet';

export interface KdsDropdownListItemCopyItemSignature {
  Args: {
    copyItemTitle?: string;
    isTruncated?: KdsCopySnippetSignature['Args']['isTruncated'];
    text: KdsCopySnippetSignature['Args']['textToCopy'];
  };
  Element: HTMLLIElement;
}

export default class KdsDropdownListItemCopyItem extends Component<KdsDropdownListItemCopyItemSignature> {
  /**
   * @param text
   * @type {string}
   * @description The text of the item. If no text value is defined an error will be thrown
   */
  get text(): KdsCopySnippetSignature['Args']['textToCopy'] {
    const { text } = this.args;

    assert(
      '@text for "Kds::Dropdown::ListItem::CopyItem" must have a valid value',
      text !== undefined
    );

    return text;
  }

  /**
   * @param isTruncated
   * @type {boolean}
   * @default true
   * @description Indicates that the text should be truncated instead of wrapping and using multiple lines.
   */
  get isTruncated(): KdsCopySnippetSignature['Args']['isTruncated'] {
    const { isTruncated = true } = this.args;

    return isTruncated;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = [
      'kds-dropdown-list-item',
      'kds-dropdown-list-item--variant-copy-item',
    ];

    return classes.join(' ');
  }
}
