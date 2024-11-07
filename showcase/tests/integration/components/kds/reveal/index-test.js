/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/reveal/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`
      <Kds::Reveal @text="More options" id="test-reveal">Additional content</Kds::Reveal>
    `);
    assert.dom('#test-reveal').hasClass('kds-reveal');
  });

  // CONTENT

  test('it renders passed in @text content in the toggle button', async function (assert) {
    await render(
      kbs`
        <Kds::Reveal @text="More options">
          Additional content
        </Kds::Reveal>`
    );
    assert.dom('.kds-reveal__toggle-button').hasText('More options');
  });

  test('it shows and hides passed in content when the toggle is triggered', async function (assert) {
    await render(
      kbs`
        <Kds::Reveal @text="More options">
          Additional content
        </Kds::Reveal>`
    );
    // Test content is not shown before toggle is triggered
    assert.dom('.kds-reveal__content').doesNotExist();
    // Test that content is displayed after the toggle is triggered
    await click('.kds-reveal__toggle-button');
    assert.dom('.kds-reveal__content').exists().hasText('Additional content');
    // Test that content is hidden after the toggle is triggered again
    await click('.kds-reveal__toggle-button');
    assert.dom('.kds-reveal__content').doesNotExist();
  });

  // A11Y

  test('it displays the correct value for aria-expanded when closed vs open', async function (assert) {
    await render(
      kbs`
        <Kds::Reveal @text="More options">
          Additional content
        </Kds::Reveal>
      `
    );
    assert
      .dom('.kds-reveal__toggle-button')
      .hasAttribute('aria-expanded', 'false');
    await click('.kds-reveal__toggle-button');
    assert
      .dom('.kds-reveal__toggle-button')
      .hasAttribute('aria-expanded', 'true');
  });

  test('the toggle button has an aria-controls attribute with a value matching the content id', async function (assert) {
    await render(
      kbs`<Kds::Reveal @text="More options">Additional content</Kds::Reveal>`
    );
    await click('.kds-reveal__toggle-button');
    assert.dom('.kds-reveal__toggle-button').hasAttribute('aria-controls');
    assert.dom('.kds-reveal__content').hasAttribute('id');

    assert.strictEqual(
      this.element
        .querySelector('.kds-reveal__toggle-button')
        .getAttribute('aria-controls'),
      this.element.querySelector('.kds-reveal__content').getAttribute('id')
    );
  });

  // OPTIONS

  // isOpen

  test('it displays content initially when @isOpen is set to true, ', async function (assert) {
    await render(
      kbs`
        <Kds::Reveal @text="More options" @isOpen={{true}}>
          Additional content
        </Kds::Reveal>`
    );
    // Test content is displayed
    assert.dom('.kds-reveal__content').exists().hasText('Additional content');
    // Test that content is hidden after the toggle is triggered
    await click('.kds-reveal__toggle-button');
    assert.dom('.kds-reveal__content').doesNotExist();
  });

  // textWhenOpen

  test('it displays different passed in text when open', async function (assert) {
    await render(
      kbs`
      <Kds::Reveal @text="Open me" @textWhenOpen="Close me">
        Additional content
      </Kds::Reveal>`
    );
    await click('.kds-reveal__toggle-button');
    assert.dom('.kds-reveal__toggle-button').hasText('Close me');
  });

  // ASSERTIONS

  test('it should throw an assertion if @text is missing/has no value', async function (assert) {
    const errorMessage = '@text for "Kds::Reveal" must have a valid value';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::Reveal>Additional content</Kds::Reveal>`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
