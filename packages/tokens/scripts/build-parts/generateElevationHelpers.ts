/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { TransformedTokens }  from 'style-dictionary';

import { PREFIX } from './generateCssHelpers';

type Helpers = string[];

export function generateElevationHelpers(tokensElevation: TransformedTokens, tokensSurface: TransformedTokens, outputCssVars: boolean): Helpers {

    const helpersElevation: Helpers = [];
    const helpersSurface: Helpers = [];

    Object.keys(tokensElevation).forEach((key: string) => {

        // we define shared colors under a JSON block in the "elevation" namespace
        if (key === 'color') return;

        const levelName = key;
        const levelValues = tokensElevation[key];

        if (levelValues.hasOwnProperty('box-shadow')) {
            const selector = `.${PREFIX}-elevation-${levelName}`;
            const value = outputCssVars ? `var(--token-elevation-${levelName}-box-shadow` : levelValues['box-shadow'].value;
            helpersElevation.push(`${selector} { box-shadow: ${value}); }`);
        }
    });

    Object.keys(tokensSurface).forEach((key: string) => {

        const levelName = key;
        const levelValues = tokensSurface[key];

        if (levelValues.hasOwnProperty('box-shadow')) {
            const selector = `.${PREFIX}-surface-${levelName}`;
            const value = outputCssVars ? `var(--token-surface-${levelName}-box-shadow)` : levelValues['box-shadow'].value;
            helpersSurface.push(`${selector} { box-shadow: ${value}; }`);
        }
    });

    return [...helpersElevation, ...helpersSurface];
}
