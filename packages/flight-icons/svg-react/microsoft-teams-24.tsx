import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMicrosoftTeams24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M15.954 5.925c0 1.615-1.354 2.925-3.024 2.925S9.907 7.54 9.907 5.925C9.907 4.31 11.261 3 12.93 3c1.67 0 3.024 1.31 3.024 2.925zM19.442 8.85c1.156 0 2.093-.907 2.093-2.025 0-1.118-.937-2.025-2.093-2.025s-2.093.907-2.093 2.025c0 1.118.937 2.025 2.093 2.025zM21.116 9.75c.488 0 .884.383.884.855v4.553c0 1.735-1.454 3.142-3.248 3.142h-.015c-.494 0-.961-.106-1.38-.297-.802 1.727-2.574 2.948-4.66 2.997-2.893-.069-5.183-2.392-5.116-5.192h2.107V9.75h11.428z" />
                    <path
                        fillRule="evenodd"
                        d="M11.38 7.05H2.853c-.471 0-.853.37-.853.825v8.25c0 .456.382.825.853.825h8.527c.47 0 .852-.37.852-.825v-8.25a.839.839 0 00-.852-.825zm-3.725 3.14H9.36v-.871H4.873v.871h1.696v4.491h1.086V10.19z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
