/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { visit, SKIP } from 'unist-util-visit';

export const rehypeRemoveAllKdsElements = () => (tree) => {
  visit(
    tree,
    (node) => {
      return (
        node.type === 'element' &&
        node.tagName === 'div' &&
        Object.keys(node.properties).some((key) => key.match(/^kds-/))
      );
    },
    (node, index, parent) => {
      // see: https://unifiedjs.com/learn/recipe/remove-node/
      parent.children.splice(index, 1);
      return [SKIP, index];
    }
  );
};
