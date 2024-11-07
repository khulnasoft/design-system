/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';

export interface KdsModalFooterSignature {
  Args: {
    onDismiss?: (event: MouseEvent) => void;
  };
  Blocks: {
    default: [{ close?: (event: MouseEvent) => void }];
  };
  Element: HTMLDivElement;
}

export default class KdsModalFooter extends Component<KdsModalFooterSignature> {
  constructor(owner: unknown, args: KdsModalFooterSignature['Args']) {
    super(owner, args);

    deprecate(
      'The `Kds::Modal::Footer` sub-component is now deprecated and will be removed in the next major version of `@khulnasoft/design-system-components`. Use `Kds::DialogPrimitive::Footer` as one-to-one replacement.',
      false,
      {
        id: 'kds.components.modal.footer',
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
