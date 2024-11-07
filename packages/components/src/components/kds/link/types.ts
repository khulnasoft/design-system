/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsLinkIconPositionValues {
  Leading = 'leading',
  Trailing = 'trailing',
}

export type KdsLinkIconPositions = `${KdsLinkIconPositionValues}`;

export enum KdsLinkColorValues {
  Primary = 'primary',
  Secondary = 'secondary',
}

export type KdsLinkColors = `${KdsLinkColorValues}`;

export enum KdsLinkStandaloneSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type KdsLinkStandaloneSizes = `${KdsLinkStandaloneSizeValues}`;
