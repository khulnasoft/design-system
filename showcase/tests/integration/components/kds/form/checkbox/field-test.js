/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/checkbox/field', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with the appropriate CSS class', async function (assert) {
    await render(kbs`<Kds::Form::Checkbox::Field />`);
    assert.dom('.kds-form-field__control').exists();
  });

  // VALUE

  test('it should render the input with the value provided via @value argument', async function (assert) {
    await render(kbs`<Kds::Form::Checkbox::Field @value="abc123" />`);
    assert.dom('input').hasValue('abc123');
  });

  // ID

  test('it should render the input with a custom @id', async function (assert) {
    await render(kbs`<Kds::Form::Checkbox::Field @id="my-input" />`);
    assert.dom('input').hasAttribute('id', 'my-input');
  });

  // YIELDED (CONTEXTUAL) COMPONENTS

  test('it renders the yielded contextual components', async function (assert) {
    await render(
      kbs`<Kds::Form::Checkbox::Field checked="checked" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.Error>This is the error</F.Error>
        </Kds::Form::Checkbox::Field>`
    );
    assert.dom('.kds-form-field__label').exists();
    assert.dom('.kds-form-field__helper-text').exists();
    assert.dom('.kds-form-field__control').exists();
    assert.dom('.kds-form-field__control input').isChecked();
    assert.dom('.kds-form-field__error').exists();
  });
  test('it does not render the yielded contextual components if not provided', async function (assert) {
    await render(kbs`<Kds::Form::Checkbox::Field />`);
    assert.dom('.kds-form-field__label').doesNotExist();
    assert.dom('.kds-form-field__helper-text').doesNotExist();
    assert.dom('.kds-form-field__error').doesNotExist();
  });
  test('it automatically provides all the ID relations between the elements', async function (assert) {
    await render(
      kbs`<Kds::Form::Checkbox::Field @extraAriaDescribedBy="extra" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.Error>This is the error</F.Error>
        </Kds::Form::Checkbox::Field>`
    );
    // the control ID is dynamically generated
    let control = this.element.querySelector('.kds-form-field__control input');
    let controlId = control.id;
    assert.dom('.kds-form-field__label').hasAttribute('for', controlId);
    assert
      .dom('.kds-form-field__helper-text')
      .hasAttribute('id', `helper-text-${controlId}`);
    assert
      .dom('.kds-form-field__control input')
      .hasAttribute(
        'aria-describedby',
        `helper-text-${controlId} error-${controlId} extra`
      );
    assert
      .dom('.kds-form-field__error')
      .hasAttribute('id', `error-${controlId}`);
  });
});
