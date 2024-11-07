/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/pagination/nav/ellipsis',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(kbs`
      <Kds::Pagination::Nav::Ellipsis id="test-nav-ellipsis" />
    `);
      assert.dom('#test-nav-ellipsis').hasClass('kds-pagination-nav__ellipsis');
    });
  }
);
