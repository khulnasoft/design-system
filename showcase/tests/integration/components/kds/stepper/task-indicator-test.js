/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/stepper/indicator/task',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<Kds::Stepper::Task::Indicator id="test-stepper-indicator-task" @status="incomplete" />`
      );
      assert
        .dom('#test-stepper-indicator-task')
        .hasClass('kds-stepper-indicator-task');
    });

    // IS INTERACTIVE

    test('it should render the non-interactive variant by default', async function (assert) {
      await render(
        kbs`<Kds::Stepper::Task::Indicator id="test-stepper-indicator-task" @status="incomplete" />`
      );
      assert
        .dom('#test-stepper-indicator-task')
        .hasClass('kds-stepper-indicator-task');
    });

    test('it should render the interactive variant if passed the isInteractive property', async function (assert) {
      await render(
        kbs`<Kds::Stepper::Task::Indicator id="test-stepper-indicator-task" @status="incomplete" @isInteractive={{true}} />`
      );
      assert
        .dom('#test-stepper-indicator-task')
        .hasClass('kds-stepper-indicator-task--is-interactive');
    });

    // STATUS

    // -- NON INTERACTIVE

    test('it should render the correct task status if the @status="incomplete" prop is declared', async function (assert) {
      await render(
        kbs`<Kds::Stepper::Task::Indicator id="test-stepper-indicator-task" @status="incomplete" />`
      );
      assert
        .dom('#test-stepper-indicator-task')
        .hasClass('kds-stepper-indicator-task--status-incomplete');
    });

    // -- INTERACTIVE

    test('it should render the correct status if the @status="incomplete" prop is declared', async function (assert) {
      await render(
        kbs`<Kds::Stepper::Task::Indicator id="test-stepper-indicator-task" @status="incomplete" @isInteractive={{true}} />`
      );
      assert
        .dom('#test-stepper-indicator-task')
        .hasClass('kds-stepper-indicator-task--status-incomplete')
        .hasClass('kds-stepper-indicator-task--is-interactive');
    });

    // ICON

    test('it should render a flight icon for any of the variants', async function (assert) {
      await render(
        kbs`<Kds::Stepper::Task::Indicator id="test-stepper-indicator-task" @status="processing" />`
      );
      assert.dom('.kds-icon-loading').exists();
    });
  }
);
