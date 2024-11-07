/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/page-header/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(
      kbs`<Kds::PageHeader id="test-page-header" as |PH|>
            <PH.Title>Page title</PH.Title>
          </Kds::PageHeader>`
    );
    assert.dom('#test-page-header').hasClass('kds-page-header');
  });

  // CONTEXTUAL COMPONENTS

  test('it should render contextual components', async function (assert) {
    await render(
      kbs`<Kds::PageHeader id="test-page-header" as |PH|>
            <PH.Title>Page title</PH.Title>
            <PH.Breadcrumb>
              <Kds::Breadcrumb>
                <Kds::Breadcrumb::Item @text="Breadcrumb" />
              </Kds::Breadcrumb>
            </PH.Breadcrumb>
            <PH.IconTile @icon="server-cluster" />
            <PH.Actions>Actions</PH.Actions>
            <PH.Subtitle>Subtitle</PH.Subtitle>
            <PH.Description>Description</PH.Description>
            <PH.Generic><p class="custom">Generic</p></PH.Generic>
          </Kds::PageHeader>`
    );
    assert.dom('.kds-page-header').exists();
    assert.dom('.kds-page-header__title').exists();
    assert.dom('.kds-page-header__title').hasText('Page title');
    assert.dom('.kds-breadcrumb').exists();
    assert.dom('.kds-icon-tile').exists();
    assert.dom('.kds-page-header__actions').exists();
    assert.dom('.kds-page-header__actions').hasText('Actions');
    assert.dom('.kds-page-header__subtitle').exists();
    assert.dom('.kds-page-header__subtitle').hasText('Subtitle');
    assert.dom('.kds-page-header__description').exists();
    assert.dom('.kds-page-header__description').hasText('Description');
    assert.dom('.custom').exists();
    assert.dom('.custom').hasText('Generic');
  });
  test('it should not render the contextual components if not provided', async function (assert) {
    await render(kbs`<Kds::PageHeader />`);
    assert.dom('.kds-breadcrumb').doesNotExist();
    assert.dom('.kds-page-header__title').doesNotExist();
    assert.dom('.kds-page-header__actions').doesNotExist();
    assert.dom('.kds-page-header__subtitle').doesNotExist();
    assert.dom('.kds-page-header__description').doesNotExist();
    assert.dom('.kds-icon-tile').doesNotExist();
  });
});
