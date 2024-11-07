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
  KdsTextTags,
  KdsTextWeights,
} from './types.ts';

// notice: only some combinations of size + font-weight are allowed (per design specs)
// see: https://www.figma.com/file/oQsMzMMnynfPWpMEt91OpH/KDS-Product---Foundations?node-id=1262%3A9192

// Allow consumers to provide either string or number representation of size
type KdsTextBodySizeNumber = Extract<
  KdsTextSizeValues,
  | KdsTextSizeValues.OneHundred
  | KdsTextSizeValues.TwoHundred
  | KdsTextSizeValues.ThreeHundred
>;
type KdsTextBodySizeString = `${KdsTextBodySizeNumber}`;
export type KdsTextBodySizes = KdsTextBodySizeNumber | KdsTextBodySizeString;
export const AVAILABLE_SIZES = [
  KdsTextSizeValues.ThreeHundred,
  KdsTextSizeValues.TwoHundred,
  KdsTextSizeValues.OneHundred,
];
export const DEFAULT_SIZE = KdsTextSizeValues.TwoHundred;

export const DEFAULT_WEIGHT = KdsTextWeightValues.Regular;
export type KdsTextBodyWeight = Extract<
  KdsTextWeights,
  'regular' | 'medium' | 'semibold'
>;
export const AVAILABLE_WEIGHTS_PER_SIZE: Record<
  KdsTextBodySizes,
  KdsTextBodyWeight[]
> = {
  300: [
    KdsTextWeightValues.Regular,
    KdsTextWeightValues.Medium,
    KdsTextWeightValues.Semibold,
  ],
  200: [
    KdsTextWeightValues.Regular,
    KdsTextWeightValues.Medium,
    KdsTextWeightValues.Semibold,
  ],
  100: [
    KdsTextWeightValues.Regular,
    KdsTextWeightValues.Medium,
    KdsTextWeightValues.Semibold,
  ],
};

export interface KdsTextBodySignature {
  Args: {
    size?: KdsTextBodySizes;
    tag?: KdsTextTags;
    weight?: KdsTextBodyWeight;
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

export default class KdsTextBody extends Component<KdsTextBodySignature> {
  /**
   * Sets the "size" for the text
   * Accepted values: see AVAILABLE_SIZES
   *
   * @param size
   * @type {KdsTextBodySizes}
   *
   */
  get size(): KdsTextBodySizes {
    let { size = DEFAULT_SIZE } = this.args;

    // let's be a bit forgiving with the consumers
    if (typeof size === 'string') {
      size = parseInt(size, 10);
    }

    assert(
      `@size for "Kds::Text::Body" must be one of the following: ${AVAILABLE_SIZES.join(
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
   * @param weight
   * @type {KdsTextWeights}
   *
   */
  get weight(): KdsTextWeights {
    const { weight = DEFAULT_WEIGHT } = this.args;

    const availableWeights = AVAILABLE_WEIGHTS_PER_SIZE[this.size];

    assert(
      `@weight for "Kds::Text::Body" with @size=${
        this.size
      } must be one of the following: ${availableWeights.join(
        ', '
      )}; received: ${weight}`,
      availableWeights.includes(weight)
    );

    return weight;
  }
}
