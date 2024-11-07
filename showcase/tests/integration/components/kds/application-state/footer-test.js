/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'showcase/tests/helpers';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/application-state/footer',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render with a CSS class that matches the component name', async function (assert) {
      await render(kbs`
      <Kds::ApplicationState::Footer id="test-application-state-footer">
        template block text
      </Kds::ApplicationState::Footer>
    `);

      assert
        .dom('#test-application-state-footer')
        .hasClass('kds-application-state__footer');
    });

    // CONTEXTUAL COMPONENTS

    test('it should render an Kds::Link::Standalone component', async function (assert) {
      await render(kbs`
        <Kds::ApplicationState::Footer id="test-application-state-footer" as |F|>
          <F.LinkStandalone @icon="arrow-left" @text="Go back" @href="/"/>
        </Kds::ApplicationState::Footer>
      `);
      assert
        .dom('#test-application-state-footer a')
        .exists()
        .hasClass('kds-link-standalone')
        .hasText('Go back');
    });
  }
);
