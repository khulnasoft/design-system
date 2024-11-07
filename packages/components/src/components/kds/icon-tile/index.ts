/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import {
  KdsIconTileColorNeutral,
  KdsIconTileProductValues,
  KdsIconTileSizeValues,
} from './types.ts';

import type {
  KdsIconTileColors,
  KdsIconTileProducts,
  KdsIconTileSizes,
} from './types.ts';

import type { KdsIconSignature } from '../icon';

export const DEFAULT_SIZE = 'medium';
export const DEFAULT_COLOR = 'neutral';
export const SIZES: string[] = Object.values(KdsIconTileSizeValues);
export const COLORS: string[] = Object.values({
  ...KdsIconTileColorNeutral,
  ...KdsIconTileProductValues,
});
export const PRODUCTS: string[] = Object.values(KdsIconTileProductValues);

export interface KdsIconTileSignature {
  Args: {
    size?: KdsIconTileSizes;
    color?: KdsIconTileColors;
    logo?: KdsIconTileProducts;
    icon?: KdsIconSignature['Args']['name'];
    iconSecondary?: KdsIconSignature['Args']['name'];
  };
  Element: HTMLDivElement;
}

export default class KdsIconTile extends Component<KdsIconTileSignature> {
  get size(): KdsIconTileSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Kds::IconTile" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  get color(): string {
    let { color = DEFAULT_COLOR } = this.args;

    // if it's a "logo" then we overwrite any @color parameter passed
    // and just use the product "brand" color
    if (this.logo) {
      color = this.logo;
    }

    assert(
      `@color for "Kds::IconTile" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  get icon(): KdsIconSignature['Args']['name'] | undefined {
    if (this.args.logo) {
      // for the logo version we use the colored versions directly
      return `${this.args.logo}-color`;
    } else if (this.args.icon) {
      return this.args.icon;
    } else {
      return undefined;
    }
  }

  get iconSize(): KdsIconSignature['Args']['size'] {
    if (this.args.size === 'small') {
      return '16';
    } else {
      return '24';
    }
  }

  get iconWrapperClass(): string | undefined {
    if (this.args.logo !== undefined) {
      return 'kds-icon-tile__logo';
    }

    if (this.args.icon !== undefined) {
      return 'kds-icon-tile__icon';
    }
  }

  get logo(): KdsIconTileProducts | null {
    const { logo } = this.args;

    if (logo) {
      assert(
        `@logo for "Kds::IconTile" must be one of the following: ${PRODUCTS.join(
          ', '
        )}; received: ${logo}`,
        PRODUCTS.includes(logo)
      );
    }

    return logo ?? null;
  }

  get entity(): string | undefined {
    let entity;

    assert(
      `you can't pass both @logo and @icon properties to the "Kds::IconTile" component`,
      !(this.args.logo && this.args.icon)
    );

    assert(
      `you need to pass @logo or @icon to the "Kds::IconTile" component`,
      !(this.args.logo === undefined && this.args.icon === undefined)
    );

    if (this.args.logo) {
      entity = 'logo';
    }
    if (this.args.icon) {
      entity = 'icon';
    }

    return entity;
  }

  get iconSecondary(): KdsIconSignature['Args']['name'] | undefined {
    return this.args.iconSecondary;
  }

  // kds-icon-tile {{this.entityClass}} {{this.sizeClass}} {{this.colorClass}}"
  get classNames(): string {
    const classes = ['kds-icon-tile'];

    // add a class based on its entity argument
    classes.push(`kds-icon-tile--${this.entity}`);

    // add a class based on the @size argument
    classes.push(`kds-icon-tile--size-${this.size}`);

    // add a class based on the @color argument
    classes.push(`kds-icon-tile--color-${this.color}`);

    return classes.join(' ');
  }
}
