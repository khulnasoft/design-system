/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/side-nav/list/link', function (hooks) {
  setupRenderingTest(hooks);

  // Basic

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::SideNav::List::Link id="test-side-nav-list-item-link" />`
    );
    assert
      .dom('#test-side-nav-list-item-link')
      .hasClass('kds-side-nav__list-item-link');
  });

  // Test Content / Args

  test('it renders the passed in args', async function (assert) {
    await render(
      kbs`<Kds::SideNav::List::Link @icon="boundary" @text="Boundary" @count="3" @badge="Alpha" @hasSubItems={{true}} @isHrefExternal={{true}} />`
    );
    assert.dom('.kds-icon-boundary').exists();
    assert.dom('.kds-side-nav__list-item-text').hasText('Boundary');
    assert.dom('.kds-badge-count').hasText('3');
    assert.dom('.kds-badge').hasText('Alpha');
    assert.dom('.kds-icon-chevron-right').exists();
    assert.dom('.kds-icon-external-link').exists();
  });

  test('it renders the link as "active" if @isActive is true', async function (assert) {
    await render(
      kbs`<Kds::SideNav::List::Link @isActive={{true}} id="test-side-nav-link" />`
    );
    assert.dom('#test-side-nav-link').hasClass('active');
  });

  test('it renders the passed in custom content', async function (assert) {
    await render(kbs`
      <Kds::SideNav::List::Link>
        <span id="test-custom-content" />
      </Kds::SideNav::List::Link>
    `);
    assert.dom('#test-custom-content').exists();
  });

  // GENERATED ELEMENTS

  test('it should render a <button> if no @href or @route is passed (default)', async function (assert) {
    await render(kbs`<Kds::SideNav::List::Link />`);
    assert.dom('.kds-side-nav__list-item-link').hasTagName('button');
  });

  test('it should render a <a> link if @href is passed', async function (assert) {
    await render(
      kbs`<Kds::SideNav::List::Link @href="https://www.khulnasoft.com/" />`
    );
    assert
      .dom('.kds-side-nav__list-item-link')
      .hasTagName('a')
      .hasAttribute('href', 'https://www.khulnasoft.com/');
  });

  test('it should render a <a> link if @route is passed', async function (assert) {
    await render(
      kbs`<Kds::SideNav::List::Link @route="utilities.interactive" />`
    );
    assert
      .dom('.kds-side-nav__list-item-link')
      .hasTagName('a')
      .hasAttribute('href', '/utilities/interactive');
  });
});
