/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'showcase/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | Component | kds/form/select', function (hooks) {
  setupApplicationTest(hooks);

  test('components/form/select passes a11y automated checks', async function (assert) {
    await visit('/components/form/select');
    await a11yAudit();
    assert.ok(true, 'a11y automation audit passed');
  });
});
