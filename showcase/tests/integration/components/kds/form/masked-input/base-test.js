/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/form/masked-input/base',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component with a specific CSS class', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base id="test-form-masked-input" />`
      );
      assert
        .dom('#test-form-masked-input')
        .hasClass('kds-form-masked-input__control');
    });

    // MASKING

    test('it should render the text masked by default', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base id="test-form-masked-input" />`
      );
      assert
        .dom('.kds-form-masked-input__control')
        .hasStyle({ '-webkit-text-security': 'disc' });
      assert.dom('.kds-form-visibility-toggle .kds-icon-eye').exists();
    });

    test('it should render readable text when `isContentMasked` is false', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base id="test-form-masked-input" @isContentMasked={{false}} />`
      );
      assert
        .dom('.kds-form-masked-input__control')
        .hasStyle({ '-webkit-text-security': 'none' });
      assert.dom('.kds-form-visibility-toggle .kds-icon-eye-off').exists();
    });

    test('it should toggle the masking when button is pressed', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base id="test-form-masked-input" />`
      );
      await click('.kds-form-visibility-toggle');
      assert
        .dom('.kds-form-masked-input__control')
        .hasStyle({ '-webkit-text-security': 'none' });
      assert.dom('.kds-form-visibility-toggle .kds-icon-eye-off').exists();
    });

    // ACCESSIBILITY

    test('it automatically provides the ID relations between the elements', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base @id="test-form-masked-input" />`
      );
      assert
        .dom('.kds-form-visibility-toggle')
        .hasAttribute('aria-controls', 'test-form-masked-input');
    });

    test('it updates the button label on toggle', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base @id="test-form-masked-input" />`
      );
      assert
        .dom('.kds-form-visibility-toggle')
        .hasAttribute('aria-label', 'Show masked content');
      await click('.kds-form-visibility-toggle');
      assert
        .dom('.kds-form-visibility-toggle')
        .hasAttribute('aria-label', 'Hide masked content');
    });

    test('it informs the user about visibility change on toggle', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base @id="test-form-masked-input" />`
      );
      await click('.kds-form-visibility-toggle');
      assert
        .dom('.kds-form-visibility-toggle')
        .hasText('Input content is visible');
      await click('.kds-form-visibility-toggle');
      assert
        .dom('.kds-form-visibility-toggle')
        .hasText('Input content is hidden');
    });

    // MULTILINE

    test('it should render an `<input>` element by default', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base id="test-form-masked-input" />`
      );
      assert.dom('input#test-form-masked-input').exists();
    });

    test('it should render a `<textarea>` element when `@isMultiline` is true', async function (assert) {
      await render(
        kbs`<Kds::Form::MaskedInput::Base @isMultiline={{true}} id="test-form-masked-input" />`
      );
      assert.dom('textarea#test-form-masked-input').exists();
    });
  }
);
