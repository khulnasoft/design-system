/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import {
  KdsStepperStatusesValues,
  KdsStepperStatusToIconsValues,
} from '../types.ts';
import type { KdsIconSignature } from '../../icon';
import type { KdsStepperStatuses } from '../types.ts';

export const DEFAULT_STATUS = KdsStepperStatusesValues.Incomplete;
export const STATUSES: string[] = Object.values(KdsStepperStatusesValues);

export const MAPPING_STATUS_TO_ICONS = KdsStepperStatusToIconsValues;

export interface KdsStepperTaskIndicatorSignature {
  Args: {
    status?: KdsStepperStatuses;
    isInteractive?: boolean;
  };
  Element: HTMLDivElement;
}

export default class KdsStepperTaskIndicator extends Component<KdsStepperTaskIndicatorSignature> {
  /**
   * @param status
   * @type {string}
   * @default "incomplete"
   */

  get status(): KdsStepperStatuses {
    const { status = DEFAULT_STATUS } = this.args;

    assert(
      `@status for "Kds::Stepper::Task::Indicator" must be one of the following: ${STATUSES.join(
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
   * @param iconName
   * @type {string}
   */

  get iconName(): KdsIconSignature['Args']['name'] {
    return MAPPING_STATUS_TO_ICONS[this.status];
  }

  /**
   * Get the class names to apply to the component.
   * @method IndicatorTask#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-stepper-indicator-task'];

    // Based on the @status arg
    classes.push(`kds-stepper-indicator-task--status-${this.status}`);

    if (this.isInteractive) {
      classes.push(`kds-stepper-indicator-task--is-interactive`);
    }

    return classes.join(' ');
  }
}
