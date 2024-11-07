/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { kbs } from 'ember-cli-htmlbars';

module('Integration | Component | kds/segmented-group/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it should render the component with a CSS class that matches the component name', async function (assert) {
    await render(kbs`<Kds::SegmentedGroup id="test-segmented-group" />`);
    assert.dom('#test-segmented-group').hasClass('kds-segmented-group');
  });

  // CONTEXTUAL COMPONENTS

  test('it renders the contextual components with CSS modifier classes', async function (assert) {
    await render(
      kbs`<Kds::SegmentedGroup as |SG|>
            <SG.Button id="segmented-button" @color="secondary" @text="Button" />
            <SG.Dropdown id="segmented-dropdown" as |DD|>
              <DD.ToggleButton @color="secondary" @text="Toggle" />
              <DD.Interactive @href="#" @text="Dropdown Item" />
            </SG.Dropdown>
            <SG.Select id="segmented-select"/>
            <SG.TextInput id="segmented-input" />
            <SG.Generic><span id="segmented-generic"></span></SG.Generic>
          </Kds::SegmentedGroup>`
    );
    assert.dom('#segmented-button').hasClass('kds-button');
    assert.dom('#segmented-dropdown').hasClass('kds-dropdown');
    assert.dom('#segmented-select').hasClass('kds-form-select');
    assert.dom('#segmented-input').hasClass('kds-form-text-input');
    assert.dom('#segmented-generic').exists();
  });
});
