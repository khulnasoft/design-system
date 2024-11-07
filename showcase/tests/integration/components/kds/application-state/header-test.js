/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'showcase/tests/helpers';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/application-state/header',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::ApplicationState::Header @title="An error has occurred" id="test-application-state-header" />`
      );

      assert
        .dom('#test-application-state-header')
        .hasClass('kds-application-state__header');
    });

    test('it should render an icon if @icon is defined', async function (assert) {
      await render(
        kbs`<Kds::ApplicationState::Header @title="An error has occurred" id="test-application-state-header" @icon="help" @errorCode="404" />`
      );

      assert.dom('.kds-icon').exists();
    });

    test('it should render an error code if @errorCode is defined', async function (assert) {
      await render(
        kbs`<Kds::ApplicationState::Header @title="An error has occurred" id="test-application-state-header" @icon="help" @errorCode="404" />`
      );

      assert.dom('.kds-application-state__error-code').exists();
    });

    test('it should render the title with a `div` tag if no `@titleTag` is provided', async function (assert) {
      await render(
        kbs`<Kds::ApplicationState::Header @title="An error has occurred" id="test-application-state-header" />`
      );

      assert.dom('.kds-application-state__title').hasTagName('div');
    });

    test('it should render the title with the tag set for `@titleTag`', async function (assert) {
      await render(
        kbs`<Kds::ApplicationState::Header @title="An error has occurred" @titleTag="h1" id="test-application-state-header" />`
      );

      assert.dom('.kds-application-state__title').hasTagName('h1');
    });
  }
);