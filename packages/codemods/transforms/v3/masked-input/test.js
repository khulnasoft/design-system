/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

'use strict';

const { runTransformTest } = require('codemod-cli');

runTransformTest({
  name: 'v3/masked-input',
});