/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';
import { guidFor } from '@ember/object/internals';
import { tracked } from '@glimmer/tracking';

import { KdsAlertColorValues, KdsAlertTypeValues } from './types.ts';

import type { ComponentLike, WithBoundArgs } from '@glint/template';
import type KdsButtonComponent from '../button';
import type KdsLinkStandaloneComponent from '../link/standalone';
import type { KdsYieldSignature } from '../yield';
import type { KdsAlertColors, KdsAlertTypes } from './types.ts';
import type { KdsAlertTitleSignature } from './title.ts';
import type { KdsAlertDescriptionSignature } from './description.ts';
import type { KdsIconSignature } from '../icon';

export const TYPES: string[] = Object.values(KdsAlertTypeValues);
export const DEFAULT_COLOR = KdsAlertColorValues.Neutral;
export const COLORS: string[] = Object.values(KdsAlertColorValues);

export const MAPPING_COLORS_TO_ICONS = {
  [KdsAlertColorValues.Neutral]: 'info',
  [KdsAlertColorValues.Highlight]: 'info',
  [KdsAlertColorValues.Success]: 'check-circle',
  [KdsAlertColorValues.Warning]: 'alert-triangle',
  [KdsAlertColorValues.Critical]: 'alert-diamond',
} as const;

const CONTENT_ELEMENT_SELECTOR = '.kds-alert__content';
const TITLE_ELEMENT_SELECTOR = '.kds-alert__title';
const DESCRIPTION_ELEMENT_SELECTOR = '.kds-alert__description';

export interface KdsAlertSignature {
  Args: {
    type: KdsAlertTypes;
    color?: KdsAlertColors;
    icon?: KdsIconSignature['Args']['name'] | false;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDismiss?: (event: MouseEvent, ...args: any[]) => void;
  };
  Blocks: {
    default: [
      {
        Title?: ComponentLike<KdsAlertTitleSignature>;
        Description?: ComponentLike<KdsAlertDescriptionSignature>;
        Generic?: ComponentLike<KdsYieldSignature>;
        LinkStandalone?: WithBoundArgs<
          typeof KdsLinkStandaloneComponent,
          'size'
        >;
        Button?: WithBoundArgs<typeof KdsButtonComponent, 'size'>;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class KdsAlert extends Component<KdsAlertSignature> {
  @tracked role?: string;
  @tracked ariaLabelledBy?: string;

  constructor(owner: unknown, args: KdsAlertSignature['Args']) {
    super(owner, args);

    assert(
      `@type for "Kds::Alert" must be one of the following: ${TYPES.join(
        ', '
      )}; received: ${this.args.type}`,
      TYPES.includes(this.args.type)
    );
  }

  // Determines the color scheme for the alert.
  get color(): KdsAlertColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::Alert" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  // The name of the icon to be used.
  get icon(): KdsIconSignature['Args']['name'] | false {
    const { icon } = this.args;

    // If `icon` isn't passed, use the pre-defined one from `color`
    if (icon === undefined) {
      if (this.args.type === 'compact') {
        // for the "compact" type by default we use filled icons
        return `${MAPPING_COLORS_TO_ICONS[this.color]}-fill`;
      } else {
        // for all the other types by default we use outlined icons
        return MAPPING_COLORS_TO_ICONS[this.color];
      }
      // If `icon` is set explicitly to false, user doesn't want any icon in the alert
    } else if (icon === false) {
      assert(
        `@icon for "Kds::Alert" with @type "compact" is required`,
        this.args.type !== 'compact'
      );

      return false;
    } else {
      // If a name for `icon` is passed, set KdsIcon to that name
      return icon;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get onDismiss(): ((event: MouseEvent, ...args: any[]) => void) | false {
    const { onDismiss } = this.args;

    if (typeof onDismiss === 'function') {
      return onDismiss;
    } else {
      return false;
    }
  }

  // Ensures that the correct icon size is used. Automatically calculated.
  get iconSize(): KdsIconSignature['Args']['size'] {
    if (this.args.type === 'compact') {
      return '16';
    } else {
      return '24';
    }
  }

  get classNames(): string {
    const classes = ['kds-alert'];

    // Add a class based on the @type argument
    classes.push(`kds-alert--type-${this.args.type}`);

    // Add a class based on the @color argument
    classes.push(`kds-alert--color-${this.color}`);

    return classes.join(' ');
  }

  @action
  didInsert(element: HTMLDivElement): void {
    const actions = element.querySelectorAll(
      `${CONTENT_ELEMENT_SELECTOR} button, ${CONTENT_ELEMENT_SELECTOR} a`
    );

    // an Alert which actually alerts users (has role="alert" & aria-live="polite") as opposed to an informational or promo "alert"
    const isSemanticAlert: boolean =
      this.color === 'warning' ||
      this.color === 'critical' ||
      this.color === 'success';

    if (isSemanticAlert && actions.length) {
      this.role = 'alertdialog';
    } else if (isSemanticAlert) {
      this.role = 'alert';
    }

    // `alertdialog` must have an accessible name so we use either the
    // title or the description as label for the alert
    const label =
      element.querySelector(TITLE_ELEMENT_SELECTOR) ||
      element.querySelector(DESCRIPTION_ELEMENT_SELECTOR);
    if (label) {
      const labelId = label.getAttribute('id') || guidFor(element);
      label.setAttribute('id', labelId);
      this.ariaLabelledBy = labelId;
    }
  }
}
