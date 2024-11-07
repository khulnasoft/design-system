/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dropdown/list-item/checkbox',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders the "list-item/checkbox"', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkbox>Checkbox item</Kds::Dropdown::ListItem::Checkbox>`
      );
      assert.dom(this.element).exists();
    });

    test('it should render the "list-item/checkbox" as a <li> element with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkbox>Checkbox item</Kds::Dropdown::ListItem::Checkbox>`
      );
      assert.dom('.kds-dropdown-list-item').hasTagName('li');
      assert
        .dom('.kds-dropdown-list-item')
        .hasClass('kds-dropdown-list-item--variant-checkbox');
    });

    // ELEMENTS

    test('it should render the "list-item" with a checkbox control', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkbox>Checkbox item</Kds::Dropdown::ListItem::Checkbox>`
      );
      assert.dom('.kds-form-checkbox').exists();
    });

    // ARGUMENT FORWARDING: ID, VALUE

    test('it should forward the `id` and `value` arguments to the input control', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkbox @id="id" @value="value">Checkbox item</Kds::Dropdown::ListItem::Checkbox>`
      );
      assert.dom('.kds-form-checkbox').hasAttribute('id', 'id');
      assert.dom('.kds-form-checkbox').hasValue('value');
    });

    // CONTROL-LABEL ASSOCIATION
    test('it automatically creates the control-label relationship via generated id', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkbox @value="value">Checkbox item</Kds::Dropdown::ListItem::Checkbox>`
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
        kbs`<Kds::Dropdown::ListItem::Checkbox @icon="hexagon">Checkbox item</Kds::Dropdown::ListItem::Checkbox>`
      );
      assert.dom('.kds-icon.kds-icon-hexagon').exists();
    });

    // CONTENT

    test('it should render the content passed as block in a form label', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkbox>Checkbox item</Kds::Dropdown::ListItem::Checkbox>`
      );
      assert.dom('.kds-dropdown-list-item__control').exists();
      assert.dom('.kds-dropdown-list-item__label').hasText('Checkbox item');
    });

    // COUNT

    test('it should render with a result count badge', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkbox @count="10">Checkbox item</Kds::Dropdown::ListItem::Checkbox>`
      );
      assert.dom('.kds-dropdown-list-item__count').hasText('10');
    });

    // SELECTED

    test('it should render as checked if `checked` is true', async function (assert) {
      await render(
        kbs`<Kds::Dropdown::ListItem::Checkbox checked={{true}}>Checkbox</Kds::Dropdown::ListItem::Checkbox>`
      );
      assert.dom('.kds-form-checkbox').isChecked();
    });
  }
);
