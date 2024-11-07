/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

// the "Toast" is built on top of the "Alert" so it shares the same colors
import { COLORS } from '@khulnasoft/design-system-components/components/kds/alert';

export default class ComponentsToastRoute extends Route {
  model() {
    return {
      COLORS,
    };
  }
}
