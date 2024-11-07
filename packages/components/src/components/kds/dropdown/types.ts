/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import type { FloatingUIOptions } from '../../../modifiers/kds-anchored-position.ts';

export enum KdsDropdownPositionValues {
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  TopLeft = 'top-left',
  TopRight = 'top-right',
}
export type KdsDropdownPositions = `${KdsDropdownPositionValues}`;

// map Dropdown's `listPosition` values to PopoverPrimitive's `placement` values for backwards compatibility
export const KdsDropdownPositionToPlacementValues: Record<
  // Dropdown's `listPosition` values
  KdsDropdownPositionValues,
  FloatingUIOptions['placement']
> = {
  [KdsDropdownPositionValues.BottomLeft]: 'bottom-start',
  [KdsDropdownPositionValues.BottomRight]: 'bottom-end',
  [KdsDropdownPositionValues.TopLeft]: 'top-start',
  [KdsDropdownPositionValues.TopRight]: 'top-end',
};
