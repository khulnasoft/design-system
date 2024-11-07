/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, triggerEvent } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | kds-register-event', function (hooks) {
  setupRenderingTest(hooks);

  test('it adds an event listener to the element', async function (assert) {
    assert.expect(1);

    this.set('eventHandler', () => {
      assert.ok(true, 'event handler was called');
    });

    await render(
      kbs`<button id="test-button" {{kds-register-event 'click' this.eventHandler}}>Test</button>`
    );

    await click('button');
  });

  test('it passes the `useCapture` option to the event listener', async function (assert) {
    assert.expect(1);

    this.set('eventHandler', (event) => {
      assert.strictEqual(
        event.eventPhase,
        Event.CAPTURING_PHASE,
        'event was captured'
      );
    });

    await render(
      kbs`<button id="test-button" {{kds-register-event 'click' this.eventHandler useCapture=true}}><span>Test</span></button>`
    );

    await triggerEvent('span', 'click', { bubbles: true });
  });
});
