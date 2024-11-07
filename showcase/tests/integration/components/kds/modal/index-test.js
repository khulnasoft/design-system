/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  click,
  render,
  rerender,
  triggerKeyEvent,
  resetOnerror,
  setupOnerror,
  settled,
} from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/modal/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|><M.Header>Title</M.Header></Kds::Modal>`
    );
    assert.dom('#test-modal').hasClass('kds-modal');
  });

  // SIZE & COLOR

  test('it should render the component with CSS classes that reflect the default vaules if no arguments provided', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|><M.Header>Title</M.Header></Kds::Modal>`
    );
    assert.dom('#test-modal').hasClass('kds-modal--size-medium');
    assert.dom('#test-modal').hasClass('kds-modal--color-neutral');
  });

  test('it should render the component with CSS classes that reflect the arguments provided', async function (assert) {
    await render(
      kbs`<Kds::Modal @size="small" @color="warning" id="test-modal" as |M|><M.Header>Title</M.Header></Kds::Modal>`
    );
    assert.dom('#test-modal').hasClass('kds-modal--size-small');
    assert.dom('#test-modal').hasClass('kds-modal--color-warning');
  });

  // OVERLAY

  test('it should render the component with an overlay element', async function (assert) {
    await render(
      kbs`<Kds::Modal @size="small" @color="warning" id="test-modal" as |M|><M.Header>Title</M.Header></Kds::Modal>`
    );
    assert.dom('.kds-modal__overlay').isVisible();
  });

  // CONTEXTUAL COMPONENTS

  test('it renders the contextual components', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|>
            <M.Header>Title</M.Header>
            <M.Body>Body</M.Body>
            <M.Footer>Footer</M.Footer>
          </Kds::Modal>`
    );
    assert.dom('.kds-modal').exists();
    assert.dom('.kds-modal__header').exists();
    assert.dom('.kds-modal__header').hasText('Title');
    assert.dom('.kds-modal__body').exists();
    assert.dom('.kds-modal__body').hasText('Body');
    assert.dom('.kds-modal__footer').exists();
    assert.dom('.kds-modal__footer').hasText('Footer');
  });

  // TITLE (ICON & TAGLINE)

  test('it renders the title without icon and tagline if not provided', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|>
            <M.Header>Title</M.Header>
          </Kds::Modal>`
    );
    assert.dom('.kds-modal__title').exists();
    assert.dom('.kds-modal__title').hasText('Title');
    assert.dom('.kds-modal__icon').doesNotExist();
    assert.dom('.kds-modal__tagline').doesNotExist();
  });
  test('it renders the title with icon and tagline if provided', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|>
            <M.Header @icon="info" @tagline="Tagline">Title</M.Header>
          </Kds::Modal>`
    );
    assert.dom('.kds-modal__title').exists();
    assert.dom('.kds-modal__title').hasText('Tagline Title');
    assert.dom('.kds-modal__icon.kds-icon-info').exists();
    assert.dom('.kds-modal__tagline').exists();
    assert.dom('.kds-modal__tagline').hasText('Tagline');
  });

  test('it renders the title as an h1', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|>
            <M.Header @icon="info" @tagline="Tagline">Title</M.Header>
          </Kds::Modal>`
    );
    assert.dom('.kds-modal__title').hasTagName('h1');
  });

  // DISMISS

  test('it should always render the "dismiss" button', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|><M.Header>Title</M.Header></Kds::Modal>`
    );
    assert.dom('button.kds-modal__dismiss').exists();
  });
  test('it should close the modal when the "dismiss" button is pressed', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|><M.Header>Title</M.Header></Kds::Modal>`
    );
    assert.dom('#test-modal').isVisible();
    await click('button.kds-modal__dismiss');
    assert.dom('#test-modal').isNotVisible();
  });
  test('it should close the modal when the "close" function is called', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|>
            <M.Footer as |F|>
              <Kds::Button id="cancel-button" type="button" @text="Cancel" @color="secondary" {{on "click" F.close}} />
            </M.Footer>
          </Kds::Modal>`
    );
    assert.dom('#test-modal').isVisible();
    await click('#cancel-button');
    assert.dom('#test-modal').isNotVisible();
  });
  test('it should not close the modal when `@isDismissDisabled` is `true`', async function (assert) {
    this.set('isDismissDisabled', true);
    await render(
      kbs`<Kds::Modal @isDismissDisabled={{this.isDismissDisabled}} id="test-modal" as |M|>
            <M.Header>Title</M.Header>
            <M.Footer as |F|>
              <Kds::Button id="cancel-button" type="button" @text="Cancel" @color="secondary" {{on "click" F.close}} />
            </M.Footer>
          </Kds::Modal>`
    );
    // top right dismiss button
    await click('button.kds-modal__dismiss');
    assert.dom('#test-modal').isVisible();
    // cancel button with yielded "close" callback
    await click('#cancel-button');
    assert.dom('#test-modal').isVisible();
    // click on overlay
    await click('.kds-modal__overlay');
    assert.dom('#test-modal').isVisible();
    // "esc" key
    await triggerKeyEvent('.kds-modal', 'keydown', 'Escape');
    assert.dom('#test-modal').isVisible();

    // now let's check that the state is reset and it can be closed
    this.set('isDismissDisabled', false);
    await rerender();
    await click('button.kds-modal__dismiss');
    assert.dom('#test-modal').isNotVisible();
  });

  // ACCESSIBILITY

  test('it uses the title as name for the dialog', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|>
            <M.Header>Title</M.Header>
          </Kds::Modal>`
    );
    // the IDs are dynamically generated
    let titleElement = this.element.querySelector('.kds-modal__title');
    let titleElementId = titleElement.id;
    assert.dom('dialog').hasAttribute('aria-labelledby', titleElementId);
  });

  // FOCUS MANAGEMENT

  test('it sets initial focus on the dimiss button, as first focusable element', async function (assert) {
    await render(
      kbs`<Kds::Modal id="test-modal" as |M|>
            <M.Header>Title</M.Header>
          </Kds::Modal>`
    );
    assert.dom('button.kds-modal__dismiss').isFocused();
  });

  test('it returns focus to the element that initiated the open event, if is still in the DOM', async function (assert) {
    await render(
      kbs`<button id="test-button" type="button" {{on "click" (set this "showModal" true)}}>open modal</button>
          {{#if this.showModal}}
            <Kds::Modal id="test-modal" as |M|>
              <M.Header>Title</M.Header>
            </Kds::Modal>
          {{/if}}
          `
    );
    await click('#test-button');
    assert.true(this.showModal);
    await click('button.kds-modal__dismiss');
    assert.dom('#test-button').isFocused();
  });

  // not sure how to reach the `body` element, it says "body is not a valid root element"
  skip('it returns focus to the `body` element, if the one that initiated the open event not anymore in the DOM', async function (assert) {
    await render(
      kbs`<Kds::Dropdown as |D|>
            <D.ToggleButton id="test-toggle" @text="open modal" />
            <D.Interactive id="test-interactive" {{on "click" (set this "showModal" true)}}>open modal</D.Interactive>
          </Kds::Dropdown>
          {{#if this.showModal}}
            <Kds::Modal id="test-modal" as |M|>
              <M.Header>Title</M.Header>
            </Kds::Modal>
          {{/if}}
          `
    );
    await click('#test-toggle');
    await click('#test-interactive');
    assert.true(this.showModal);
    await click('button.kds-modal__dismiss');
    assert.dom('body', 'body').isFocused();
  });

  test('it returns focus to a specific element if provided via`@returnFocusTo`', async function (assert) {
    await render(
      kbs`<Kds::Dropdown as |D|>
            <D.ToggleButton id="test-toggle" @text="open modal" />
            <D.Interactive id="test-interactive" {{on "click" (set this "showModal" true)}}>open modal</D.Interactive>
          </Kds::Dropdown>
          {{#if this.showModal}}
            <Kds::Modal id="test-modal" @returnFocusTo="test-toggle" as |M|>
              <M.Header>Title</M.Header>
            </Kds::Modal>
          {{/if}}
          `
    );
    await click('#test-toggle');
    await click('#test-interactive');
    assert.true(this.showModal);
    await click('button.kds-modal__dismiss');
    assert.dom('#test-toggle').isFocused();
  });

  // CALLBACKS

  test('it should call `onOpen` function if provided', async function (assert) {
    let opened = false;
    this.set('onOpen', () => (opened = true));
    await render(
      kbs`<Kds::Modal id="test-modal-onopen-callback" @onOpen={{this.onOpen}} as |M|>
            <M.Header>Title</M.Header>
          </Kds::Modal>`
    );
    assert.dom('#test-modal-onopen-callback').isVisible();
    await settled();
    assert.ok(opened);
  });

  test('it should call `onClose` function if provided', async function (assert) {
    let closed = false;
    this.set('onClose', () => (closed = true));
    await render(
      kbs`<Kds::Modal id="test-modal-onclose-callback" @onClose={{this.onClose}} as |M|>
            <M.Header>Title</M.Header>
          </Kds::Modal>`
    );
    await click('#test-modal-onclose-callback button.kds-modal__dismiss');
    assert.dom('#test-modal-onclose-callback').isNotVisible();
    await settled();
    assert.ok(closed);
  });

  // ASSERTIONS

  test('it should throw an assertion if an incorrect value for @size is provided', async function (assert) {
    const errorMessage =
      '@size for "Kds::Modal" must be one of the following: small, medium, large; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(
      kbs`<Kds::Modal @size="foo" as |M|><M.Header>Title</M.Header></Kds::Modal>`
    );
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
  test('it should throw an assertion if an incorrect value for @color is provided', async function (assert) {
    const errorMessage =
      '@color for "Kds::Modal" must be one of the following: neutral, warning, critical; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(
      kbs`<Kds::Modal @color="foo" as |M|><M.Header>Title</M.Header></Kds::Modal>`
    );
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
