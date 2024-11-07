import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconArchive24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M9.75 11a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" />
                    <path
                        fillRule="evenodd"
                        d="M1 4.25A2.25 2.25 0 013.25 2h17.5A2.25 2.25 0 0123 4.25v1.5c0 .78-.397 1.467-1 1.871V19.25A2.75 2.75 0 0119.25 22H4.75A2.75 2.75 0 012 19.25V7.621A2.248 2.248 0 011 5.75v-1.5zM3.5 8h17v11.25c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25V8zm-.25-4.5a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h17.5a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75H3.25z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
