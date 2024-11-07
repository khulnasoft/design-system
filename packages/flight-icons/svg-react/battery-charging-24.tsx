import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBatteryCharging24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M13.056 6.003a.75.75 0 10-1.112-1.006l-4.75 5.25a.75.75 0 00.335 1.22l5.428 1.67-4.035 4.885a.75.75 0 001.156.956l4.75-5.75a.75.75 0 00-.357-1.195L9.097 10.38l3.96-4.377z" />
                    <path d="M3.75 6.5c-.69 0-1.25.56-1.25 1.25v8.5c0 .69.56 1.25 1.25 1.25h2.5a.75.75 0 010 1.5h-2.5A2.75 2.75 0 011 16.25v-8.5A2.75 2.75 0 013.75 5h4.5a.75.75 0 010 1.5h-4.5zM15 5.75a.75.75 0 01.75-.75h2.5A2.75 2.75 0 0121 7.75v8.5A2.75 2.75 0 0118.25 19h-4.5a.75.75 0 010-1.5h4.5c.69 0 1.25-.56 1.25-1.25v-8.5c0-.69-.56-1.25-1.25-1.25h-2.5a.75.75 0 01-.75-.75zM22.75 10a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5a.75.75 0 01.75-.75z" />
                </g>
            </svg>
        );
    }
);