/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import _ from 'lodash';

export const transformKdsTags = (markdownContent) =>
  markdownContent
    .replace(
      /<Kds::([^\s>]+)/gim,
      (_match, p1) => `<div kds-${p1.replace(/::/g, '_')}`
    )
    .replace(/<\/Kds::[^\s>]+>/gim, '</div>');
