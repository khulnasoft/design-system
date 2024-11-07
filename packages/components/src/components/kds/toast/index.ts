/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import TemplateOnlyComponent from '@ember/component/template-only';
import type { KdsAlertSignature } from '../alert/';

export interface KdsToastSignature extends Omit<KdsAlertSignature, 'Args'> {
  Args: Omit<KdsAlertSignature['Args'], 'type'>;
}

const KdsToast = TemplateOnlyComponent<KdsToastSignature>();

export default KdsToast;
