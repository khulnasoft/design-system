import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGitlabColor24 = forwardRef<SVGSVGElement, IconProps>(
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
                    fill="#FC6D26"
                    d="M21.964 13.292l-1.12-3.363-2.218-6.673a.383.383 0 00-.363-.255.383.383 0 00-.364.255l-2.217 6.669H8.316L6.1 3.256A.382.382 0 005.736 3a.382.382 0 00-.363.256L3.16 9.925l-1.12 3.367a.736.736 0 00.275.833L12 21l9.683-6.875a.737.737 0 00.28-.833z"
                />
                <path
                    fill="#E24329"
                    d="M12 20.995l3.683-11.071H8.319L12 20.994z"
                />
                <path
                    fill="#FC6D26"
                    d="M12 20.995L8.316 9.924H3.162L12 20.994z"
                />
                <path
                    fill="#FCA326"
                    d="M3.158 9.927l-1.12 3.364a.736.736 0 00.276.833L12 21 3.158 9.927z"
                />
                <path
                    fill="#E24329"
                    d="M3.16 9.927h5.16L6.1 3.26a.383.383 0 00-.364-.256.383.383 0 00-.364.256L3.16 9.927z"
                />
                <path
                    fill="#FC6D26"
                    d="M12 20.995l3.683-11.071h5.162L12 20.994z"
                />
                <path
                    fill="#FCA326"
                    d="M20.842 9.927l1.12 3.364a.734.734 0 01-.276.833L12 20.994l8.84-11.067h.002z"
                />
                <path
                    fill="#E24329"
                    d="M20.844 9.927h-5.16l2.217-6.667a.382.382 0 01.363-.256c.165 0 .311.103.363.256l2.217 6.667z"
                />
            </svg>
        );
    }
);
