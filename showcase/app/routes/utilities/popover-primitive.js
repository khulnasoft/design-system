/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { PLACEMENTS } from '@khulnasoft/design-system-components/modifiers/kds-anchored-position';

export default class ComponentsPopoverRoute extends Route {
  model() {
    return { PLACEMENTS };
  }
}
