/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import type { FloatingUIOptions } from '../../../../modifiers/kds-anchored-position.ts';

export enum KdsFormSuperSelectHorizontalPositionValues {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export type KdsFormSuperSelectHorizontalPositions =
  `${KdsFormSuperSelectHorizontalPositionValues}`;

// map SuperSelect's `horizontalPosition` values to anchoredPositionModifier's `placement` values
export const KdsFormSuperSelectHorizontalPositionToPlacementValues: Record<
  // SuperSelect's `horizontalPosition` values
  KdsFormSuperSelectHorizontalPositionValues,
  FloatingUIOptions['placement']
> = {
  [KdsFormSuperSelectHorizontalPositionValues.Left]: 'bottom-start',
  [KdsFormSuperSelectHorizontalPositionValues.Center]: 'bottom',
  [KdsFormSuperSelectHorizontalPositionValues.Right]: 'bottom-end',
};
