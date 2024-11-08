/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export const removeLinkToLinks = (markdownContent) =>
  markdownContent.replace(/<LinkTo [^>]+>(.*?)<\/LinkTo>/gim, '$1');
