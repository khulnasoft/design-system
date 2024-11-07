/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { assert } from '@ember/debug';
import { iconNames } from '@khulnasoft/flight-icons/svg';
import { KdsIconSizeValues, KdsIconColorValues } from './types.ts';
import type { KdsIconSizes, KdsIconColors } from './types';
import type { IconName } from '@khulnasoft/flight-icons/svg';

export const AVAILABLE_COLORS: string[] = Object.values(KdsIconColorValues);

export interface KdsIconSignature {
  Args: {
    name: IconName;
    color?: KdsIconColors | string | undefined;
    size?: KdsIconSizes;
    stretched?: boolean;
    isInline?: boolean;
    title?: string;
  };
  Element: SVGElement;
}

export default class KdsIcon extends Component<KdsIconSignature> {
  iconId = 'icon-' + guidFor(this);
  titleId = 'title-' + guidFor(this);

  constructor(owner: unknown, args: KdsIconSignature['Args']) {
    super(owner, args);

    if (!this.args.name) {
      assert('Please provide to <Kds::Icon> a value for @name');
    } else if (!iconNames.includes(this.args.name)) {
      assert(
        `The icon @name "${this.args.name}" provided to <Kds::Icon> is not correct. Please verify it exists on https://design.khulnasoft.com/icons/library`
      );
    }
  }

  get isInline(): boolean {
    return this.args.isInline ?? false;
  }

  get predefinedColor(): KdsIconColors | undefined {
    const { color } = this.args;

    if (color && AVAILABLE_COLORS.includes(color)) {
      return color as KdsIconColors;
    } else {
      return undefined;
    }
  }

  get fillColor(): string {
    if (this.predefinedColor !== undefined) {
      return 'currentColor';
    } else {
      return this.args.color ?? 'currentColor';
    }
  }

  get size(): string {
    return this.args.size ?? KdsIconSizeValues.Sixteen;
  }

  get svgSize(): { width: string; height: string } {
    return {
      width: this.args.stretched ? '100%' : this.size,
      height: this.args.stretched ? '100%' : this.size,
    };
  }

  get title(): string | null {
    return this.args.title ?? null;
  }

  get role(): string | null {
    return this.args.title ? 'img' : null;
  }

  get ariaLabelledby(): string | null {
    return this.args.title ? this.titleId : null;
  }

  get classNames() {
    const { name } = this.args;
    const classes = ['kds-icon'];

    // add a class based on the @name argument
    classes.push(`kds-icon-${name}`);

    if (this.isInline) {
      classes.push('kds-icon--is-inline');
    }

    // add a (helper) class based on the @color argument (if pre-defined)
    if (this.predefinedColor) {
      classes.push(`kds-foreground-${this.predefinedColor}`);
    }

    // add an extra class to control the animation (depends on the icon)
    if (['loading', 'running'].includes(name)) {
      classes.push(`kds-icon--animation-${name}`);
    }

    return classes.join(' ');
  }
}
