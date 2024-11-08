import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconKhulnasoftColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill="#000">
                    <path d="M6.835.6L1 3.96v8.074l2.192 1.264V5.224l3.643-2.1V.6z" />
                    <path d="M9.165.6v6.43h-2.33v-2.4L4.642 5.894v8.237l2.193 1.266v-6.41h2.33v2.383l2.192-1.264V1.864L9.165.6z" />
                    <path d="M9.165 15.4L15 12.04V3.966l-2.193-1.264v8.074l-3.642 2.1V15.4z" />
                </g>
            </svg>
        );
    }
);
