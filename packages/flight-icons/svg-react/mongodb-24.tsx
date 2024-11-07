import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMongodb24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M14.232 3.452a40.412 40.412 0 01-2.197-2.44.054.054 0 00-.07 0 40.408 40.408 0 01-2.197 2.44c-9.258 10.108 1.458 16.93 1.458 16.93l.09.05c.08 1.053.28 2.568.28 2.568h.799s.2-1.506.28-2.568l.09-.06c.01 0 10.726-6.812 1.467-16.92zm-2.237 16.775s-.48-.35-.61-.53v-.018l.58-11.006c0-.034.06-.034.06 0l.58 11.006v.017c-.13.18-.61.531-.61.531z"
                />
            </svg>
        );
    }
);
