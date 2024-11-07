/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import {
  TYPES,
  COLORS,
} from '@khulnasoft/design-system-components/components/kds/alert';

export default class ComponentsAlertRoute extends Route {
  model() {
    return {
      TYPES,
      COLORS,
    };
  }
}
