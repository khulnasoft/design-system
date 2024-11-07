import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconKhulnasoftSquareColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill="#000">
                    <path d="M3.625 5.475l3.647-2.1v1.578L4.995 6.265v5.046l-1.37-.79V5.475z" />
                    <path d="M8.728 3.375v4.018H7.272v-1.5l-1.37.79v5.149l1.37.791V8.616h1.456v1.49l1.37-.79V4.165l-1.37-.79z" />
                    <path d="M12.375 10.525l-3.647 2.1v-1.578l2.276-1.312V4.689l1.371.79v5.046z" />
                    <path
                        fillRule="evenodd"
                        d="M0 2.133c0-.746 0-1.12.145-1.405C.273.478.477.273.728.145 1.013 0 1.387 0 2.133 0h11.734c.746 0 1.12 0 1.405.145.25.128.455.332.583.583.145.285.145.659.145 1.405v11.734c0 .746 0 1.12-.145 1.405-.128.25-.332.455-.583.583-.285.145-.659.145-1.405.145H2.133c-.746 0-1.12 0-1.405-.145a1.334 1.334 0 01-.583-.583C0 14.987 0 14.613 0 13.867V2.133zM2.133.667h11.734c.384 0 .632 0 .821.016.181.014.248.04.281.056a.666.666 0 01.292.292c.017.033.042.1.056.28.016.19.016.438.016.822v11.734c0 .384 0 .632-.016.821-.014.181-.04.248-.056.281a.666.666 0 01-.292.292c-.033.017-.1.042-.28.056-.19.016-.438.016-.822.016H2.133c-.384 0-.632 0-.821-.016-.181-.014-.248-.04-.281-.056a.666.666 0 01-.292-.292c-.016-.033-.042-.1-.056-.28a11.336 11.336 0 01-.016-.822V2.133c0-.384 0-.632.016-.821.014-.181.04-.248.056-.281a.667.667 0 01.292-.292c.033-.016.1-.042.28-.056.19-.016.438-.016.822-.016z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
