/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | components/code-block', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /components/code-block', async function (assert) {
    await visit('/components/code-block');

    assert.strictEqual(currentURL(), '/components/code-block');
  });

  test('Components/code-block page passes automated a11y checks', async function (assert) {
    await visit('/components/code-block');

    await a11yAudit();

    assert.ok(true, 'a11y automation audit passed');
  });
});
