/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsButtonSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
export type KdsButtonSizes = `${KdsButtonSizeValues}`;

export enum KdsButtonColorValues {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Critical = 'critical',
}
export type KdsButtonColors = `${KdsButtonColorValues}`;

export enum KdsButtonIconPositionValues {
  Leading = 'leading',
  Trailing = 'trailing',
}
export type KdsButtonIconPositions = `${KdsButtonIconPositionValues}`;
