import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconTrash16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M6.25 6a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5A.75.75 0 016.25 6zM10.5 6.75a.75.75 0 00-1.5 0v5.5a.75.75 0 001.5 0v-5.5z" />
                    <path
                        fillRule="evenodd"
                        d="M4 3v-.75A2.25 2.25 0 016.25 0h3.5A2.25 2.25 0 0112 2.25V3h2.25a.75.75 0 010 1.5H14v9.25A2.25 2.25 0 0111.75 16h-7.5A2.25 2.25 0 012 13.75V4.5h-.25a.75.75 0 010-1.5H4zm1.5-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75V3h-5v-.75zm-2 2.25v9.25c0 .414.336.75.75.75h7.5a.75.75 0 00.75-.75V4.5h-9z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
