/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/app-footer/link', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`
      <ul>
        <Kds::AppFooter::Link @href="https://cloud.khulnasoft.com" id="test-link">
          Custom link
        </Kds::AppFooter::Link>
      </ul>`);
    assert.dom('#test-link').hasClass('kds-app-footer__link');
  });

  // CONTENT

  test('it renders text content yielded within the Link', async function (assert) {
    await render(
      kbs`
        <ul>
          <Kds::AppFooter::Link @href="https://cloud.khulnasoft.com" id="test-link">
            Custom link
          </Kds::AppFooter::Link>
        </ul>`
    );
    assert
      .dom('#test-link')
      .hasText('Custom link')
      .hasAttribute('href', 'https://cloud.khulnasoft.com');
  });
});
