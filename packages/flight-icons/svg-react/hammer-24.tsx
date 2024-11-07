import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconHammer24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fillRule="evenodd"
                    d="M19.502 5.858C15.71 2.773 10.383.225 5.334 3.59a.75.75 0 00.269 1.36c1.292.258 2.317.466 3.308.888.815.346 1.626.846 2.521 1.67L1.03 17.909a2.25 2.25 0 000 3.182l.879.879a2.25 2.25 0 003.182 0l10.863-10.864c.213.322.24.532.248.66.004.065.002.13-.002.21l-.002.041c-.003.068-.008.16-.007.245.002.243.046.586.327.898.514.571 1.08 1.123 1.608 1.64l.366.358a.75.75 0 001.06-.008l4.148-4.208a.75.75 0 00-.008-1.061c-.763-.752-1.224-1.196-1.866-1.814l-.21-.203c-.284-.273-.643-.316-.838-.327-.209-.01-.431.01-.59.026l-.012.001-.209.019a6.339 6.339 0 01-.006-.263v-.031a4.327 4.327 0 00-.033-.588c-.03-.206-.108-.548-.388-.81a.74.74 0 00-.038-.033zM9.498 4.456a11.549 11.549 0 00-1.545-.523c3.597-1.278 7.34.464 10.493 3 .012.092.014.21.015.398v.013c.002.167.004.4.039.62.035.217.12.55.393.81.287.273.654.307.837.314.195.007.407-.013.56-.028l.029-.003a3.5 3.5 0 01.35-.023l.117.113c.475.458.848.818 1.318 1.277l-3.096 3.14a32.346 32.346 0 01-1.317-1.343c0-.027.002-.056.004-.099l.004-.077a3.486 3.486 0 000-.363c-.035-.633-.299-1.343-1.17-2.212a.75.75 0 00-1.06 0L14 10.94 12.06 9l.97-.97a.75.75 0 00.007-1.053c-1.233-1.266-2.362-2.02-3.539-2.52zM11 10.061L2.09 18.97a.75.75 0 000 1.06l.88.879a.75.75 0 001.06 0L12.94 12 11 10.06zm9.74-1.021l-.01-.002.01.002zm-.996-1.455l.013.002a.049.049 0 01-.013-.002z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
