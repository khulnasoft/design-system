/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/label/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Form::Label id="test-form-label" />`);
    assert.dom('#test-form-label').hasClass('kds-form-label');
  });
  test('it should render with a CSS class provided via the @contextualClass argument', async function (assert) {
    await render(
      kbs`<Kds::Form::Label @contextualClass="my-class" id="test-form-label" />`
    );
    assert.dom('#test-form-label').hasClass('my-class');
  });

  // CONTENT

  test('it renders a label with the defined text', async function (assert) {
    await render(
      kbs`<Kds::Form::Label id="test-form-label">This is the label</Kds::Form::Label>`
    );
    assert.dom('#test-form-label').hasText('This is the label');
  });
  test('it renders a label with the yielded content', async function (assert) {
    await render(
      kbs`<Kds::Form::Label id="test-form-label"><pre>This is an HTML element inside the label</pre></Kds::Form::Label>`
    );
    assert.dom('#test-form-label > pre').exists();
    assert
      .dom('#test-form-label pre')
      .hasText('This is an HTML element inside the label');
  });

  // REQUIRED AND OPTIONAL

  test('it appends an indicator to the label text when user input is required', async function (assert) {
    await render(
      kbs`<Kds::Form::Label @isRequired={{true}} id="test-form-label">This is the label</Kds::Form::Label>`
    );
    assert.dom('#test-form-label .kds-form-indicator').exists();
    assert.dom('#test-form-label .kds-form-indicator').hasText('Required');
  });
  test('it appends an indicator to the label text when user input is optional', async function (assert) {
    await render(
      kbs`<Kds::Form::Label @isOptional={{true}} id="test-form-label">This is the label</Kds::Form::Label>`
    );
    assert.dom('#test-form-label > .kds-form-indicator').exists();
    assert.dom('#test-form-label .kds-form-indicator').hasText('(Optional)');
  });

  // FOR

  test('it renders a label with the "for" attribute if the @controlId argument is provided', async function (assert) {
    await render(
      kbs`<Kds::Form::Label @controlId="my-control-id" id="test-form-label">This is the label</Kds::Form::Label>`
    );
    assert.dom('#test-form-label').hasAttribute('for', 'my-control-id');
  });

  // ID

  test('it renders a label with the correct "id" attribute if the @controlId argument is provided', async function (assert) {
    await render(
      kbs`<Kds::Form::Label @controlId="my-control-id">This is the label</Kds::Form::Label>`
    );
    assert.dom('#label-my-control-id').exists();
  });
});
