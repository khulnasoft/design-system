/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/button-set/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::ButtonSet id="test-button-set" />`);
    assert.dom('#test-button-set').hasClass('kds-button-set');
  });

  test('it should render a child button component', async function (assert) {
    await render(
      kbs`
        <Kds::ButtonSet id="test-button-set">
          <Kds::Button @text="test button" />
        </Kds::ButtonSet>
      `
    );
    assert.dom('#test-button-set .kds-button').exists();
  });
});
