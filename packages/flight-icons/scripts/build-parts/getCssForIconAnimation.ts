/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */
import prettier from 'prettier';

const prettierConfig = { parser: 'css' as const, tabWidth: 4 };

export const getCssForIconAnimation = async(): Promise<string> => {
    let cssSource = '/**\n * Copyright (c) KhulnaSoft, Ltd.\n * SPDX-License-Identifier: MPL-2.0\n */\n\n';
    cssSource += `
        @keyframes kds-flight-icon-animation-rotation {
            to {transform: rotate(360deg);}
        }

        .kds-flight-icon--animation-loading {
            animation: kds-flight-icon-animation-rotation 9s linear infinite;
        }

        .kds-flight-icon--animation-running {
            animation: kds-flight-icon-animation-rotation 9s linear infinite;
        }

        @media (prefers-reduced-motion: no-preference) {

            .kds-flight-icon--animation-loading {
                animation-duration: .7s;
            }

            .kds-flight-icon--animation-running {
                animation-duration: 1s;
            }
        }
    `;
    const formattedCss = await prettier.format(cssSource, prettierConfig);

    return formattedCss;
};
