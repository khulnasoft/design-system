import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBulb24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M12 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 1zM22.5 11.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM3.75 12.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM19.53 4.22a.75.75 0 010 1.06l-1.06 1.061a.75.75 0 01-1.061-1.06l1.06-1.061a.75.75 0 011.061 0zM4.47 5.28a.75.75 0 011.06-1.06l1.061 1.06a.75.75 0 01-1.06 1.061L4.47 5.281zM9.5 22.25a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75z" />
                    <path
                        fillRule="evenodd"
                        d="M12 5.5a6 6 0 00-6 6c0 1.993 1.186 3.18 2.287 4.281l.316.318a.702.702 0 01.196.494v.658a2.25 2.25 0 002.25 2.249h1.901a2.25 2.25 0 002.25-2.25v-.629c0-.199.08-.386.216-.52l.122-.118C16.704 14.851 18 13.593 18 11.5a6 6 0 00-6-6zm-4.5 6a4.5 4.5 0 019 0c0 1.436-.85 2.28-2.13 3.527-.433.421-.67.998-.67 1.594v.629a.75.75 0 01-.75.75h-1.9a.75.75 0 01-.75-.75l-.001-.658c0-.569-.216-1.127-.626-1.544l-.264-.268C8.239 13.596 7.5 12.848 7.5 11.5z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
