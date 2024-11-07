/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  settled,
  resetOnerror,
  setupOnerror,
} from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/code-block/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" />
    `);
    assert.dom('#test-code-block').hasClass('kds-code-block');
  });

  // CONTENT

  test('it renders the passed in code text content', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" />
    `);
    assert
      .dom('#test-code-block pre code')
      .containsText("console.log('Hello world');");
  });

  // DYNAMIC CONTENT

  test('it renders the passed in dynamic content', async function (assert) {
    this.set('value', "console.log('Hello world');");
    await render(kbs`
      <Kds::CodeBlock @value={{this.value}} id="test-code-block" />
    `);
    assert
      .dom('#test-code-block pre code')
      .hasText("console.log('Hello world');");
    this.set('value', "console.log('Lorem ipsum');");
    await settled();
    assert
      .dom('#test-code-block pre code')
      .hasText("console.log('Lorem ipsum');");
  });

  // CONTEXTUAL COMPONENTS

  test('it renders the contextual components', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" as |CB|>
        <CB.Title>Title</CB.Title>
        <CB.Description>Description</CB.Description>
      </Kds::CodeBlock>
    `);
    assert.dom('.kds-code-block__title').hasText('Title');
    assert.dom('.kds-code-block__description').hasText('Description');
  });

  test('it renders the title as a p when the @tag argument is not provided', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" as |CB|>
        <CB.Title>Title</CB.Title>
      </Kds::CodeBlock>
    `);
    assert.dom('.kds-code-block__title').hasTagName('p');
  });

  test('it renders the title as the custom title tag when the @tag argument is provided', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" as |CB|>
        <CB.Title @tag='h2'>Title</CB.Title>
      </Kds::CodeBlock>
    `);
    assert.dom('.kds-code-block__title').hasTagName('h2');
  });

  // OPTIONS

  // isStandalone
  test('it has rounded corners by default', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" />
    `);
    assert.dom('#test-code-block').hasClass('kds-code-block--is-standalone');
  });

  test('it does not have rounded corners if `isStandalone` is set to false', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" @isStandalone={{false}} id="test-code-block" />
    `);
    assert
      .dom('#test-code-block')
      .doesNotHaveClass('kds-code-block--is-standalone');
  });

  // language
  test('it has no default language for syntax highlighting', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" />
    `);
    assert.dom('#test-code-block').doesNotHaveClass(/language-*/);
  });

  test('it uses the passed in language value for syntax highlighting', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" @language="go" id="test-code-block" />
    `);
    assert.dom('#test-code-block').hasClass('language-go');
  });

  test('syntax highlighting fails gracefully if an invalid language is specified', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" @language="foo" id="test-code-block" />
    `);
    assert.dom('#test-code-block').hasClass('language-foo');
    assert.dom('#test-code-block .token').doesNotExist();
  });

  // hasCopyButton
  test('it does not display a Copy button by default', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" />
    `);
    assert.dom('.kds-code-block__copy-button').doesNotExist();
  });

  test(`it displays a Copy button if hasCopyButton is set to true`, async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" @hasCopyButton={{true}} />
    `);
    assert.dom('.kds-code-block__copy-button').exists();
  });

  // hasLineNumbers
  test('it displays line numbers by default', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" />
    `);
    assert.dom('#test-code-block').hasClass('line-numbers');
  });

  test('it does not display line numbers if hasLineNumbers is set to false', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" @hasLineNumbers={{false}} id="test-code-block" />
    `);
    assert.dom('#test-code-block').doesNotHaveClass('line-numbers');
  });

  // hasLineWrapping
  test('it does not wrap code line by default', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" id="test-code-block" />
    `);
    assert
      .dom('#test-code-block')
      .doesNotHaveClass('kds-code-block--has-line-wrapping');
  });

  test('it wraps code lines if hasLineWrapping is set to true', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" @hasLineWrapping={{true}} id="test-code-block" />
    `);
    assert
      .dom('#test-code-block')
      .hasClass('kds-code-block--has-line-wrapping');
  });

  // highlightLines
  test('it highlights the passed in individual line numbers', async function (assert) {
    await render(kbs`
    <Kds::CodeBlock
      id="test-code-block-highlight"
      @highlightLines="1"
      @value="console.log('Hello world');"
    />
  `);
    assert
      .dom('#test-code-block-highlight [data-range="1"]')
      .exists()
      .hasClass('line-highlight');
  });

  // maxHeight
  test('it uses the passed in maxHeight value', async function (assert) {
    await render(kbs`
      <Kds::CodeBlock @value="console.log('Hello world');" @maxHeight="100px" />
    `);
    assert
      .dom('.kds-code-block__code')
      .hasAttribute('style', 'max-height: 100px;');
  });

  // ASSERTION

  test('it should throw an assertion if no value for @code is provided', async function (assert) {
    const errorMessage = '@code for "Kds::CodeBlock" must have a valid value';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(kbs`<Kds::CodeBlock />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});