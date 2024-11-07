/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dropdown/list-item/copy-item',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.afterEach(() => {
      resetOnerror();
    });

    test('it should render the component as a <li> element with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::CopyItem @text="copy-item" id="test-list-item-copy-item" />`
      );
      assert.dom('#test-list-item-copy-item').hasTagName('li');
      assert
        .dom('#test-list-item-copy-item')
        .hasClass('kds-dropdown-list-item');
      assert
        .dom('#test-list-item-copy-item')
        .hasClass('kds-dropdown-list-item--variant-copy-item');
    });

    // ASSERTIONS

    test('it should throw an assertion if @text is missing/has no value', async function (assert) {
      const errorMessage =
        '@text for "Kds::Dropdown::ListItem::CopyItem" must have a valid value';
      assert.expect(2);
      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });
      await render(kbs`<Kds::Dropdown::ListItem::CopyItem />`);
      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });
  }
);
