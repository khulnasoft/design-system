/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { AVAILABLE_COLORS } from '@khulnasoft/design-system-components/components/kds/icon/index';

export default class IconRoute extends Route {
  model() {
    return {
      AVAILABLE_COLORS,
    };
  }
}
