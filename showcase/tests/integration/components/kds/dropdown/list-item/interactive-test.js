/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dropdown/list-item/interactive',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.afterEach(() => {
      resetOnerror();
    });

    // 🚨 NOTICE 🚨:
    // unlike other components, the `...attributes` spread is not applied to the top element, but to the `<button>/<a>` children,
    // so we can't use the DOM "id" to target the component but we have to rely on the class name

    test('it should render the component as a <li> element with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @text="interactive" />`
      );
      assert.dom('.kds-dropdown-list-item').hasTagName('li');
      assert
        .dom('.kds-dropdown-list-item')
        .hasClass('kds-dropdown-list-item--variant-interactive');
    });

    // ELEMENTS

    test('it should render the "list-item" with a button by default"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @text="interactive" />`
      );
      assert.dom('.kds-dropdown-list-item > button').exists();
    });
    test('it should render the "list-item" with a link if it has a @route parameter"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @text="interactive" @route="index" />`
      );
      assert.dom('.kds-dropdown-list-item > a').exists();
    });
    test('it should render the "list-item" with a link if it has a @href argument"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @text="interactive" @href="#" />`
      );
      assert.dom('.kds-dropdown-list-item > a').exists();
    });

    // COLOR

    test('it should render the "action" color as the default if no color is declared"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @text="interactive" />`
      );
      assert
        .dom('.kds-dropdown-list-item')
        .hasClass('kds-dropdown-list-item--color-action');
    });
    test('it should render the correct CSS color class if the @color prop is declared', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @color="critical" @text="interactive" @icon="trash" />`
      );
      assert
        .dom('.kds-dropdown-list-item')
        .hasClass('kds-dropdown-list-item--color-critical');
    });

    // ICONS

    test('if an `@icon` is declared a leading icon should be rendered', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @icon="clipboard-copy" @text="interactive" />`
      );
      assert.dom('.kds-icon.kds-icon-clipboard-copy').exists();
    });
    test('if an `@trailingIcon` is declared a trailing icon should be rendered', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @trailingIcon="external-link" @text="interactive" />`
      );
      assert.dom('.kds-icon.kds-icon-external-link').exists();
    });
    test('if both an `@icon` and an `@trailingIcon` are declared both the leading and trailing icons should be rendered', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @icon="clipboard-copy" @trailingIcon="external-link" @text="interactive" />`
      );
      assert.dom('.kds-icon.kds-icon-clipboard-copy').exists();
      assert.dom('.kds-icon.kds-icon-external-link').exists();
    });

    // CONTENT

    test('it should render the text passed as @text prop', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @text="interactive text" />`
      );
      assert.dom('.kds-dropdown-list-item').hasText('interactive text');
    });
    test('it should render the yielded content', async function (assert) {
      await render(kbs`
        <Kds::Dropdown::ListItem::Interactive>
          interactive
        </Kds::Dropdown::ListItem::Interactive>
      `);
      assert.dom('.kds-dropdown-list-item').hasText('interactive');
    });
    test('it should render the text passed as @text prop if content is yielded', async function (assert) {
      await render(kbs`
        <Kds::Dropdown::ListItem::Interactive @text="erroneous">
          interactive
        </Kds::Dropdown::ListItem::Interactive>
      `);
      assert.dom('.kds-dropdown-list-item').doesNotContainText('erroneous');
    });

    // ASSERTIONS

    test('it should throw an assertion if @text is missing/has no value and the component does not yield content', async function (assert) {
      const errorMessage =
        '@text for "Kds::Dropdown::ListItem::Interactive" must have a valid value';
      assert.expect(2);
      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });
      await render(kbs`<Kds::Dropdown::ListItem::Interactive />`);
      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });
    test('it should throw an assertion if an incorrect value for @color is provided', async function (assert) {
      const errorMessage =
        '@color for "Kds::Dropdown::ListItem::Interactive" must be one of the following: action, critical; received: foo';
      assert.expect(2);
      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive @color="foo" @text="interactive text" />`
      );
      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });

    // CONTEXTUAL COMPONENTS

    test('it renders the contextual components', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive as |I|>
              <I.Badge @text="Badge" />
            </Kds::Dropdown::ListItem::Interactive>`
      );
      assert
        .dom('.kds-badge')
        .hasText('Badge')
        .hasClass('kds-badge--size-small');
    });
    test('it does not render the contextual components if not provided', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Interactive>
              interactive
            </Kds::Dropdown::ListItem::Interactive>`
      );
      assert.dom('.kds-badge').doesNotExist();
    });
  }
);