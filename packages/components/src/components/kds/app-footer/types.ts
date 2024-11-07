/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */
import type { KdsIconSignature } from '../icon';

export enum KdsAppFooterStatusValues {
  Operational = 'operational',
  Degraded = 'degraded',
  Maintenance = 'maintenance',
  Outage = 'outage',
}

export type KdsAppFooterStatusTypes = `${KdsAppFooterStatusValues}`;

export const KdsAppFooterStatusLinkStatusValues: Record<
  KdsAppFooterStatusValues,
  {
    text: string;
    iconName: KdsIconSignature['Args']['name'];
  }
> = {
  [KdsAppFooterStatusValues.Operational]: {
    text: 'System operational',
    iconName: 'check-circle',
  },
  [KdsAppFooterStatusValues.Degraded]: {
    text: 'System degraded',
    iconName: 'alert-triangle',
  },
  [KdsAppFooterStatusValues.Maintenance]: {
    text: 'System maintenance',
    iconName: 'alert-triangle',
  },
  [KdsAppFooterStatusValues.Outage]: {
    text: 'System outage',
    iconName: 'x-circle',
  },
};

export enum KdsAppFooterThemeValues {
  Light = 'light',
  Dark = 'dark',
}

export type KdsAppFooterThemeTypes = `${KdsAppFooterThemeValues}`;
