/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'showcase/tests/helpers';
import { render, resetOnerror, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/application-state/index',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.afterEach(() => {
      resetOnerror();
    });

    test('it should render with a CSS class that matches the component name', async function (assert) {
      await render(kbs`
      <Kds::ApplicationState id="test-application-state">
        template block text
      </Kds::ApplicationState>
    `);

      assert.dom('#test-application-state').hasClass('kds-application-state');
    });

    test('it should have the correct alignment class when no alignment is provided', async function (assert) {
      await render(kbs`
      <Kds::ApplicationState id="test-application-state">
        template block text
      </Kds::ApplicationState>
    `);

      assert
        .dom('#test-application-state')
        .hasClass('kds-application-state--align-left');
    });

    test('it should have the correct alignment class when alignment is set to "left"', async function (assert) {
      await render(kbs`
      <Kds::ApplicationState id="test-application-state" @align="left">
        template block text
      </Kds::ApplicationState>
    `);

      assert
        .dom('#test-application-state')
        .hasClass('kds-application-state--align-left');
    });

    test('it should have the correct alignment class when alignment is set to "center"', async function (assert) {
      await render(kbs`
      <Kds::ApplicationState id="test-application-state" @align="center">
        template block text
      </Kds::ApplicationState>
    `);

      assert
        .dom('#test-application-state')
        .hasClass('kds-application-state--align-center');
    });

    // CONTEXTUAL COMPONENTS

    test('it renders the contextual components', async function (assert) {
      await render(
        kbs`<Kds::ApplicationState as |A|>
              <A.Media>ApplicationState Media</A.Media>
              <A.Header @title="ApplicationState Title" />
              <A.Body>ApplicationState Body</A.Body>
              <A.Footer>ApplicationState Footer</A.Footer>
            </Kds::ApplicationState>`
      );
      assert
        .dom('.kds-application-state__media')
        .hasText('ApplicationState Media');
      assert
        .dom('.kds-application-state__header')
        .hasText('ApplicationState Title');
      assert
        .dom('.kds-application-state__body')
        .hasText('ApplicationState Body');
      assert
        .dom('.kds-application-state__footer')
        .hasText('ApplicationState Footer');
    });
    test('it does not render the contextual components if not provided', async function (assert) {
      await render(kbs`<Kds::ApplicationState />`);
      assert.dom('.kds-application-date__media').doesNotExist();
      assert.dom('.kds-application-date__header').doesNotExist();
      assert.dom('.kds-application-date__body').doesNotExist();
      assert.dom('.kds-application-date__footer').doesNotExist();
    });

    // ASSERTIONS

    test('it should throw an assertion if an incorrect value for @alignment provided', async function (assert) {
      const errorMessage =
        '@align for "Kds::ApplicationState" must be one of the following: left, center; received: test';

      assert.expect(2);

      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });

      await render(kbs`
      <Kds::ApplicationState id="test-application-state" @align="test">
        template block text
      </Kds::ApplicationState>
    `);

      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });
  }
);
