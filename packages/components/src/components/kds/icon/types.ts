/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsIconSizeValues {
  Sixteen = '16',
  TwentyFour = '24',
}

export type KdsIconSizes = `${KdsIconSizeValues}`;

export enum KdsIconColorValues {
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
export type KdsIconColors = `${KdsIconColorValues}`;
