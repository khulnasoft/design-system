/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dropdown/list-item/checkmark',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders the "list-item/checkmark"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark>Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert.dom(this.element).exists();
    });

    test('it should render the "list-item/checkmark" as a <li> element with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark>Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert.dom('.kds-dropdown-list-item').hasTagName('li');
      assert
        .dom('.kds-dropdown-list-item')
        .hasClass('kds-dropdown-list-item--variant-checkmark');
    });

    // ELEMENTS

    test('it should render the "list-item" with a button by default"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark>Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert.dom('button.kds-dropdown-list-item__interactive').exists();
    });
    test('it should render the "list-item" with a link if it has a @route parameter"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark @route="index">Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert.dom('a.kds-dropdown-list-item__interactive').exists();
    });
    test('it should render the "list-item" with a link if it has a @href argument"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark @href="#">Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert.dom('a.kds-dropdown-list-item__interactive').exists();
    });

    // ICON

    test('if an icon is declared the flight icon should render in the component', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark @icon="hexagon">Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert.dom('.kds-icon.kds-icon-hexagon').exists();
    });

    // CONTENT

    test('it should render the content passed as block', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark>Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert.dom('.kds-dropdown-list-item').hasText('Checkmark item');
    });

    // COUNT

    test('it should render with a result count badge', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark @count="10">Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert.dom('.kds-dropdown-list-item__count').hasText('10');
    });

    // SELECTED

    test('it should render as selected if `@selected` is true', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark @selected={{true}}>Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert
        .dom('.kds-dropdown-list-item')
        .hasClass('kds-dropdown-list-item--variant-checkmark-selected');
      assert.dom('.kds-dropdown-list-item__checkmark').exists();
    });

    // ACCESSIBILITY

    test('it should present the interactive element as a selectable option', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkmark @selected={{true}}>Checkmark item</Kds::Dropdown::ListItem::Checkmark>`
      );
      assert
        .dom('.kds-dropdown-list-item__interactive')
        .hasAttribute('role', 'option')
        .hasAttribute('aria-selected', 'true');
    });
  }
);
