/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dropdown/list-item/separator',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the "list-item/separator" as a <li> element with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Separator @text="separator" id="test-list-item-separator" />`
      );
      assert.dom('#test-list-item-separator').hasTagName('li');
      assert
        .dom('#test-list-item-separator')
        .hasClass('kds-dropdown-list-item');
      assert
        .dom('#test-list-item-separator')
        .hasClass('kds-dropdown-list-item--variant-separator');
    });

    // A11Y

    test('it should render the "list-item/separator" with role of separator', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Separator id="test-list-item-separator" />`
      );
      assert.dom('#test-list-item-separator').hasAttribute('role', 'separator');
    });
    test('it should render the "list-item/separator" with the aria-hidden attribute', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Separator id="test-list-item-separator" />`
      );
      assert
        .dom('#test-list-item-separator')
        .hasAttribute('aria-hidden', 'true');
    });
  }
);
