/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/rich-tooltip/toggle', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::RichTooltip::Toggle id="test-rich-tooltip-toggle" />`
    );
    assert
      .dom('#test-rich-tooltip-toggle')
      .hasClass('kds-rich-tooltip__toggle');
  });

  // TEXT + ICON

  test('it should render the text and icon provided', async function (assert) {
    await render(kbs`<Kds::RichTooltip::Toggle @text="test" @icon="info" />`);
    assert.dom('.kds-rich-tooltip__toggle-text').hasText('test');
    assert.dom('.kds-rich-tooltip__toggle-icon.kds-icon-info').exists();
  });
  test('it should render only the text provided', async function (assert) {
    await render(kbs`
        <Kds::RichTooltip::Toggle @text="test" />
      `);
    assert.dom('.kds-rich-tooltip__toggle-text').hasText('test');
    assert.dom('.kds-rich-tooltip__toggle-icon').doesNotExist();
  });
  test('it should render only the icon provided (in the leading position by default)', async function (assert) {
    await render(kbs`<Kds::RichTooltip::Toggle @icon="info" />`);
    assert.dom('.kds-rich-tooltip__toggle-icon:first-child').exists();
    assert.dom('.kds-rich-tooltip__toggle-text').doesNotExist();
  });
  test('it should render the icon in the trailing position if @iconPosition is set to trailing', async function (assert) {
    await render(
      kbs`<Kds::RichTooltip::Toggle @icon="info" @iconPosition="trailing" />`
    );
    assert.dom('.kds-rich-tooltip__toggle-icon:last-child').exists();
    assert.dom('.kds-rich-tooltip__toggle-text').doesNotExist();
  });

  // YIELD

  test('it should yield the content provided', async function (assert) {
    await render(kbs`
        <Kds::RichTooltip::Toggle>
          Lorem <strong>ipsum</strong> dolor
        </Kds::RichTooltip::Toggle>
      `);
    assert.dom('.kds-rich-tooltip__toggle').exists();
    assert.dom('.kds-rich-tooltip__toggle').hasText('Lorem ipsum dolor');
    assert.dom('.kds-rich-tooltip__toggle strong').hasText('ipsum');
  });

  // DISPLAY

  test('it should render the element as block by default', async function (assert) {
    await render(kbs`<Kds::RichTooltip::Toggle @icon="info" />`);
    assert.dom('.kds-rich-tooltip__toggle--is-block').exists();
    assert
      .dom('.kds-rich-tooltip__toggle-icon')
      .doesNotHaveClass('kds-icon--is-inline');
  });
  test('it should render the element as inline if `@isInline` is `true`', async function (assert) {
    await render(
      kbs`<Kds::RichTooltip::Toggle @isInline={{true}} @icon="info" />`
    );
    assert.dom('.kds-rich-tooltip__toggle--is-inline').exists();
    assert
      .dom('.kds-rich-tooltip__toggle-icon')
      .hasClass('kds-icon--is-inline');
  });

  // SIZE

  test('it should render the element with @text without sizing classes by default if no @size prop is declared', async function (assert) {
    await render(kbs`<Kds::RichTooltip::Toggle @text="test" />`);
    assert.dom('[class*="kds-rich-tooltip__toggle--size-"]').doesNotExist();
  });
  test('it should render the correct CSS size class if the @size prop is declared', async function (assert) {
    await render(kbs`<Kds::RichTooltip::Toggle @text="test" @size="large" />`);
    assert
      .dom('.kds-rich-tooltip__toggle')
      .hasClass('kds-rich-tooltip__toggle--size-large');
  });
  test('it should render the element with yielded content without sizing classes even if the @size prop is declared', async function (assert) {
    await render(kbs`
      <Kds::RichTooltip::Toggle @size="large">
        test
      </Kds::RichTooltip::Toggle>
    `);
    assert.dom('[class*="kds-rich-tooltip__toggle--size-"]').doesNotExist();
  });

  // ATTRIBUTES

  test('it should have a set of attributes based on the arguments provided', async function (assert) {
    await render(
      kbs`<Kds::RichTooltip::Toggle @popoverId="popoverId" @isOpen={{true}} />`
    );
    assert.dom('.kds-rich-tooltip__toggle').hasAttribute('type', 'button');
    assert.dom('.kds-rich-tooltip__toggle').hasAria('controls', 'popoverId');
    assert.dom('.kds-rich-tooltip__toggle').hasAria('describedby', 'popoverId');
    assert.dom('.kds-rich-tooltip__toggle').hasAria('expanded', 'true');
  });

  // ASSERTIONS

  test('it should throw an assertion if an incorrect value for @iconPosition is provided', async function (assert) {
    const errorMessage =
      '@iconPosition for "Kds::RichTooltip::Toggle" must be one of the following: leading, trailing; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(
      kbs`<Kds::RichTooltip::Toggle @icon="info" @iconPosition="foo" />`
    );
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
  test('it should throw an assertion if an incorrect value for @size is provided', async function (assert) {
    const errorMessage =
      '@size for "Kds::RichTooltip::Toggle" must be one of the following: small, medium, large; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::RichTooltip::Toggle @text="test" @size="foo" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
