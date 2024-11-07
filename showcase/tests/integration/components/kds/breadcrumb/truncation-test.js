/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/breadcrumb/truncation', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the breadcrumb truncation with an appropriate CSS class', async function (assert) {
    await render(
      kbs`<Kds::Breadcrumb::Truncation id="test-breadcrumb-truncation" />`
    );
    assert
      .dom('#test-breadcrumb-truncation')
      .hasClass('kds-breadcrumb__item--is-truncation');
  });

  // TOGGLE

  test('it should render a toggle button', async function (assert) {
    await render(
      kbs`<Kds::Breadcrumb::Truncation id="test-breadcrumb-truncation" />`
    );
    assert.dom('#test-breadcrumb-truncation button').exists();
  });

  test('the toggle button should have an aria-label', async function (assert) {
    await render(
      kbs`<Kds::Breadcrumb::Truncation id="test-breadcrumb-truncation" />`
    );
    assert.dom('#test-breadcrumb-truncation button').hasAttribute('aria-label');
  });

  // CONTENT

  test('it should not render the content', async function (assert) {
    await render(
      kbs`<Kds::Breadcrumb::Truncation id="test-breadcrumb-truncation" />`
    );
    assert
      .dom('#test-breadcrumb-truncation .kds-breadcrumb__truncation-content')
      .isNotVisible();
  });
  test('it should yield (and render) the content', async function (assert) {
    await render(
      kbs`<Kds::Breadcrumb::Truncation id="test-breadcrumb-truncation"><a id="test-breadcrumb-truncation-link" href="#">test</a></Kds::Breadcrumb::Truncation>`
    );
    await click('#test-breadcrumb-truncation button');
    assert.dom('.kds-breadcrumb__truncation-content').exists();
    assert.dom('.kds-breadcrumb__truncation-content > ol').exists();
    assert.dom('a#test-breadcrumb-truncation-link').exists();
  });

  // A11Y

  test('it should render with the correct aria-expanded attribute on the toggle element', async function (assert) {
    await render(
      kbs`<Kds::Breadcrumb::Truncation id="test-breadcrumb-truncation" />`
    );
    assert
      .dom('#test-breadcrumb-truncation button')
      .hasAttribute('aria-expanded', 'false');
    await click('#test-breadcrumb-truncation button');
    assert
      .dom('#test-breadcrumb-truncation button')
      .hasAttribute('aria-expanded', 'true');
  });
});
