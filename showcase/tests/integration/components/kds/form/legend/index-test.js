/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/form/legend/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Form::Legend id="test-form-legend" />`);
    assert.dom('#test-form-legend').hasClass('kds-form-legend');
  });
  test('it renders the element as <legend>', async function (assert) {
    await render(kbs`<Kds::Form::Legend id="test-form-legend" />`);
    assert.dom('#test-form-legend').hasTagName('legend');
  });
  test('it should render with a CSS class provided via the @contextualClass argument', async function (assert) {
    await render(
      kbs`<Kds::Form::Legend @contextualClass="my-class" id="test-form-legend" />`
    );
    assert.dom('#test-form-legend').hasClass('my-class');
  });

  // CONTENT

  test('it renders a legend with the defined text', async function (assert) {
    await render(
      kbs`<Kds::Form::Legend id="test-form-legend">This is the legend</Kds::Form::Legend>`
    );
    assert.dom('#test-form-legend').hasText('This is the legend');
  });
  test('it renders a legend with the yielded content', async function (assert) {
    await render(
      kbs`<Kds::Form::Legend id="test-form-legend"><pre>This is an HTML element inside the legend</pre></Kds::Form::Legend>`
    );
    assert.dom('#test-form-legend > pre').exists();
    assert
      .dom('#test-form-legend pre')
      .hasText('This is an HTML element inside the legend');
  });

  // REQUIRED AND OPTIONAL

  test('it appends an indicator to the legend text when user input is required', async function (assert) {
    await render(
      kbs`<Kds::Form::Legend id="test-form-legend" @isRequired={{true}}>This is the legend</Kds::Form::Legend>`
    );
    assert.dom('#test-form-legend .kds-form-indicator').exists();
    assert.dom('#test-form-legend .kds-form-indicator').hasText('Required');
  });
  test('it appends an indicator to the legend text when user input is optional', async function (assert) {
    await render(
      kbs`<Kds::Form::Legend id="test-form-legend" @isOptional={{true}}>This is the legend</Kds::Form::Legend>`
    );
    assert.dom('#test-form-legend > .kds-form-indicator').exists();
    assert.dom('#test-form-legend .kds-form-indicator').hasText('(Optional)');
  });
});
