/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dialog-primitive/description',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.afterEach(() => {
      resetOnerror();
    });

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`
        <Kds::DialogPrimitive::Description id="test-description">
          Description
        </Kds::DialogPrimitive::Description>
      `
      );
      assert
        .dom('#test-description')
        .hasClass('kds-dialog-primitive__description');
    });

    // CONTENT

    test('it renders the passed in content', async function (assert) {
      await render(
        kbs`
        <Kds::DialogPrimitive::Description>
          Description
        </Kds::DialogPrimitive::Description>
      `
      );
      assert.dom('.kds-dialog-primitive__description').hasText('Description');
    });
  }
);
