/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { helper } from '@ember/component/helper';
import { assert } from '@ember/debug';

/*
 * This helper can be used to support both @model and @models arguments when wrapping
 * the `<LinkTo>` component without it triggering assertions or having to use the component helper.
 *
 * The result of this helper should be passed into the `@models` argument of the `<LinkTo>` component:
 *
 * ```kbs
 * <LinkTo @models={{kds-link-to-models @model @models}} />
 * ```
 */

export function kdsLinkToModels<T>([model, models]: [
  T | undefined,
  T[] | undefined,
]) {
  assert(
    'You cannot provide both the `@model` and `@models` arguments to the component.',
    !model || !models
  );

  if (model) {
    return [model];
  } else if (models) {
    return models;
  } else {
    return [];
  }
}

const kdsLinkToModelsHelper = helper(kdsLinkToModels);
export default kdsLinkToModelsHelper;
