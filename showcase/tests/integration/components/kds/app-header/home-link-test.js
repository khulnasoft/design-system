/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/app-header/home-link', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  skip('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::AppHeader::HomeLink @icon="khulnasoft" @ariaLabel="KhulnaSoft" id="test-home-link" />`
    );
    assert.dom('#test-home-link').hasClass('kds-app-header__home-link');
  });

  // CONTENT

  skip('it renders the passed in args', async function (assert) {
    await render(
      kbs`<Kds::AppHeader::HomeLink @icon="khulnasoft" @ariaLabel="KhulnaSoft" @href="https://www.khulnasoft.com/" id="test-home-link" />`
    );
    assert.dom('.kds-icon-khulnasoft').exists();
    assert
      .dom('#test-home-link')
      .hasAttribute('href', 'https://www.khulnasoft.com/')
      .hasAttribute('aria-label', 'KhulnaSoft');
  });

  skip('it renders the logo with a custom passed in color', async function (assert) {
    await render(
      kbs`<Kds::AppHeader::HomeLink @icon="boundary" @ariaLabel="Boundary" @color="var(--token-color-boundary-brand)" @href="#" />`
    );
    assert
      .dom('.kds-icon-boundary')
      .hasAttribute('fill', 'var(--token-color-boundary-brand)');
  });

  // ASSERTIONS

  skip('it should throw an assertion if @ariaLabel is missing/has no value', async function (assert) {
    const errorMessage =
      '@ariaLabel for "Kds::AppHeader::HomeLink" ("Logo") must have a valid value';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::AppHeader::HomeLink @icon="khulnasoft" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
