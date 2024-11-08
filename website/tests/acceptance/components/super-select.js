/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'website/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | components/form/super-select', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /components/form/super-select', async function (assert) {
    await visit('/components/form/super-select');

    assert.strictEqual(currentURL(), '/components/form/super-select');
  });

  test('Components/form/super-select page passes automated a11y checks', async function (assert) {
    await visit('/components/form/super-select');

    await a11yAudit();

    assert.ok(true, 'a11y automation audit passed');
  });
});
