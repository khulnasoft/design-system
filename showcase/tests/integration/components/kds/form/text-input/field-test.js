/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, resetOnerror, settled } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/text-input/field', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a specific CSS class', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field />`);
    assert.dom('.kds-form-field__control').exists();
  });

  // TYPE

  test('it should render the "text" type if no type is declared', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field />`);
    assert.dom('input').hasAttribute('type', 'text');
  });
  test('it should render the correct type depending on the @type prop', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field @type="email" />`);
    assert.dom('input').hasAttribute('type', 'email');
  });

  // PASSWORD

  test('it should render the password input with visibility toggle and masked by default', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field @type="password" />`);
    assert.dom('input').hasAttribute('type', 'password');
    assert.dom('.kds-form-visibility-toggle .kds-icon-eye').exists();
  });

  test('it should toggle the masking when the toggle button is pressed', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field @type="password" />`);
    await click('.kds-form-visibility-toggle');
    assert.dom('input').hasAttribute('type', 'text');
    assert.dom('.kds-form-visibility-toggle .kds-icon-eye-off').exists();
  });

  test('it should render the password input without visibility toggle when `hasVisibilityToggle` is false', async function (assert) {
    await render(
      kbs`<Kds::Form::TextInput::Field @type="password" @hasVisibilityToggle={{false}} />`
    );
    assert.dom('input').hasAttribute('type', 'password');
    assert.dom('.kds-form-visibility-toggle').doesNotExist();
  });

  // VALUE

  test('it should render the input with the value provided via @value argument', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field @value="abc123" />`);
    assert.dom('input').hasValue('abc123');
  });

  // INVALID

  test('it should render the correct CSS class if the @isInvalid prop is declared', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field @isInvalid={{true}} />`);
    assert.dom('input').hasClass('kds-form-text-input--is-invalid');
  });

  // IS LOADING

  test('it should render the correct CSS class if the @isLoading prop is declared', async function (assert) {
    await render(
      kbs`<Kds::Form::TextInput::Field @type="search" @isLoading={{true}} />`
    );
    assert.dom('input').hasClass('kds-form-text-input--is-loading');
  });

  // WIDTH

  test('it should render the input with a fixed width if a @width value is passed', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field @width="248px" />`);
    assert.dom('input').hasStyle({ width: '248px' });
  });

  // ID

  test('it should render the input with a custom @id', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field @id="my-input" />`);
    assert.dom('input').hasAttribute('id', 'my-input');
  });

  // YIELDED (CONTEXTUAL) COMPONENTS

  test('it renders the yielded contextual components', async function (assert) {
    await render(
      kbs`<Kds::Form::TextInput::Field @value="abc123" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.CharacterCount @maxLength={{10}}/>
          <F.Error>This is the error</F.Error>
        </Kds::Form::TextInput::Field>`
    );
    assert.dom('.kds-form-field__label').exists();
    assert.dom('.kds-form-field__helper-text').exists();
    assert.dom('.kds-form-field__control').exists();
    assert.dom('.kds-form-field__character-count').exists();
    assert.dom('.kds-form-field__error').exists();
  });
  test('it does not render the yielded contextual components if not provided', async function (assert) {
    await render(kbs`<Kds::Form::TextInput::Field />`);
    assert.dom('.kds-form-field__label').doesNotExist();
    assert.dom('.kds-form-field__helper-text').doesNotExist();
    assert.dom('.kds-form-field__character-count').doesNotExist();
    assert.dom('.kds-form-field__error').doesNotExist();
  });
  test('it automatically provides all the ID relations between the elements', async function (assert) {
    await render(
      kbs`<Kds::Form::TextInput::Field @value="abc123" @extraAriaDescribedBy="extra" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.CharacterCount @maxLength={{10}}/>
          <F.Error>This is the error</F.Error>
        </Kds::Form::TextInput::Field>`
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
        `helper-text-${controlId} character-count-${controlId} error-${controlId} extra`
      );
    assert
      .dom('.kds-form-field__character-count')
      .hasAttribute('id', `character-count-${controlId}`);
    assert
      .dom('.kds-form-field__character-count')
      .hasText('4 characters remaining');
    assert
      .dom('.kds-form-field__error')
      .hasAttribute('id', `error-${controlId}`);
  });

  test('it automatically provides all the ID relations between the elements even when dynamically rendered', async function (assert) {
    await render(
      kbs`<Kds::Form::TextInput::Field @value="abc123" @extraAriaDescribedBy="extra" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.CharacterCount @maxLength={{10}}/>
          {{#if this.showErrors}}
            <F.Error>This is the error</F.Error>
          {{/if}}
        </Kds::Form::TextInput::Field>`
    );

    this.set('showErrors', true);
    await settled();

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
        `helper-text-${controlId} character-count-${controlId} error-${controlId} extra`
      );
    assert
      .dom('.kds-form-field__character-count')
      .hasAttribute('id', `character-count-${controlId}`);
    assert
      .dom('.kds-form-field__character-count')
      .hasText('4 characters remaining');
    assert
      .dom('.kds-form-field__error')
      .hasAttribute('id', `error-${controlId}`);
  });

  // REQUIRED AND OPTIONAL

  test('it should append an indicator to the label text and set the required attribute when user input is required', async function (assert) {
    await render(
      kbs`<Kds::Form::TextInput::Field @isRequired={{true}} as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::TextInput::Field>`
    );
    assert.dom('label .kds-form-indicator').exists();
    assert.dom('label .kds-form-indicator').hasText('Required');
    assert.dom('input').hasAttribute('required');
  });
  test('it should append an indicator to the label text when user input is optional', async function (assert) {
    await render(
      kbs`<Kds::Form::TextInput::Field @isOptional={{true}} as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::TextInput::Field>`
    );
    assert.dom('label .kds-form-indicator').exists();
    assert.dom('label .kds-form-indicator').hasText('(Optional)');
  });
  test('it should not append an indicator to the label text when the required attribute is set', async function (assert) {
    await render(
      kbs`<Kds::Form::TextInput::Field required as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::TextInput::Field>`
    );
    assert.dom('input').hasAttribute('required');
    assert.dom('label .kds-form-indicator').doesNotExist();
  });
});
