/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export const removeContentBlocksDelimiters = (markdownContent) =>
  markdownContent.replace(/^!!!.*$/gm, '').replace(/\n!!!$/gm, '');
