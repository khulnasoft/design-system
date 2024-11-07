import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVantage16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M1 8a7 7 0 1114 0A7 7 0 011 8zm9.642 1.443c.11.11.287.11.397 0l1.974-1.974a.28.28 0 000-.397L11.04 5.098a.28.28 0 00-.397 0L8.668 7.072a.28.28 0 000 .397l1.974 1.974zm-2.448 2.845l1.975-1.975a.28.28 0 000-.396L8.194 7.943a.28.28 0 00-.396 0L5.823 9.917a.28.28 0 000 .396l1.975 1.975c.11.11.287.11.396 0zM2.98 7.469l1.974 1.974c.11.11.287.11.397 0L7.324 7.47a.28.28 0 000-.397L5.35 5.098a.28.28 0 00-.397 0L2.98 7.072a.28.28 0 000 .397z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
