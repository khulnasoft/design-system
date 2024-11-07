/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { guidFor } from '@ember/object/internals';
import { assert } from '@ember/debug';

import type { KdsDisclosurePrimitiveSignature } from '../disclosure-primitive';
import type { KdsRevealToggleButtonSignature } from './toggle/button';

export interface KdsRevealSignature {
  Args: {
    text: KdsRevealToggleButtonSignature['Args']['text'];
    textWhenOpen?: KdsRevealToggleButtonSignature['Args']['text'];
    isOpen?: KdsRevealToggleButtonSignature['Args']['isOpen'];
  };
  Blocks: {
    default: [];
  };
  Element: KdsDisclosurePrimitiveSignature['Element'];
}

export default class KdsReveal extends Component<KdsRevealSignature> {
  /**
   * Generates a unique ID for the Content
   *
   * @param contentId
   */
  contentId = 'content-' + guidFor(this);

  /**
   * @param getText
   * @type {string}
   * @description A local function that emulates a getter to compute the value of the `@text` argument for the button (mainly to make TypeScript happy)
   */
  getText = (isOpen: boolean): string => {
    if (isOpen && this.args.textWhenOpen !== undefined) {
      return this.args.textWhenOpen;
    } else {
      if (this.args.text !== undefined) {
        return this.args.text;
      } else {
        assert('@text for "Kds::Reveal" must have a valid value');
      }
    }
  };
}
