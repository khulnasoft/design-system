/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

// NOTICE: we combine the tests for `PortalTarget` and `Portal` in a single file, because the two components are strictly interconnected

module('Integration | Component | kds/app-side-nav/portal', function (hooks) {
  setupRenderingTest(hooks);

  skip('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::AppSideNav::Portal::Target id="test-app-side-nav-portal-target" />`
    );
    assert
      .dom('#test-app-side-nav-portal-target')
      .hasClass('kds-app-side-nav__content');
  });

  // CONTENT

  skip('it renders the content provided via portal', async function (assert) {
    await render(kbs`
      <Kds::AppSideNav::Portal::Target />
      <Kds::AppSideNav::Portal>
        <div id="test-app-side-nav-content-portaled" />
      </Kds::AppSideNav::Portal>
    `);
    assert.dom('#test-app-side-nav-content-portaled').exists();
  });

  skip('we can use custom a custom name for the target portal', async function (assert) {
    await render(kbs`
      <Kds::AppSideNav::Portal::Target @targetName="test-app-side-nav-portal-target" />
      <Kds::AppSideNav::Portal @targetName="test-app-side-nav-portal-target">
        <div id="test-app-side-nav-content-portaled" />
      </Kds::AppSideNav::Portal>
    `);
    assert.dom('#test-app-side-nav-content-portaled').exists();
  });

  skip('it renders the panel items provided via portal, in the right DOM location', async function (assert) {
    await render(kbs`
      <Kds::AppSideNav::Portal::Target id="test-app-side-nav-content" />
      <Kds::AppSideNav::Portal as |Nav|>
        <Nav.BackLink @text="Back-link" @href="#" id="test-app-side-nav-list-backlink" />
        <Nav.Title id="test-app-side-nav-list-title">Title</Nav.Title>
        <Nav.Item id="test-app-side-nav-list-item">Item</Nav.Item>
        <Nav.Link @icon="hexagon" @text="Link" @href="#" id="test-app-side-nav-list-link" />
      </Kds::AppSideNav::Portal>
    `);
    assert
      .dom(
        '#test-app-side-nav-content .kds-app-side-nav__content-panels .kds-app-side-nav__content-panel'
      )
      .exists();
    assert
      .dom('#test-app-side-nav-list-backlink')
      .hasClass('kds-app-side-nav__list-item-link--back-link');
    assert.dom('#test-app-side-nav-list-backlink').hasText('Back-link');
    assert
      .dom('#test-app-side-nav-list-title')
      .hasClass('kds-app-side-nav__list-title');
    assert.dom('#test-app-side-nav-list-title').hasText('Title');
    assert
      .dom('#test-app-side-nav-list-item')
      .hasClass('kds-app-side-nav__list-item');
    assert.dom('#test-app-side-nav-list-item').hasText('Item');
    assert
      .dom('#test-app-side-nav-list-link')
      .hasClass('kds-app-side-nav__list-item-link');
    assert.dom('#test-app-side-nav-list-link').hasText('Link');
  });

  // A11Y

  skip('it should render with the correct aria-label attribute passed down to the "list" parent', async function (assert) {
    await render(kbs`
      <Kds::AppSideNav::Portal::Target />
      <Kds::AppSideNav::Portal @ariaLabel="test">
        <div/>
      </Kds::AppSideNav::Portal>
    `);
    assert
      .dom('.kds-app-side-nav__list-wrapper')
      .hasAttribute('aria-label', 'test');
  });

  // DOM MANIPULATION

  skip('it marks inactive subnavs', async function (assert) {
    await render(kbs`
      <Kds::AppSideNav::Portal::Target />
      <Kds::AppSideNav::Portal data-test-app-side-nav-panel as |Nav|>
        <Nav.Link @text="Some link content" @href="#" />
      </Kds::AppSideNav::Portal>
      <Kds::AppSideNav::Portal data-test-app-side-nav-panel as |Nav|>
        <Nav.Link @text="Some other link content" @href="#" />
      </Kds::AppSideNav::Portal>
      <Kds::AppSideNav::Portal data-test-app-side-nav-panel as |Nav|>
        <Nav.Link @text="The last link content" @href="#" />
      </Kds::AppSideNav::Portal>
    `);

    assert.dom('[data-test-app-side-nav-panel]').exists({ count: 3 });
    assert
      .dom('[data-test-app-side-nav-panel]:nth-child(1)')
      .hasStyle({ visibility: 'hidden' });
    assert
      .dom('[data-test-app-side-nav-panel]:nth-child(2)')
      .hasStyle({ visibility: 'hidden' });
    assert
      .dom('[data-test-app-side-nav-panel]:nth-child(3)')
      .hasStyle({ visibility: 'visible' });
  });

  skip('it sets transform on the container', async function (assert) {
    await render(kbs`
      <Kds::AppSideNav::Portal::Target id="test-app-side-nav-content" />
      <Kds::AppSideNav::Portal as |Nav|>
        <Nav.Link @text="Some link content" @href="#" id="test-app-side-nav-list-link-1" data-test-app-side-nav-link-2 />
      </Kds::AppSideNav::Portal>
      <Kds::AppSideNav::Portal as |Nav|>
        <Nav.Link @text="Some other link content" @href="#" id="test-app-side-nav-list-link-2" data-test-app-side-nav-link-2 />
      </Kds::AppSideNav::Portal>
      <Kds::AppSideNav::Portal as |Nav|>
        <Nav.Link @text="The last link content" @href="#" id="test-app-side-nav-list-link-3" data-test-app-side-nav-link-3 />
      </Kds::AppSideNav::Portal>
    `);

    //   // we need to wait for
    let animationDone = false;
    await waitUntil(function () {
      setTimeout(() => {
        animationDone = true;
      }, 1000);
      return animationDone;
    });

    // element.animate() API, converts transforms into matricies so
    // 'matrix(1, 0, 0, 1, -560, 0)' is the same as translateX('-560px')
    assert
      .dom('.kds-app-side-nav__content-panels')
      .hasStyle({ transform: 'matrix(1, 0, 0, 1, -560, 0)' });
  });
});
