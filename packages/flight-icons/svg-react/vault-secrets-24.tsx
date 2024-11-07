import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultSecrets24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    d="M10.737 23v-4.583c0-1.064.073-2.127.22-3.19l.11-.99-.623.77a26.424 26.424 0 01-2.123 2.42L5.1 20.653l-1.757-1.76 3.221-3.226A26.397 26.397 0 018.98 13.54l.769-.623-.989.11c-1.061.146-2.123.22-3.184.22H1v-2.494h9.737V1h2.49v4.583c0 1.064-.074 2.127-.22 3.19l-.11.99.622-.77a26.402 26.402 0 012.123-2.42l3.222-3.226 1.757 1.76-3.185 3.226a26.397 26.397 0 01-2.416 2.127l-.769.623.989-.11a23.254 23.254 0 013.184-.22H23v2.494h-9.737V23h-2.526zm4.942-5.537v-1.76h1.757l3.185 3.19-1.757 1.76-3.185-3.19zM6.527 8.297l-3.184-3.19L5.1 3.347l3.185 3.19v1.76H6.527z"
                />
            </svg>
        );
    }
);
