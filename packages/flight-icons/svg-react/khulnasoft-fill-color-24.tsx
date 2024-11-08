import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconKhulnasoftFillColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#000"
                    fillRule="evenodd"
                    d="M2 0a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V2a2 2 0 00-2-2H2zm8.835 4.6L5 7.96v8.074l2.192 1.264V9.224l3.643-2.1V4.6zm2.33 0v6.43h-2.33v-2.4L8.642 9.894v8.237l2.193 1.266v-6.41h2.33v2.383l2.192-1.264V5.864L13.165 4.6zm0 14.8L19 16.04V7.966l-2.193-1.264v8.074l-3.642 2.1V19.4z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
