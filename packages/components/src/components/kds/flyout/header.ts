/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';
import type { KdsIconSignature } from '../icon';

export interface KdsFlyoutHeaderSignature {
  Args: {
    id?: string;
    tagline?: string;
    onDismiss: (event: MouseEvent) => void;
    icon?: KdsIconSignature['Args']['name'];
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class KdsFlyoutHeader extends Component<KdsFlyoutHeaderSignature> {
  constructor(owner: unknown, args: KdsFlyoutHeaderSignature['Args']) {
    super(owner, args);

    deprecate(
      'The `Kds::Flyout::Header` sub-component is now deprecated and will be removed in the next major version of `@khulnasoft/design-system-components`. Use `Kds::DialogPrimitive::Header` as one-to-one replacement.',
      false,
      {
        id: 'kds.components.flyout.header',
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
