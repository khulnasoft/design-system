/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { kdsLinkToQuery } from '@khulnasoft/design-system-components/helpers/kds-link-to-query';

module('Unit | Helper | kds-link-to-query', function () {
  test('returns the same object that is passed as argument', async function (assert) {
    assert.deepEqual(kdsLinkToQuery(['test']), 'test');
  });
  test('returns an empty object if no argument is passed', async function (assert) {
    assert.deepEqual(kdsLinkToQuery([]), {});
  });
});
