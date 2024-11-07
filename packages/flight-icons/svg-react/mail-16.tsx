import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMail16 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M0 3.25A2.25 2.25 0 012.25 1h11.5A2.25 2.25 0 0116 3.25v9.5A2.25 2.25 0 0113.75 15H2.25A2.25 2.25 0 010 12.75v-9.5zm2.25-.75a.75.75 0 00-.748.69L8 8.297l6.498-5.105a.75.75 0 00-.748-.691H2.25zm-.75 9.885V5.097l3.865 3.037L1.5 12.385zM2.514 13.5h10.972L9.452 9.063l-.989.777a.75.75 0 01-.926 0l-.99-.777L2.515 13.5zm8.12-5.366l3.866 4.251V5.097l-3.865 3.037z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);