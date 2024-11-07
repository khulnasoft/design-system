/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import {
  SIZES as BADGE_SIZES,
  TYPES as BADGE_TYPES,
  COLORS as BADGE_COLORS,
} from '@khulnasoft/design-system-components/components/kds/badge';

export default class ComponentsBadgeRoute extends Route {
  model() {
    return {
      BADGE_SIZES,
      BADGE_TYPES,
      BADGE_COLORS,
    };
  }
}
