import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCertificate24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M10 5a.75.75 0 000 1.5h4A.75.75 0 0014 5h-4z" />
                    <path
                        fillRule="evenodd"
                        d="M5.75 1A2.75 2.75 0 003 3.75v14.5A2.75 2.75 0 005.75 21h1.485l-.22 1.103a.75.75 0 001.054.826L12 21.079l3.93 1.85a.75.75 0 001.055-.826L16.765 21h1.485A2.75 2.75 0 0021 18.25V3.75A2.75 2.75 0 0018.25 1H5.75zm2.438 15.236L7.535 19.5H5.75c-.69 0-1.25-.56-1.25-1.25V3.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v14.5c0 .69-.56 1.25-1.25 1.25h-1.785l-.653-3.264a5 5 0 10-7.624 0zm6.219-.695a.75.75 0 01.135-.135 3.5 3.5 0 10-5.084 0c.051.04.096.085.135.135A3.488 3.488 0 0012 16.5c.932 0 1.78-.364 2.407-.959zM12 18a4.977 4.977 0 01-2.501-.67l-.722 3.608 2.904-1.367a.75.75 0 01.638 0l2.904 1.367-.722-3.608c-.736.426-1.59.67-2.501.67z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);