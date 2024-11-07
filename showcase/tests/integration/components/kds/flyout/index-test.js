/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  click,
  render,
  resetOnerror,
  setupOnerror,
  settled,
} from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/flyout/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    assert.dom('#test-flyout').hasClass('kds-flyout');
  });

  // SIZE

  test('it should render the component with default size if no arguments provided', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    assert.dom('#test-flyout').hasClass('kds-flyout--size-medium');
  });

  test('it should render the component with custom size if provided', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" @size="large" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    assert.dom('#test-flyout').hasClass('kds-flyout--size-large');
  });

  // OVERLAY

  test('it should render the component with an overlay element by default', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    assert.dom('.kds-flyout__overlay').isVisible();
  });

  // CONTEXTUAL COMPONENTS

  test('it renders the contextual components', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|>
            <F.Header>Title</F.Header>
            <F.Body>Body</F.Body>
            <F.Footer>Footer</F.Footer>
          </Kds::Flyout>`
    );
    assert.dom('.kds-flyout').exists();
    assert.dom('.kds-flyout__header').exists();
    assert.dom('.kds-flyout__header').hasText('Title');
    assert.dom('.kds-flyout__body').exists();
    assert.dom('.kds-flyout__body').hasText('Body');
    assert.dom('.kds-flyout__footer').exists();
    assert.dom('.kds-flyout__footer').hasText('Footer');
  });

  // TITLE (ICON, TAGLINE & DESCRIPTION)

  test('it renders the title without icon, tagline, and description', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|>
            <F.Header>Title</F.Header>
          </Kds::Flyout>`
    );
    assert.dom('.kds-flyout__title').exists();
    assert.dom('.kds-flyout__title').hasText('Title');
    assert.dom('.kds-flyout__icon').doesNotExist();
    assert.dom('.kds-flyout__tagline').doesNotExist();
    assert.dom('.kds-flyout__description').doesNotExist();
  });
  test('it renders the title with icon and tagline if provided', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|>
            <F.Header @icon="info" @tagline="Tagline">Title</F.Header>
          </Kds::Flyout>`
    );
    assert.dom('.kds-flyout__title').exists();
    assert.dom('.kds-flyout__title').hasText('Tagline Title');
    assert.dom('.kds-flyout__icon.kds-icon-info').exists();
    assert.dom('.kds-flyout__tagline').exists();
    assert.dom('.kds-flyout__tagline').hasText('Tagline');
  });
  test('it renders the description if provided', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|>
            <F.Header>Title</F.Header>
            <F.Description>Description</F.Description>
          </Kds::Flyout>`
    );
    assert.dom('.kds-flyout__title').exists();
    assert.dom('.kds-flyout__title').hasText('Title');
    assert.dom('.kds-flyout__description').exists();
    assert.dom('.kds-flyout__description').hasText('Description');
    assert.dom('.kds-flyout__icon').doesNotExist();
    assert.dom('.kds-flyout__tagline').doesNotExist();
  });

  test('it renders the title as an h1', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|>
            <F.Header @icon="info" @tagline="Tagline">Title</F.Header>
          </Kds::Flyout>`
    );
    assert.dom('.kds-flyout__title').hasTagName('h1');
  });

  // DISMISS

  test('it should always render the "dismiss" button', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    assert.dom('button.kds-flyout__dismiss').exists();
  });
  test('it should close the flyout when the "dismiss" button is pressed', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    assert.dom('#test-flyout').isVisible();
    await click('button.kds-flyout__dismiss');
    assert.dom('#test-flyout').isNotVisible();
  });

  // ACCESSIBILITY

  test('it uses the title as name for the dialog', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    // the IDs are dynamically generated
    let titleElement = this.element.querySelector('.kds-flyout__title');
    let titleElementId = titleElement.id;
    assert.dom('dialog').hasAttribute('aria-labelledby', titleElementId);
  });

  // FOCUS MANAGEMENT

  test('it sets initial focus on the dimiss button, as first focusable element', async function (assert) {
    await render(
      kbs`<Kds::Flyout id="test-flyout" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    assert.dom('button.kds-flyout__dismiss').isFocused();
  });

  test('it returns focus to the element that initiated the open event, if is still in the DOM', async function (assert) {
    await render(
      kbs`<button id="test-button" type="button" {{on "click" (set this "showFlyout" true)}}>open flyout</button>
          {{#if this.showFlyout}}
            <Kds::Flyout id="test-flyout" as |M|>
              <M.Header>Title</M.Header>
            </Kds::Flyout>
          {{/if}}
          `
    );
    await click('#test-button');
    assert.true(this.showFlyout);
    await click('button.kds-flyout__dismiss');
    assert.dom('#test-button').isFocused();
  });

  // not sure how to reach the `body` element, it says "body is not a valid root element"
  skip('it returns focus to the `body` element, if the one that initiated the open event not anymore in the DOM', async function (assert) {
    await render(
      kbs`<Kds::Dropdown as |D|>
            <D.ToggleButton id="test-toggle" @text="open flyout" />
            <D.Interactive id="test-interactive" {{on "click" (set this "showFlyout" true)}}>open flyout</D.Interactive>
          </Kds::Dropdown>
          {{#if this.showFlyout}}
            <Kds::Flyout id="test-flyout" as |M|>
              <M.Header>Title</M.Header>
            </Kds::Flyout>
          {{/if}}
          `
    );
    await click('#test-toggle');
    await click('#test-interactive');
    assert.true(this.showFlyout);
    await click('button.kds-flyout__dismiss');
    assert.dom('body', 'body').isFocused();
  });

  test('it returns focus to a specific element if provided via`@returnFocusTo`', async function (assert) {
    await render(
      kbs`<Kds::Dropdown as |D|>
            <D.ToggleButton id="test-toggle" @text="open flyout" />
            <D.Interactive id="test-interactive" {{on "click" (set this "showFlyout" true)}}>open flyout</D.Interactive>
          </Kds::Dropdown>
          {{#if this.showFlyout}}
            <Kds::Flyout id="test-flyout" @returnFocusTo="test-toggle" as |M|>
              <M.Header>Title</M.Header>
            </Kds::Flyout>
          {{/if}}
          `
    );
    await click('#test-toggle');
    await click('#test-interactive');
    assert.true(this.showFlyout);
    await click('button.kds-flyout__dismiss');
    assert.dom('#test-toggle').isFocused();
  });

  // CALLBACKS

  test('it should call `onOpen` function if provided', async function (assert) {
    let opened = false;
    this.set('onOpen', () => (opened = true));
    await render(
      kbs`<Kds::Flyout id="test-onopen-callback" @onOpen={{this.onOpen}} as |F|>
            <F.Header>Title</F.Header>
          </Kds::Flyout>`
    );
    assert.dom('#test-onopen-callback').isVisible();
    await settled();
    assert.ok(opened);
  });

  skip('it should call `onClose` function if provided', async function (assert) {
    let closed = false;
    this.set('onClose', () => (closed = true));
    await render(
      kbs`<Kds::Flyout id="test-close-callback" @onClose={{this.onClose}} as |F|>
            <F.Header>Title</F.Header>
          </Kds::Flyout>`
    );
    await click('button.kds-flyout__dismiss');
    assert.dom('#test-onclose-callback').isNotVisible();
    await settled();
    assert.ok(closed);
  });

  // ASSERTIONS

  test('it should throw an assertion if an incorrect value for @size is provided', async function (assert) {
    const errorMessage =
      '@size for "Kds::Flyout" must be one of the following: medium, large; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(
      kbs`<Kds::Flyout @size="foo" as |F|><F.Header>Title</F.Header></Kds::Flyout>`
    );
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
