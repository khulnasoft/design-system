/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/side-nav/list/item', function (hooks) {
  setupRenderingTest(hooks);

  // Basic

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::SideNav::List::Item id="test-side-nav-list-item" />`
    );
    assert.dom('#test-side-nav-list-item').hasClass('kds-side-nav__list-item');
  });

  // Test Content

  test('it renders the passed in custom content', async function (assert) {
    await render(kbs`
      <Kds::SideNav::List::Item>
        <span id="test-custom-content" />
      </Kds::SideNav::List::Item>
    `);
    assert.dom('#test-custom-content').exists();
  });
});
