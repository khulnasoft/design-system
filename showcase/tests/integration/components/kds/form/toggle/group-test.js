/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/toggle/group', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Form::Toggle::Group id="test-form-toggle" />`);
    assert.dom('#test-form-toggle').hasClass('kds-form-group');
  });

  // YIELDED (CONTEXTUAL) COMPONENTS

  test('it renders the yielded contextual components and subcomponents', async function (assert) {
    await render(
      kbs`<Kds::Form::Toggle::Group as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.HelperText>This is the group helper text</G.HelperText>
            <G.ToggleField checked="checked" @value="abc123" as |F|>
              <F.Label>This is the control label</F.Label>
              <F.HelperText>This is the control helper text</F.HelperText>
              <F.Error>This is the control error</F.Error>
            </G.ToggleField>
            <G.Error>This is the group error</G.Error>
        </Kds::Form::Toggle::Group>`
    );
    assert.dom('.kds-form-group__legend').exists();
    assert.dom('.kds-form-group__legend').hasText('This is the legend');
    assert.dom('.kds-form-group__helper-text').exists();
    assert
      .dom('.kds-form-group__helper-text')
      .hasText('This is the group helper text');
    assert
      .dom('.kds-form-group__control-fields-wrapper .kds-form-field__label')
      .exists();
    assert
      .dom(
        '.kds-form-group__control-fields-wrapper .kds-form-field__helper-text'
      )
      .exists();
    assert
      .dom('.kds-form-group__control-fields-wrapper .kds-form-field__control')
      .exists();
    assert.dom('.kds-form-group__control-fields-wrapper input').isChecked();
    assert
      .dom('.kds-form-group__control-fields-wrapper input')
      .hasValue('abc123');
    assert
      .dom('.kds-form-group__control-fields-wrapper .kds-form-field__error')
      .exists();
    assert.dom('.kds-form-group__error').exists();
    assert.dom('.kds-form-group__error').hasText('This is the group error');
  });
  test('it does not render the yielded contextual components if not provided', async function (assert) {
    await render(kbs`<Kds::Form::Toggle::Group />`);
    assert.dom('.kds-form-group__legend').doesNotExist();
    assert.dom('.kds-form-group__helper-text').doesNotExist();
    assert.dom('.kds-form-group__error').doesNotExist();
  });
  test('it automatically provides all the ID relations between the elements', async function (assert) {
    await render(
      kbs`<Kds::Form::Toggle::Group as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.HelperText>This is the group helper text</G.HelperText>
            <G.ToggleField checked="checked" @value="abc123" as |F|>
              <F.Label>This is the control label</F.Label>
              <F.HelperText>This is the control helper text</F.HelperText>
              <F.Error>This is the control error</F.Error>
            </G.ToggleField>
            <G.Error>This is the group error</G.Error>
        </Kds::Form::Toggle::Group>`
    );
    // the IDs are dynamically generated
    let groupHelperText = this.element.querySelector(
      '.kds-form-group__helper-text'
    );
    let groupHelperTextId = groupHelperText.id;
    let groupError = this.element.querySelector('.kds-form-group__error');
    let groupErrorId = groupError.id;
    let fieldHelperText = this.element.querySelector(
      '.kds-form-field__helper-text'
    );
    let fieldHelperTextId = fieldHelperText.id;
    let fieldError = this.element.querySelector('.kds-form-field__error');
    let fieldErrorId = fieldError.id;
    assert
      .dom('input')
      .hasAttribute(
        'aria-describedby',
        `${fieldHelperTextId} ${fieldErrorId} ${groupHelperTextId} ${groupErrorId}`
      );
  });

  // REQUIRED AND OPTIONAL

  test('it should append an indicator to the legend text and set the required attribute when user input is required', async function (assert) {
    await render(
      kbs`<Kds::Form::Toggle::Group @isRequired={{true}} as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.ToggleField checked="checked" @value="abc123" as |F|>
              <F.Label>This is the control label</F.Label>
            </G.ToggleField>
          </Kds::Form::Toggle::Group>`
    );
    assert.dom('legend .kds-form-indicator').exists();
    assert.dom('legend .kds-form-indicator').hasText('Required');
    assert.dom('input').hasAttribute('required');
  });
  test('it should append an indicator to the legend text when user input is optional', async function (assert) {
    await render(
      kbs`<Kds::Form::Toggle::Group @isOptional={{true}} as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.ToggleField checked="checked" @value="abc123" as |F|>
              <F.Label>This is the control label</F.Label>
            </G.ToggleField>
          </Kds::Form::Toggle::Group>`
    );
    assert.dom('legend .kds-form-indicator').exists();
    assert.dom('legend .kds-form-indicator').hasText('(Optional)');
  });
});
