/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'showcase/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | Component | kds/text', function (hooks) {
  setupApplicationTest(hooks);

  test('Components/kds/text page passes automated a11y checks', async function (assert) {
    let axeOptions = {
      rules: {
        'color-contrast': {
          enabled: false,
        },
      },
    };
    await visit('/components/text');
    await a11yAudit(axeOptions);

    assert.ok(true, 'a11y automation audit passed');
  });
});
