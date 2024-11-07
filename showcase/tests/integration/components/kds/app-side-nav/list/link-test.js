/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/app-side-nav/list/link',
  function (hooks) {
    setupRenderingTest(hooks);

    // Basic

    skip('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::AppSideNav::List::Link id="test-app-side-nav-list-item-link" />`
      );
      assert
        .dom('#test-app-side-nav-list-item-link')
        .hasClass('kds-app-side-nav__list-item-link');
    });

    // Test Content / Args

    skip('it renders the passed in args', async function (assert) {
      await render(
        kbs`<Kds::AppSideNav::List::Link @icon="boundary" @text="Boundary" @count="3" @badge="Alpha" @hasSubItems={{true}} @isHrefExternal={{true}} />`
      );
      assert.dom('.kds-icon-boundary').exists();
      assert.dom('.kds-app-side-nav__list-item-text').hasText('Boundary');
      assert.dom('.kds-badge-count').hasText('3');
      assert.dom('.kds-badge').hasText('Alpha');
      assert.dom('.kds-icon-chevron-right').exists();
      assert.dom('.kds-icon-external-link').exists();
    });

    skip('it renders the link as "active" if @isActive is true', async function (assert) {
      await render(
        kbs`<Kds::AppSideNav::List::Link @isActive={{true}} id="test-app-side-nav-link" />`
      );
      assert
        .dom('#test-app-side-nav-link')
        .hasAttribute('aria-current', 'page')
        .hasClass('active');
    });

    skip('it renders the passed in custom content', async function (assert) {
      await render(kbs`
      <Kds::AppSideNav::List::Link>
        <span id="test-custom-content" />
      </Kds::AppSideNav::List::Link>
    `);
      assert.dom('#test-custom-content').exists();
    });

    // GENERATED ELEMENTS

    skip('it should render a <button> if no @href or @route is passed (default)', async function (assert) {
      await render(kbs`<Kds::AppSideNav::List::Link />`);
      assert.dom('.kds-app-side-nav__list-item-link').hasTagName('button');
    });

    skip('it should render a <a> link if @href is passed', async function (assert) {
      await render(
        kbs`<Kds::AppSideNav::List::Link @href="https://www.khulnasoft.com/" />`
      );
      assert
        .dom('.kds-app-side-nav__list-item-link')
        .hasTagName('a')
        .hasAttribute('href', 'https://www.khulnasoft.com/');
    });

    skip('it should render a <a> link if @route is passed', async function (assert) {
      await render(
        kbs`<Kds::AppSideNav::List::Link @route="utilities.interactive" />`
      );
      assert
        .dom('.kds-app-side-nav__list-item-link')
        .hasTagName('a')
        .hasAttribute('href', '/utilities/interactive');
    });
  }
);
