/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Index extends Component {
  // notice: this is used as "noop" function for the onDismiss callback of the PowerSelect component
  @action
  noop() {
    //
  }
}
