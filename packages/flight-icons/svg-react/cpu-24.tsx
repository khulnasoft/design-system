import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCpu24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color} fillRule="evenodd" clipRule="evenodd">
                    <path d="M9.75 8A1.75 1.75 0 008 9.75v4.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0016 14.25v-4.5A1.75 1.75 0 0014.25 8h-4.5zM9.5 9.75a.25.25 0 01.25-.25h4.5a.25.25 0 01.25.25v4.5a.25.25 0 01-.25.25h-4.5a.25.25 0 01-.25-.25v-4.5z" />
                    <path d="M9.25 0a.75.75 0 01.75.75V3h4V.75a.75.75 0 011.5 0V3h2.75A2.75 2.75 0 0121 5.75V8.5h2.25a.75.75 0 010 1.5H21v3h2.25a.75.75 0 010 1.5H21v3.75A2.75 2.75 0 0118.25 21H15.5v2.25a.75.75 0 01-1.5 0V21h-4v2.25a.75.75 0 01-1.5 0V21H5.75A2.75 2.75 0 013 18.25V14.5H.75a.75.75 0 010-1.5H3v-3H.75a.75.75 0 010-1.5H3V5.75A2.75 2.75 0 015.75 3H8.5V.75A.75.75 0 019.25 0zM4.5 18.25c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25H5.75c-.69 0-1.25.56-1.25 1.25v12.5z" />
                </g>
            </svg>
        );
    }
);
