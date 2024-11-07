/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/accordion/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::Accordion id="test-accordion" />`);
    assert.dom('#test-accordion').hasClass('kds-accordion');
  });

  // CONTENT

  test('it renders the passed in Accordion Items', async function (assert) {
    await render(kbs`
      <Kds::Accordion as |A|>
        <A.Item>
          <:toggle>Item one</:toggle>
          <:content>Content one</:content>
        </A.Item>
        <A.Item>
          <:toggle>Item two</:toggle>
          <:content>Content two</:content>
        </A.Item>
      </Kds::Accordion>
    `);
    assert.dom('.kds-accordion .kds-accordion-item').exists({ count: 2 });
  });

  test('it renders the passed in content in the Accordion Item', async function (assert) {
    await render(kbs`
      <Kds::Accordion as |A|>
        <A.Item>
          <:toggle><strong id="test-strong">Item one</strong></:toggle>
          <:content><em id="test-em">Content one</em></:content>
        </A.Item>
      </Kds::Accordion>
    `);
    await click('.kds-accordion-item__button');
    assert.dom('#test-strong').exists().hasText('Item one');
    assert.dom('#test-em').exists().hasText('Content one');
  });

  test('it renders a div when the @titleTag argument is not provided', async function (assert) {
    await render(kbs`
      <Kds::Accordion as |A|>
        <A.Item>
          <:toggle>Item one</:toggle>
          <:content>Content one</:content>
        </A.Item>
      </Kds::Accordion>
    `);
    assert.dom('.kds-accordion-item__toggle-content').hasTagName('div');
  });

  test('it renders the custom title tag when the @titleTag argument is provided', async function (assert) {
    await render(kbs`
      <Kds::Accordion @titleTag='h2' as |A|>
        <A.Item>
          <:toggle>Item one</:toggle>
          <:content>Content one</:content>
        </A.Item>
      </Kds::Accordion>
    `);
    assert.dom('.kds-accordion-item__toggle-content').hasTagName('h2');
  });

  // SIZE

  test('it should render the medium size as the default if no @size is declared', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion id="test-accordion" as |A|>
          <A.Item>Item</A.Item>
        </Kds::Accordion>
      `
    );
    assert.dom('#test-accordion').hasClass('kds-accordion--size-medium');
    assert
      .dom('#test-accordion .kds-accordion-item')
      .hasClass('kds-accordion-item--size-medium');
  });

  test('it should render the correct CSS size class depending on the @size', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion id="test-accordion" @size="large" as |A|>
          <A.Item>Item</A.Item>
        </Kds::Accordion>
      `
    );
    assert.dom('#test-accordion').hasClass('kds-accordion--size-large');
    assert
      .dom('#test-accordion .kds-accordion-item')
      .hasClass('kds-accordion-item--size-large');
  });

  test('it should render different CSS size classes when different @size arguments are provided', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion id="test-accordion" @size="large" as |A|>
          <A.Item id="test-accordion-item1">Item 1</A.Item>
          <A.Item id="test-accordion-item2" @size="small">Item 2</A.Item>
        </Kds::Accordion>
      `
    );
    assert
      .dom('#test-accordion-item1')
      .hasClass('kds-accordion-item--size-large');
    assert
      .dom('#test-accordion-item2')
      .hasClass('kds-accordion-item--size-small');
  });

  // TYPE

  test('it should render the card type as the default if no @type is declared', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion id="test-accordion" as |A|>
          <A.Item>Item</A.Item>
        </Kds::Accordion>
      `
    );
    assert.dom('#test-accordion').hasClass('kds-accordion--type-card');
    assert
      .dom('#test-accordion .kds-accordion-item')
      .hasClass('kds-accordion-item--type-card');
  });

  test('it should render the correct CSS type class depending on the @type', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion id="test-accordion" @type="flush" as |A|>
          <A.Item>Item</A.Item>
        </Kds::Accordion>
      `
    );
    assert.dom('#test-accordion').hasClass('kds-accordion--type-flush');
    assert
      .dom('#test-accordion .kds-accordion-item')
      .hasClass('kds-accordion-item--type-flush');
  });

  test('it should render different CSS type class when different @type arguments are provided', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion id="test-accordion" @type="flush" as |A|>
          <A.Item id="test-accordion-item1">Item 1</A.Item>
          <A.Item id="test-accordion-item2" @type="card">Item 2</A.Item>
        </Kds::Accordion>
      `
    );
    assert
      .dom('#test-accordion-item1')
      .hasClass('kds-accordion-item--type-flush');
    assert
      .dom('#test-accordion-item2')
      .hasClass('kds-accordion-item--type-card');
  });

  // A11Y

  test('it displays the correct value for aria-expanded on the AccordionItem when closed vs open', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion as |A|>
          <A.Item>
            <:toggle>Item one</:toggle>
            <:content>Additional content</:content>
          </A.Item>
        </Kds::Accordion>
      `
    );
    assert
      .dom('.kds-accordion-item__button')
      .hasAttribute('aria-expanded', 'false');
    await click('.kds-accordion-item__button');
    assert
      .dom('.kds-accordion-item__button')
      .hasAttribute('aria-expanded', 'true');
  });

  test('the AccordionItem toggle button has an aria-controls attribute with a value matching the content id', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion as |A|>
          <A.Item>
            <:toggle>Item one</:toggle>
            <:content>Additional content</:content>
          </A.Item>
        </Kds::Accordion>
      `
    );
    await click('.kds-accordion-item__button');
    assert.dom('.kds-accordion-item__button').hasAttribute('aria-controls');
    assert.dom('.kds-accordion-item__content').hasAttribute('id');

    assert.strictEqual(
      this.element
        .querySelector('.kds-accordion-item__button')
        .getAttribute('aria-controls'),
      this.element
        .querySelector('.kds-accordion-item__content')
        .getAttribute('id')
    );
  });

  test('the AccordionItem toggle has an aria-labelledby attribute set to the id of the toggle text by default', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion as |A|>
          <A.Item>
            <:toggle>Item one</:toggle>
            <:content>Additional content</:content>
          </A.Item>
        </Kds::Accordion>
      `
    );

    assert.dom('.kds-accordion-item__button').hasAttribute('aria-labelledby');

    assert
      .dom('.kds-accordion-item__button')
      .doesNotHaveAttribute('aria-label');

    assert.strictEqual(
      this.element
        .querySelector('.kds-accordion-item__toggle-content')
        .getAttribute('id'),
      this.element
        .querySelector('.kds-accordion-item__button')
        .getAttribute('aria-labelledby')
    );
  });

  test('the AccordionItem toggle has an aria-label attribute when the argument is passed', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion as |A|>
          <A.Item @ariaLabel="Custom toggle label">
            <:toggle>Item one</:toggle>
            <:content>Additional content</:content>
          </A.Item>
        </Kds::Accordion>
      `
    );

    assert
      .dom('.kds-accordion-item__button')
      .hasAttribute('aria-label', 'Custom toggle label');

    assert
      .dom('.kds-accordion-item__button')
      .doesNotHaveAttribute('aria-labelledby');
  });

  // OPTIONS

  // isOpen

  test('it displays content initially when @isOpen is set to true', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion as |A|>
          <A.Item @isOpen={{true}}>
            <:toggle>Item one</:toggle>
            <:content>Additional content</:content>
          </A.Item>
        </Kds::Accordion>
      `
    );
    // Test content is displayed
    assert
      .dom('.kds-accordion-item__content')
      .exists()
      .hasText('Additional content');
    // Test that content is hidden after the toggle is triggered
    await click('.kds-accordion-item__button');
    assert.dom('.kds-accordion-item__content').doesNotExist();
  });

  // containsInteractive
  test('it displays the correct variant when containsInteractive is set to false vs. true', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion as |A|>
          <A.Item id="test-contains-interactive--false">
            <:toggle>Item one</:toggle>
            <:content>Additional content</:content>
          </A.Item>
          <A.Item @containsInteractive={{true}} id="test-contains-interactive--true">
            <:toggle>Item one</:toggle>
            <:content>Additional content</:content>
          </A.Item>
        </Kds::Accordion>
      `
    );
    assert
      .dom('#test-contains-interactive--false')
      .hasClass('kds-accordion-item--does-not-contain-interactive');
    assert
      .dom('#test-contains-interactive--true')
      .hasClass('kds-accordion-item--contains-interactive');
  });

  // isStatic
  test('it does not show the toggle button when @isStatic is set to true, ', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion as |A|>
          <A.Item @isStatic={{true}}>
            <:toggle>Item one</:toggle>
            <:content>Additional content</:content>
          </A.Item>
        </Kds::Accordion>
      `
    );
    assert.dom('.kds-accordion-item--is-static').exists();
    assert
      .dom('.kds-accordion-item__button')
      .hasStyle({ visibility: 'hidden' });
  });

  // forceState
  test('it displays the correct content based on @forceState', async function (assert) {
    await render(
      kbs`
        <Kds::Accordion @forceState={{this.forceState}} as |A|>
          <A.Item @isOpen={{true}}>
            <:toggle>Item one</:toggle>
            <:content>Content one</:content>
          </A.Item>
          <A.Item @isOpen={{false}}>
            <:toggle>Item one</:toggle>
            <:content>Content two</:content>
          </A.Item>
        </Kds::Accordion>
      `
    );
    // first item open at rendering
    assert
      .dom('.kds-accordion-item__content')
      .exists({ count: 1 })
      .containsText('Content one');

    // all items open via forceState (external override to open)
    this.set('forceState', 'open');
    assert.dom('.kds-accordion-item__content').exists({ count: 2 });

    // first item closed via toggle (internal override to close)
    await click('.kds-accordion-item__button');
    assert
      .dom('.kds-accordion-item__content')
      .exists({ count: 1 })
      .containsText('Content two');

    // all items closed via forceState (external override to close)
    this.set('forceState', 'close');
    assert.dom('.kds-accordion-item__content').doesNotExist();

    // first item open via toggle  (internal override to open)
    await click('.kds-accordion-item__button');
    assert
      .dom('.kds-accordion-item__content')
      .exists({ count: 1 })
      .containsText('Content one');
  });

  // close

  test('it should hide the content when an accordion item triggers `close`', async function (assert) {
    await render(kbs`
      <Kds::Accordion::Item>
        <:toggle>Item one</:toggle>
        <:content as |c|>
          <button type="button" {{on "click" c.close}}>Close</button>
        </:content>
      </Kds::Accordion::Item>
    `);
    await click('.kds-accordion-item__button');
    assert.dom('.kds-accordion-item__content').exists();

    await click('.kds-accordion-item__content button');
    assert.dom('.kds-accordion-item__content').doesNotExist();
    assert.dom('.kds-accordion-item__content button').doesNotExist();
  });

  // onClickToggle

  test('it should call onClickToggle function', async function (assert) {
    let state = 'close';
    this.set(
      'onClickToggle',
      () => (state = state === 'open' ? (state = 'close') : (state = 'open'))
    );
    await render(kbs`
      <Kds::Accordion::Item @forceState={{this.state}} @onClickToggle={{this.onClickToggle}}>
        <:toggle>Item one</:toggle>
        <:content>Content one</:content>
      </Kds::Accordion::Item>
    `);
    // closed by default
    assert.dom('.kds-accordion-item__content').doesNotExist();
    // toggle to open
    await click('.kds-accordion-item__button');
    assert.strictEqual(state, 'open');
    assert.dom('.kds-accordion-item__content').exists();
    // toggle to close
    await click('.kds-accordion-item__button');
    assert.strictEqual(state, 'close');
    assert.dom('.kds-accordion-item__content').doesNotExist();
  });
});