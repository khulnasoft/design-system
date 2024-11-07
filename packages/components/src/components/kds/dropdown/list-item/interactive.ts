/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert, deprecate } from '@ember/debug';

import { KdsDropdownListItemInteractiveColorValues } from './types.ts';

import type { KdsIconSignature } from '../../icon';
import type { KdsInteractiveSignature } from '../../interactive';
import type { KdsDropdownListItemInteractiveColors } from './types.ts';
import type { ComponentLike } from '@glint/template';
import type { KdsBadgeSignature } from '../../badge/index.ts';

export const DEFAULT_COLOR = KdsDropdownListItemInteractiveColorValues.Action;
export const COLORS: string[] = Object.values(
  KdsDropdownListItemInteractiveColorValues
);

export interface KdsDropdownListItemInteractiveSignature {
  Args: KdsInteractiveSignature['Args'] & {
    color?: KdsDropdownListItemInteractiveColors;
    icon?: KdsIconSignature['Args']['name'];
    isLoading?: boolean;
    /**
     * @deprecated The `@text` argument for "Kds::Dropdown::ListItem::Interactive" has been deprecated. Please put text in the yielded block. See: https://design.khulnasoft.com/components/dropdown?tab=version%20history#4100
     */
    text?: string;
    trailingIcon?: KdsIconSignature['Args']['name'];
  };
  Blocks: {
    default?: [
      {
        Badge?: ComponentLike<KdsBadgeSignature>;
      },
    ];
  };
  Element: HTMLDivElement | KdsInteractiveSignature['Element'];
}

export default class KdsDropdownListItemInteractive extends Component<KdsDropdownListItemInteractiveSignature> {
  constructor(
    owner: unknown,
    args: KdsDropdownListItemInteractiveSignature['Args']
  ) {
    super(owner, args);

    if (args.text !== undefined) {
      deprecate(
        'The `@text` argument for "Kds::Dropdown::ListItem::Interactive" has been deprecated. Please put text in the yielded block.',
        false,
        {
          id: 'kds.dropdown.list-item.interactive',
          until: '5.0.0',
          url: 'https://design.khulnasoft.com/components/dropdown?tab=version%20history#4100',
          for: '@khulnasoft/design-system-components',
          since: {
            available: '4.10.0',
            enabled: '5.0.0',
          },
        }
      );
    }
  }

  get text(): string {
    const { text } = this.args;

    assert(
      '@text for "Kds::Dropdown::ListItem::Interactive" must have a valid value',
      text !== undefined
    );

    return text;
  }

  get color(): KdsDropdownListItemInteractiveColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Kds::Dropdown::ListItem::Interactive" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  get classNames(): string {
    const classes = [
      'kds-dropdown-list-item',
      'kds-dropdown-list-item--variant-interactive',
    ];

    // add a class based on the @color argument
    classes.push(`kds-dropdown-list-item--color-${this.color}`);

    return classes.join(' ');
  }
}
