/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import type { TemplateOnlyComponent } from '@ember/component/template-only';

import ShwText from './index';
import type { ShwTextSignature } from './index';

export interface ShwBodySignature {
  Args: {
    align?: ShwTextSignature['Args']['align'];
    weight?: ShwTextSignature['Args']['weight'];
    tag?: ShwTextSignature['Args']['tag'];
  };
  Blocks: {
    default: [];
  };
  Element: ShwTextSignature['Element'];
}

const ShwTextBody: TemplateOnlyComponent<ShwBodySignature> = <template>
  <ShwText
    @variant="body"
    @align={{@align}}
    @weight={{@weight}}
    @tag={{@tag}}
    ...attributes
  >{{yield}}</ShwText>
</template>;

export default ShwTextBody;
