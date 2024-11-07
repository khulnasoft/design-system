/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/error/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Form::Error id="test-form-error" />`);
    assert.dom('#test-form-error').hasClass('kds-form-error');
  });
  test('it should render with a CSS class provided via the @contextualClass argument', async function (assert) {
    await render(
      kbs`<Kds::Form::Error @contextualClass="my-class" id="test-form-error" />`
    );
    assert.dom('#test-form-error').hasClass('my-class');
  });

  // CONTENT

  test('it renders an error with the defined text', async function (assert) {
    await render(
      kbs`<Kds::Form::Error id="test-form-error">This is the error</Kds::Form::Error>`
    );
    assert.dom('#test-form-error').hasText('This is the error');
  });
  test('it renders an error with the yielded content', async function (assert) {
    await render(
      kbs`<Kds::Form::Error id="test-form-error"><pre>This is an HTML element inside the error</pre></Kds::Form::Error>`
    );
    assert.dom('#test-form-error pre').exists();
    assert
      .dom('#test-form-error pre')
      .hasText('This is an HTML element inside the error');
  });
  test('it renders multiple error messages as contextual components', async function (assert) {
    await render(
      kbs`<Kds::Form::Error id="test-form-error" as |E|><E.Message>First error message</E.Message><E.Message>Second error message</E.Message></Kds::Form::Error>`
    );
    assert
      .dom('#test-form-error .kds-form-error__message')
      .exists({ count: 2 });
    assert
      .dom('#test-form-error .kds-form-error__message')
      .hasText('First error message');
  });

  // ID

  test('it renders an error with the correct "id" attribute if the @controlId argument is provided', async function (assert) {
    await render(
      kbs`<Kds::Form::Error @controlId="my-control-id">This is the error</Kds::Form::Error>`
    );
    assert.dom('#error-my-control-id').exists();
  });
});
