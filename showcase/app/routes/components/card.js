/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';

import {
  DEFAULT_LEVEL as CONTAINER_DEFAULT_LEVEL,
  AVAILABLE_LEVELS as CONTAINER_LEVELS,
  AVAILABLE_BACKGROUNDS as CONTAINER_BACKGROUNDS,
} from '@khulnasoft/design-system-components/components/kds/card/container';
export default class ComponentsCardRoute extends Route {
  model() {
    return {
      CONTAINER_DEFAULT_LEVEL,
      CONTAINER_LEVELS,
      CONTAINER_BACKGROUNDS,
    };
  }
}
