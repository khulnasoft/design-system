/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/app-frame/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::AppFrame id="test-app-frame" />`);
    assert.dom('#test-app-frame').hasClass('kds-app-frame');
  });

  // CONTENT

  test('it should yield the different content areas (and spreads attributes on them)', async function (assert) {
    await render(kbs`
        <Kds::AppFrame id="test-app-frame" data-test-app-frame as |Frame|>
          <Frame.Header id="test-app-frame-header" data-test-app-frame-header>
            header container
          </Frame.Header>
          <Frame.Sidebar id="test-app-frame-sidebar" data-test-app-frame-sidebar>
            sidebar container
          </Frame.Sidebar>
          <Frame.Main id="test-app-frame-main" data-test-app-frame-main>
            main container
          </Frame.Main>
          <Frame.Footer id="test-app-frame-footer" data-test-app-frame-footer>
            footer container
          </Frame.Footer>
          <Frame.Modals id="test-app-frame-modals" data-test-app-frame-modals>
            modals container
          </Frame.Modals>
        </Kds::AppFrame>
    `);

    assert.dom('#test-app-frame[data-test-app-frame]').exists();

    // Header

    assert.dom('#test-app-frame-header[data-test-app-frame-header]').exists();
    assert.dom('header.kds-app-frame__header').exists();
    assert.dom('header.kds-app-frame__header').includesText('header container');

    // Sidebar

    assert.dom('#test-app-frame-sidebar[data-test-app-frame-sidebar]').exists();
    assert.dom('aside.kds-app-frame__sidebar').exists();
    assert
      .dom('aside.kds-app-frame__sidebar')
      .includesText('sidebar container');

    // Main

    assert.dom('#test-app-frame-main[data-test-app-frame-main]').exists();
    assert.dom('main.kds-app-frame__main').exists();
    assert.dom('main.kds-app-frame__main').includesText('main container');

    // Footer

    assert.dom('#test-app-frame-footer[data-test-app-frame-footer]').exists();
    assert.dom('footer.kds-app-frame__footer').exists();
    assert.dom('footer.kds-app-frame__footer').includesText('footer container');

    // Modals

    assert.dom('#test-app-frame-modals[data-test-app-frame-modals]').exists();
    assert.dom('div.kds-app-frame__modals').exists();
    assert.dom('div.kds-app-frame__modals').includesText('modals container');
  });

  // OPTIONS

  // hasHeader

  test('it should hide the header when @hasHeader is false', async function (assert) {
    await render(kbs`
        <Kds::AppFrame @hasHeader={{false}} as |Frame|>
          <Frame.Header id="test-app-frame-header" />
        </Kds::AppFrame>
    `);
    assert.dom('#test-app-frame-header').doesNotExist();
  });

  // hasSidebar

  test('it should hide the sidebar when @hasSidebar is false', async function (assert) {
    await render(kbs`
        <Kds::AppFrame @hasSidebar={{false}} as |Frame|>
          <Frame.Sidebar id="test-app-frame-sidebar" />
        </Kds::AppFrame>
    `);
    assert.dom('#test-app-frame-sidebar').doesNotExist();
  });

  // hasFooter

  test('it should hide the sidebar when @hasFooter is false', async function (assert) {
    await render(kbs`
        <Kds::AppFrame @hasFooter={{false}} as |Frame|>
          <Frame.Footer id="test-app-frame-footer" />
        </Kds::AppFrame>
    `);
    assert.dom('#test-app-frame-sidebar').doesNotExist();
  });

  // hasModals

  test('it should hide the modals when @hasModals is false', async function (assert) {
    await render(kbs`
        <Kds::AppFrame @hasModals={{false}} as |Frame|>
          <Frame.Modals id="test-app-frame-modals" />
        </Kds::AppFrame>
    `);
    assert.dom('#test-app-frame-modals').doesNotExist();
  });

  // Main id
  test('it should have a default id of "kds-main" on the main container', async function (assert) {
    await render(kbs`
        <Kds::AppFrame as |Frame|>
          <Frame.Main />
        </Kds::AppFrame>
    `);
    assert.dom('main#kds-main').exists();
  });

  test('it should allow a custom id for the main container to be passed in', async function (assert) {
    await render(kbs`
        <Kds::AppFrame as |Frame|>
          <Frame.Main id="test-main" />
        </Kds::AppFrame>
    `);
    assert.dom('main#test-main').exists();
  });
});
