/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, settled } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/textarea/field', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a specific CSS class', async function (assert) {
    await render(kbs`<Kds::Form::Textarea::Field />`);
    assert.dom('.kds-form-field__control').exists();
  });

  // VALUE

  test('it should render the input with the value provided via @value argument', async function (assert) {
    await render(kbs`<Kds::Form::Textarea::Field @value="abc123" />`);
    assert.dom('textarea').hasValue('abc123');
  });

  // INVALID

  test('it should render the correct CSS class if the @isInvalid prop is declared', async function (assert) {
    await render(kbs`<Kds::Form::Textarea::Field @isInvalid={{true}} />`);
    assert.dom('textarea').hasClass('kds-form-textarea--is-invalid');
  });

  // WIDTH & HEIGHT

  test('it should render the textarea control with a fixed width if a @width value is passed', async function (assert) {
    await render(kbs`
      <Kds::Form::Textarea::Field @width="248px" />
    `);
    assert.dom('textarea').hasStyle({ width: '248px' });
  });
  test('it should render the textarea control with a fixed height if a @height value is passed', async function (assert) {
    await render(kbs`
      <Kds::Form::Textarea::Field @height="248px" />
    `);
    assert.dom('textarea').hasStyle({ height: '248px' });
  });

  // ID

  test('it should render the textarea control with a custom @id', async function (assert) {
    await render(kbs`<Kds::Form::Textarea::Field @id="my-textarea" />`);
    assert.dom('textarea').hasAttribute('id', 'my-textarea');
  });

  // YIELDED (CONTEXTUAL) COMPONENTS

  test('it renders the yielded contextual components', async function (assert) {
    await render(
      kbs`<Kds::Form::Textarea::Field @value="abc123" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.CharacterCount @maxLength={{10}}/>
          <F.Error>This is the error</F.Error>
        </Kds::Form::Textarea::Field>`
    );
    assert.dom('.kds-form-field__label').exists();
    assert.dom('.kds-form-field__helper-text').exists();
    assert.dom('.kds-form-field__control').exists();
    assert.dom('.kds-form-field__character-count').exists();
    assert.dom('.kds-form-field__error').exists();
  });
  test('it does not render the yielded contextual components if not provided', async function (assert) {
    await render(kbs`<Kds::Form::Textarea::Field />`);
    assert.dom('.kds-form-field__label').doesNotExist();
    assert.dom('.kds-form-field__helper-text').doesNotExist();
    assert.dom('.kds-form-field__character-count').doesNotExist();
    assert.dom('.kds-form-field__error').doesNotExist();
  });
  test('it automatically provides all the ID relations between the elements', async function (assert) {
    await render(
      kbs`<Kds::Form::Textarea::Field @value="abc123" @extraAriaDescribedBy="extra" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.CharacterCount @maxLength={{10}}/>
          <F.Error>This is the error</F.Error>
        </Kds::Form::Textarea::Field>`
    );
    // the control ID is dynamically generated
    let control = this.element.querySelector(
      '.kds-form-field__control textarea'
    );
    let controlId = control.id;
    assert.dom('.kds-form-field__label').hasAttribute('for', controlId);
    assert
      .dom('.kds-form-field__helper-text')
      .hasAttribute('id', `helper-text-${controlId}`);
    assert
      .dom('.kds-form-field__control textarea')
      .hasAttribute(
        'aria-describedby',
        `helper-text-${controlId} character-count-${controlId} error-${controlId} extra`
      );
    assert
      .dom('.kds-form-field__character-count')
      .hasAttribute('id', `character-count-${controlId}`);
    assert
      .dom('.kds-form-field__error')
      .hasAttribute('id', `error-${controlId}`);
  });

  test('it automatically provides all the ID relations between the elements when dynamically rendered', async function (assert) {
    await render(
      kbs`<Kds::Form::Textarea::Field @value="abc123" @extraAriaDescribedBy="extra" as |F|>
          <F.Label>This is the label</F.Label>
          <F.HelperText>This is the helper text</F.HelperText>
          <F.CharacterCount @maxLength={{10}}/>
          {{#if this.showErrors}}
            <F.Error>This is the error</F.Error>
          {{/if}}
        </Kds::Form::Textarea::Field>`
    );

    this.set('showErrors', true);
    await settled();

    // the control ID is dynamically generated
    let control = this.element.querySelector(
      '.kds-form-field__control textarea'
    );
    let controlId = control.id;
    assert.dom('.kds-form-field__label').hasAttribute('for', controlId);
    assert
      .dom('.kds-form-field__helper-text')
      .hasAttribute('id', `helper-text-${controlId}`);
    assert
      .dom('.kds-form-field__control textarea')
      .hasAttribute(
        'aria-describedby',
        `helper-text-${controlId} character-count-${controlId} error-${controlId} extra`
      );
    assert
      .dom('.kds-form-field__character-count')
      .hasAttribute('id', `character-count-${controlId}`);
    assert
      .dom('.kds-form-field__error')
      .hasAttribute('id', `error-${controlId}`);
  });

  // REQUIRED AND OPTIONAL

  test('it should append an indicator to the label text and set the required attribute when user input is required', async function (assert) {
    await render(
      kbs`<Kds::Form::Textarea::Field @isRequired={{true}} as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::Textarea::Field>`
    );
    assert.dom('label .kds-form-indicator').exists();
    assert.dom('label .kds-form-indicator').hasText('Required');
    assert.dom('textarea').hasAttribute('required');
  });
  test('it should append an indicator to the label text when user input is optional', async function (assert) {
    await render(
      kbs`<Kds::Form::Textarea::Field @isOptional={{true}} as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::Textarea::Field>`
    );
    assert.dom('label .kds-form-indicator').exists();
    assert.dom('label .kds-form-indicator').hasText('(Optional)');
  });
  test('it should not append an indicator to the label text when the required attribute is set', async function (assert) {
    await render(
      kbs`<Kds::Form::Textarea::Field required as |F|>
            <F.Label>This is the label</F.Label>
          </Kds::Form::Textarea::Field>`
    );
    assert.dom('textarea').hasAttribute('required');
    assert.dom('label .kds-form-indicator').doesNotExist();
  });
});
