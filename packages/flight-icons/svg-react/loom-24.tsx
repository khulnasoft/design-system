import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconLoom24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M22 10.888h-5.848l5.065-2.924-1.113-1.927L15.04 8.96l2.924-5.065-1.927-1.113-2.924 5.065V2h-2.224v5.848L7.963 2.783 6.036 3.896 8.961 8.96 3.896 6.037 2.783 7.963l5.065 2.924H2v2.225h5.848l-5.065 2.924 1.113 1.927L8.96 15.04l-2.924 5.064 1.927 1.113 2.924-5.065V22h2.225v-5.848l2.923 5.065 1.927-1.113-2.924-5.065 5.065 2.924 1.113-1.927-5.065-2.923H22v-2.225H22zm-10 4.138a3.037 3.037 0 110-6.074 3.037 3.037 0 010 6.074z"
                />
            </svg>
        );
    }
);
