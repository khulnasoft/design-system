/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';
import {
  SUCCESS_ICON,
  ERROR_ICON,
} from '@khulnasoft/design-system-components/components/kds/copy/button';

export default class ComponentsCodeBlockRoute extends Route {
  model() {
    // these are used only for presentation purpose in the showcase
    const STATES = ['default', 'hover', 'active', 'focus'];
    return { STATES, SUCCESS_ICON, ERROR_ICON };
  }
}
