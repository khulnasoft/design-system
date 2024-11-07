import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconVaultRadar24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M23 11.996l-1.056-1.056-1.057 1.056c0 4.9-3.987 8.887-8.885 8.887-4.899 0-8.885-3.987-8.885-8.886 0-4.9 3.986-8.887 8.885-8.887 2.004 0 3.937.69 5.487 1.905l-1.772 1.772a6.359 6.359 0 00-3.719-1.194A6.414 6.414 0 005.592 12a6.414 6.414 0 006.406 6.407A6.414 6.414 0 0018.404 12l-1.056-1.057L16.29 12a4.299 4.299 0 01-4.293 4.294A4.299 4.299 0 017.705 12a4.299 4.299 0 014.293-4.294c.786 0 1.536.215 2.194.606l-2.194 2.195V12h1.493l6.994-6.995A11.05 11.05 0 0011.998 1C5.934 1 1 5.935 1 12s4.934 11 10.998 11c6.065 0 10.999-4.935 10.999-11l.003-.004z"
                />
            </svg>
        );
    }
);
