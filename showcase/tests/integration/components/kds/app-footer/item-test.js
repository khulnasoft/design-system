/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/app-footer/item', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<ul><Kds::AppFooter::Item id="test-item" /></ul>`);
    assert.dom('#test-item').hasClass('kds-app-footer__list-item');
  });

  // CONTENT

  test('it renders text content yielded within the Item', async function (assert) {
    await render(
      kbs`<ul><Kds::AppFooter::Item id="test-item">Custom item</Kds::AppFooter::Item></ul>`
    );
    assert.dom('#test-item').hasText('Custom item');
  });
});
