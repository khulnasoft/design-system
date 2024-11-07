/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert, deprecate } from '@ember/debug';

import type { KdsIconSignature } from '../../icon';
import type { KdsInteractiveSignature } from '../../interactive/';

export interface KdsSideNavHeaderIconButtonSignature {
  Args: KdsInteractiveSignature['Args'] & {
    icon: KdsIconSignature['Args']['name'];
    ariaLabel: string;
  };
  Element: KdsInteractiveSignature['Element'];
}

export default class KdsSideNavHeaderIconButton extends Component<KdsSideNavHeaderIconButtonSignature> {
  constructor(
    owner: unknown,
    args: KdsSideNavHeaderIconButtonSignature['Args']
  ) {
    super(owner, args);

    deprecate(
      'The `Kds::SideNav::Header::IconButton` sub-component is now deprecated and will be removed in the next major version of `@khulnasoft/design-system-components`. Use `Kds::Button` with the `isIconOnly` variant instead.',
      false,
      {
        id: 'kds.components.sidenav.header.iconbutton',
        until: '5.0.0',
        url: 'https://design.khulnasoft.com/components/side-nav?tab=version%20history#4100',
        for: '@khulnasoft/design-system-components',
        since: {
          enabled: '4.10.0',
        },
      }
    );
  }

  get ariaLabel(): string {
    const { ariaLabel } = this.args;

    assert(
      '@ariaLabel for "Kds::SideNav::Header::IconButton" must have a valid value',
      ariaLabel !== undefined
    );

    return ariaLabel;
  }
}
