/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { visit } from 'unist-util-visit';

export const rehypeSanitizeTextNodes = () => (tree) => {
  visit(tree, 'text', (node) => {
    node.value = node.value
      // eg. \{{on "change" this.onChange}}
      .replace(/\\{{/g, '{{')
      // revert the <Kds::*> tags inlined in the text to their original format (see: transformKdsTags)
      .replace(
        /<div kds-([^>]+?)>/gim,
        (_match, p1) => `<Kds::${p1.replace('_', '::')}>`
      );
  });
};
