/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/dialog-primitive/body', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`
        <Kds::DialogPrimitive::Body id="test-body">
          Body
        </Kds::DialogPrimitive::Body>
      `
    );
    assert.dom('#test-body').hasClass('kds-dialog-primitive__body');
  });

  // CONTENT

  test('it renders the passed in content', async function (assert) {
    await render(
      kbs`
        <Kds::DialogPrimitive::Body id="test-body">
            Body
        </Kds::DialogPrimitive::Body>
      `
    );
    assert.dom('.kds-dialog-primitive__body').hasText('Body');
  });
});
