/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, triggerKeyEvent } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/app-header/index', function (hooks) {
  setupRenderingTest(hooks);

  skip('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::AppHeader id="test-app-header" />`);
    assert.dom('#test-app-header').hasClass('kds-app-header');
  });

  // CONTENT

  skip('it renders content passed into the globalActions and utilityActions named blocks', async function (assert) {
    await render(kbs`
      <Kds::AppHeader>
        <:logo>
          <span id="test-global-item-before">Global Item Before</span>
        </:logo>
        <:globalActions>
          <span id="test-global-item-after">Global Item After</span>
        </:globalActions>
        <:utilityActions>
          <span id="test-utility-item">Utility Item</span>
        </:utilityActions>
      </Kds::AppHeader>
    `);
    assert.dom('#test-global-item-before').hasText('Global Item Before');
    assert.dom('#test-global-item-after').hasText('Global Item After');
    assert.dom('#test-utility-item').hasText('Utility Item');
  });

  // RESPONSIVENESS

  skip('it is "desktop" by default', async function (assert) {
    await render(kbs`<Kds::AppHeader id="test-app-header" />`);
    assert.dom('#test-app-header').hasClass('kds-app-header--is-desktop');
  });

  skip('it does not show a menu button on wide viewports', async function (assert) {
    await render(kbs`
      <Kds::AppHeader />
    `);
    assert.dom('.kds-app-header__menu-button').doesNotExist();
  });

  // MOBILE

  // Note: We set a high breakpoint to force the component to render as "mobile"

  skip('it is "mobile" on narrow viewports', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10000px}</style>
      <Kds::AppHeader id="test-app-header" />
    `);
    assert.dom('#test-app-header').hasClass('kds-app-header--is-mobile');
  });

  skip('it shows a menu button on narrow viewports', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10000px}</style>
      <Kds::AppHeader />
    `);
    assert.dom('.kds-app-header__menu-button').exists();
  });

  // Mobile menu functionality
  skip(`the actions do not display by default on narrow viewports`, async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10000px}</style>
      <Kds::AppHeader id="test-app-header" />
    `);
    assert.dom('#test-app-header').hasClass('kds-app-header--menu-is-closed');
  });

  skip(`the actions show/hide when the menu button is pressed on narrow viewports`, async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10000px}</style>
      <Kds::AppHeader id="test-app-header" />
    `);
    assert.dom('#test-app-header').hasClass('kds-app-header--menu-is-closed');

    await click('.kds-app-header__menu-button');
    assert.dom('#test-app-header').hasClass('kds-app-header--menu-is-open');

    await click('.kds-app-header__menu-button');
    assert.dom('#test-app-header').hasClass('kds-app-header--menu-is-closed');
  });

  // OPTIONS

  // Breakpoint
  // Note: We pass in a high custom breakpoint to force the component to render as "mobile"

  skip('it uses the custom passed in breakpoint to control menu display', async function (assert) {
    await render(kbs`
      <Kds::AppHeader @breakpoint="20000px" />
    `);
    assert.dom('.kds-app-header__menu-button').exists();
  });

  // A11Y

  skip(`it displays the correct value for aria-expanded when actions are displayed vs hidden`, async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10000px}</style>
      <Kds::AppHeader />
    `);
    await click('.kds-app-header__menu-button');
    assert
      .dom('.kds-app-header__menu-button')
      .hasAttribute('aria-expanded', 'true');

    await click('.kds-app-header__menu-button');
    assert
      .dom('.kds-app-header__menu-button')
      .hasAttribute('aria-expanded', 'false');
  });

  skip('the actions menu collapses when the ESC key is pressed on narrow viewports', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10000px}</style>
      <Kds::AppHeader id="test-app-header" />
    `);
    assert.dom('#test-app-header').hasClass('kds-app-header--menu-is-closed');

    await click('.kds-app-header__menu-button');
    assert.dom('#test-app-header').hasClass('kds-app-header--menu-is-open');

    await triggerKeyEvent('.kds-app-header__actions', 'keydown', 'Escape');
    assert.dom('#test-app-header').hasClass('kds-app-header--menu-is-closed');
  });

  skip('the menu button has an aria-controls attribute with a value matching the menu id', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10000px}</style>
      <Kds::AppHeader />
    `);
    await click('.kds-app-header__menu-button');
    assert.dom('.kds-app-header__menu-button').hasAttribute('aria-controls');
    assert.dom('.kds-app-header__actions').hasAttribute('id');

    assert.strictEqual(
      this.element
        .querySelector('.kds-app-header__menu-button')
        .getAttribute('aria-controls'),
      this.element.querySelector('.kds-app-header__actions').getAttribute('id')
    );
  });

  // A11Y Refocus

  skip('it renders the `a11y-refocus` elements by default with a default skip link href value of "#kds-main', async function (assert) {
    await render(kbs`<Kds::AppHeader />`);
    assert.dom('#ember-a11y-refocus-nav-message').exists();
    assert
      .dom('#ember-a11y-refocus-skip-link')
      .exists()
      .hasAttribute('href', '#kds-main');
  });

  skip('it renders the `a11y-refocus` elements with the right properties provided as arguments', async function (assert) {
    await render(kbs`
      <Kds::AppHeader
        @a11yRefocusSkipTo="test-skip-to"
        @a11yRefocusSkipText="test-skip-text"
        @a11yRefocusNavigationText="test-navigation-text"
      />
    `);
    assert
      .dom('#ember-a11y-refocus-nav-message')
      .hasText('test-navigation-text');
    assert.dom('#ember-a11y-refocus-skip-link').hasText('test-skip-text');
    assert
      .dom('#ember-a11y-refocus-skip-link')
      .hasAttribute('href', '#test-skip-to');
  });

  skip('it does not render the `a11y-refocus` elements if `hasA11yRefocus` is false', async function (assert) {
    await render(kbs`<Kds::AppHeader @hasA11yRefocus={{false}} />`);
    assert.dom('#ember-a11y-refocus-nav-message').doesNotExist();
    assert.dom('#ember-a11y-refocus-skip-link').doesNotExist();
  });
});
