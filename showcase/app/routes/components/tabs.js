/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { SIZES } from '@khulnasoft/design-system-components/components/kds/tabs';

export default class ComponentsTabsRoute extends Route {
  model() {
    return {
      SIZES,
    };
  }
}
