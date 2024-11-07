/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsCardBackgroundValues {
  NeutralPrimary = 'neutral-primary',
  NeutralSecondary = 'neutral-secondary',
}

export type KdsCardBackground =
  | KdsCardBackgroundValues.NeutralSecondary
  | KdsCardBackgroundValues.NeutralPrimary;

export enum KdsCardLevelValues {
  Base = 'base',
  Mid = 'mid',
  High = 'high',
}

export type KdsCardLevel =
  | KdsCardLevelValues.Base
  | KdsCardLevelValues.Mid
  | KdsCardLevelValues.High;

export enum KdsCardOverflowValues {
  Hidden = 'hidden',
  Visible = 'visible',
}

export type KdsCardOverflow =
  | KdsCardOverflowValues.Hidden
  | KdsCardOverflowValues.Visible;
