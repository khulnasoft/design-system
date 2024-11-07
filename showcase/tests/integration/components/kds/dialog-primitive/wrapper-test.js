/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, resetOnerror } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | kds/dialog-primitive/wrapper',
  function (hooks) {
    setupRenderingTest(hooks);

    hooks.afterEach(() => {
      resetOnerror();
    });

    test('it should render the component with a CSS class that matches the component name, and its sub', async function (assert) {
      await render(
        kbs`
        <Kds::DialogPrimitive::Wrapper id="test-dialog-primitive">
          <:header>Header</:header>
          <:body>Body</:body>
          <:footer>Footer</:footer>
        </Kds::DialogPrimitive::Wrapper>
      `
      );
      assert
        .dom('#test-dialog-primitive')
        .hasClass('kds-dialog-primitive__wrapper');
    });

    // CONTEXTUAL COMPONENTS

    test('it renders the content slots and the contextual components', async function (assert) {
      await render(
        kbs`
        <Kds::DialogPrimitive::Wrapper id="test-dialog-primitive">
          <:header>
            <Kds::DialogPrimitive::Header>Title</Kds::DialogPrimitive::Header>
            <Kds::DialogPrimitive::Description>Description</Kds::DialogPrimitive::Description>
          </:header>
          <:body>
            <Kds::DialogPrimitive::Body>Body</Kds::DialogPrimitive::Body>
          </:body>
          <:footer>
            <Kds::DialogPrimitive::Footer>Footer</Kds::DialogPrimitive::Footer>
          </:footer>
        </Kds::DialogPrimitive::Wrapper>
      `
      );
      assert.dom('.kds-dialog-primitive__wrapper-header').exists();
      assert.dom('.kds-dialog-primitive__wrapper-body').exists();
      assert.dom('.kds-dialog-primitive__wrapper-footer').exists();
      assert.dom('.kds-dialog-primitive__header').exists().hasText('Title');
      assert
        .dom('.kds-dialog-primitive__description')
        .exists()
        .hasText('Description');
      assert.dom('.kds-dialog-primitive__body').exists().hasText('Body');
      assert.dom('.kds-dialog-primitive__footer').exists().hasText('Footer');
    });
  }
);
