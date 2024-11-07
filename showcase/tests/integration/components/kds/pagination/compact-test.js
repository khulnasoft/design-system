/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/pagination/compact', function (hooks) {
  setupRenderingTest(hooks);
  hooks.afterEach(() => {
    resetOnerror();
  });

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`
    <Kds::Pagination::Compact id="test-pagination-compact" />
    `);
    assert.dom('#test-pagination-compact').hasClass('kds-pagination');
  });

  // CONTENT

  test('it should render the "prev" and "next" controls', async function (assert) {
    await render(kbs`<Kds::Pagination::Compact />`);
    assert
      .dom('.kds-pagination-nav__arrow--direction-prev')
      .includesText('Previous');
    assert
      .dom(
        '.kds-pagination-nav__arrow--direction-prev .kds-pagination-nav__arrow-label'
      )
      .exists();
    assert
      .dom('.kds-pagination-nav__arrow--direction-next')
      .includesText('Next');
    assert
      .dom(
        '.kds-pagination-nav__arrow--direction-next .kds-pagination-nav__arrow-label'
      )
      .exists();
  });
  test('it should not render the text labels if @showLabels is set to false', async function (assert) {
    await render(kbs`
      <Kds::Pagination::Compact @showLabels={{false}} />
    `);
    assert.dom('.kds-pagination-nav__arrow-label').doesNotExist();
  });

  // SIZE SELECTOR

  test('it shows the "size-selector" if @showSizeSelector is true', async function (assert) {
    await render(kbs`
      <Kds::Pagination::Compact @showSizeSelector={{true}} />
    `);
    assert.dom('.kds-pagination .kds-pagination-size-selector').exists();
  });

  test('it renders the "size selector" content with default pageSizes values', async function (assert) {
    await render(kbs`
      <Kds::Pagination::Compact @showSizeSelector={{true}} />
    `);
    assert
      .dom('.kds-pagination .kds-pagination-size-selector option[value="10"]')
      .hasText('10');
    assert
      .dom('.kds-pagination .kds-pagination-size-selector option[value="30"]')
      .hasText('30');
    assert
      .dom('.kds-pagination .kds-pagination-size-selector option[value="50"]')
      .hasText('50');
  });

  test('it renders custom options for passed in pageSizes and sets currentPageSize to the first PageSizes item', async function (assert) {
    await render(kbs`
      <Kds::Pagination::Compact @showSizeSelector={{true}} @pageSizes={{array 20 40 60}} />
    `);
    assert
      .dom('.kds-pagination .kds-pagination-size-selector option[value="20"]')
      .hasText('20');
    assert
      .dom('.kds-pagination .kds-pagination-size-selector option[value="40"]')
      .hasText('40');
    assert
      .dom('.kds-pagination .kds-pagination-size-selector option[value="60"]')
      .hasText('60');
  });

  test('it renders the passed in currentPageSize value', async function (assert) {
    await render(kbs`
      <Kds::Pagination::Compact @showSizeSelector={{true}} @currentPageSize={{40}} @pageSizes={{array 20 40 60}} />
    `);
    assert
      .dom('.kds-pagination .kds-pagination-size-selector select')
      .hasValue('40');
  });

  test('it displays the passed in custom text for the SizeSelector label text', async function (assert) {
    await render(kbs`
      <Kds::Pagination::Compact @showSizeSelector={{true}} @sizeSelectorLabel="Custom text" />
    `);
    assert.dom('.kds-pagination-size-selector label').hasText('Custom text');
  });

  // DISABLED

  test('it should render disabled buttons when @isDisabledPrev/Next are set to true', async function (assert) {
    await render(kbs`
        <Kds::Pagination::Compact @isDisabledPrev={{true}} @isDisabledNext={{true}} />
      `);
    assert
      .dom('.kds-pagination-nav__arrow--direction-prev')
      .hasAttribute('disabled');
    assert
      .dom('.kds-pagination-nav__arrow--direction-next')
      .hasAttribute('disabled');
  });

  // EVENTS

  test('it should invoke the onPageChange callback and return the value of the new page number and page size', async function (assert) {
    let direction;
    this.set('onPageChange', (dir) => (direction = dir));
    await render(
      kbs`
        <Kds::Pagination::Compact @onPageChange={{this.onPageChange}} />
        `
    );
    await click('.kds-pagination-nav__arrow--direction-prev');
    assert.strictEqual(direction, 'prev');
    await click('.kds-pagination-nav__arrow--direction-next');
    assert.strictEqual(direction, 'next');
  });

  // ROUTING

  test('it should render links instead of buttons, with the correct "href" values, if it has routing', async function (assert) {
    this.set('myQueryFunction', (page) => ({ page }));
    await render(
      kbs`<Kds::Pagination::Compact @route="components.pagination" @queryFunction={{this.myQueryFunction}} />`
    );
    assert
      .dom('.kds-pagination-nav__arrow--direction-prev')
      .hasAttribute('href', '/components/pagination?page=prev');
    assert
      .dom('.kds-pagination-nav__arrow--direction-next')
      .hasAttribute('href', '/components/pagination?page=next');
  });

  // ASSERTIONS

  test('it should throw an assertion if @queryFunction is not a function', async function (assert) {
    const errorMessage =
      '@queryFunction for "Kds::Pagination::Compact" must be a function';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(
      kbs`<Kds::Pagination::Compact @queryFunction="foo" @model="test" />`
    );
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });

  test('it should throw an assertion if @queryFunction is provided without a routing argument', async function (assert) {
    this.set('myQueryFunction', (page) => ({ page }));
    const errorMessage =
      '@model, @models, or @route for "Kds::Pagination::Compact" must be provided when using the `@queryFunction` argument';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(
      kbs`<Kds::Pagination::Compact @queryFunction={{this.myQueryFunction}} />`
    );
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
