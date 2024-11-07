/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import { ALIGNS } from '@khulnasoft/design-system-components/components/kds/application-state';

export default class ComponentsApplicationStateRoute extends Route {
  model() {
    return {
      ALIGNS,
    };
  }
}
