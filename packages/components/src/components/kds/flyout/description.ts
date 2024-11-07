/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { deprecate } from '@ember/debug';
import type { KdsTextBodySignature } from '../text/body';

export interface KdsFlyoutDescriptionSignature {
  Args: never;
  Blocks: {
    default: [];
  };
  Element: KdsTextBodySignature['Element'];
}

export default class KdsFlyoutDescription extends Component<KdsFlyoutDescriptionSignature> {
  constructor(owner: unknown, args: KdsFlyoutDescriptionSignature['Args']) {
    super(owner, args);

    deprecate(
      'The `Kds::Flyout::Description` sub-component is now deprecated and will be removed in the next major version of `@khulnasoft/design-system-components`. Use `Kds::DialogPrimitive::Description` as one-to-one replacement.',
      false,
      {
        id: 'kds.components.flyout.description',
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
