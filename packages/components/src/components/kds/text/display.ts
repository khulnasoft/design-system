/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { KdsTextSizeValues, KdsTextWeightValues } from './types.ts';
import type {
  KdsTextAligns,
  KdsTextColors,
  KdsTextSizes,
  KdsTextTags,
  KdsTextWeights,
} from './types.ts';

// notice: only some combinations of size + font-weight are allowed (per design specs)
// see: https://www.figma.com/file/oQsMzMMnynfPWpMEt91OpH/KDS-Product---Foundations?node-id=1262%3A9192

export const DEFAULT_SIZE = KdsTextSizeValues.TwoHundred;

// Filter out reverse mappings from enum
// https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings
export const AVAILABLE_SIZES = Object.values(KdsTextSizeValues).filter(
  (v): boolean => typeof v === 'number'
);

export type KdsTextDisplayWeight = Extract<
  KdsTextWeights,
  'medium' | 'semibold' | 'bold'
>;
export const DEFAULT_WEIGHTS_PER_SIZE: Record<
  KdsTextSizeValues,
  KdsTextDisplayWeight
> = {
  [KdsTextSizeValues.FiveHundred]: KdsTextWeightValues.Bold,
  [KdsTextSizeValues.FourHundred]: KdsTextWeightValues.Semibold,
  [KdsTextSizeValues.ThreeHundred]: KdsTextWeightValues.Semibold,
  [KdsTextSizeValues.TwoHundred]: KdsTextWeightValues.Semibold,
  [KdsTextSizeValues.OneHundred]: KdsTextWeightValues.Medium,
};
export const AVAILABLE_WEIGHTS_PER_SIZE: Record<
  KdsTextSizes,
  KdsTextDisplayWeight[]
> = {
  [KdsTextSizeValues.FiveHundred]: [KdsTextWeightValues.Bold],
  [KdsTextSizeValues.FourHundred]: [
    KdsTextWeightValues.Medium,
    KdsTextWeightValues.Semibold,
    KdsTextWeightValues.Bold,
  ],
  [KdsTextSizeValues.ThreeHundred]: [
    KdsTextWeightValues.Medium,
    KdsTextWeightValues.Semibold,
    KdsTextWeightValues.Bold,
  ],
  [KdsTextSizeValues.TwoHundred]: [KdsTextWeightValues.Semibold],
  [KdsTextSizeValues.OneHundred]: [KdsTextWeightValues.Medium],
};

export interface KdsTextDisplaySignature {
  Args: {
    size?: KdsTextSizes;
    tag?: KdsTextTags;
    weight?: KdsTextDisplayWeight;
    align?: KdsTextAligns;
    color?: string | KdsTextColors;
  };
  Element:
    | HTMLSpanElement
    | HTMLHeadingElement
    | HTMLParagraphElement
    | HTMLDivElement;
  Blocks: {
    default: [];
  };
}

export default class KdsTextDisplay extends Component<KdsTextDisplaySignature> {
  /**
   * Sets the "size" for the text
   * Accepted values: see AVAILABLE_SIZES
   *
   * @type {KdsTextSizes}
   *
   * @param size
   */
  get size(): KdsTextSizes {
    let { size = DEFAULT_SIZE } = this.args;

    // let's be a bit forgiving with the consumers
    if (typeof size === 'string') {
      size = parseInt(size, 10);
    }

    assert(
      `@size for "Kds::Text::Display" must be one of the following: ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      AVAILABLE_SIZES.includes(size)
    );

    return size;
  }

  /**
   * Sets the "weight" for the text
   * Accepted values: see AVAILABLE_WEIGHTS_PER_SIZE
   *
   * @type {KdsTextDisplayWeight}
   *
   * @param variant
   */
  get weight(): KdsTextDisplayWeight {
    let { weight } = this.args;

    if (weight) {
      const availableWeights = AVAILABLE_WEIGHTS_PER_SIZE[this.size];
      assert(
        `@weight for "Kds::Text::Display" with @size=${
          this.size
        } must be one of the following: ${availableWeights.join(
          ', '
        )}; received: ${weight}`,
        availableWeights.includes(weight)
      );
    } else {
      // use the default (first item in the array)
      weight = DEFAULT_WEIGHTS_PER_SIZE[this.size];
    }

    return weight;
  }
}
