import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSkip24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M4.172 19.728a.744.744 0 00.1.1A10.965 10.965 0 0012 23c6.075 0 11-4.925 11-11 0-3.012-1.21-5.742-3.172-7.728a.769.769 0 00-.1-.1A10.965 10.965 0 0012 1C5.925 1 1 5.925 1 12c0 3.012 1.21 5.742 3.172 7.728zM2.5 12A9.5 9.5 0 0112 2.5c2.353 0 4.507.856 6.166 2.273L4.773 18.166A9.462 9.462 0 012.5 12zm16.727-6.166A9.462 9.462 0 0121.5 12a9.5 9.5 0 01-9.5 9.5 9.462 9.462 0 01-6.166-2.273L19.227 5.834z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
