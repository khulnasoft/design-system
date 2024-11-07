/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';

export interface KdsFlyoutBodySignature {
  // when component has no args, but constructor still needs to be defined, use `never`
  // see: https://github.com/khulnasoft/design-system/pull/2511/files/f2146e5243d0431892a62d2fbf2889f1cbd3e525#r1815255004
  Args: never;
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class KdsFlyoutBody extends Component<KdsFlyoutBodySignature> {
  constructor(owner: unknown, args: KdsFlyoutBodySignature['Args']) {
    super(owner, args);

    deprecate(
      'The `Kds::Flyout::Body` sub-component is now deprecated and will be removed in the next major version of `@khulnasoft/design-system-components`. Use `Kds::DialogPrimitive::Body` as one-to-one replacement.',
      false,
      {
        id: 'kds.components.flyout.body',
        until: '5.0.0',
        url: 'https://design.khulnasoft.com/components/flyout?tab=version%20history#460',
        for: '@khulnasoft/design-system-components',
        since: {
          enabled: '4.6.0',
        },
      }
    );
  }
}
