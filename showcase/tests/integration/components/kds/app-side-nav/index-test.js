/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  render,
  click,
  resetOnerror,
  settled,
  triggerKeyEvent,
} from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

class MockEventTarget extends EventTarget {}

module('Integration | Component | kds/app-side-nav/index', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    // Mock window.matchMedia to control media query events
    let mockMedia = new MockEventTarget();
    mockMedia.matches = true;

    this.__matchMedia = window.matchMedia;

    this.mockMedia = () => {
      window.matchMedia = () => mockMedia;
    };

    this.changeBrowserSize = async (isDesktop) => {
      mockMedia.matches = isDesktop;
      mockMedia.dispatchEvent(
        new MediaQueryListEvent('change', {
          matches: isDesktop,
        })
      );
      await settled();
    };
  });

  hooks.afterEach(function () {
    resetOnerror();
    window.matchMedia = this.__matchMedia;
  });

  skip('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::AppSideNav id="test-app-side-nav" @hasA11yRefocus={{false}} />`
    );
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav');
  });

  // CONTENT

  skip('it renders content passed to the named blocks', async function (assert) {
    await render(kbs`
      <Kds::AppSideNav @hasA11yRefocus={{false}}>
        <span id="test-app-side-nav-body" />
      </Kds::AppSideNav>
    `);
    assert.dom('#test-app-side-nav-body').exists();
  });

  // RESPONSIVENESS

  skip('it is "desktop" by default', async function (assert) {
    await render(kbs`<Kds::AppSideNav id="test-app-side-nav" />`);
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-desktop');
  });

  skip('it is "responsive" by default', async function (assert) {
    await render(kbs`<Kds::AppSideNav id="test-app-side-nav" />`);
    assert
      .dom('#test-app-side-nav')
      .hasClass('kds-app-side-nav--is-responsive');
  });

  skip('it is not "responsive" if `isResponsive` is false', async function (assert) {
    await render(
      kbs`<Kds::AppSideNav id="test-app-side-nav" @isResponsive={{false}} />`
    );
    assert
      .dom('#test-app-side-nav')
      .doesNotHaveClass('kds-app-side-nav--is-responsive');
  });

  // MOBILE

  skip('it is "mobile" on narrow viewports', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10088px}</style>
      <Kds::AppSideNav id="test-app-side-nav" />
    `);
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-mobile');
  });

  skip('it is minimized/collapsed on narrow viewports by default', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10088px}</style>
      <Kds::AppSideNav id="test-app-side-nav" />
    `);
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-minimized');
  });

  skip('it is not minimized/collapsed on narrow viewports if `isResponsive` is false', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10088px}</style>
      <Kds::AppSideNav id="test-app-side-nav" @isResponsive={{false}} />
    `);
    assert
      .dom('#test-app-side-nav')
      .hasClass('kds-app-side-nav--is-not-minimized');
  });

  skip('it shows a toggle button on narrow viewports by default', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10088px}</style>
      <Kds::AppSideNav id="test-app-side-nav" />
    `);
    assert.dom('.kds-app-side-nav__toggle-button').exists();
  });

  skip('it does not show a toggle button on narrow viewports if `isResponsive` is false', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10088px}</style>
      <Kds::AppSideNav id="test-app-side-nav" @isResponsive={{false}} />
    `);
    assert.dom('.kds-app-side-nav__toggle-button').doesNotExist();
  });

  skip('it expands/collapses when the toggle button is pressed on narrow viewports', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10088px}</style>
      <Kds::AppSideNav id="test-app-side-nav" />
    `);
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-minimized');

    await click('.kds-app-side-nav__toggle-button');
    assert
      .dom('#test-app-side-nav')
      .hasClass('kds-app-side-nav--is-not-minimized');
    await click('.kds-app-side-nav__toggle-button');
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-minimized');
  });

  skip('it collapses when the ESC key is pressed on narrow viewports', async function (assert) {
    await render(kbs`
      <style>:root {--kds-app-desktop-breakpoint: 10088px}</style>
      <Kds::AppSideNav id="test-app-side-nav">
        <span id="test-app-side-nav-body" />
        <span class="kds-app-side-nav-hide-when-minimized" />
      </Kds::AppSideNav>
    `);
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-minimized');
    await click('.kds-app-side-nav__toggle-button');
    assert
      .dom('#test-app-side-nav')
      .hasClass('kds-app-side-nav--is-not-minimized');

    await triggerKeyEvent('#test-app-side-nav', 'keydown', 'Escape');
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-minimized');
    assert.dom('.kds-app-side-nav-hide-when-minimized').hasAttribute('inert');
  });

  // COLLAPSIBLE

  skip('it responds to different events to toggle between "non-minimized" (by default) and "mimimized" states', async function (assert) {
    await render(
      kbs`<Kds::AppSideNav @isCollapsible={{true}} id="test-app-side-nav" />`
    );
    assert
      .dom('#test-app-side-nav')
      .hasClass('kds-app-side-nav--is-not-minimized');

    await click('.kds-app-side-nav__toggle-button');
    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-minimized');

    await click('.kds-app-side-nav__toggle-button');
    assert
      .dom('#test-app-side-nav')
      .hasClass('kds-app-side-nav--is-not-minimized');
  });

  skip('the "non-minimized" and "minimized" states have impact on its internal properties', async function (assert) {
    await render(kbs`
      <Kds::AppSideNav @isCollapsible={{true}} id="test-app-side-nav">
        <span id="test-app-side-nav-body" />
        <span class="kds-app-side-nav-hide-when-minimized" />
      </Kds::AppSideNav>
    `);
    assert
      .dom('#test-app-side-nav')
      .hasClass('kds-app-side-nav--is-not-minimized');
    assert
      .dom('.kds-app-side-nav__toggle-button')
      .hasAttribute('aria-expanded', 'true');
    assert
      .dom('.kds-app-side-nav__toggle-button .kds-icon')
      .hasClass('kds-icon-chevrons-left');
    assert
      .dom('.kds-app-side-nav-hide-when-minimized')
      .doesNotHaveAttribute('inert');
    assert.dom('#test-app-side-nav-body').doesNotHaveAttribute('inert');

    await click('.kds-app-side-nav__toggle-button');

    assert.dom('#test-app-side-nav').hasClass('kds-app-side-nav--is-minimized');
    assert
      .dom('.kds-app-side-nav__toggle-button')
      .hasAttribute('aria-expanded', 'false');
    assert
      .dom('.kds-app-side-nav__toggle-button .kds-icon')
      .hasClass('kds-icon-chevrons-right');
    assert.dom('.kds-app-side-nav-hide-when-minimized').hasAttribute('inert');
    assert.dom('#test-app-side-nav-body').doesNotHaveAttribute('inert');
  });

  skip('when the viewport changes from desktop to mobile, it automatically collapses and becomes inert', async function (assert) {
    this.mockMedia();

    let calls = [];
    this.setProperties({
      onDesktopViewportChange: (...args) => calls.push(args),
    });

    await render(kbs`
      <Kds::AppSideNav @isCollapsible={{true}} @onDesktopViewportChange={{this.onDesktopViewportChange}}>
        <span id="test-app-side-nav-body" />
        <span class="kds-app-side-nav-hide-when-minimized" />
      </Kds::AppSideNav>
    `);

    assert.strictEqual(calls.length, 1, 'called with initial viewport');

    await this.changeBrowserSize(false);
    assert.deepEqual(
      calls[1],
      [false],
      'resizing to mobile triggers a false event'
    );

    assert.dom('.kds-app-side-nav-hide-when-minimized').hasAttribute('inert');
  });

  skip('when collapsed and the viewport changes from mobile to desktop, it automatically expands and is no longer inert', async function (assert) {
    this.mockMedia();

    let calls = [];
    this.setProperties({
      onDesktopViewportChange: (...args) => calls.push(args),
    });

    await render(kbs`
      <Kds::AppSideNav @isCollapsible={{true}} @onDesktopViewportChange={{this.onDesktopViewportChange}}>
        <span id="test-app-side-nav-body" />
        <span class="kds-app-side-nav-hide-when-minimized" />
      </Kds::AppSideNav>
    `);

    await click('.kds-app-side-nav__toggle-button');
    assert.dom('.kds-app-side-nav-hide-when-minimized').hasAttribute('inert');

    await this.changeBrowserSize(false);
    assert.deepEqual(
      calls[1],
      [false],
      'resizing to mobile triggers a false event'
    );
    assert.dom('.kds-app-side-nav-hide-when-minimized').hasAttribute('inert');

    await this.changeBrowserSize(true);
    assert.deepEqual(
      calls[2],
      [true],
      'resizing to desktop triggers a true event'
    );
    assert
      .dom('.kds-app-side-nav-hide-when-minimized')
      .doesNotHaveAttribute('inert');
  });

  // CALLBACKS

  skip('it should call `onToggleMinimizedStatus` function if provided', async function (assert) {
    let toggled = false;
    this.set('onToggleMinimizedStatus', () => (toggled = true));
    await render(
      kbs`<Kds::AppSideNav @isCollapsible={{true}} @onToggleMinimizedStatus={{this.onToggleMinimizedStatus}} />`
    );
    await click('.kds-app-side-nav__toggle-button');
    assert.ok(toggled);
  });
});
