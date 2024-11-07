/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import type { TemplateOnlyComponent } from '@ember/component/template-only';

import ShwText from './index';
import type { ShwTextSignature } from './index';

export interface ShwTextH2Signature {
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

const ShwTextH2: TemplateOnlyComponent<ShwTextH2Signature> = <template>
  <ShwText
    @variant="h2"
    @align={{@align}}
    @weight={{@weight}}
    @tag={{@tag}}
    ...attributes
  >{{yield}}</ShwText>
</template>;

export default ShwTextH2;
