import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGit24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fillRule="evenodd"
                    d="M12.89 2.378l8.733 8.731a1.29 1.29 0 010 1.822l-8.692 8.692a1.29 1.29 0 01-.895.377h-.033a1.29 1.29 0 01-.894-.377L2.376 12.89A1.29 1.29 0 012 12.03v-.1a1.29 1.29 0 01.376-.861l5.988-5.987 2.268 2.268a1.533 1.533 0 00.831 2.01v5.49a1.538 1.538 0 00-.834 2.006 1.535 1.535 0 002.5.497 1.533 1.533 0 00-.405-2.457V9.455l2.068 2.067a1.533 1.533 0 10.917-.864l-2.217-2.217a1.531 1.531 0 00-1.937-1.95l-2.3-2.3 1.813-1.813a1.287 1.287 0 011.822 0z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);
