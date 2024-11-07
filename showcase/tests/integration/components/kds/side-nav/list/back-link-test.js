/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/side-nav/list/back-link',
  function (hooks) {
    setupRenderingTest(hooks);

    // Basic

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::SideNav::List::BackLink id="test-side-nav-list-item-link-back-link" />`
      );
      assert
        .dom('#test-side-nav-list-item-link-back-link')
        .hasClass('kds-side-nav__list-item-link--back-link');
    });

    // Test Content / Args

    test('it renders the passed in args', async function (assert) {
      await render(
        kbs`<Kds::SideNav::List::BackLink @text="Back to parent page" @href="#" />`
      );
      assert.dom('.kds-icon-chevron-left').exists();
      assert
        .dom('.kds-side-nav__list-item-text')
        .hasText('Back to parent page');
    });

    // GENERATED ELEMENTS

    test('it should render a <button> if no @href or @route is passed (default)', async function (assert) {
      await render(kbs`<Kds::SideNav::List::BackLink />`);
      assert
        .dom('.kds-side-nav__list-item-link--back-link')
        .hasTagName('button');
    });

    test('it should render a <a> link if @href is passed', async function (assert) {
      await render(
        kbs`<Kds::SideNav::List::BackLink @href="https://www.khulnasoft.com/" />`
      );
      assert
        .dom('.kds-side-nav__list-item-link--back-link')
        .hasTagName('a')
        .hasAttribute('href', 'https://www.khulnasoft.com/');
    });

    test('it should render a <a> link if @route is passed', async function (assert) {
      await render(
        kbs`<Kds::SideNav::List::BackLink @route="utilities.interactive" />`
      );
      assert
        .dom('.kds-side-nav__list-item-link--back-link')
        .hasTagName('a')
        .hasAttribute('href', '/utilities/interactive');
    });
  }
);
