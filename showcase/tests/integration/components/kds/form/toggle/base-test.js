/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/toggle/base', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Form::Toggle::Base id="test-form-toggle" />`);
    // Notice: the "toggle" component has a slightly different DOM structure than the other form controls
    assert.dom('.kds-form-toggle').exists();
    assert.dom('.kds-form-toggle > #test-form-toggle').exists();
    assert.dom('#test-form-toggle').hasClass('kds-form-toggle__control');
  });

  // ACCESSIBILITY

  test('it should render with the correct role', async function (assert) {
    await render(kbs`<Kds::Form::Toggle::Base id="test-form-toggle" />`);
    assert.dom('#test-form-toggle').hasAttribute('role', 'switch');
  });
  // role="switch"
});
