/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/app-footer/status-link',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it should render the component with a CSS class that matches the component name', async function (assert) {
      await render(
        kbs`<ul><Kds::AppFooter::StatusLink @status="operational" id="test-status-link" /></ul>`
      );
      assert.dom('#test-status-link').hasClass('kds-app-footer__status-link');
    });

    // OPTIONS

    // status

    test('it should display text, icon, and icon color matching the passed in status', async function (assert) {
      await render(kbs`<ul class="kds-app-footer kds-app-footer--theme-light">
        <Kds::AppFooter::StatusLink id="test-operational" @status="operational" />
        <Kds::AppFooter::StatusLink id="test-degraded" @status="degraded" />
        <Kds::AppFooter::StatusLink id="test-maintenance" @status="maintenance" />
        <Kds::AppFooter::StatusLink id="test-outage" @status="outage" />
      </ul>`);
      // operational
      assert
        .dom('#test-operational')
        .hasText('System operational')
        .hasClass('kds-app-footer__status-link--operational');
      assert.dom('#test-operational .kds-icon-check-circle').hasStyle({
        fill: 'rgb(0, 138, 34)',
      });
      // degraded
      assert
        .dom('#test-degraded')
        .hasText('System degraded')
        .hasClass('kds-app-footer__status-link--degraded');
      assert.dom('#test-degraded .kds-icon-alert-triangle').hasStyle({
        fill: 'rgb(187, 90, 0)',
      });
      // maintenance
      assert
        .dom('#test-maintenance')
        .hasText('System maintenance')
        .hasClass('kds-app-footer__status-link--maintenance');
      assert.dom('#test-maintenance .kds-icon-alert-triangle').hasStyle({
        fill: 'rgb(187, 90, 0)',
      });
      // outage
      assert
        .dom('#test-outage')
        .hasText('System outage')
        .hasClass('kds-app-footer__status-link--outage');
      assert.dom('#test-outage .kds-icon-x-circle').hasStyle({
        fill: 'rgb(229, 34, 40)',
      });
    });

    // text, statusIcon, statusIconColor

    test('it should display the custom text, icon color, and icon passed in', async function (assert) {
      await render(kbs`
      <ul><Kds::AppFooter::StatusLink
        @text="Waypoint"
        @statusIcon="waypoint"
        @statusIconColor="var(--token-color-waypoint-brand)"
      /></ul>
    `);
      assert.dom('.kds-app-footer__status-link').hasText('Waypoint');
      assert.dom('.kds-app-footer__status-link .kds-icon').exists();
      // .hasStyle({'--kds-app-footer-status-icon-color': 'var(--token-color-waypoint-brand)'})
    });

    // href

    test('it should use the passed in href for the link', async function (assert) {
      await render(kbs`
      <ul><Kds::AppFooter::StatusLink @status="operational" @href="https://www.khulnasoft.com/custom-url" /></ul>
    `);
      assert
        .dom('.kds-app-footer__status-link')
        .hasAttribute('href', 'https://www.khulnasoft.com/custom-url');
    });

    // ASSERTIONS

    test('it should throw an assertion if neither @text nor @status are provided', async function (assert) {
      const errorMessage =
        'Either @status or @text for "Kds::AppFooter::StatusLink" must have a valid value';
      assert.expect(2);
      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });
      await render(kbs`<ul><Kds::AppFooter::StatusLink /></ul>`);
      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });

    test('it should throw an assertion if an incorrect value for @status is provided', async function (assert) {
      const errorMessage =
        '@status for "Kds::AppFooter" must be one of the following: operational, degraded, maintenance, outage received: foo';
      assert.expect(2);
      setupOnerror(function (error) {
        assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
      });
      await render(kbs`<ul><Kds::AppFooter::StatusLink @status="foo" /></ul>`);
      assert.throws(function () {
        throw new Error(errorMessage);
      });
    });
  }
);
