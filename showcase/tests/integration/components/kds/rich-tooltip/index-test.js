/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, click, focus, blur } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

import { wait } from 'showcase/tests/helpers';

module('Integration | Component | kds/rich-tooltip/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::RichTooltip id="test-rich-tooltip" />`);
    assert.dom('#test-rich-tooltip').hasClass('kds-rich-tooltip');
  });

  // CONTENT + VISIBILITY + IS-OPEN

  test('it should render the toggle (visible) and bubble (not visible) but not the yielded content by default', async function (assert) {
    await render(kbs`
      <Kds::RichTooltip as |RT|>
        <RT.Toggle>Toggle</RT.Toggle>
        <RT.Bubble><span id="test-rich-tooltip-content">Content</span></RT.Bubble>
      </Kds::RichTooltip>
    `);
    assert.dom('.kds-rich-tooltip__toggle').isVisible();
    assert.dom('.kds-rich-tooltip__bubble').isNotVisible();
    assert.dom('.kds-rich-tooltip__bubble-arrow').isNotVisible();
    // because `kds-rich-tooltip__bubble-inner-content` has `display: contents` we can't use `.isVisible` so we need to test that a child is not visible
    assert
      .dom('.kds-rich-tooltip__bubble-inner-content #test-rich-tooltip-content')
      .isNotVisible();
  });

  test('it should render the toggle (visible) and bubble (visible) and the yielded content (visible) if `@isOpen` is `true`', async function (assert) {
    await render(kbs`
      <Kds::RichTooltip @isOpen={{true}} as |RT|>
        <RT.Toggle>Toggle</RT.Toggle>
        <RT.Bubble><span id="test-rich-tooltip-content">Content</span></RT.Bubble>
      </Kds::RichTooltip>
    `);
    assert.dom('.kds-rich-tooltip__toggle').isVisible();
    assert.dom('.kds-rich-tooltip__bubble').isVisible();
    assert.dom('.kds-rich-tooltip__bubble-arrow').isVisible();
    // because `kds-rich-tooltip__bubble-inner-content` has `display: contents` we can't use `.isVisible` so we need to test that a child is visible
    assert
      .dom('.kds-rich-tooltip__bubble-inner-content #test-rich-tooltip-content')
      .isVisible();
  });

  // INTERACTIONS

  test('it should toggle the content visibility on focus in/out by default', async function (assert) {
    await render(kbs`
        <Kds::RichTooltip as |RT|>
          <RT.Toggle>Toggle</RT.Toggle>
          <RT.Bubble>Content</RT.Bubble>
        </Kds::RichTooltip>
      `);
    // it's hidden when closed
    assert.dom('.kds-rich-tooltip__bubble').isNotVisible();
    // focus the toggle to show the content
    await focus('button.kds-rich-tooltip__toggle');
    await wait(500); // wait for the opacity animation to complete
    // now it should be visible
    assert.dom('.kds-rich-tooltip__bubble').isVisible();
    // unfocus the toggle to hide the content
    await blur('button.kds-rich-tooltip__toggle');
    // it's hidden when closed
    assert.dom('.kds-rich-tooltip__bubble').isNotVisible();
  });
  test('it should toggle the content visibility on click', async function (assert) {
    await render(kbs`
        <Kds::RichTooltip @enableClickEvents={{true}} as |RT|>
          <RT.Toggle>Toggle</RT.Toggle>
          <RT.Bubble>Content</RT.Bubble>
        </Kds::RichTooltip>
      `);
    // it's hidden when closed
    assert.dom('.kds-rich-tooltip__bubble').isNotVisible();
    // click the toggle to show the content
    await click('button.kds-rich-tooltip__toggle');
    // now it should be visible
    assert.dom('.kds-rich-tooltip__bubble').isVisible();
    // click again the toggle to hide the content
    await click('button.kds-rich-tooltip__toggle');
    // it's hidden when closed
    assert.dom('.kds-rich-tooltip__bubble').isNotVisible();
  });

  // CALLBACKS

  test('it should invoke the `onOpen/onClose` callbacks', async function (assert) {
    let status;
    this.set('onOpen', () => (status = 'opened'));
    this.set('onClose', () => (status = 'closed'));
    await render(kbs`
        <Kds::RichTooltip @enableClickEvents={{true}} @onOpen={{this.onOpen}} @onClose={{this.onClose}} as |RT|>
          <RT.Toggle />
          <RT.Bubble />
        </Kds::RichTooltip>
      `);
    // toggle the visibility
    await click('button.kds-rich-tooltip__toggle');
    assert.strictEqual(status, 'opened');
    // toggle it again
    await click('button.kds-rich-tooltip__toggle');
    assert.strictEqual(status, 'closed');
  });

  // ANCHORED POSITION OPTIONS
  // unfortunately there is no easy/reliable way to test them here

  // A11Y

  test('it displays the correct aria attributes for the "toggle" and "bubble" elements', async function (assert) {
    await render(kbs`
      <Kds::RichTooltip @enableClickEvents={{true}} as |RT|>
        <RT.Toggle>Toggle</RT.Toggle>
        <RT.Bubble>Content</RT.Bubble>
      </Kds::RichTooltip>
    `);
    const bubbleElement = document.querySelector('.kds-rich-tooltip__bubble');
    const bubbleId = bubbleElement.id;
    // when closed
    assert.dom('.kds-rich-tooltip__toggle').hasAttribute('type', 'button');
    assert.dom('.kds-rich-tooltip__toggle').hasAria('controls', bubbleId);
    assert.dom('.kds-rich-tooltip__toggle').hasAria('describedby', bubbleId);
    assert.dom('.kds-rich-tooltip__toggle').hasAria('expanded', 'false');
    assert.dom('.kds-rich-tooltip__bubble').hasAttribute('id', bubbleId);
    assert.dom('.kds-rich-tooltip__bubble').hasAttribute('tabindex', '-1');
    assert.dom('.kds-rich-tooltip__bubble').hasAttribute('role', 'tooltip');
    assert.dom('.kds-rich-tooltip__bubble').hasAria('hidden', '');
    // click the toggle to show the content
    await click('button.kds-rich-tooltip__toggle');
    // when opened
    assert.dom('.kds-rich-tooltip__toggle').hasAria('controls', bubbleId);
    assert.dom('.kds-rich-tooltip__toggle').hasAria('describedby', bubbleId);
    assert.dom('.kds-rich-tooltip__toggle').hasAria('expanded', 'true');
    assert.dom('.kds-rich-tooltip__bubble').hasAttribute('id', bubbleId);
    assert.dom('.kds-rich-tooltip__bubble').hasAttribute('tabindex', '-1');
    assert.dom('.kds-rich-tooltip__bubble').hasAttribute('role', 'tooltip');
    assert.dom('.kds-rich-tooltip__bubble').doesNotHaveAria('hidden');
  });
});
