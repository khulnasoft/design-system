import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconJumpLink16 = forwardRef<SVGSVGElement, IconProps>(
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
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M1.75 2a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM1 6.25a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 011 6.25zM1.75 9a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zM1.75 12.5a.75.75 0 000 1.5h12.5a.75.75 0 000-1.5H1.75zM7.49 6.2a.75.75 0 011.06.04l1.95 2.1V5.55c0-.545-.215-1.067-.597-1.451A2.024 2.024 0 008.467 3.5H7.25a.75.75 0 010-1.5h1.217c.939 0 1.838.375 2.5 1.041A3.56 3.56 0 0112 5.55v2.79l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" />
                </g>
            </svg>
        );
    }
);