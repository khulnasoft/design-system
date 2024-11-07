import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconModule24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M17 7.866a1.25 1.25 0 00-1.507-1.223l-7.5 1.578A1.25 1.25 0 007 9.444v7.69c0 .794.73 1.387 1.507 1.223l7.5-1.578A1.25 1.25 0 0017 15.556v-7.69zM8.5 9.647l7-1.473v7.179l-7 1.473V9.647z" />
                    <path d="M21 4.719a2.75 2.75 0 00-3.32-2.69L5.18 4.68A2.75 2.75 0 003 7.37v12.911a2.75 2.75 0 003.32 2.69l12.5-2.651A2.75 2.75 0 0021 17.63V4.719zm-3.01-1.223a1.25 1.25 0 011.51 1.223v12.91c0 .591-.413 1.101-.99 1.224l-12.5 2.651a1.25 1.25 0 01-1.51-1.223V7.371c0-.591.413-1.101.99-1.223l12.5-2.652z" />
                </g>
            </svg>
        );
    }
);
