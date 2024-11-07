import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconTerraformSquareColor16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill="#7B42BC">
                    <path d="M6.64 4.762L9.36 6.34v3.157L6.64 7.92V4.762zM9.657 9.497V6.34l2.718-1.578V7.92L9.657 9.497zM3.625 3v3.157l2.718 1.578V4.58L3.625 3zM9.359 13L6.64 11.421V8.265l2.718 1.578V13z" />
                    <path
                        fillRule="evenodd"
                        d="M.145.728C0 1.013 0 1.387 0 2.133v11.734c0 .746 0 1.12.145 1.405.128.25.332.455.583.583.285.145.659.145 1.405.145h11.734c.746 0 1.12 0 1.405-.145.25-.128.455-.332.583-.583.145-.285.145-.659.145-1.405V2.133c0-.746 0-1.12-.145-1.405a1.334 1.334 0 00-.583-.583C14.987 0 14.613 0 13.867 0H2.133c-.746 0-1.12 0-1.405.145C.478.273.273.477.145.728zM13.867.667H2.133c-.384 0-.632 0-.821.016-.181.014-.248.04-.281.056a.667.667 0 00-.292.292c-.016.033-.042.1-.056.28-.016.19-.016.438-.016.822v11.734c0 .384 0 .632.016.821.014.181.04.248.056.281a.666.666 0 00.292.292c.033.017.1.042.28.056.19.016.438.016.822.016h11.734c.384 0 .632 0 .821-.016.181-.014.248-.04.281-.056a.666.666 0 00.292-.292c.017-.033.042-.1.056-.28.016-.19.016-.438.016-.822V2.133c0-.384 0-.632-.016-.821-.014-.181-.04-.248-.056-.281a.666.666 0 00-.292-.292c-.033-.016-.1-.042-.28-.056a11.336 11.336 0 00-.822-.016z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);