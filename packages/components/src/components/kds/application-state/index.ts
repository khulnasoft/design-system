/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import { KdsApplicationStateAlignValues } from './types.ts';

import type { ComponentLike } from '@glint/template';
import type { KdsApplicationStateAligns } from './types';
import type { KdsApplicationStateMediaSignature } from './media';
import type { KdsApplicationStateHeaderSignature } from './header';
import type { KdsApplicationStateBodySignature } from './body';
import type { KdsApplicationStateFooterSignature } from './footer';

export const ALIGNS: string[] = Object.values(KdsApplicationStateAlignValues);
export interface KdsApplicationStateSignature {
  Args: {
    align?: KdsApplicationStateAligns;
  };
  Blocks: {
    default: [
      {
        Media?: ComponentLike<KdsApplicationStateMediaSignature>;
        Header?: ComponentLike<KdsApplicationStateHeaderSignature>;
        Body?: ComponentLike<KdsApplicationStateBodySignature>;
        Footer?: ComponentLike<KdsApplicationStateFooterSignature>;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class KdsApplicationState extends Component<KdsApplicationStateSignature> {
  get align(): KdsApplicationStateAligns {
    const validAlignValues: KdsApplicationStateAligns[] = Object.values(
      KdsApplicationStateAlignValues
    );

    assert(
      `@align for "Kds::ApplicationState" must be one of the following: ${validAlignValues.join(
        ', '
      )}; received: ${this.args.align}`,
      this.args.align == null || validAlignValues.includes(this.args.align)
    );

    return this.args.align ?? KdsApplicationStateAlignValues.Left;
  }

  get classNames(): string {
    const classes = ['kds-application-state'];

    // add a class based on the @align argument
    classes.push(`kds-application-state--align-${this.align}`);

    return classes.join(' ');
  }
}
