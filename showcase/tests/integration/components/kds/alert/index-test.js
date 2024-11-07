/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/alert/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Alert @type="inline" id="test-alert" />`);
    assert.dom('#test-alert').hasClass('kds-alert');
  });

  // TYPE

  test('it should render the correct CSS type class depending on the @type prop', async function (assert) {
    await render(kbs`<Kds::Alert @type="page" id="test-alert" />`);
    assert.dom('#test-alert').hasClass('kds-alert--type-page');
  });

  // ICON

  test('it should render an icon by default depending on the type and color', async function (assert) {
    // here we don't test all the possible combinations, only some of them as precaution
    await render(kbs`<Kds::Alert @type="inline" />`);
    assert.dom('.kds-icon-info').exists();
    await render(kbs`<Kds::Alert @type="compact" />`);
    assert.dom('.kds-icon-info-fill').exists();
    await render(kbs`<Kds::Alert @type="inline" @color="highlight" />`);
    assert.dom('.kds-icon-info').exists();
    await render(kbs`<Kds::Alert @type="inline" @color="success" />`);
    assert.dom('.kds-icon-check-circle').exists();
    await render(kbs`<Kds::Alert @type="inline" @color="warning" />`);
    assert.dom('.kds-icon-alert-triangle').exists();
    await render(kbs`<Kds::Alert @type="inline" @color="critical" />`);
    assert.dom('.kds-icon-alert-diamond').exists();
  });

  test('if an icon is declared, the icon should render in the component and override the default one', async function (assert) {
    await render(kbs`<Kds::Alert @type="inline" @icon="clipboard-copy" />`);
    assert.dom('.kds-icon-clipboard-copy').exists();
    await render(kbs`<Kds::Alert @type="compact" @icon="clipboard-copy" />`);
    assert.dom('.kds-icon-clipboard-copy').exists();
  });

  test('it should display no icon when @icon is set to false', async function (assert) {
    await render(kbs`<Kds::Alert @type="inline" @icon={{false}} />`);
    assert.dom('.kds-icon').doesNotExist();
  });

  // TEXT (TITLE + DESCRIPTION)

  test('it should render the title when the "title" contextual component is provided', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" as |A|><A.Title>This is the title</A.Title></Kds::Alert>`
    );
    assert.dom(this.element).hasText('This is the title');
  });
  test('it should render the description when the "description" contextual component is provided', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" as |A|><A.Description>This is the description</A.Description></Kds::Alert>`
    );
    assert.dom(this.element).hasText('This is the description');
  });
  test('it should render rich HTML when the "description" contextual component contains HTML tags', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" as |A|><A.Description>Hello <strong>strong</strong> and <em>em</em> and <code>code</code> and <a href='#'>link</a></A.Description></Kds::Alert>`
    );
    assert.dom('.kds-alert__description strong').exists().hasText('strong');
    assert.dom('.kds-alert__description em').exists().hasText('em');
    assert.dom('.kds-alert__description code').exists().hasText('code');
    assert.dom('.kds-alert__description a').exists().hasText('link');
  });
  test('it should render a div when the @tag argument is not provided', async function (assert) {
    await render(kbs`
      <Kds::Alert @type="inline" as |A|>
        <A.Title>This is the title</A.Title>
      </Kds::Alert>`);
    assert.dom('.kds-alert__title').hasTagName('div');
  });
  test('it should render the custom title tag when the @tag argument is provided', async function (assert) {
    await render(kbs`
      <Kds::Alert @type="inline" as |A|>
        <A.Title @tag="h2">This is the title</A.Title>
      </Kds::Alert>`);
    assert.dom('.kds-alert__title').hasTagName('h2');
  });

  // ACTIONS

  test('it should render an Kds::Button component yielded to the "actions" container', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" aria-labelledby="test-alert-button" id="test-alert" as |A|><A.Button @text="I am a button" @size="small" @color="secondary" id="test-alert-button"/></Kds::Alert>`
    );
    assert
      .dom('#test-alert .kds-alert__actions button')
      .exists()
      .hasClass('kds-button')
      .hasClass('kds-button--size-small')
      .hasClass('kds-button--color-secondary')
      .hasText('I am a button');
  });
  test('it should render an Kds::Link::Standalone component yielded to the "actions" container', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" aria-labelledby="test-alert-link" id="test-alert" as |A|><A.LinkStandalone @icon="plus" @text="I am a link" @href="#" @size="small" @color="secondary" id="test-alert-link" /></Kds::Alert>`
    );
    assert
      .dom('#test-alert .kds-alert__actions a')
      .exists()
      .hasClass('kds-link-standalone')
      .hasClass('kds-link-standalone--size-small')
      .hasClass('kds-link-standalone--color-secondary')
      .hasText('I am a link');
  });

  // GENERIC

  test('it should render any content passed to the "generic" contextual component', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" id="test-alert" as |A|><A.Generic><pre>test</pre></A.Generic></Kds::Alert>`
    );
    assert.dom('#test-alert .kds-alert__content pre').exists().hasText('test');
  });

  // DISMISS

  test('it should not render the "dismiss" button by default', async function (assert) {
    await render(kbs`<Kds::Alert @type="inline" />`);
    assert.dom('button.kds-alert__dismiss').doesNotExist();
  });
  test('it should render the "dismiss" button if a callback function is passed to the @onDismiss argument', async function (assert) {
    this.set('NOOP', () => {});
    await render(kbs`<Kds::Alert @type="inline" @onDismiss={{this.NOOP}} />`);
    assert.dom('button.kds-alert__dismiss').exists();
  });

  // A11Y

  // * Colors for alert usages which notify users: success, warning, critical

  test('it should render the component with role="alert" and aria-live="polite" for the "success" color', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" @color="success" id="test-alert" />`
    );
    assert.dom('#test-alert').hasAttribute('role', 'alert');
    assert.dom('#test-alert').hasAttribute('aria-live', 'polite');
  });

  test('it should render the component with role="alert" and aria-live="polite" for the "warning" color', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" @color="warning" id="test-alert" />`
    );
    assert.dom('#test-alert').hasAttribute('role', 'alert');
    assert.dom('#test-alert').hasAttribute('aria-live', 'polite');
  });

  test('it should render the component with role="alert" and aria-live="polite" for the "critical" color', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" @color="critical" id="test-alert" />`
    );
    assert.dom('#test-alert').hasAttribute('role', 'alert');
    assert.dom('#test-alert').hasAttribute('aria-live', 'polite');
  });

  // * Colors for informational & promo usages: neutral, highlight

  test('it should not render the component with role="alert" and aria-live="polite" for the "neutral" color', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" @color="neutral" id="test-alert" />`
    );
    assert.dom('#test-alert').doesNotHaveAttribute('role', 'alert');
    assert.dom('#test-alert').doesNotHaveAttribute('aria-live', 'polite');
  });

  test('it should not render the component with role="alert" and aria-live="polite" for the "highlight" color', async function (assert) {
    await render(
      kbs`<Kds::Alert @type="inline" @color="highlight" id="test-alert" />`
    );
    assert.dom('#test-alert').doesNotHaveAttribute('role', 'alert');
    assert.dom('#test-alert').doesNotHaveAttribute('aria-live', 'polite');
  });

  // aria-labelledby

  test('it should render with an auto-generated `aria-labelledby` when a title is provided', async function (assert) {
    await render(
      kbs`
        <Kds::Alert @type="inline" id="test-alert" as |A|>
          <A.Title>This is the title</A.Title>
        </Kds::Alert>
      `
    );
    let title = this.element.querySelector('#test-alert .kds-alert__title');
    assert.dom('#test-alert').hasAttribute('aria-labelledby', title.id);
  });

  test('it should render with an auto-generated `aria-labelledby` when description is provided', async function (assert) {
    await render(
      kbs`
        <Kds::Alert @type="inline" id="test-alert" as |A|>
          <A.Description>This is the title</A.Description>
        </Kds::Alert>
      `
    );
    let description = this.element.querySelector(
      '#test-alert .kds-alert__description'
    );
    assert.dom('#test-alert').hasAttribute('aria-labelledby', description.id);
  });

  // Alert dialogs

  // * Colors for alert usages which notify users: success, warning, critical

  test('it should render with with role="alertdialog" and aria-live="polite" for the "success" color when actions are provided', async function (assert) {
    await render(
      kbs`
        <Kds::Alert @type="inline" @color="success" id="test-alert" as |A|>
          <A.Button @text="I am a button" @size="small" />
        </Kds::Alert>
      `
    );
    assert.dom('#test-alert').hasAttribute('role', 'alertdialog');
    assert.dom('#test-alert').hasAttribute('aria-live', 'polite');
  });

  test('it should render with with role="alertdialog" and aria-live="polite" for the "warning" color when actions are provided', async function (assert) {
    await render(
      kbs`
        <Kds::Alert @type="inline" @color="warning" id="test-alert" as |A|>
          <A.Button @text="I am a button" @size="small" />
        </Kds::Alert>
      `
    );
    assert.dom('#test-alert').hasAttribute('role', 'alertdialog');
    assert.dom('#test-alert').hasAttribute('aria-live', 'polite');
  });

  test('it should render with with role="alertdialog" and aria-live="polite" for the "critical" color when actions are provided', async function (assert) {
    await render(
      kbs`
        <Kds::Alert @type="inline" @color="critical" id="test-alert" as |A|>
          <A.Button @text="I am a button" @size="small" />
        </Kds::Alert>
      `
    );
    assert.dom('#test-alert').hasAttribute('role', 'alertdialog');
    assert.dom('#test-alert').hasAttribute('aria-live', 'polite');
  });

  // * Colors for informational & promo usages: neutral, highlight

  test('it should not render with with role="alertdialog" and aria-live="polite" for the "neutral" color when actions are provided', async function (assert) {
    await render(
      kbs`
        <Kds::Alert @type="inline" @color="neutral" id="test-alert" as |A|>
          <A.Button @text="I am a button" @size="small" />
        </Kds::Alert>
      `
    );
    assert.dom('#test-alert').doesNotHaveAttribute('role', 'alertdialog');
    assert.dom('#test-alert').doesNotHaveAttribute('aria-live', 'polite');
  });

  test('it should not render with with role="alertdialog" and aria-live="polite" for the "highlight" color when actions are provided', async function (assert) {
    await render(
      kbs`
        <Kds::Alert @type="inline" @color="highlight" id="test-alert" as |A|>
          <A.Button @text="I am a button" @size="small" />
        </Kds::Alert>
      `
    );
    assert.dom('#test-alert').doesNotHaveAttribute('role', 'alertdialog');
    assert.dom('#test-alert').doesNotHaveAttribute('aria-live', 'polite');
  });

  // ASSERTIONS

  test('it should throw an assertion if an incorrect value for @type is provided', async function (assert) {
    const errorMessage =
      '@type for "Kds::Alert" must be one of the following: page, inline, compact; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::Alert @type="foo" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
  test('it should throw an assertion if a "compact" alerts is rendered with @icon equal to false', async function (assert) {
    const errorMessage =
      '@icon for "Kds::Alert" with @type "compact" is required';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::Alert @type="compact" @icon={{false}} />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
  test('it should throw an assertion if an incorrect value for @color is provided', async function (assert) {
    const errorMessage =
      '@color for "Kds::Alert" must be one of the following: neutral, highlight, success, warning, critical; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::Alert @type="inline" @color="foo" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});