/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/form/visibility-toggle/index',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Form::VisibilityToggle id="test-visibility-toggle" />`
      );
      assert
        .dom('#test-visibility-toggle')
        .hasClass('kds-form-visibility-toggle');
    });

    test('it should render the default icon, `aria-label` and `sr-live` message', async function (assert) {
      await render(
        kbs`<Kds::Form::VisibilityToggle id="test-visibility-toggle" />`
      );
      assert
        .dom('#test-visibility-toggle .kds-icon')
        .hasClass('kds-icon-eye-off');
    });

    test('it should render correct icon when `@isVisible` is `true`', async function (assert) {
      await render(
        kbs`<Kds::Form::VisibilityToggle @isVisible={{true}} id="test-visibility-toggle" />`
      );
      assert.dom('#test-visibility-toggle .kds-icon').hasClass('kds-icon-eye');
    });

    test('it should render `aria-label` and `sr-live` message', async function (assert) {
      await render(
        kbs`<Kds::Form::VisibilityToggle @ariaLabel="Hide masked content" @ariaMessageText="Input content is visible" id="test-visibility-toggle" />`
      );
      assert
        .dom('#test-visibility-toggle')
        .hasAttribute('aria-label', 'Hide masked content');
      assert
        .dom('#test-visibility-toggle .sr-only')
        .hasText('Input content is visible');
    });
  }
);
