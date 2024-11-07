/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/tag/index', function (hooks) {
  setupRenderingTest(hooks);
  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Tag @text="My tag" id="test-tag" />`);
    assert.dom('#test-tag').hasClass('kds-tag');
  });

  // DISMISS

  test('it should not render the "dismiss" button by default', async function (assert) {
    await render(kbs`<Kds::Tag @text="My tag" />`);
    assert.dom('button.kds-tag__dismiss').doesNotExist();
  });
  test('it should render the "dismiss" button if a callback function is passed to the @onDismiss argument', async function (assert) {
    this.set('NOOP', () => {});
    await render(kbs`<Kds::Tag @text="My tag" @onDismiss={{this.NOOP}} />`);
    assert.dom('button.kds-tag__dismiss').exists();
    assert
      .dom('button.kds-tag__dismiss')
      .hasAttribute('aria-label', 'Dismiss My tag');
  });

  test('it should render a customized label for the dismiss button if custom @ariaLabel text is defined', async function (assert) {
    this.set('NOOP', () => {});
    await render(
      kbs`<Kds::Tag @text="My tag" @onDismiss={{this.NOOP}} @ariaLabel="Please dismiss" />`
    );
    assert.dom('button.kds-tag__dismiss').exists();
    assert
      .dom('button.kds-tag__dismiss')
      .hasAttribute('aria-label', 'Please dismiss My tag');
  });
  // COLOR

  test('it should render the primary color as the default if no @color prop is declared when the text is a link', async function (assert) {
    await render(
      kbs`<Kds::Tag @text="My text tag" @href="/" id="test-link-tag"/>`
    );
    assert.dom('#test-link-tag').hasClass('kds-tag--color-primary');
  });
  test('it should render the correct CSS color class if the @color prop is declared when the text is a link', async function (assert) {
    await render(
      kbs`<Kds::Tag @text="My text tag" @href="/" @color="secondary" id="test-link-tag"/>`
    );
    assert.dom('#test-link-tag').hasClass('kds-tag--color-secondary');
  });
  test('it should throw an assertion if an incorrect value for @color is provided when the text is a link', async function (assert) {
    const errorMessage =
      '@color for "Kds::Tag" must be one of the following: primary, secondary; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::Tag @text="My text tag" @href="/" @color="foo"/>`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
  test('it should throw an assertion if @color is provided without @href or @route', async function (assert) {
    const errorMessage =
      '@color can only be applied to "Kds::Tag" along with either @href or @route';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::Tag @text="My text tag" @color="foo"/>`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
