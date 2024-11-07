/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export type KdsTextTags = keyof HTMLElementTagNameMap;

export enum KdsTextColorValues {
  Primary = 'primary',
  Strong = 'strong',
  Faint = 'faint',
  Disabled = 'disabled',
  HighContrast = 'high-contrast',
  Action = 'action',
  ActionHover = 'action-hover',
  ActionActive = 'action-active',
  Highlight = 'highlight',
  HighlightOnSurface = 'highlight-on-surface',
  HighlightHighContrast = 'highlight-high-contrast',
  Success = 'success',
  SuccessOnSurface = 'success-on-surface',
  SuccessHighContrast = 'success-high-contrast',
  Warning = 'warning',
  WarningOnSurface = 'warning-on-surface',
  WarningHighContrast = 'warning-high-contrast',
  Critical = 'critical',
  CriticalOnSurface = 'critical-on-surface',
  CriticalHighContrast = 'critical-high-contrast',
}
export type KdsTextColors = `${KdsTextColorValues}`;

export enum KdsTextAlignValues {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}
export type KdsTextAligns = `${KdsTextAlignValues}`;

export enum KdsTextWeightValues {
  Regular = 'regular',
  Medium = 'medium',
  Semibold = 'semibold',
  Bold = 'bold',
}
export type KdsTextWeights = `${KdsTextWeightValues}`;

export enum KdsTextSizeValues {
  FiveHundred = 500,
  FourHundred = 400,
  ThreeHundred = 300,
  TwoHundred = 200,
  OneHundred = 100,
}
type KdsTextSizesString = `${KdsTextSizeValues}`;
type KdsTextSizesNumber =
  `${KdsTextSizeValues}` extends `${infer T extends number}` ? T : never;
export type KdsTextSizes = KdsTextSizesString | KdsTextSizesNumber;

export enum KdsTextGroupValues {
  Code = 'code',
  Display = 'display',
  Body = 'body',
}
export type KdsTextGroups = `${KdsTextGroupValues}`;
