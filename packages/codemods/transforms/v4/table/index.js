/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

module.exports = function ({ source /*, path*/ }, { parse, visit }) {
  const ast = parse(source);

  return visit(ast, () => {
    // update the `@onClick` attribute to `@onClickSort`
    const updateThSortNode = (node) => {
      let isUpdated = false;

      node.attributes.forEach((a) => {
        if (a.name === '@onClick') {
          a.name = '@onClickSort';
          isUpdated = true;
        }
      });

      return isUpdated;
    };

    // find recursively a child node with tag `*.ThSort` and update it
    const updateTableChildren = (children) => {
      let hasUpdatedChildren = false;
      children.forEach((node) => {
        if (node.tag && node.tag.includes('.ThSort')) {
          const isUpdated = updateThSortNode(node);
          hasUpdatedChildren = hasUpdatedChildren && isUpdated;
        } else if (node.children) {
          const hasUpdatedSubChildren = updateTableChildren(node.children);
          hasUpdatedChildren = hasUpdatedChildren && hasUpdatedSubChildren;
        }
      });
      return hasUpdatedChildren;
    };

    return {
      ElementNode(node) {
        let isUpdated = false;
        if (node.tag === 'Kds::Table::ThSort') {
          isUpdated = updateThSortNode(node);
        } else if (node.tag === 'Kds::Table' && node.children) {
          isUpdated = updateTableChildren(node.children);
        }
        if (isUpdated) {
          return [node];
        }
      },
    };
  });
};

module.exports.type = 'kbs';
