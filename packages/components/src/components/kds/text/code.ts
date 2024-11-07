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
type KdsTextCodeSizeNumber = Extract<
  KdsTextSizeValues,
  | KdsTextSizeValues.OneHundred
  | KdsTextSizeValues.TwoHundred
  | KdsTextSizeValues.ThreeHundred
>;
type KdsTextCodeSizeString = `${KdsTextCodeSizeNumber}`;
export type KdsTextCodeSizes = KdsTextCodeSizeNumber | KdsTextCodeSizeString;
export const AVAILABLE_SIZES = [
  KdsTextSizeValues.ThreeHundred,
  KdsTextSizeValues.TwoHundred,
  KdsTextSizeValues.OneHundred,
];
export const DEFAULT_SIZE = KdsTextSizeValues.TwoHundred;

export const DEFAULT_WEIGHT = KdsTextWeightValues.Regular;
export type KdsTextCodeWeight = Extract<KdsTextWeights, 'regular' | 'bold'>;
export const AVAILABLE_WEIGHTS_PER_SIZE: Record<
  KdsTextCodeSizes,
  KdsTextCodeWeight[]
> = {
  [KdsTextSizeValues.ThreeHundred]: [
    KdsTextWeightValues.Regular,
    KdsTextWeightValues.Bold,
  ],
  [KdsTextSizeValues.TwoHundred]: [
    KdsTextWeightValues.Regular,
    KdsTextWeightValues.Bold,
  ],
  [KdsTextSizeValues.OneHundred]: [
    KdsTextWeightValues.Regular,
    KdsTextWeightValues.Bold,
  ],
};

export interface KdsTextCodeSignature {
  Args: {
    size?: KdsTextCodeSizes;
    tag?: KdsTextTags;
    weight?: KdsTextCodeWeight;
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

export default class KdsTextCode extends Component<KdsTextCodeSignature> {
  /**
   * Sets the "size" for the text
   * Accepted values: see AVAILABLE_SIZES
   *
   * @type {KdsTextCodeSizes}
   *
   * @param size
   */
  get size(): KdsTextCodeSizes {
    let { size = DEFAULT_SIZE } = this.args;

    // let's be a bit forgiving with the consumers
    if (typeof size === 'string') {
      size = parseInt(size, 10);
    }

    assert(
      `@size for "Kds::Text::Code" must be one of the following: ${AVAILABLE_SIZES.join(
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
   * @type {string}
   *
   * @param variant
   */
  get weight(): KdsTextCodeWeight {
    const { weight = DEFAULT_WEIGHT } = this.args;

    const availableWeights = AVAILABLE_WEIGHTS_PER_SIZE[this.size];

    assert(
      `@weight for "Kds::Text::Code" with @size=${
        this.size
      } must be one of the following: ${availableWeights.join(
        ', '
      )}; received: ${weight}`,
      availableWeights.includes(weight)
    );

    return weight;
  }
}
