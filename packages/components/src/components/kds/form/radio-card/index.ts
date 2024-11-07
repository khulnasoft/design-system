/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import {
  KdsFormRadioCardControlPositionValues,
  KdsFormRadioCardAlignmentValues,
} from './types.ts';

import type { ComponentLike } from '@glint/template';
import type { KdsIconSignature } from '../../icon';
import type { KdsBadgeSignature } from '../../badge';
import type { KdsFormRadioBaseSignature } from '../radio/base';
import type { KdsFormRadioCardDescriptionSignature } from './description';
import type { KdsFormRadioCardLabelSignature } from './label';
import type { KdsYieldSignature } from '../../yield';
import type {
  KdsFormRadioCardControlPositions,
  KdsFormRadioCardAlignments,
} from './types';

export const DEFAULT_CONTROL_POSITION =
  KdsFormRadioCardControlPositionValues.Bottom;
export const DEFAULT_ALIGNMENT = KdsFormRadioCardAlignmentValues.Left;
export const CONTROL_POSITIONS: string[] = Object.values(
  KdsFormRadioCardControlPositionValues
);
export const ALIGNMENTS: string[] = Object.values(
  KdsFormRadioCardAlignmentValues
);

export interface KdsFormRadioCardSignature {
  Args: {
    name?: string;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    controlPosition?: KdsFormRadioCardControlPositions;
    alignment?: KdsFormRadioCardAlignments;
    maxWidth?: string;
    extraAriaDescribedBy?: string;
  };
  Blocks: {
    default: [
      {
        Icon?: ComponentLike<KdsIconSignature>;
        Label?: ComponentLike<KdsFormRadioCardLabelSignature>;
        Badge?: ComponentLike<KdsBadgeSignature>;
        Description?: ComponentLike<KdsFormRadioCardDescriptionSignature>;
        Generic?: ComponentLike<KdsYieldSignature>;
      },
    ];
  };
  Element: KdsFormRadioBaseSignature['Element'];
}

export default class KdsFormRadioCard extends Component<KdsFormRadioCardSignature> {
  /**
   * Sets the position of the control
   * Accepted values: buttom, left
   *
   * @param type
   * @type {string}
   * @default 'bottom'
   */
  get controlPosition(): KdsFormRadioCardControlPositions {
    const { controlPosition = DEFAULT_CONTROL_POSITION } = this.args;

    assert(
      `@controlPosition for "Kds::Form::RadioCard" must be one of the following: ${CONTROL_POSITIONS.join(
        ', '
      )}; received: ${controlPosition}`,
      CONTROL_POSITIONS.includes(controlPosition)
    );

    return controlPosition;
  }

  /**
   * Sets the alignment of the content
   * Accepted values: left, center
   *
   * @param alignnment
   * @type {string}
   * @default 'left'
   */
  get alignment(): KdsFormRadioCardAlignments {
    const { alignment = DEFAULT_ALIGNMENT } = this.args;

    assert(
      `@alignment for "Kds::Form::RadioCard" must be one of the following: ${ALIGNMENTS.join(
        ', '
      )}; received: ${alignment}`,
      ALIGNMENTS.includes(alignment)
    );

    return alignment;
  }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-form-radio-card'];

    if (this.args.checked) {
      classes.push('kds-form-radio-card--checked');
    }
    if (this.args.disabled) {
      classes.push('kds-form-radio-card--disabled');
    }
    if (this.args.maxWidth) {
      classes.push('kds-form-radio-card--has-fixed-width');
    } else {
      classes.push('kds-form-radio-card--has-fluid-width');
    }

    // add a class based on the @controlPosition argument
    classes.push(`kds-form-radio-card--control-${this.controlPosition}`);

    // add a class based on the @alignment argument
    classes.push(`kds-form-radio-card--align-${this.alignment}`);

    return classes.join(' ');
  }
}
