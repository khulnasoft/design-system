/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/separator/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Separator id="test-separator" />`);
    assert.dom('#test-separator').hasClass('kds-separator');
  });

  // SPACING

  test('it should render the component with CSS classes that reflect the default vaules if no arguments provided', async function (assert) {
    await render(kbs`<Kds::Separator id="test-separator" />`);
    assert.dom('#test-separator').hasClass('kds-separator--spacing-24');
  });

  test('it should render the component with CSS classes that reflect the arguments provided', async function (assert) {
    await render(kbs`<Kds::Separator @spacing="0" id="test-separator" />`);
    assert.dom('#test-separator').hasClass('kds-separator--spacing-0');
  });

  // ASSERTIONS

  test('it should throw an assertion if an incorrect value for @spacing is provided', async function (assert) {
    const errorMessage =
      '@spacing for "Kds::Separator" must be one of the following: 0, 24; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::Separator @spacing="foo" id="test-separator" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
