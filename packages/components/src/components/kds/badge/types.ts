/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsBadgeSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
export type KdsBadgeSizes = `${KdsBadgeSizeValues}`;

export enum KdsBadgeTypeValues {
  Filled = 'filled',
  Inverted = 'inverted',
  Outlined = 'outlined',
}
export type KdsBadgeTypes = `${KdsBadgeTypeValues}`;

export enum KdsBadgeColorValues {
  Neutral = 'neutral',
  NeutralDarkMode = 'neutral-dark-mode',
  Highlight = 'highlight',
  Success = 'success',
  Warning = 'warning',
  Critical = 'critical',
}
export type KdsBadgeColors = `${KdsBadgeColorValues}`;
