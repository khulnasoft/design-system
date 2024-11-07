/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/form/helper-text/index',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(kbs`<Kds::Form::HelperText id="test-form-helper-text" />`);
      assert.dom('#test-form-helper-text').hasClass('kds-form-helper-text');
    });
    test('it should render with a CSS class provided via the @contextualClass argument', async function (assert) {
      await render(
        kbs`<Kds::Form::HelperText @contextualClass="my-class" id="test-form-helper-text" />`
      );
      assert.dom('#test-form-helper-text').hasClass('my-class');
    });

    // CONTENT

    test('it renders a helper text with the defined text', async function (assert) {
      await render(
        kbs`<Kds::Form::HelperText id="test-form-helper-text">This is the helper text</Kds::Form::HelperText>`
      );
      assert.dom('#test-form-helper-text').hasText('This is the helper text');
    });
    test('it renders a helper text with the yielded content', async function (assert) {
      await render(
        kbs`<Kds::Form::HelperText id="test-form-helper-text"><pre>This is an HTML element inside the helper text</pre></Kds::Form::HelperText>`
      );
      assert.dom('#test-form-helper-text > pre').exists();
      assert
        .dom('#test-form-helper-text pre')
        .hasText('This is an HTML element inside the helper text');
    });

    // ID

    test('it renders a helper text with the correct "id" attribute if the @controlId argument is provided', async function (assert) {
      await render(
        kbs`<Kds::Form::HelperText @controlId="my-control-id">This is the helper text</Kds::Form::HelperText>`
      );
      assert.dom('#helper-text-my-control-id').exists();
    });
  }
);
