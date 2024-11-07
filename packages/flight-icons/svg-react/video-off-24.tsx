import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVideoOff24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M2.28 1.22a.75.75 0 00-1.06 1.06L2.94 4h-.19A2.75 2.75 0 000 6.75v10.5A2.75 2.75 0 002.75 20h11.5c1.271 0 2.34-.862 2.656-2.034l4.814 4.814a.75.75 0 101.06-1.06L2.28 1.22zM15.5 16.56L4.44 5.5H2.75c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25v-.69z"
                        clipRule="evenodd"
                    />
                    <path d="M10.5 4a.75.75 0 000 1.5h3.75c.69 0 1.25.56 1.25 1.25v3.514a1.32 1.32 0 002.148 1.028l4.426-3.563.014-.012a.25.25 0 01.412.19v8.185c0 .06-.015.101-.035.133a.253.253 0 01-.096.087.75.75 0 00.708 1.322c.527-.281.923-.84.923-1.542V7.908c0-1.487-1.736-2.295-2.873-1.342L17 9.888V6.75A2.75 2.75 0 0014.25 4H10.5z" />
                </g>
            </svg>
        );
    }
);