/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dropdown/list-item/description',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.afterEach(() => {
      resetOnerror();
    });

    test('it should render the component as a <li> element with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Description @text="description" id="test-list-item-description" />`
      );
      assert.dom('#test-list-item-description').hasTagName('li');
      assert
        .dom('#test-list-item-description')
        .hasClass('kds-dropdown-list-item');
      assert
        .dom('#test-list-item-description')
        .hasClass('kds-dropdown-list-item--variant-description');
    });

    // ASSERTIONS

    test('it should throw an assertion if @text is missing/has no value', async function (assert) {
      const errorMessage =
        '@text for "Kds::Dropdown::ListItem::Description" must have a valid value';
      assert.expect(2);
      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });
      await render(kbs`<Kds::Dropdown::ListItem::Description />`);
      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });
  }
);
