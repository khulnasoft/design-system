/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */
import type { KdsIconSignature } from '../icon';

export enum KdsStepperStatusesValues {
  Incomplete = 'incomplete',
  Progress = 'progress',
  Processing = 'processing',
  Complete = 'complete',
}

export type KdsStepperStatuses = `${KdsStepperStatusesValues}`;

export const KdsStepperStatusToIconsValues: Record<
  KdsStepperStatusesValues,
  KdsIconSignature['Args']['name']
> = {
  [KdsStepperStatusesValues.Incomplete]: 'circle',
  [KdsStepperStatusesValues.Progress]: 'circle-half',
  [KdsStepperStatusesValues.Processing]: 'loading',
  [KdsStepperStatusesValues.Complete]: 'check-circle',
};
