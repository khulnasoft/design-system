/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { SIZES } from '@khulnasoft/design-system-components/components/kds/flyout';

export default class ComponentsFlyoutRoute extends Route {
  model() {
    return {
      SIZES,
    };
  }
}
