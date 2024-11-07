/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';

export interface KdsFlyoutFooterSignature {
  Args: {
    onDismiss?: (event: MouseEvent) => void;
  };
  Blocks: {
    default: [{ close?: (event: MouseEvent) => void }];
  };
  Element: HTMLDivElement;
}

export default class KdsFlyoutFooter extends Component<KdsFlyoutFooterSignature> {
  constructor(owner: unknown, args: KdsFlyoutFooterSignature['Args']) {
    super(owner, args);

    deprecate(
      'The `Kds::Flyout::Footer` sub-component is now deprecated and will be removed in the next major version of `@khulnasoft/design-system-components`. Use `Kds::DialogPrimitive::Footer` as one-to-one replacement.',
      false,
      {
        id: 'kds.components.flyout.footer',
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
