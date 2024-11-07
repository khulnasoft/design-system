/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import {
  SIZES,
  COLORS,
  PRODUCTS,
} from '@khulnasoft/design-system-components/components/kds/icon-tile';

export default class ComponentsIconTileRoute extends Route {
  model() {
    return {
      SIZES,
      COLORS,
      PRODUCTS,
    };
  }
}
