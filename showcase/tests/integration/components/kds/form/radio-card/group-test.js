/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, settled } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/radio-card/group', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::Form::RadioCard::Group id="test-radio-card-group" />`
    );
    assert
      .dom('#test-radio-card-group')
      .hasClass('kds-form-group--radio-cards');
  });

  // LAYOUT

  test('it should render the component with CSS classes that reflect the `@layout` argument provided', async function (assert) {
    await render(
      kbs`<Kds::Form::RadioCard::Group id="test-radio-card-group-layout" @layout="vertical" />`
    );
    assert
      .dom('#test-radio-card-group-layout')
      .hasClass('kds-form-group--layout-vertical');
  });

  // CONTEXTUAL COMPONENTS

  test('it renders the contextual components', async function (assert) {
    await render(
      kbs`<Kds::Form::RadioCard::Group as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.HelperText>This is the group helper text</G.HelperText>
            <G.RadioCard/>
            <G.RadioCard/>
            <G.Error>This is the group error</G.Error>
          </Kds::Form::RadioCard::Group>`
    );
    assert.dom('.kds-form-radio-card').exists();
    assert.dom('.kds-form-group__legend').exists();
    assert.dom('.kds-form-group__legend').hasText('This is the legend');
    assert.dom('.kds-form-group__helper-text').exists();
    assert
      .dom('.kds-form-group__helper-text')
      .hasText('This is the group helper text');
    assert.dom('.kds-form-radio-card').exists();
    assert.dom('.kds-form-group__error').exists();
    assert.dom('.kds-form-group__error').hasText('This is the group error');
  });
  test('it does not render the contextual components if not provided', async function (assert) {
    await render(kbs`<Kds::Form::RadioCard::Group />`);
    assert.dom('.kds-form-group__legend').doesNotExist();
    assert.dom('.kds-form-group__helper-text').doesNotExist();
    assert.dom('.kds-form-group__error').doesNotExist();
  });

  // ACCESSIBILITY

  test('it automatically provides all the ID relations between the elements', async function (assert) {
    await render(
      kbs`<Kds::Form::RadioCard::Group as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.HelperText>This is the group helper text</G.HelperText>
            <G.RadioCard/>
            <G.RadioCard/>
            <G.Error>This is the group error</G.Error>
          </Kds::Form::RadioCard::Group>`
    );
    // the IDs are dynamically generated
    let groupHelperText = this.element.querySelector(
      '.kds-form-group__helper-text'
    );
    let groupHelperTextId = groupHelperText.id;
    let groupError = this.element.querySelector('.kds-form-group__error');
    let groupErrorId = groupError.id;
    assert
      .dom('input')
      .hasAttribute('aria-describedby', `${groupHelperTextId} ${groupErrorId}`);
  });

  test('it automatically provides all the ID relations between the elements when dynamically rendered', async function (assert) {
    await render(
      kbs`<Kds::Form::RadioCard::Group as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.HelperText>This is the group helper text</G.HelperText>
            <G.RadioCard/>
            <G.RadioCard/>
            {{#if this.showErrors}}
              <G.Error>This is the group error</G.Error>
            {{/if}}
          </Kds::Form::RadioCard::Group>`
    );

    this.set('showErrors', true);
    await settled();

    // the IDs are dynamically generated
    let groupHelperText = this.element.querySelector(
      '.kds-form-group__helper-text'
    );
    let groupHelperTextId = groupHelperText.id;
    let groupError = this.element.querySelector('.kds-form-group__error');
    let groupErrorId = groupError.id;
    assert
      .dom('input')
      .hasAttribute('aria-describedby', `${groupHelperTextId} ${groupErrorId}`);
  });

  // ARGUMENT FORWARDING: NAME, ALIGNMENT, CONTROL POSITION, LAYOUT

  test('it should render the contextual components with CSS classes that reflect the arguments provided', async function (assert) {
    await render(
      kbs`<Kds::Form::RadioCard::Group @name="test-name" @alignment="center" @controlPosition="left" as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.HelperText>This is the group helper text</G.HelperText>
            <G.RadioCard @maxWidth="50%" data-test="first-control"/>
            <G.RadioCard @maxWidth="50%" data-test="second-control"/>
            <G.Error>This is the group error</G.Error>
          </Kds::Form::RadioCard::Group>`
    );
    assert.dom('[data-test="first-control"]').hasAttribute('name', 'test-name');
    assert
      .dom('[data-test="second-control"]')
      .hasAttribute('name', 'test-name');
    assert
      .dom('.kds-form-radio-card')
      .hasClass('kds-form-radio-card--align-center');
    assert
      .dom('.kds-form-radio-card')
      .hasClass('kds-form-radio-card--control-left');
  });

  // REQUIRED AND OPTIONAL

  test('it should append an indicator to the legend text when user input is required', async function (assert) {
    await render(
      kbs`<Kds::Form::RadioCard::Group @isRequired={{true}} as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.RadioCard/>
          </Kds::Form::RadioCard::Group>`
    );
    assert.dom('legend .kds-form-indicator').exists();
    assert.dom('legend .kds-form-indicator').hasText('Required');
  });
  test('it should append an indicator to the legend text when user input is optional', async function (assert) {
    await render(
      kbs`<Kds::Form::RadioCard::Group @isOptional={{true}} as |G|>
            <G.Legend>This is the legend</G.Legend>
            <G.RadioCard/>
          </Kds::Form::RadioCard::Group>`
    );
    assert.dom('legend .kds-form-indicator').exists();
    assert.dom('legend .kds-form-indicator').hasText('(Optional)');
  });
});
