import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconFiles16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M1 2.25A2.25 2.25 0 013.25 0h4.793c.331 0 .65.132.884.366l3.207 3.207c.076.076.141.161.195.253a.75.75 0 01.201.144l2.104 2.103c.234.235.366.553.366.884v6.793A2.25 2.25 0 0112.75 16h-7a2.25 2.25 0 01-2.25-2.25v-.25h-.25A2.25 2.25 0 011 11.25v-9zm2.25-.75a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h7a.75.75 0 00.75-.75V6H7.75A.75.75 0 017 5.25V1.5H3.25zm5.25.56V4.5h2.44L8.5 2.06zm4 9.19V6.06l1 1v6.69a.75.75 0 01-.75.75h-7a.75.75 0 01-.75-.75v-.25h5.25a2.25 2.25 0 002.25-2.25z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
