/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'showcase/tests/helpers';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/application-state/media',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::ApplicationState::Media id="test-application-state-media" />`
      );

      assert
        .dom('#test-application-state-media')
        .hasClass('kds-application-state__media');
    });

    test('it should render the yielded content when used in block form', async function (assert) {
      await render(
        kbs`<Kds::ApplicationState::Media id="test-application-state-media">
        <pre>test</pre>
      </Kds::ApplicationState::Media>`
      );
      assert.dom('#test-application-state-media > pre').exists();
      assert.dom('#test-application-state-media > pre').hasText('test');
    });
  }
);
