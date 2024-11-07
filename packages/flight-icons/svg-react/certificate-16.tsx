import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCertificate16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M6.25 3.25A.75.75 0 017 2.5h2A.75.75 0 019 4H7a.75.75 0 01-.75-.75z" />
                    <path
                        fillRule="evenodd"
                        d="M3.25 0A2.25 2.25 0 001 2.25v9.5A2.25 2.25 0 003.25 14h1.67l-.115.913a.7.7 0 00.955.737L8 14.754l2.24.896a.7.7 0 00.955-.737L11.08 14h1.669A2.25 2.25 0 0015 11.75v-9.5A2.25 2.25 0 0012.75 0h-9.5zm7.643 12.5h1.857a.75.75 0 00.75-.75v-9.5a.75.75 0 00-.75-.75h-9.5a.75.75 0 00-.75.75v9.5c0 .414.336.75.75.75h1.857l.172-1.378a3.45 3.45 0 115.441 0l.173 1.378zm-1.456-.362c-.438.2-.924.312-1.437.312s-1-.112-1.437-.312l-.221 1.771 1.398-.559a.7.7 0 01.52 0l1.398.56-.221-1.772zM5.95 9a2.05 2.05 0 114.1 0 2.05 2.05 0 01-4.1 0z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
