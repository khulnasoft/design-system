/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/app-side-nav/list/item',
  function (hooks) {
    setupRenderingTest(hooks);

    // Basic

    skip('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::AppSideNav::List::Item id="test-app-side-nav-list-item" />`
      );
      assert
        .dom('#test-app-side-nav-list-item')
        .hasClass('kds-app-side-nav__list-item');
    });

    // Test Content

    skip('it renders the passed in custom content', async function (assert) {
      await render(kbs`
        <Kds::AppSideNav::List::Item>
          <span id="test-custom-content" />
        </Kds::AppSideNav::List::Item>
      `);
      assert.dom('#test-custom-content').exists();
    });
  }
);
