/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/side-nav/icon-button', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::SideNav::Header::IconButton @icon="search" @ariaLabel="Search" id="test-side-nav-icon-button" />`
    );
    assert
      .dom('#test-side-nav-icon-button')
      .hasClass('kds-side-nav__icon-button');
  });

  // CONTENT

  test('it renders the passed in args', async function (assert) {
    await render(
      kbs`<Kds::SideNav::Header::IconButton @icon="search" @ariaLabel="Search" id="test-side-nav-button" />`
    );
    assert.dom('.kds-icon-search').exists();
  });

  // GENERATED ELEMENTS

  test('it should render a <button> if no @href or @route is passed (default)', async function (assert) {
    await render(
      kbs`<Kds::SideNav::Header::IconButton @icon="search" @ariaLabel="Search" id="test-side-nav-button" />`
    );
    assert.dom('#test-side-nav-button').hasTagName('button');
  });

  test('it should render a <a> link if @href is passed', async function (assert) {
    await render(
      kbs`<Kds::SideNav::Header::IconButton @icon="search" @ariaLabel="Search" @href="https://www.khulnasoft.com/" id="test-side-nav-button" />`
    );
    assert
      .dom('#test-side-nav-button')
      .hasTagName('a')
      .hasAttribute('href', 'https://www.khulnasoft.com/');
  });

  test('it should render a <a> link if @route is passed', async function (assert) {
    await render(
      kbs`<Kds::SideNav::Header::IconButton @icon="search" @ariaLabel="Search" @route="utilities.interactive" id="test-side-nav-button" />`
    );
    assert
      .dom('#test-side-nav-button')
      .hasTagName('a')
      .hasAttribute('href', '/utilities/interactive');
  });

  // ASSERTIONS

  test('it should throw an assertion if @ariaLabel is missing/has no value', async function (assert) {
    const errorMessage =
      '@ariaLabel for "Kds::SideNav::Header::IconButton" must have a valid value';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::SideNav::Header::IconButton @icon="search" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
