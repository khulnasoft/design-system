/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, resetOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dialog-primitive/footer',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.afterEach(() => {
      resetOnerror();
    });

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`
        <Kds::DialogPrimitive::Footer id="test-footer">
          Footer
        </Kds::DialogPrimitive::Footer>
      `
      );
      assert.dom('#test-footer').hasClass('kds-dialog-primitive__footer');
    });

    // CONTENT

    test('it renders the passed in content', async function (assert) {
      await render(
        kbs`
        <Kds::DialogPrimitive::Footer>
          <Kds::Button type="submit" @text="Primary" />
        </Kds::DialogPrimitive::Footer>
      `
      );
      assert.dom('.kds-dialog-primitive__footer .kds-button').exists();
    });

    // CALLBACK

    test('it should forwards the `onDismiss` callback function so it can be invoked as yielded function', async function (assert) {
      let dismissed = false;
      this.set('onDismiss', () => (dismissed = true));
      await render(
        kbs`
        <Kds::DialogPrimitive::Footer @onDismiss={{this.onDismiss}} as |F|>
          <Kds::Button type="submit" @text="Primary" {{on "click" F.close}} />
        </Kds::DialogPrimitive::Footer>
      `
      );
      await click('.kds-dialog-primitive__footer .kds-button');
      assert.ok(dismissed);
    });
  }
);
