/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsTooltipPlacementValues {
  Top = 'top',
  TopStart = 'top-start',
  TopEnd = 'top-end',
  Right = 'right',
  RightStart = 'right-start',
  RightEnd = 'right-end',
  Bottom = 'bottom',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  Left = 'left',
  LeftStart = 'left-start',
  LeftEnd = 'left-end',
}

export type KdsTooltipPlacements = `${KdsTooltipPlacementValues}`;
