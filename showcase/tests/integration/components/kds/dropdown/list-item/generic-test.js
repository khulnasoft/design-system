/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dropdown/list-item/generic',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component as a <li> element with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Generic id="test-list-item-generic" />`
      );
      assert.dom('#test-list-item-generic').hasTagName('li');
      assert.dom('#test-list-item-generic').hasClass('kds-dropdown-list-item');
      assert
        .dom('#test-list-item-generic')
        .hasClass('kds-dropdown-list-item--variant-generic');
    });

    // CONTENT

    test('it should render the yielded content', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Generic><pre>test</pre></Kds::Dropdown::ListItem::Generic>`
      );
      assert.dom('.kds-dropdown-list-item--variant-generic > pre').exists();
      assert
        .dom('.kds-dropdown-list-item--variant-generic > pre')
        .hasText('test');
    });
  }
);
