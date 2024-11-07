import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGoogleDocsColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#3086F6"
                    d="M17.89 22H6.11c-.748 0-1.36-.614-1.36-1.364V3.364C4.75 2.614 5.362 2 6.11 2h8.156l4.984 5v13.636c0 .75-.612 1.364-1.36 1.364z"
                />
                <path fill="#0C67D6" d="M14.25 2l5 5h-5V2z" />
                <path
                    fill="#FDFFFF"
                    d="M15.688 10.864H7.811V9.727h7.875v1.137zm0 1.59H7.811v1.137h7.875v-1.136zM13.5 15.183H7.812v1.136H13.5v-1.136z"
                />
            </svg>
        );
    }
);
