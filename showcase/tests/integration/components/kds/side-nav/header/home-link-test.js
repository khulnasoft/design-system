/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/side-nav/home-link', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::SideNav::Header::HomeLink @icon="khulnasoft" @ariaLabel="Khulnasoft" id="test-home-link" />`
    );
    assert.dom('#test-home-link').hasClass('kds-side-nav__home-link');
  });

  // CONTENT

  test('it renders the passed in args', async function (assert) {
    await render(
      kbs`<Kds::SideNav::Header::HomeLink @icon="khulnasoft" @ariaLabel="Khulnasoft" @href="https://www.khulnasoft.com/" id="test-home-link" />`
    );
    assert.dom('.kds-icon-khulnasoft').exists();
    assert
      .dom('#test-home-link')
      .hasAttribute('href', 'https://www.khulnasoft.com/')
      .hasAttribute('aria-label', 'Khulnasoft');
  });

  test('it renders the logo with a custom passed in color', async function (assert) {
    await render(
      kbs`<Kds::SideNav::Header::HomeLink @icon="boundary" @ariaLabel="Boundary" @color="var(--token-color-boundary-brand)" @href="#" />`
    );
    assert
      .dom('.kds-icon-boundary')
      .hasAttribute('fill', 'var(--token-color-boundary-brand)');
  });

  // ASSERTIONS

  test('it should throw an assertion if @ariaLabel is missing/has no value', async function (assert) {
    const errorMessage =
      '@ariaLabel for "Kds::SideNav::Header::HomeLink" ("Logo") must have a valid value';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::SideNav::Header::HomeLink @icon="khulnasoft" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
