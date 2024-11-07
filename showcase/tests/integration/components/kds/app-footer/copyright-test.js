/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/app-footer/copyright', function (hooks) {
  setupRenderingTest(hooks);

  const currentYear = new Date().getFullYear();

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::AppFooter::Copyright id="test-copyright" />`);
    assert.dom('#test-copyright').hasClass('kds-app-footer__copyright');
  });

  // OPTIONS

  test('it renders the copyright with the current year by default', async function (assert) {
    await render(kbs`<Kds::AppFooter::Copyright id="test-copyright" />`);
    assert.dom('#test-copyright').includesText(currentYear);
  });

  test('it renders the copyright with the passed in year value', async function (assert) {
    await render(
      kbs`<Kds::AppFooter::Copyright id="test-copyright" @year="1984" />`
    );
    assert.dom('#test-copyright').includesText('1984');
  });
});
