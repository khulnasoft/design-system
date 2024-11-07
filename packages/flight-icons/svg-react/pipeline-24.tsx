import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconPipeline24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M4.75 4.5A2.25 2.25 0 002.5 6.75v1A2.25 2.25 0 004.75 10h1a2.25 2.25 0 002.236-2H9.82c.967 0 1.75.784 1.75 1.75v4.5a3.25 3.25 0 003.25 3.25h1.195a2.25 2.25 0 002.236 2h1a2.25 2.25 0 002.25-2.25v-1A2.25 2.25 0 0019.25 14h-1a2.25 2.25 0 00-2.236 2h-1.195a1.75 1.75 0 01-1.75-1.75v-4.5A3.25 3.25 0 009.82 6.5H7.986a2.25 2.25 0 00-2.236-2h-1zM4 6.75A.75.75 0 014.75 6h1a.75.75 0 01.75.75v1a.75.75 0 01-.75.75h-1A.75.75 0 014 7.75v-1zm14.25 8.75a.75.75 0 00-.75.75v1c0 .414.336.75.75.75h1a.75.75 0 00.75-.75v-1a.75.75 0 00-.75-.75h-1z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
