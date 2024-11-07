import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCloudCheck24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8.026 1.046a8.87 8.87 0 014.152.57 8.932 8.932 0 013.436 2.412 9.017 9.017 0 011.802 3.16h.726a5.84 5.84 0 013.698 1.326 5.914 5.914 0 012.037 3.374 5.945 5.945 0 01-.528 3.91 5.882 5.882 0 01-2.858 2.705.75.75 0 01-.606-1.372 4.381 4.381 0 002.129-2.016c.46-.9.599-1.932.394-2.923a4.413 4.413 0 00-1.52-2.518 4.338 4.338 0 00-2.746-.987h-1.288a.75.75 0 01-.727-.564 7.521 7.521 0 00-1.639-3.104 7.431 7.431 0 00-2.859-2.008 7.37 7.37 0 00-6.734.692 7.472 7.472 0 00-2.4 2.549 7.55 7.55 0 00-.338 6.832 7.49 7.49 0 002.138 2.777.75.75 0 01-.941 1.168 8.99 8.99 0 01-2.566-3.333 9.06 9.06 0 01.404-8.189 8.971 8.971 0 012.883-3.06 8.888 8.888 0 013.951-1.4z" />
                    <path d="M17.78 14.22a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l2.47 2.47 6.97-6.97a.75.75 0 011.06 0z" />
                </g>
            </svg>
        );
    }
);
