/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsModalSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
export type KdsModalSizes = `${KdsModalSizeValues}`;

export enum KdsModalColorValues {
  Neutral = 'neutral',
  Warning = 'warning',
  Critical = 'critical',
}
export type KdsModalColors = `${KdsModalColorValues}`;
