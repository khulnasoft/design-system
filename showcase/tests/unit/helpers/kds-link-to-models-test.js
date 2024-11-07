/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { kdsLinkToModels } from '@khulnasoft/design-system-components/helpers/kds-link-to-models';

module('Unit | Helper | kds-link-to-models', function () {
  test('returns the same array of models that is passed as argument', async function (assert) {
    // NOTICE: helpers arguments are positional, so we have to use this trick
    const args = new Array(2);
    args[1] = ['model-1', 'model-2', 'model-3'];
    assert.deepEqual(kdsLinkToModels(args), ['model-1', 'model-2', 'model-3']);
  });
  test('returns an array containing the model if a single model is passed as argument', async function (assert) {
    const args = new Array(2);
    args[0] = 'model';
    assert.deepEqual(kdsLinkToModels(args), ['model']);
  });
  test('returns an empty array if no argument is passed', async function (assert) {
    const args = new Array(2);
    assert.deepEqual(kdsLinkToModels(args), []);
  });
  test('it should throw an assertion if both "model" and "models" are provided', async function (assert) {
    const args = new Array(2);
    args[0] = 'model';
    args[1] = ['model-1', 'model-2', 'model-3'];
    assert.throws(function () {
      kdsLinkToModels(args);
    });
  });
});
