/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dropdown/list-item/radio',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders the "list-item/radio"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio>Radio item</Kds::Dropdown::ListItem::Radio>`
      );
      assert.dom(this.element).exists();
    });

    test('it should render the "list-item/radio" as a <li> element with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio>Radio item</Kds::Dropdown::ListItem::Radio>`
      );
      assert.dom('.kds-dropdown-list-item').hasTagName('li');
      assert
        .dom('.kds-dropdown-list-item')
        .hasClass('kds-dropdown-list-item--variant-radio');
    });

    // ELEMENTS

    test('it should render the "list-item" with a radio control', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio>Radio item</Kds::Dropdown::ListItem::Radio>`
      );
      assert.dom('.kds-form-radio').exists();
    });

    // ARGUMENT FORWARDING: ID, VALUE

    test('it should forward the `id` and `value` arguments to the input control', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio @id="id" @value="value">Radio item</Kds::Dropdown::ListItem::Radio>`
      );
      assert.dom('.kds-form-radio').hasAttribute('id', 'id');
      assert.dom('.kds-form-radio').hasValue('value');
    });

    // CONTROL-LABEL ASSOCIATION
    test('it automatically creates the control-label relationship via generated id', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio @value="value">Checkbox item</Kds::Dropdown::ListItem::Radio>`
      );
      let control = this.element.querySelector(
        '.kds-dropdown-list-item__control'
      );
      let controlId = control.id;
      assert
        .dom('.kds-dropdown-list-item__label')
        .hasAttribute('for', controlId);
    });

    // ICON

    test('if an icon is declared the flight icon should render in the component', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio @icon="hexagon">Radio item</Kds::Dropdown::ListItem::Radio>`
      );
      assert.dom('.kds-icon.kds-icon-hexagon').exists();
    });

    // CONTENT

    test('it should render the content passed as block in a form label', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio>Radio item</Kds::Dropdown::ListItem::Radio>`
      );
      assert.dom('.kds-dropdown-list-item__control').exists();
      assert.dom('.kds-dropdown-list-item__label').hasText('Radio item');
    });

    // COUNT

    test('it should render with a result count badge', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio @count="10">Radio item</Kds::Dropdown::ListItem::Radio>`
      );
      assert.dom('.kds-dropdown-list-item__count').hasText('10');
    });

    // SELECTED

    test('it should render as checked if `checked` is true', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Radio checked={{true}}>Radio</Kds::Dropdown::ListItem::Radio>`
      );
      assert.dom('.kds-form-radio').isChecked();
    });
  }
);
