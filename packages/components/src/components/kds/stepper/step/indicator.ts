/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import { KdsStepperStatusesValues } from '../types.ts';
import type { KdsStepperStatuses } from '../types.ts';

export const DEFAULT_STATUS = KdsStepperStatusesValues.Incomplete;
export const STATUSES: string[] = Object.values(KdsStepperStatusesValues);

export interface KdsStepperStepIndicatorSignature {
  Args: {
    status?: KdsStepperStatuses;
    isInteractive?: boolean;
    text?: string;
  };
  Element: HTMLDivElement;
}

export default class KdsStepperStepIndicator extends Component<KdsStepperStepIndicatorSignature> {
  /**
   * @param status
   * @type {string}
   * @default "incomplete"
   */

  get status(): KdsStepperStatuses {
    const { status = DEFAULT_STATUS } = this.args;

    assert(
      `@status for "Kds::Stepper::Step::Indicator" must be one of the following: ${STATUSES.join(
        ', '
      )}; received: ${status}`,
      STATUSES.includes(status)
    );

    return status;
  }

  /**
   * @param isInteractive
   * @type {boolean}
   * @default false
   */

  get isInteractive(): boolean {
    return this.args.isInteractive || false;
  }

  /**
   * Get the class names to apply to the component.
   * @method IndicatorStep#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-stepper-indicator-step'];

    // Based on the @status arg
    classes.push(`kds-stepper-indicator-step--status-${this.status}`);

    if (this.isInteractive) {
      classes.push(`kds-stepper-indicator-step--is-interactive`);
    }

    return classes.join(' ');
  }
}
