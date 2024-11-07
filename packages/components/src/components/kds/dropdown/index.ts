/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { assert } from '@ember/debug';

import {
  // map Dropdown's `listPosition` values to PopoverPrimitive's `placement` values
  KdsDropdownPositionToPlacementValues,
  // Dropdown's `listPosition` values
  KdsDropdownPositionValues,
} from './types.ts';

import type { ComponentLike } from '@glint/template';
import type { MenuPrimitiveSignature } from '../menu-primitive';
import type { KdsDropdownFooterSignature } from './footer';
import type { KdsDropdownHeaderSignature } from './header';
import type { KdsDropdownListItemCheckboxSignature } from './list-item/checkbox';
import type { KdsDropdownListItemCheckmarkSignature } from './list-item/checkmark';
import type { KdsDropdownListItemCopyItemSignature } from './list-item/copy-item';
import type { KdsDropdownListItemDescriptionSignature } from './list-item/description';
import type { KdsDropdownListItemGenericSignature } from './list-item/generic';
import type { KdsDropdownListItemInteractiveSignature } from './list-item/interactive';
import type { KdsDropdownListItemRadioSignature } from './list-item/radio';
import type { KdsDropdownListItemSeparatorSignature } from './list-item/separator';
import type { KdsDropdownListItemTitleSignature } from './list-item/title';
import type { KdsDropdownToggleButtonSignature } from './toggle/button';
import type { KdsDropdownToggleIconSignature } from './toggle/icon';
import type { KdsDropdownPositions } from './types';

import type { FloatingUIOptions } from '../../../modifiers/kds-anchored-position.ts';

export const DEFAULT_POSITION = KdsDropdownPositionValues.BottomRight;
export const POSITIONS: string[] = Object.values(KdsDropdownPositionValues);

export interface KdsDropdownSignature {
  Args: MenuPrimitiveSignature['Args'] & {
    height?: string;
    isInline?: boolean;
    isOpen?: boolean;
    listPosition?: KdsDropdownPositions;
    width?: string;
    enableCollisionDetection?: FloatingUIOptions['enableCollisionDetection'];
    preserveContentInDom?: boolean;
    matchToggleWidth?: boolean;
  };
  Blocks: {
    default: [
      {
        Footer?: ComponentLike<KdsDropdownFooterSignature>;
        Header?: ComponentLike<KdsDropdownHeaderSignature>;
        Checkbox?: ComponentLike<KdsDropdownListItemCheckboxSignature>;
        Checkmark?: ComponentLike<KdsDropdownListItemCheckmarkSignature>;
        CopyItem?: ComponentLike<KdsDropdownListItemCopyItemSignature>;
        Description?: ComponentLike<KdsDropdownListItemDescriptionSignature>;
        Generic?: ComponentLike<KdsDropdownListItemGenericSignature>;
        Interactive?: ComponentLike<KdsDropdownListItemInteractiveSignature>;
        Radio?: ComponentLike<KdsDropdownListItemRadioSignature>;
        Separator?: ComponentLike<KdsDropdownListItemSeparatorSignature>;
        Title?: ComponentLike<KdsDropdownListItemTitleSignature>;
        ToggleButton?: ComponentLike<KdsDropdownToggleButtonSignature>;
        ToggleIcon?: ComponentLike<KdsDropdownToggleIconSignature>;
        close?: () => void;
      },
    ];
  };
  Element: MenuPrimitiveSignature['Element'];
}

export default class KdsDropdown extends Component<KdsDropdownSignature> {
  /**
   * @param listPosition
   * @type {string}
   * @default bottom-right
   * @description Determines the position of the "list"
   */
  get listPosition(): KdsDropdownPositions {
    const { listPosition = DEFAULT_POSITION } = this.args;

    assert(
      `@listPosition for "Kds::Dropdown::Index" must be one of the following: ${POSITIONS.join(
        ', '
      )}; received: ${listPosition}`,
      POSITIONS.includes(listPosition)
    );

    return listPosition;
  }

  get enableCollisionDetection(): FloatingUIOptions['enableCollisionDetection'] {
    return this.args.enableCollisionDetection ?? false;
  }

  get matchToggleWidth(): FloatingUIOptions['matchToggleWidth'] {
    return this.args.matchToggleWidth ?? false;
  }

  get anchoredPositionOptions(): {
    placement: FloatingUIOptions['placement'];
    offsetOptions: FloatingUIOptions['offsetOptions'];
    enableCollisionDetection: FloatingUIOptions['enableCollisionDetection'];
    matchToggleWidth: FloatingUIOptions['matchToggleWidth'];
  } {
    // custom options specific for the `RichTooltip` component
    // for details see the `kds-anchored-position` modifier
    return {
      placement: KdsDropdownPositionToPlacementValues[this.listPosition],
      offsetOptions: 4,
      enableCollisionDetection: this.enableCollisionDetection ? 'flip' : false,
      matchToggleWidth: this.matchToggleWidth,
    };
  }

  /**
   * Get the class names to apply to the element
   * @method classNames
   * @return {string} The "class" attribute to apply to the root element
   */
  get classNames(): string {
    const classes = ['kds-dropdown'];

    // add a class based on the @isInline argument
    if (this.args.isInline) {
      classes.push('kds-dropdown--is-inline');
    }

    return classes.join(' ');
  }

  /**
   * Get the class names to apply to the content
   * @method classNamesContent
   * @return {string} The "class" attribute to apply to the disclosed content
   */
  get classNamesContent(): string {
    const classes = ['kds-dropdown__content'];

    // add a class based on the @listPosition argument
    // TODO: we preserved these classes to avoid introducing breaking changes for consumers who rely on these classes for tests, but we aim to remove them in the next major release
    // context: https://github.com/khulnasoft/design-system/pull/2309#discussion_r1706941892
    classes.push(`kds-dropdown__content--position-${this.listPosition}`);

    // add a class based on the @width or @matchToggleWidth arguments
    if (this.args.width || this.args.matchToggleWidth) {
      classes.push('kds-dropdown__content--fixed-width');
    }

    return classes.join(' ');
  }

  @action
  didInsertList(element: HTMLUListElement): void {
    const checkmarkItems = element.querySelectorAll(`[role="option"]`);
    if (checkmarkItems.length) {
      const toggleButtonId = element
        .closest('.kds-dropdown')
        ?.querySelector('.kds-dropdown-toggle-button')
        ?.getAttribute('id');

      element.setAttribute('role', 'listbox');

      if (toggleButtonId) {
        element.setAttribute('aria-labelledby', toggleButtonId);
      }
    }
  }
}
