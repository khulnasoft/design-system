/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/toast/index', function (hooks) {
  setupRenderingTest(hooks);

  // notice: "toast" is a wrapper around the "kds::alert" so we test only very specific things

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Toast id="test-toast" />`);
    assert.dom('#test-toast').hasClass('kds-toast');
  });

  test('it should render the component with "role"="alert" and aria-live="polite" by default', async function (assert) {
    await render(kbs`<Kds::Toast id="test-toast" />`);
    assert.dom('#test-toast').hasAttribute('role', 'alert');
    assert.dom('#test-toast').hasAttribute('aria-live', 'polite');
  });
});
