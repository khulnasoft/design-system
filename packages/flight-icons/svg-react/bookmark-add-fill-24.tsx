import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBookmarkAddFill24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M4 4.75A2.75 2.75 0 016.75 2h10.5A2.75 2.75 0 0120 4.75v16.376a1 1 0 01-1.382.924l-6.522-2.699a.25.25 0 00-.192 0L5.382 22.05A1 1 0 014 21.126V4.75zM11.75 7a.75.75 0 00-.75.75V10H8.75a.75.75 0 000 1.5H11v2.25a.75.75 0 001.5 0V11.5h2.25a.75.75 0 000-1.5H12.5V7.75a.75.75 0 00-.75-.75z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
