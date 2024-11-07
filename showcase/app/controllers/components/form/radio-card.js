/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class FormRadioCardController extends Controller {
  @action
  onChange(event) {
    const control = event.target;
    const group = control.closest('.kds-form-group__control-fields-wrapper');
    group.querySelectorAll('.kds-form-radio-card').forEach((radioCard) => {
      radioCard.classList.remove('kds-form-radio-card--checked');
    });
    control
      .closest('.kds-form-radio-card')
      .classList.add('kds-form-radio-card--checked');
  }
}
