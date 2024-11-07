/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, settled } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/select/field', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a specific CSS class', async function (assert) {
    await render(kbs`<Kds::Form::Select::Field />`);
    assert.dom('.kds-form-field__control').exists();
  });

  // OPTIONS

  test('it should render the options passed via contextual component', async function (assert) {
    await render(
      kbs`<Kds::Form::Select::Field id="test-form-select" as |F|><F.Options><option value="abc123">This is the option</option></F.Options></Kds::Form::Select::Field>`
    );
    assert.dom('select option').exists();
    assert.dom('select option').hasText('This is the option');
    assert.dom('select option').hasValue('abc123');
  });

  // WIDTH

  test('it should render the input with a fixed width if a @width value is passed', async function (assert) {
    await render(kbs`<Kds::Form::Select::Field @width="248px" />`);
    assert.dom('select').hasStyle({ width: '248px' });
  });

  // INVALID

  test('it should render the correct CSS class if the @isInvalid prop is declared', async function (assert) {
    await render(kbs`<Kds::Form::Select::Field @isInvalid={{true}} />`);
    assert.dom('select').hasClass('kds-form-select--is-invalid');
  });

  // ID

  test('it should render the select control with a custom @id', async function (assert) {
    await render(kbs`<Kds::Form::Select::Field @id="my-input" />`);
    assert.dom('select').hasAttribute('id', 'my-input');
  });

  // YIELDED (CONTEXTUAL) COMPONENTS

  test('it renders the yielded contextual components', async function (assert) {
    await render(
      kbs`<Kds::Form::Select::Field as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.Error>This is the error</F.Error>
        </Kds::Form::Select::Field>`
    );
    assert.dom('.kds-form-field__label').exists();
    assert.dom('.kds-form-field__helper-text').exists();
    assert.dom('.kds-form-field__control').exists();
    assert.dom('.kds-form-field__error').exists();
  });
  test('it does not render the yielded contextual components if not provided', async function (assert) {
    await render(kbs`<Kds::Form::Select::Field />`);
    assert.dom('.kds-form-field__label').doesNotExist();
    assert.dom('.kds-form-field__helper-text').doesNotExist();
    assert.dom('.kds-form-field__error').doesNotExist();
  });
  test('it automatically provides all the ID relations between the elements', async function (assert) {
    await render(
      kbs`<Kds::Form::Select::Field @extraAriaDescribedBy="extra" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.Error>This is the error</F.Error>
        </Kds::Form::Select::Field>`
    );
    // the control ID is dynamically generated
    let control = this.element.querySelector('.kds-form-field__control select');
    let controlId = control.id;
    assert.dom('.kds-form-field__label').hasAttribute('for', controlId);
    assert
      .dom('.kds-form-field__helper-text')
      .hasAttribute('id', `helper-text-${controlId}`);
    assert
      .dom('.kds-form-field__control select')
      .hasAttribute(
        'aria-describedby',
        `helper-text-${controlId} error-${controlId} extra`
      );
    assert
      .dom('.kds-form-field__error')
      .hasAttribute('id', `error-${controlId}`);
  });
  test('it automatically provides all the ID relations between the elements when dynamically rendered', async function (assert) {
    await render(
      kbs`<Kds::Form::Select::Field @extraAriaDescribedBy="extra" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          {{#if this.showErrors}}
            <F.Error>This is the error</F.Error>
          {{/if}}
        </Kds::Form::Select::Field>`
    );

    this.set('showErrors', true);
    await settled();
    // the control ID is dynamically generated
    let control = this.element.querySelector('.kds-form-field__control select');
    let controlId = control.id;
    assert.dom('.kds-form-field__label').hasAttribute('for', controlId);
    assert
      .dom('.kds-form-field__helper-text')
      .hasAttribute('id', `helper-text-${controlId}`);
    assert
      .dom('.kds-form-field__control select')
      .hasAttribute(
        'aria-describedby',
        `helper-text-${controlId} error-${controlId} extra`
      );
    assert
      .dom('.kds-form-field__error')
      .hasAttribute('id', `error-${controlId}`);
  });

  // REQUIRED AND OPTIONAL

  test('it should append an indicator to the label text and set the required attribute when user input is required', async function (assert) {
    await render(
      kbs`<Kds::Form::Select::Field @isRequired={{true}} as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::Select::Field>`
    );
    assert.dom('label .kds-form-indicator').exists();
    assert.dom('label .kds-form-indicator').hasText('Required');
    assert.dom('select').hasAttribute('required');
  });
  test('it should append an indicator to the label text when user input is optional', async function (assert) {
    await render(
      kbs`<Kds::Form::Select::Field @isOptional={{true}} as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::Select::Field>`
    );
    assert.dom('label .kds-form-indicator').exists();
    assert.dom('label .kds-form-indicator').hasText('(Optional)');
  });
  test('it should not append an indicator to the label text when the required attribute is set', async function (assert) {
    await render(
      kbs`<Kds::Form::Select::Field required as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::Select::Field>`
    );
    assert.dom('select').hasAttribute('required');
    assert.dom('label .kds-form-indicator').doesNotExist();
  });
});
