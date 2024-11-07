/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import {
  SIZES as BADGE_COUNT_SIZES,
  TYPES as BADGE_COUNT_TYPES,
  COLORS as BADGE_COUNT_COLORS,
} from '@khulnasoft/design-system-components/components/kds/badge-count';

export default class ComponentsBadgeCountRoute extends Route {
  model() {
    return {
      BADGE_COUNT_SIZES,
      BADGE_COUNT_TYPES,
      BADGE_COUNT_COLORS,
    };
  }
}
