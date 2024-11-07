/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { SIZES } from '@khulnasoft/design-system-components/components/kds/accordion/item';
import { TYPES } from '@khulnasoft/design-system-components/components/kds/accordion/item';

export default class ComponentsAccordionRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const STATES = ['default', 'hover', 'focus', 'active'];
    return { SIZES, TYPES, STATES };
  }
}
