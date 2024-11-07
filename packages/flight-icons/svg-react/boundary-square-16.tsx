import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconBoundarySquare16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M6.007 12.375v-.678h1.405v-.42h-.681v-.682h3.218L8.454 8l1.495-2.596H6.65v3.6H4.875V3.625h6.11l1.019 1.77L10.504 8l1.53 2.658-.99 1.717H6.008z" />
                    <path d="M6.28 10.595h-.681v.683h.68v-.683zM5.556 11.692h-.681v.682h.68v-.682z" />
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
