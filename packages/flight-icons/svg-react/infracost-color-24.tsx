import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconInfracostColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="url(#infracost-color-24__paint0_linear_2372_391)"
                    d="M18 2H6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4V6a4 4 0 00-4-4z"
                />
                <path
                    fill="#fff"
                    d="M13.5 7.5l-3 3h1.515c1.02 0 1.485.96 1.485 1.5v4.5h2.985c0-1.115.015-3.876.015-6 0-1.845-1.56-3-3-3z"
                />
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M7.5 7.74a.24.24 0 01.24-.24h.3a.24.24 0 01.24.24v2.52a.24.24 0 01-.24.24h-.3a.24.24 0 01-.24-.24V7.74zm1.35-.24a.24.24 0 00-.24.24v2.52c0 .133.107.24.24.24h.3a.24.24 0 00.24-.24V7.74a.24.24 0 00-.24-.24h-.3zm1.11 0a.24.24 0 00-.24.24v2.52c0 .133.107.24.24.24h.54V7.74a.24.24 0 00-.24-.24h-.3zm-2.32 5.86a.48.48 0 00-.14.339v2.561c0 .132.107.24.24.24h.3a.24.24 0 00.24-.24v-3.395a.06.06 0 00-.102-.043l-.537.537zm.97-.771c0-.128.05-.25.14-.34l.537-.537a.06.06 0 01.103.043v4.505a.24.24 0 01-.24.24h-.3a.24.24 0 01-.24-.24v-3.671zm1.25-1.45a.48.48 0 00-.14.34v4.781c0 .132.107.24.24.24h.3a.24.24 0 00.24-.24V10.5l-.64.64z"
                    clipRule="evenodd"
                />
                <defs>
                    <linearGradient
                        id="infracost-color-24__paint0_linear_2372_391"
                        x1={22}
                        x2={-2.03}
                        y1={2}
                        y2={13.775}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#E7B28C" />
                        <stop offset={0.497} stopColor="#BD62B6" />
                        <stop offset={1} stopColor="#6658C5" />
                    </linearGradient>
                </defs>
            </svg>
        );
    }
);
