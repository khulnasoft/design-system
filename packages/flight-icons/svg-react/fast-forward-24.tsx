import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconFastForward24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M13.812 5.38C12.66 4.5 11 5.322 11 6.77v3.331L4.812 5.38C3.66 4.5 2 5.322 2 6.77v10.458c0 1.449 1.66 2.27 2.812 1.391L11 13.897v3.332c0 1.449 1.66 2.27 2.812 1.391l6.851-5.229a1.75 1.75 0 000-2.782l-6.851-5.23zM12.5 6.77a.25.25 0 01.402-.199l6.851 5.23a.25.25 0 010 .397l-6.851 5.229a.25.25 0 01-.402-.2V6.772zm-9 0a.25.25 0 01.402-.199l7.061 5.39v.077l-7.061 5.389a.25.25 0 01-.402-.2V6.772z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
