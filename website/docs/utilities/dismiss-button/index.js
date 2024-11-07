/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Index extends Component {
  @action
  onClickDismissButton() {
    console.log('`Kds::DismissButton` clicked');
  }
}
