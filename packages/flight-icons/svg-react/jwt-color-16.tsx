import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconJwtColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fillRule="evenodd" clipRule="evenodd">
                    <path
                        fill="#fff"
                        d="M9.09 4.65V.75H6.91v3.9L8 6.144 9.09 4.65zM6.91 11.35v3.9h2.18v-3.9L8 9.856 6.91 11.35z"
                    />
                    <path
                        fill="#00F2E6"
                        d="M9.09 11.35l2.295 3.16 1.773-1.29-2.31-3.147-1.758-.58v1.857zM6.91 4.65L4.615 1.49 2.842 2.78l2.31 3.147 1.758.58V4.65z"
                    />
                    <path
                        fill="#00B9F1"
                        d="M5.152 5.927l-3.72-1.204L.75 6.796 4.47 8l1.772-.566-1.09-1.507zM9.758 8.566l1.09 1.507 3.72 1.204.682-2.073L11.53 8l-1.772.566z"
                    />
                    <path
                        fill="#D63AFF"
                        d="M11.53 8l3.72-1.204-.683-2.073-3.72 1.203-1.089 1.508L11.531 8zM4.47 8L.75 9.204l.683 2.073 3.72-1.204 1.089-1.508L4.469 8z"
                    />
                    <path
                        fill="#FB015B"
                        d="M5.152 10.073l-2.31 3.147 1.773 1.29 2.295-3.16V9.493l-1.758.58zM10.848 5.926l2.31-3.146-1.773-1.29L9.09 4.65v1.857l1.758-.58z"
                    />
                </g>
            </svg>
        );
    }
);
