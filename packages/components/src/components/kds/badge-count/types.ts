/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsBadgeCountSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
export type KdsBadgeCountSizes = `${KdsBadgeCountSizeValues}`;

export enum KdsBadgeCountTypeValues {
  Filled = 'filled',
  Inverted = 'inverted',
  Outlined = 'outlined',
}
export type KdsBadgeCountTypes = `${KdsBadgeCountTypeValues}`;

export enum KdsBadgeCountColorValues {
  Neutral = 'neutral',
  NeutralDarkMode = 'neutral-dark-mode',
}
export type KdsBadgeCountColors = `${KdsBadgeCountColorValues}`;
